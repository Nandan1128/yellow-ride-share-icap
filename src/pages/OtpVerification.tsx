
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type OtpState = {
  phoneNumber: string;
};

const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as OtpState;
  const { toast } = useToast();
  
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // Handle timer countdown
  useEffect(() => {
    if (timer > 0) {
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  // Handle input change for OTP
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }
    
    if (isNaN(Number(value)) && value !== "") {
      return;
    }
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus to next input after filling current
    if (value !== "" && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle keydown events for backspace navigation
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleResendOtp = () => {
    if (canResend) {
      // Logic to resend OTP would be here
      setTimer(60);
      setCanResend(false);
      toast({
        title: "Success",
        description: "OTP has been resent to your phone",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const otpValue = otp.join("");
    if (otpValue.length !== 4) {
      toast({
        title: "Error",
        description: "Please enter all 4 digits of the OTP",
        variant: "destructive",
      });
      return;
    }

    // For demo, using "1234" as the valid OTP
    if (otpValue === "1234") {
      toast({
        title: "Success",
        description: "OTP verification successful",
      });
      navigate("/profile-setup");
    } else {
      toast({
        title: "Error",
        description: "Invalid OTP. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-icap-black mb-2">ICAP</h1>
          <p className="text-lg text-gray-500">OTP Verification</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="bg-icap-yellow rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">Verify Your Number</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-center mb-6">
              We've sent a 4-digit code to 
              <span className="font-semibold"> {state?.phoneNumber}</span>
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-14 h-14 text-2xl text-center font-semibold border-2 border-gray-300 focus:border-icap-yellow focus:ring-icap-yellow"
                  />
                ))}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-icap-yellow hover:bg-icap-yellow-dark text-black"
              >
                Verify
              </Button>

              <div className="text-center">
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-icap-yellow-dark hover:underline font-semibold"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <p className="text-sm text-gray-500">
                    Resend OTP in <span className="font-semibold">{timer}s</span>
                  </p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OtpVerification;
