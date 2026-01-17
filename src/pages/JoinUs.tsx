import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, Users, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

type UserType = "customer" | "partnership" | null;

const JoinUs = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType) {
      toast.error("Please select whether you're a customer or interested in partnership");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        userType === "customer"
          ? "Thank you! We'll keep you updated about our services."
          : "Thank you! We'll reach out about partnership opportunities."
      );
      setFormData({ name: "", email: "", phone: "", message: "", location: "" });
      setUserType(null);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-elevated p-8 lg:p-10"
        >
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
              Join Us on This <span className="text-gradient">Journey</span>
            </h1>
            <p className="text-muted-foreground">
              Are you interested as a customer or looking for partnership opportunities?
            </p>
          </div>

          {/* User Type Selection */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <motion.button
              type="button"
              onClick={() => setUserType("customer")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                userType === "customer"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <Users className={`w-8 h-8 mx-auto mb-3 ${
                userType === "customer" ? "text-primary" : "text-muted-foreground"
              }`} />
              <p className={`font-semibold ${
                userType === "customer" ? "text-primary" : "text-foreground"
              }`}>
                Customer
              </p>
            </motion.button>

            <motion.button
              type="button"
              onClick={() => setUserType("partnership")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                userType === "partnership"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <Handshake className={`w-8 h-8 mx-auto mb-3 ${
                userType === "partnership" ? "text-primary" : "text-muted-foreground"
              }`} />
              <p className={`font-semibold ${
                userType === "partnership" ? "text-primary" : "text-foreground"
              }`}>
                Partnership
              </p>
            </motion.button>
          </div>

          {userType && (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary h-12"
                />
              </div>

              {userType === "partnership" && (
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Location
                  </label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Enter your location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary h-12"
                  />
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {userType === "customer" ? "Message (Optional)" : "Tell us about your business"}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={
                    userType === "customer"
                      ? "Any questions or comments?"
                      : "Tell us about your store and why you'd like to partner with us"
                  }
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required={userType === "partnership"}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              >
                {isSubmitting ? "Submitting..." : userType === "customer" ? "Join as Customer" : "Submit Partnership Interest"}
              </Button>
            </motion.form>
          )}

          {!userType && (
            <p className="text-sm text-muted-foreground text-center mt-6">
              Please select an option above to continue
          </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default JoinUs;
