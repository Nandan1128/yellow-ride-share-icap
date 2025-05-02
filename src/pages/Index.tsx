
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (isLogin) {
      // This would be replaced with actual authentication
      toast({
        title: "Login Successful",
        description: "Welcome back to ICAP!",
      });
      // For demo purposes, navigate to the dashboard
      navigate("/dashboard");
    } else {
      // Navigate to registration flow
      navigate("/register", { state: { email, password } });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-icap-black mb-2">ICAP</h1>
          <p className="text-lg text-gray-500">Car Pooling App</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="bg-icap-yellow rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">
              {isLogin ? "Welcome Back" : "Create Account"}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="icap-label">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="icap-input"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="icap-label">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="icap-input"
                />
              </div>

              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-icap-black hover:text-icap-yellow-dark">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-icap-yellow hover:bg-icap-yellow-dark text-black"
              >
                {isLogin ? "Log In" : "Continue"}
              </Button>

              <div className="text-center mt-4">
                {isLogin ? (
                  <p className="text-sm">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="text-icap-yellow-dark hover:underline font-semibold"
                    >
                      Sign Up
                    </button>
                  </p>
                ) : (
                  <p className="text-sm">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="text-icap-yellow-dark hover:underline font-semibold"
                    >
                      Log In
                    </button>
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

export default Index;
