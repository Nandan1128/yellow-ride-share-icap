import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { X, MapPin, Clock } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const CreateTrip = () => {
  const navigate = useNavigate();
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

    // Show success message
    toast({
      title: "Trip Created",
      description: "Your trip has been created successfully!",
    });
    
    // Navigate back to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white pb-16 p-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-icap-black">Create Trip</h1>
          <p className="text-gray-500 mt-2">Fill in the details to create a new trip</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="bg-icap-yellow rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">
              Trip Information
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
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
                <label htmlFor="vehicleModel" className="icap-label">Vehicle Name / Model</label>
                <Input
                  id="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
                  className="icap-input"
                  placeholder="Enter your vehicle name/ model"
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
                <label htmlFor="pickupPoint" className="icap-label flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-icap-yellow" />
                  Pickup Point
                </label>
                <div className="flex gap-2">
                  <Input
                    id="pickupPoint"
                    value={formData.pickupPoint}
                    onChange={(e) => handleInputChange("pickupPoint", e.target.value)}
                    className="icap-input flex-grow"
                    placeholder="Enter pickup location"
                  />
                  <Button 
                    type="button" 
                    variant="outline"
                    className="border-icap-yellow hover:bg-icap-yellow hover:text-black"
                    onClick={() => toast({
                      title: "Map Selection",
                      description: "Map selection will be integrated soon"
                    })}
                  >
                    <MapPin className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="dropPoint" className="icap-label flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-icap-black" />
                  Drop Point
                </label>
                <div className="flex gap-2">
                  <Input
                    id="dropPoint"
                    value={formData.dropPoint}
                    onChange={(e) => handleInputChange("dropPoint", e.target.value)}
                    className="icap-input flex-grow"
                    placeholder="Enter drop location"
                  />
                  <Button 
                    type="button" 
                    variant="outline"
                    className="border-icap-yellow hover:bg-icap-yellow hover:text-black"
                    onClick={() => toast({
                      title: "Map Selection",
                      description: "Map selection will be integrated soon"
                    })}
                  >
                    <MapPin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="icap-label flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Departure Time
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="departureTimeStart" className="text-xs text-gray-500">Start Time</label>
                    <Input
                      id="departureTimeStart"
                      type="time"
                      value={formData.departureTimeStart}
                      onChange={(e) => handleInputChange("departureTimeStart", e.target.value)}
                      className="icap-input"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="departureTimeEnd" className="text-xs text-gray-500">End Time</label>
                    <Input
                      id="departureTimeEnd"
                      type="time"
                      value={formData.departureTimeEnd}
                      onChange={(e) => handleInputChange("departureTimeEnd", e.target.value)}
                      className="icap-input"
                    />
                  </div>
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

              <div className="flex gap-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline"
                  className="w-1/2 border-icap-yellow hover:bg-gray-100"
                  onClick={() => navigate("/dashboard")}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="w-1/2 bg-icap-yellow hover:bg-icap-yellow-dark text-black"
                >
                  Create Trip
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <BottomNav />
    </div>
  );
};

export default CreateTrip;
