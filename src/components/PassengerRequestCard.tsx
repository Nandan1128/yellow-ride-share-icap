
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

type PassengerRequestCardProps = {
  passenger: {
    id: string;
    name: string;
    image: string;
    pickupPoint: string;
    dropPoint: string;
    phoneNumber: string;
    pickupTime: string;
  };
};

const PassengerRequestCard = ({ passenger }: PassengerRequestCardProps) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img 
            src={passenger.image} 
            alt={passenger.name} 
            className="w-12 h-12 rounded-full object-cover" 
          />
          <div>
            <h4 className="font-semibold">{passenger.name}</h4>
            <div className="flex items-center text-gray-500 text-sm">
              <Phone className="w-3 h-3 mr-1" />
              <span>{passenger.phoneNumber}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1 text-icap-yellow" />
            <span>Pick up: {passenger.pickupPoint}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1 text-black" />
            <span>Drop: {passenger.dropPoint}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1 text-gray-500" />
            <span>Time: {passenger.pickupTime}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="border-red-500 text-red-500 hover:bg-red-50"
          >
            Reject
          </Button>
          <Button 
            className="bg-icap-yellow hover:bg-icap-yellow-dark text-black"
          >
            Approve
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PassengerRequestCard;
