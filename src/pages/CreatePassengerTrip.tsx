
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import PassengerForm from "@/components/PassengerForm";
import LocationInput from "@/components/LocationInput";

const CreatePassengerTrip = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleFormSubmit = () => {
    // Show success message
    toast({
      title: "Trip Created",
      description: "Your passenger trip has been created successfully!",
    });
    
    // Navigate back to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-icap-black">Create Passenger Trip</h1>
          <p className="text-gray-500 mt-2">Fill in the details to find a ride</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="bg-icap-yellow rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">
              Trip Information
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <PassengerForm onSubmit={handleFormSubmit} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreatePassengerTrip;
