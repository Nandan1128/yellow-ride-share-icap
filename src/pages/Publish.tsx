
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const Publish = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 pb-16 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-icap-black">Publish Trip</h1>
          <p className="text-gray-500 mt-2">Choose what type of trip you want to create</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-icap-yellow rounded-t-lg">
              <CardTitle className="text-xl font-bold">
                Driver Trip
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-gray-600">Create a trip as a driver and let passengers join your ride</p>
              <Button 
                onClick={() => navigate('/create-trip')} 
                className="w-full bg-icap-yellow hover:bg-icap-yellow-dark text-black"
              >
                Create Driver Trip
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-icap-yellow rounded-t-lg">
              <CardTitle className="text-xl font-bold">
                Passenger Trip
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-gray-600">Create a trip as a passenger and find drivers going your way</p>
              <Button 
                onClick={() => navigate('/create-passenger-trip')} 
                className="w-full bg-icap-yellow hover:bg-icap-yellow-dark text-black"
              >
                Create Passenger Trip
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Publish;
