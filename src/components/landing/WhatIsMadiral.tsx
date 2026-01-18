import { motion } from "framer-motion";
import { BottleWithPin, CocktailWithArrow, ClinkingGlasses, WineBottleSilhouette } from "./LiquorIcons";

const features = [
  {
    Icon: BottleWithPin,
    title: "Quick & Easy",
    description: "Order in seconds, enjoy in minutes",
  },
  {
    Icon: CocktailWithArrow,
    title: "No More Searching",
    description: "Find what you want instantly",
  },
  {
    Icon: ClinkingGlasses,
    title: "Stay Home",
    description: "Delivered right to your door",
  },
];

const WhatIsMadiral = () => {
  return (
    <section className="section-spacing bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <WineBottleSilhouette className="w-64 h-[500px] text-foreground" />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Why You'll <span className="text-gradient">Love It</span>
            </h2>
          </motion.div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-5 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                  <feature.Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMadiral;
