import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Thanks = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-elevated p-8 lg:p-10 text-center max-w-md w-full"
      >
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">Thank You!</h1>
        <p className="text-muted-foreground mb-6">Your submission has been sent successfully.</p>
        <Link to="/">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Back to Home</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Thanks;