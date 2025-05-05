
import React from "react";
import { Card } from "@/components/ui/card";
import BottomNav from "@/components/BottomNav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Edit, Shield, Camera, Mail, Phone, MapPin, User, Briefcase, Star, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  // Mock user data
  const user = {
    name: "Nandan",
    title: "Graphic Designer",
    location: "New Delhi",
    bio: "I love creating visual stories and exploring new design trends. Always up for a coffee chat about typography!",
    joinedDate: "April 2023",
    trips: 12,
    phone: "+919664635841",
    email: "nandanpatel0198@gmail.com",
    isPhoneVerified: true,
    isEmailVerified: false,
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with background color */}
      <div className="bg-icap-yellow pt-10 pb-20 px-4 rounded-b-3xl">
        <div className="max-w-md mx-auto flex justify-between items-start">
          <h1 className="text-2xl font-bold text-black">Profile</h1>
          <Button variant="ghost" className="p-1 h-auto" onClick={() => {}}>
            <Edit className="h-5 w-5 text-black" />
          </Button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4">
        {/* Profile Card - Overlapping the yellow header */}
        <Card className="rounded-xl shadow-lg -mt-16 overflow-hidden border-none">
          {/* Profile Info */}
          <div className="p-6 flex flex-col items-center text-center">
            <div className="relative mb-3">
              <Avatar className="h-24 w-24 border-4 border-white">
                <AvatarFallback className="text-2xl bg-icap-yellow text-black">
                  {user.name.charAt(0)}
                </AvatarFallback>
                <AvatarImage src="" />
              </Avatar>
              <button className="absolute bottom-0 right-0 bg-icap-yellow rounded-full p-1.5">
                <Camera className="h-4 w-4 text-black" />
              </button>
            </div>

            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 mb-2">{user.title}</p>
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              {user.location}
            </div>
            
            <p className="text-gray-600 text-sm mb-6 max-w-xs">
              {user.bio}
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mb-2">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-800">{user.joinedDate}</p>
                <p className="text-xs text-gray-500">Joined</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-800">{user.trips}</p>
                <p className="text-xs text-gray-500">Trips</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Contact Information */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-gray-100 rounded-full p-2 mr-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-800">{user.phone}</p>
                </div>
                {user.isPhoneVerified && (
                  <Shield className="ml-auto h-5 w-5 text-green-500" />
                )}
              </div>
              
              <div className="flex items-center">
                <div className="bg-gray-100 rounded-full p-2 mr-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800">{user.email}</p>
                </div>
                {user.isEmailVerified ? (
                  <Shield className="ml-auto h-5 w-5 text-green-500" />
                ) : (
                  <Button variant="outline" size="sm" className="ml-auto text-xs border-icap-yellow text-black hover:bg-icap-yellow">
                    Verify
                  </Button>
                )}
              </div>
            </div>
          </div>

          <Separator />

          {/* Personal Information */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
            
            <div className="space-y-4">
              <button className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="bg-gray-100 rounded-full p-2 mr-3">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="text-gray-800">About Me</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              
              <button className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="bg-gray-100 rounded-full p-2 mr-3">
                    <Briefcase className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="text-gray-800">Work</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              
              <button className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="bg-gray-100 rounded-full p-2 mr-3">
                    <Award className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="text-gray-800">Achievements</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              
              <button className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="bg-gray-100 rounded-full p-2 mr-3">
                    <Star className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="text-gray-800">Interests</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </Card>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Profile;
