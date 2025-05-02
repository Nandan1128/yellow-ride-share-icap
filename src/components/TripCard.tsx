
import React from "react";
import { MapPin } from "lucide-react";

type TripCardProps = {
  pickupLocation: string;
  dropLocation: string;
};

const TripCard = ({ pickupLocation, dropLocation }: TripCardProps) => {
  return (
    <div className="flex items-stretch">
      <div className="flex flex-col items-center">
        <div className="w-6 h-6 rounded-full bg-icap-yellow flex items-center justify-center">
          <MapPin className="w-4 h-4" />
        </div>
        <div className="h-full w-0.5 bg-gray-300 my-1"></div>
        <div className="w-6 h-6 rounded-full bg-icap-black flex items-center justify-center">
          <MapPin className="w-4 h-4 text-white" />
        </div>
      </div>
      
      <div className="ml-4 flex flex-col justify-between py-1">
        <div>
          <p className="font-medium text-gray-900">{pickupLocation}</p>
          <p className="text-xs text-gray-500">Pickup Location</p>
        </div>
        <div className="mt-4">
          <p className="font-medium text-gray-900">{dropLocation}</p>
          <p className="text-xs text-gray-500">Drop Location</p>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
