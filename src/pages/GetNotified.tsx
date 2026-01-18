import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { getFormSubmitUrl, FORMSUBMIT_EMAILS } from "@/config/formsubmit";

const GetNotified = () => {

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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Bell className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
              Get <span className="text-gradient">Notified</span>
            </h1>
            <p className="text-muted-foreground">
              Be the first to know when we launch. We'll send you updates about our liquor delivery service.
            </p>
          </div>

          <form 
            action={getFormSubmitUrl(FORMSUBMIT_EMAILS.GET_NOTIFIED)}
            method="POST"
            className="space-y-6"
          >
            {/* FormSubmit hidden inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Get Notified Submission - MADIRAL" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="https://madiral.vercel.app/get-notified?success=true" />
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
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
                inputMode="tel"
                autoComplete="tel"
                placeholder="+1 (555) 123-4567"
                required
                className="bg-background border-border focus:border-primary h-12"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
              Get Notified
            </Button>
          </form>

          <p className="text-xs text-muted-foreground/70 text-center mt-6">
            We respect your privacy. No spam, ever.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GetNotified;
