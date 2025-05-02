
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BottomNav from "@/components/BottomNav";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-icap-black">Profile</h1>
          <p className="text-gray-500 mt-2">View and update your profile information</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="bg-icap-yellow rounded-t-lg">
            <CardTitle className="text-xl font-bold">
              My Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-500">User profile information will be displayed here.</p>
          </CardContent>
        </Card>
      </div>
      <BottomNav />
    </div>
  );
};

export default Profile;
