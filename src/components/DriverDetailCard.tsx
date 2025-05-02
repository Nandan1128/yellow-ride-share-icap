
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Phone, MapPin } from "lucide-react";

type DriverDetailCardProps = {
  driver: {
    id: string;
    name: string;
    image: string;
    vehicleName: string;
    pickupPoint: string;
    dropPoint: string;
    phoneNumber: string;
    price: number;
    rating: number;
  };
  onClick: () => void;
};

const DriverDetailCard = ({ driver, onClick }: DriverDetailCardProps) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border border-gray-100" onClick={onClick}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img 
            src={driver.image} 
            alt={driver.name} 
            className="w-12 h-12 rounded-full object-cover" 
          />
          <div>
            <h4 className="font-semibold">{driver.name}</h4>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`text-sm ${i < Math.floor(driver.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  ★
                </span>
              ))}
              <span className="text-xs ml-1">({driver.rating})</span>
            </div>
            <p className="text-sm text-gray-500">{driver.vehicleName}</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1 text-icap-yellow" />
            <span>Pick up: {driver.pickupPoint}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1 text-black" />
            <span>Drop: {driver.dropPoint}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-3 h-3 mr-1 text-gray-500" />
            <span>{driver.phoneNumber}</span>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="text-lg font-semibold text-green-600">₹{driver.price}</div>
          <p className="text-xs text-gray-500">per person</p>
          <Button 
            className="bg-icap-yellow hover:bg-icap-yellow-dark text-black mt-2"
          >
            Request to Book
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DriverDetailCard;
