
import React from "react";
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type LocationInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  isPickup?: boolean;
};

const LocationInput = ({ id, label, value, onChange, isPickup = true }: LocationInputProps) => {
  const { toast } = useToast();
  
  const handleMapButtonClick = () => {
    toast({
      title: "Map Selection",
      description: "Map selection will be integrated soon"
    });
  };
  
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="icap-label flex items-center gap-2">
        <MapPin className={`w-4 h-4 ${isPickup ? "text-icap-yellow" : "text-icap-black"}`} />
        {label}
      </label>
      <div className="flex gap-2">
        <Input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="icap-input flex-grow"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
        <Button 
          type="button" 
          variant="outline"
          className="border-icap-yellow hover:bg-icap-yellow hover:text-black"
          onClick={handleMapButtonClick}
        >
          <MapPin className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default LocationInput;
