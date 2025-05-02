
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

type DriverFormProps = {
  onSubmit: () => void;
};

const DriverForm = ({ onSubmit }: DriverFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    licenseNumber: "",
    vehicleNumber: "",
    vehicleType: "",
    vehicleModel: "",
    fuelType: "",
    seatingCapacity: 1,
    luggageCapacity: 0,
    acType: "",
    pickupPoint: "",
    dropPoint: "",
    departureTimeStart: "",
    departureTimeEnd: "",
    routePrice: 0
  });

  const [stations, setStations] = useState<string[]>([]);
  const [newStation, setNewStation] = useState("");

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddStation = () => {
    if (newStation.trim() !== "") {
      setStations(prev => [...prev, newStation.trim()]);
      setNewStation("");
    }
  };

  const handleRemoveStation = (index: number) => {
    setStations(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = [
      "licenseNumber", "vehicleNumber", "vehicleType", "vehicleModel", 
      "fuelType", "seatingCapacity", "acType", "pickupPoint", "dropPoint"
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
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
      <div className="space-y-2">
        <label htmlFor="licenseNumber" className="icap-label">License Number</label>
        <Input
          id="licenseNumber"
          value={formData.licenseNumber}
          onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
          className="icap-input"
          placeholder="Enter your license number"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="vehicleNumber" className="icap-label">Vehicle Number</label>
        <Input
          id="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={(e) => handleInputChange("vehicleNumber", e.target.value)}
          className="icap-input"
          placeholder="Enter your vehicle number"
        />
      </div>

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
        <label htmlFor="vehicleModel" className="icap-label">Vehicle Model</label>
        <Input
          id="vehicleModel"
          value={formData.vehicleModel}
          onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
          className="icap-input"
          placeholder="Enter your vehicle model"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="fuelType" className="icap-label">Fuel Type</label>
        <Select 
          value={formData.fuelType} 
          onValueChange={(value) => handleInputChange("fuelType", value)}
        >
          <SelectTrigger className="icap-input">
            <SelectValue placeholder="Select fuel type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Petrol">Petrol</SelectItem>
            <SelectItem value="Diesel">Diesel</SelectItem>
            <SelectItem value="CNG">CNG</SelectItem>
            <SelectItem value="LPG">LPG</SelectItem>
            <SelectItem value="Electric">Electric</SelectItem>
            <SelectItem value="Hybrid">Hybrid</SelectItem>
            <SelectItem value="Hydrogen">Hydrogen</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="seatingCapacity" className="icap-label">Seating Capacity</label>
        <Select 
          value={formData.seatingCapacity.toString()} 
          onValueChange={(value) => handleInputChange("seatingCapacity", parseInt(value))}
        >
          <SelectTrigger className="icap-input">
            <SelectValue placeholder="Select seating capacity" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="luggageCapacity" className="icap-label">Luggage Capacity (kg)</label>
        <Input
          id="luggageCapacity"
          type="number"
          value={formData.luggageCapacity.toString()}
          onChange={(e) => handleInputChange("luggageCapacity", parseInt(e.target.value) || 0)}
          className="icap-input"
          min={0}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="acType" className="icap-label">AC Type</label>
        <Select 
          value={formData.acType} 
          onValueChange={(value) => handleInputChange("acType", value)}
        >
          <SelectTrigger className="icap-input">
            <SelectValue placeholder="Select AC type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AC">AC</SelectItem>
            <SelectItem value="Non-AC">Non-AC</SelectItem>
            <SelectItem value="All">All</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="pickupPoint" className="icap-label">Pickup Point</label>
        <Input
          id="pickupPoint"
          value={formData.pickupPoint}
          onChange={(e) => handleInputChange("pickupPoint", e.target.value)}
          className="icap-input"
          placeholder="Enter pickup location"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="dropPoint" className="icap-label">Drop Point</label>
        <Input
          id="dropPoint"
          value={formData.dropPoint}
          onChange={(e) => handleInputChange("dropPoint", e.target.value)}
          className="icap-input"
          placeholder="Enter drop location"
        />
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

      <div className="space-y-2">
        <label className="icap-label">Add Stations</label>
        <div className="flex gap-2">
          <Input
            value={newStation}
            onChange={(e) => setNewStation(e.target.value)}
            className="icap-input flex-grow"
            placeholder="Enter station name"
          />
          <Button 
            type="button" 
            onClick={handleAddStation}
            className="bg-icap-yellow hover:bg-icap-yellow-dark text-black"
          >
            Add
          </Button>
        </div>
        
        {stations.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-medium mb-2">Added Stations:</p>
            <div className="flex flex-wrap gap-2">
              {stations.map((station, index) => (
                <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="text-sm">{station}</span>
                  <button 
                    type="button" 
                    onClick={() => handleRemoveStation(index)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="routePrice" className="icap-label">Route Price per Passenger (₹)</label>
        <Input
          id="routePrice"
          type="number"
          value={formData.routePrice.toString()}
          onChange={(e) => handleInputChange("routePrice", parseInt(e.target.value) || 0)}
          className="icap-input"
          min={0}
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

export default DriverForm;
