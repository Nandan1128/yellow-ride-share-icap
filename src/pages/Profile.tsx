
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import BottomNav from "@/components/BottomNav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronRight, Image, Plus, Shield, Edit, Briefcase, Car } from "lucide-react";

const Profile = () => {
  // Mock user data
  const user = {
    name: "Nandan",
    status: "Newcomer",
    phone: "+919664635841",
    email: "nandanpatel0198@gmail.com",
    isPhoneVerified: true,
    isEmailVerified: false,
    isGovtIdVerified: false,
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto">
        {/* Header - User Basic Info */}
        <div className="flex items-center p-4 bg-white">
          <div className="relative">
            <Avatar className="h-20 w-20 border">
              <AvatarFallback className="text-2xl bg-gray-200">
                {user.name.charAt(0)}
              </AvatarFallback>
              <AvatarImage src="" />
            </Avatar>
          </div>
          
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-icap-black">{user.name}</h1>
              <ChevronRight className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-gray-500">{user.status}</p>
          </div>
        </div>

        {/* Profile Picture Option */}
        <div className="bg-white mt-1 p-4">
          <button className="flex items-center text-blue-400">
            <Plus className="h-6 w-6 text-blue-400 mr-2 border border-blue-400 rounded-full p-1" />
            <span>Add profile picture</span>
          </button>
        </div>

        {/* Edit Personal Details */}
        <div className="bg-white mt-1 p-4">
          <button className="flex items-center text-blue-400">
            <span>Edit personal details</span>
          </button>
        </div>

        <Separator className="my-4" />

        {/* Verify Profile Section */}
        <div className="bg-white p-4">
          <h2 className="text-xl font-bold text-slate-700 mb-4">Verify your profile</h2>
          
          <div className="space-y-6">
            {/* Verify Government ID */}
            <button className="flex items-center w-full">
              <div className="flex items-center justify-center">
                <Plus className="h-6 w-6 text-blue-400 mr-2 border border-blue-400 rounded-full p-1" />
              </div>
              <span className="ml-2 text-blue-400">Verify your Govt. ID</span>
            </button>

            {/* Verify Email */}
            <button className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Plus className="h-6 w-6 text-blue-400 mr-2 border border-blue-400 rounded-full p-1" />
                <div className="text-left">
                  <span className="text-blue-400">Confirm email</span>
                  <p className="text-blue-400 text-sm">{user.email}</p>
                </div>
              </div>
            </button>

            {/* Phone Number (Verified) */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-6 w-6 bg-blue-400 rounded-full mr-2">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700">{user.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        {/* About You Section */}
        <div className="bg-white p-4">
          <h2 className="text-xl font-bold text-slate-700 mb-4">About you</h2>
          
          <div className="space-y-6">
            {/* Add Mini Bio */}
            <button className="flex items-center w-full">
              <Plus className="h-6 w-6 text-blue-400 mr-2 border border-blue-400 rounded-full p-1" />
              <span className="ml-2 text-blue-400">Add a mini bio</span>
            </button>

            {/* Edit Travel Preferences */}
            <button className="flex items-center w-full">
              <Plus className="h-6 w-6 text-blue-400 mr-2 border border-blue-400 rounded-full p-1" />
              <span className="ml-2 text-blue-400">Edit travel preferences</span>
            </button>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Vehicles Section */}
        <div className="bg-white p-4 mb-20">
          <h2 className="text-xl font-bold text-slate-700 mb-4">Vehicles</h2>
          
          <div className="space-y-6">
            {/* Add Vehicle */}
            <button className="flex items-center w-full">
              <Plus className="h-6 w-6 text-blue-400 mr-2 border border-blue-400 rounded-full p-1" />
              <span className="ml-2 text-blue-400">Add vehicle</span>
            </button>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Profile;
