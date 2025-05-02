import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, User, MapPin, Clock } from "lucide-react";
import TripCard from "@/components/TripCard";
import PassengerRequestCard from "@/components/PassengerRequestCard";
import DriverDetailCard from "@/components/DriverDetailCard";
import BottomNav from "@/components/BottomNav";

// Mock data for demonstration
const mockDriverData = {
  name: "John Driver",
  licenseNumber: "DL45678912",
  vehicleNumber: "MH01AB1234",
  vehicleType: "4W",
  vehicleModel: "Honda City",
  routePrice: 150,
  totalCapacity: 4,
  bookedPassengers: 2,
  pendingRequests: [
    {
      id: "p1",
      name: "Alice",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      pickupPoint: "Andheri East",
      dropPoint: "Powai",
      phoneNumber: "9876543210",
      pickupTime: "09:30 AM"
    },
    {
      id: "p2",
      name: "Bob",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      pickupPoint: "Bandra West",
      dropPoint: "BKC",
      phoneNumber: "8765432109",
      pickupTime: "10:00 AM"
    }
  ]
};

const mockPassengerData = {
  name: "Sarah Passenger",
  userId: "ICAP123456",
  phoneNumber: "9876543210",
  preferredVehicle: "4W",
  budget: "₹100 - ₹300",
  pickupLocation: "Andheri East",
  dropLocation: "Lower Parel",
  availableDrivers: [
    {
      id: "d1",
      name: "Michael",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      vehicleName: "Toyota Innova",
      pickupPoint: "Andheri East",
      dropPoint: "Lower Parel",
      phoneNumber: "8765432101",
      price: 200,
      rating: 4.7,
      age: 35,
      stations: ["Andheri", "Bandra", "Dadar", "Lower Parel"],
      preferences: ["No Smoking", "I prefer not to travel with pets"]
    },
    {
      id: "d2",
      name: "David",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
      vehicleName: "Maruti Swift",
      pickupPoint: "Andheri East",
      dropPoint: "Worli",
      phoneNumber: "7654321098",
      price: 180,
      rating: 4.5,
      age: 29,
      stations: ["Andheri", "Bandra", "Worli"],
      preferences: ["No Eating in Car"]
    }
  ]
};

type UserType = "driver" | "passenger";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>("passenger");
  const [selectedDriver, setSelectedDriver] = useState<any>(null);
  
  // For demo purposes, allow toggling between driver and passenger view
  const toggleUserType = () => {
    setUserType(userType === "driver" ? "passenger" : "driver");
    setSelectedDriver(null);
  };

  const handleDriverClick = (driver: any) => {
    setSelectedDriver(driver);
  };

  const handleBackToList = () => {
    setSelectedDriver(null);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with toggle button (for demo purposes) */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-icap-black">ICAP</h1>
          <Button 
            onClick={toggleUserType}
            className="bg-icap-yellow hover:bg-icap-yellow-dark text-black"
          >
            Switch to {userType === "driver" ? "Passenger" : "Driver"} View
          </Button>
        </div>

        {/* Driver Dashboard */}
        {userType === "driver" && (
          <div className="space-y-6 animate-fade-in">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-icap-yellow rounded-t-lg">
                <CardTitle className="text-xl font-bold">
                  {getGreeting()}, {mockDriverData.name}!
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Trip & Vehicle Details</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">License Number:</span> {mockDriverData.licenseNumber}</p>
                      <p><span className="font-medium">Vehicle Number:</span> {mockDriverData.vehicleNumber}</p>
                      <p><span className="font-medium">Vehicle Type:</span> {mockDriverData.vehicleType}</p>
                      <p><span className="font-medium">Vehicle Model:</span> {mockDriverData.vehicleModel}</p>
                      <p><span className="font-medium">Route Price:</span> ₹{mockDriverData.routePrice} per passenger</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Passenger Count</h3>
                    <div className="icap-card mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Booked</p>
                          <p className="text-xl font-bold">{mockDriverData.bookedPassengers}</p>
                        </div>
                        <div className="h-10 border-r border-gray-200"></div>
                        <div>
                          <p className="text-sm text-gray-500">Total Capacity</p>
                          <p className="text-xl font-bold">{mockDriverData.totalCapacity}</p>
                        </div>
                        <div className="h-10 border-r border-gray-200"></div>
                        <div>
                          <p className="text-sm text-gray-500">Available</p>
                          <p className="text-xl font-bold">{mockDriverData.totalCapacity - mockDriverData.bookedPassengers}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Passenger Requests</CardTitle>
              </CardHeader>
              <CardContent>
                {mockDriverData.pendingRequests.length > 0 ? (
                  <div className="space-y-4">
                    {mockDriverData.pendingRequests.map((request) => (
                      <PassengerRequestCard key={request.id} passenger={request} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-6">No pending passenger requests</p>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Passenger Dashboard */}
        {userType === "passenger" && (
          <div className="space-y-6 animate-fade-in">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-icap-yellow rounded-t-lg">
                <CardTitle className="text-xl font-bold">
                  {getGreeting()}, {mockPassengerData.name}!
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {!selectedDriver ? (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Trip Details</h3>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">User ID:</span> {mockPassengerData.userId}</p>
                          <p><span className="font-medium">Phone Number:</span> {mockPassengerData.phoneNumber}</p>
                          <p><span className="font-medium">Preferred Vehicle:</span> {mockPassengerData.preferredVehicle}</p>
                          <p><span className="font-medium">Budget:</span> {mockPassengerData.budget}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Journey</h3>
                        <TripCard 
                          pickupLocation={mockPassengerData.pickupLocation}
                          dropLocation={mockPassengerData.dropLocation}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-3">Available Drivers</h3>
                      {mockPassengerData.availableDrivers.length > 0 ? (
                        <div className="space-y-4">
                          {mockPassengerData.availableDrivers.map((driver) => (
                            <DriverDetailCard 
                              key={driver.id} 
                              driver={driver}
                              onClick={() => handleDriverClick(driver)}
                            />
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-gray-500 py-6">No drivers available for your route</p>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="animate-fade-in">
                    <button 
                      onClick={handleBackToList}
                      className="flex items-center text-icap-yellow-dark hover:underline mb-6"
                    >
                      ← Back to all drivers
                    </button>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Trip Details</h3>
                        <div className="icap-card mb-6">
                          <p className="font-medium mb-2">Date of Travel</p>
                          <p className="text-gray-700 mb-4">Today, {new Date().toLocaleDateString()}</p>
                          
                          <p className="font-medium mb-2">Pickup & Drop</p>
                          <TripCard 
                            pickupLocation={selectedDriver.pickupPoint}
                            dropLocation={selectedDriver.dropPoint}
                          />
                          
                          <div className="mt-4">
                            <p className="font-medium">Price per Passenger</p>
                            <p className="text-lg font-bold text-green-600">₹{selectedDriver.price}</p>
                          </div>
                        </div>
                        
                        <div className="icap-card">
                          <p className="font-medium mb-2">Route Stations</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedDriver.stations.map((station: string, index: number) => (
                              <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                                {station}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Driver Details</h3>
                        <div className="icap-card">
                          <div className="flex items-center gap-4 mb-4">
                            <img 
                              src={selectedDriver.image} 
                              alt={selectedDriver.name}
                              className="w-16 h-16 rounded-full object-cover" 
                            />
                            <div>
                              <h4 className="font-semibold">{selectedDriver.name}</h4>
                              <p className="text-sm text-gray-500">{selectedDriver.age} years old</p>
                              <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <span 
                                    key={i} 
                                    className={`text-sm ${i < Math.floor(selectedDriver.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                                  >
                                    ★
                                  </span>
                                ))}
                                <span className="text-sm ml-1">({selectedDriver.rating})</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="font-medium mb-2">Vehicle</p>
                          <p className="text-gray-700 mb-4">{selectedDriver.vehicleName}</p>
                          
                          <p className="font-medium mb-2">Driver Preferences</p>
                          <div className="space-y-1 mb-4">
                            {selectedDriver.preferences.map((pref: string, index: number) => (
                              <p key={index} className="text-sm text-gray-700">• {pref}</p>
                            ))}
                          </div>
                          
                          <Button 
                            className="w-full bg-icap-yellow hover:bg-icap-yellow-dark text-black"
                          >
                            Request to Book
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default Dashboard;
