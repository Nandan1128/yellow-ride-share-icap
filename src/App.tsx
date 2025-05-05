
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/Register";
import OtpVerification from "./pages/OtpVerification";
import ProfileSetup from "./pages/ProfileSetup";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import CreatePassengerTrip from "./pages/CreatePassengerTrip";
import Profile from "./pages/Profile";
import Publish from "./pages/Publish";
import MyBooking from "./pages/MyBooking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/create-passenger-trip" element={<CreatePassengerTrip />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/my-booking" element={<MyBooking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
