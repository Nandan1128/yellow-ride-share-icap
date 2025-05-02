
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type RegistrationState = {
  email: string;
  password: string;
};

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as RegistrationState;
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: state?.email || "",
    phoneNumber: "",
    password: state?.password || "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phoneNumber || 
        !formData.password || !formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    if (formData.phoneNumber.length !== 10) {
      toast({
        title: "Error",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive"
      });
      return;
    }

    // Proceed to OTP verification
    navigate('/otp-verification', { state: { phoneNumber: formData.phoneNumber } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-icap-black mb-2">ICAP</h1>
          <p className="text-lg text-gray-500">Create Your Account</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="bg-icap-yellow rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">Registration</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="fullName" className="icap-label">Full Name</label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="icap-input"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="icap-label">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="icap-input"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="icap-label">Phone Number</label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="icap-input"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="icap-label">Password</label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="icap-input"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="icap-label">Confirm Password</label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="icap-input"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-icap-yellow hover:bg-icap-yellow-dark text-black"
              >
                Register
              </Button>

              <div className="text-center mt-4">
                <p className="text-sm">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="text-icap-yellow-dark hover:underline font-semibold"
                  >
                    Log In
                  </button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
