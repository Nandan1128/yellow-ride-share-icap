
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Slider } from "@/components/ui/slider";
import LocationInput from "./LocationInput";

type PassengerFormProps = {
  onSubmit: () => void;
};

const PassengerForm = ({ onSubmit }: PassengerFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    pickUp: "",
    dropPoint: "",
    passengers: 1,
    departureTimeStart: "",
    departureTimeEnd: "",
    luggage: false,
    luggageWeight: 0,
    vehicleType: "",
    cabType: "",
    priceRange: [0, 1000]
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleToggleLuggage = () => {
    setFormData(prev => ({
      ...prev,
      luggage: !prev.luggage
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.pickUp || !formData.dropPoint || !formData.vehicleType || !formData.cabType) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Call the parent component's onSubmit function
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <LocationInput
        id="pickUp"
        label="Pick Up Location"
        value={formData.pickUp}
        onChange={(value) => handleInputChange("pickUp", value)}
        isPickup={true}
      />

      <LocationInput
        id="dropPoint"
        label="Drop Location"
        value={formData.dropPoint}
        onChange={(value) => handleInputChange("dropPoint", value)}
        isPickup={false}
      />

      <div className="space-y-2">
        <label htmlFor="passengers" className="icap-label">Number of Passengers</label>
        <Select 
          value={formData.passengers.toString()} 
          onValueChange={(value) => handleInputChange("passengers", parseInt(value))}
        >
          <SelectTrigger className="icap-input">
            <SelectValue placeholder="Select number of passengers" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="departureTimeStart" className="icap-label">Departure Time (Start)</label>
          <Input
            id="departureTimeStart"
            type="time"
            value={formData.departureTimeStart}
            onChange={(e) => handleInputChange("departureTimeStart", e.target.value)}
            className="icap-input"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="departureTimeEnd" className="icap-label">Departure Time (End)</label>
          <Input
            id="departureTimeEnd"
            type="time"
            value={formData.departureTimeEnd}
            onChange={(e) => handleInputChange("departureTimeEnd", e.target.value)}
            className="icap-input"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="luggage"
          checked={formData.luggage}
          onChange={handleToggleLuggage}
          className="w-4 h-4 text-icap-yellow"
        />
        <label htmlFor="luggage" className="text-sm font-medium">
          Do you have luggage?
        </label>
      </div>

      {formData.luggage && (
        <div className="space-y-2">
          <label htmlFor="luggageWeight" className="icap-label">
            Luggage Weight (kg): {formData.luggageWeight}
          </label>
          <Slider
            id="luggageWeight"
            value={[formData.luggageWeight]}
            onValueChange={([value]) => handleInputChange("luggageWeight", value)}
            min={0}
            max={50}
            step={1}
            className="py-4"
          />
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="vehicleType" className="icap-label">Vehicle Type</label>
        <Select 
          value={formData.vehicleType} 
          onValueChange={(value) => handleInputChange("vehicleType", value)}
        >
          <SelectTrigger className="icap-input">
            <SelectValue placeholder="Select vehicle type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2w">2-Wheeler</SelectItem>
            <SelectItem value="4w">4-Wheeler</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="cabType" className="icap-label">Cab Type</label>
        <Select 
          value={formData.cabType} 
          onValueChange={(value) => handleInputChange("cabType", value)}
        >
          <SelectTrigger className="icap-input">
            <SelectValue placeholder="Select cab type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AC">AC</SelectItem>
            <SelectItem value="Non-AC">Non-AC</SelectItem>
            <SelectItem value="All">All</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="priceRange" className="icap-label">
          Price Range: ₹{formData.priceRange[0]} - ₹{formData.priceRange[1]}
        </label>
        <Slider
          id="priceRange"
          value={formData.priceRange}
          onValueChange={(value) => handleInputChange("priceRange", value)}
          min={0}
          max={5000}
          step={100}
          className="py-4"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-icap-yellow hover:bg-icap-yellow-dark text-black mt-6"
      >
        Complete Setup
      </Button>
    </form>
  );
};

export default PassengerForm;
