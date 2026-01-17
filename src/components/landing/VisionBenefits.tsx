import { motion } from "framer-motion";
import { WineBottle, WineGlass, WhiskeyGlass, CocktailGlass, WineBottleSilhouette, WineGlassSilhouette } from "./LiquorIcons";

const benefits = [
  {
    Icon: WineBottle,
    title: "Increase Digital Visibility",
    description: "Get discovered by customers actively searching for liquor stores nearby.",
  },
  {
    Icon: WineGlass,
    title: "Reach Nearby Customers",
    description: "Connect with local buyers looking for exactly what you offer.",
  },
  {
    Icon: WhiskeyGlass,
    title: "Simple Partnership Model",
    description: "Easy onboarding with no complex integrations required.",
  },
  {
    Icon: CocktailGlass,
    title: "Future App Listing",
    description: "Be among the first stores featured on our upcoming mobile app.",
  },
];

const VisionBenefits = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[2%] top-1/4 opacity-[0.02] pointer-events-none"
      >
        <WineBottleSilhouette className="w-20 h-48 text-foreground" />
      </motion.div>
      <motion.div
        animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[4%] bottom-1/4 opacity-[0.02] pointer-events-none"
      >
        <WineGlassSilhouette className="w-14 h-32 text-foreground" />
      </motion.div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 relative"
          >
            {/* Background decoration */}
            <div className="absolute -left-8 top-0 opacity-[0.03] pointer-events-none">
              <WineBottle className="w-24 h-24 text-foreground" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold relative z-10">
              Our <span className="text-gradient">Vision</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed relative z-10">
              <p>
                We believe finding local liquor stores shouldn't be complicated. Our mission is to bridge the gap between consumers and local businesses through simple, effective discovery tools.
              </p>
              <p>
                Madiral empowers shop owners to increase their digital presence while giving customers a seamless way to find what they're looking for — all without the complexity of traditional e-commerce.
              </p>
            </div>
            
            {/* Decorative element */}
            <div className="flex items-center gap-4 pt-4 relative z-10">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              <span className="text-primary text-sm font-medium">Connecting Communities</span>
            </div>
          </motion.div>

          {/* Right Column - Benefits */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl sm:text-4xl font-bold mb-8"
            >
              Why Collaborate <span className="text-gradient">With Us</span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="card-elevated p-5 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-primary/30 transition-all duration-300 border border-primary/20 group-hover:border-primary/40">
                    <benefit.Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionBenefits;
