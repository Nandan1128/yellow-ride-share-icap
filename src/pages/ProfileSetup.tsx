
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import PassengerForm from "@/components/PassengerForm";
import DriverForm from "@/components/DriverForm";

type UserRole = "passenger" | "driver";

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
  
  const [selectedRole, setSelectedRole] = useState<UserRole>("passenger");
  const [step, setStep] = useState(1);

  const handleBasicProfileChange = (field: string, value: string) => {
    setBasicProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
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

    // Move to next step - role selection
    setStep(2);
  };

  // Handle passenger form submission - this would be passed to PassengerForm
  const handlePassengerSubmit = () => {
    toast({
      title: "Success",
      description: "Profile setup complete! Welcome to ICAP.",
    });
    navigate("/dashboard");
  };

  // Handle driver form submission - this would be passed to DriverForm
  const handleDriverSubmit = () => {
    toast({
      title: "Success",
      description: "Driver profile setup complete! Welcome to ICAP.",
    });
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
              {step === 1 ? "Basic Information" : "Setup As"}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {step === 1 ? (
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
                  Continue
                </Button>
              </form>
            ) : (
              <div className="pt-2">
                <Tabs defaultValue="passenger" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger 
                      value="passenger" 
                      onClick={() => handleRoleSelect("passenger")}
                      className={selectedRole === "passenger" ? "bg-icap-yellow text-black" : ""}
                    >
                      Passenger
                    </TabsTrigger>
                    <TabsTrigger 
                      value="driver" 
                      onClick={() => handleRoleSelect("driver")}
                      className={selectedRole === "driver" ? "bg-icap-yellow text-black" : ""}
                    >
                      Driver
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="passenger" className="mt-0">
                    <PassengerForm 
                      onSubmit={handlePassengerSubmit}
                    />
                  </TabsContent>
                  
                  <TabsContent value="driver" className="mt-0">
                    <DriverForm 
                      onSubmit={handleDriverSubmit}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSetup;
