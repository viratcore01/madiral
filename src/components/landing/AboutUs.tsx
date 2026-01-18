import { motion } from "framer-motion";
import { WineBottleSilhouette, WineGlassSilhouette } from "./LiquorIcons";
import { Target, Users, Zap, Heart, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      Icon: Target,
      title: "Our Mission",
      description: "To revolutionize how people access local liquor stores through our delivery service, making it effortless to get exactly what you're looking for delivered to your doorsteps.",
    },
    {
      Icon: Users,
      title: "Community First",
      description: "We believe in supporting local businesses and building strong community connections. Every partnership helps strengthen the local economy.",
    },
    {
      Icon: Zap,
      title: "Innovation",
      description: "We're constantly evolving our platform with cutting-edge technology to provide the best user experience possible.",
    },
    {
      Icon: Heart,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen, learn, and adapt to ensure we're always meeting your needs.",
    },
  ];

  const stats = [
    { Icon: MapPin, label: "Store Locations", value: "Coming Soon", subtext: "Partnerships opening" },
    { Icon: Clock, label: "Delivery Time", value: "Fast", subtext: "Quick & reliable" },
  ];

  return (
    <section id="about" className="section-spacing relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-40 h-40 rounded-full bg-primary/[0.03] blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-40 right-[15%] w-32 h-32 rounded-full bg-secondary/[0.03] blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/[0.015] blur-[100px]" />
      </div>

      {/* Floating bottle decorations with enhanced animations */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[3%] top-1/3 opacity-[0.02] pointer-events-none"
      >
        <WineBottleSilhouette className="w-16 h-40 text-foreground" />
      </motion.div>
      <motion.div
        animate={{ y: [6, -6, 6], rotate: [2, -2, 2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5%] top-1/2 opacity-[0.02] pointer-events-none"
      >
        <WineGlassSilhouette className="w-12 h-28 text-foreground" />
      </motion.div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <span className="text-xs font-medium text-primary">About Madiral</span>
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Us</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-4"
          >
            Madiral makes getting your drinks easy. No more driving around or searching. Just quick, simple access to what you want.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-muted-foreground/80 leading-relaxed max-w-3xl mx-auto"
          >
            We're a forward-thinking liquor delivery service dedicated to connecting consumers with local liquor stores in an innovative way. 
            Our mission is to simplify the delivery process while supporting local businesses and creating a seamless experience 
            for everyone involved. Whether you're looking for a rare vintage wine, craft spirits, or your favorite beer, 
            Madiral helps you get it quickly and have it delivered to your doorstep.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card-elevated p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <stat.Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground/70">{stat.subtext}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-elevated p-6 lg:p-8 group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-5">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                  >
                    <value.Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="card-elevated p-8 lg:p-10 bg-gradient-to-br from-card to-card/50 border-primary/10">
            <h3 className="font-display text-2xl font-bold mb-4">
              Building the Future of <span className="text-gradient">Liquor Delivery</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're currently in active development, working hard to bring you an exceptional platform. 
              Our team is dedicated to creating a seamless experience that benefits both consumers and local store owners. 
              Stay tuned for updates as we continue to build and refine Madiral.
            </p>
            <Link to="/join-us">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block"
              >
                {/* Animated glow */}
                <motion.div
                  className="absolute inset-0 bg-primary rounded-xl blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="relative inline-flex items-center gap-2 px-8 py-4 bg-primary/10 hover:bg-primary/20 border-2 border-primary/40 rounded-xl text-primary font-semibold transition-all duration-300 cursor-pointer shadow-lg shadow-primary/20"
                  animate={{
                    boxShadow: [
                      "0 10px 30px rgba(255, 107, 0, 0.2)",
                      "0 15px 40px rgba(255, 107, 0, 0.4)",
                      "0 10px 30px rgba(255, 107, 0, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <motion.span
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🚀
                  </motion.span>
                  Join Us on This Journey
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-xl"
                  >
                    →
                  </motion.span>
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
