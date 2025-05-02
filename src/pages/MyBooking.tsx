
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BottomNav from "@/components/BottomNav";

const MyBooking = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-icap-black">My Bookings</h1>
          <p className="text-gray-500 mt-2">View and manage your trip bookings</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="bg-icap-yellow rounded-t-lg">
            <CardTitle className="text-xl font-bold">
              Booking History
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="canceled">Canceled</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="mt-0">
                <div className="text-center py-10 text-gray-500">
                  You have no upcoming bookings
                </div>
              </TabsContent>
              
              <TabsContent value="completed" className="mt-0">
                <div className="text-center py-10 text-gray-500">
                  You have no completed bookings
                </div>
              </TabsContent>
              
              <TabsContent value="canceled" className="mt-0">
                <div className="text-center py-10 text-gray-500">
                  You have no canceled bookings
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <BottomNav />
    </div>
  );
};

export default MyBooking;
