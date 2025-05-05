
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [basicProfile, setBasicProfile] = useState({
    fullName: "",
    phoneNumber: "",
    gender: "",
    occupation: "",
    state: ""
  });

  const handleBasicProfileChange = (field: string, value: string) => {
    setBasicProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBasicProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!basicProfile.fullName || !basicProfile.phoneNumber || !basicProfile.gender || 
        !basicProfile.occupation || !basicProfile.state) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Show success message
    toast({
      title: "Success",
      description: "Profile setup complete! Welcome to ICAP.",
    });
    
    // Navigate directly to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-2xl animate-fade-in">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-icap-black mb-2">ICAP</h1>
          <p className="text-lg text-gray-500">Profile Setup</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="bg-icap-yellow rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleBasicProfileSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="fullName" className="icap-label">Full Name</label>
                <Input
                  id="fullName"
                  value={basicProfile.fullName}
                  onChange={(e) => handleBasicProfileChange("fullName", e.target.value)}
                  className="icap-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="icap-label">Phone Number</label>
                <Input
                  id="phoneNumber"
                  value={basicProfile.phoneNumber}
                  onChange={(e) => handleBasicProfileChange("phoneNumber", e.target.value)}
                  className="icap-input"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="gender" className="icap-label">Gender</label>
                <Select 
                  value={basicProfile.gender} 
                  onValueChange={(value) => handleBasicProfileChange("gender", value)}
                >
                  <SelectTrigger className="icap-input">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="occupation" className="icap-label">Occupation</label>
                <Input
                  id="occupation"
                  value={basicProfile.occupation}
                  onChange={(e) => handleBasicProfileChange("occupation", e.target.value)}
                  className="icap-input"
                  placeholder="Enter your occupation"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="state" className="icap-label">State</label>
                <Input
                  id="state"
                  value={basicProfile.state}
                  onChange={(e) => handleBasicProfileChange("state", e.target.value)}
                  className="icap-input"
                  placeholder="Enter your state"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-icap-yellow hover:bg-icap-yellow-dark text-black mt-4"
              >
                Complete Setup
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSetup;
