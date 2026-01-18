import { motion } from "framer-motion";
import { WineBottle, ClinkingGlasses, WineGlass, WineBottleSilhouette, WineGlassSilhouette } from "./LiquorIcons";
import { Smartphone } from "lucide-react";

const features = [
  {
    Icon: WineBottle,
    title: "Browse",
    description: "Explore drinks from stores around you",
    bgElement: "map",
  },
  {
    Icon: ClinkingGlasses,
    title: "Choose",
    description: "Pick your favorites",
    bgElement: "handshake",
  },
  {
    Icon: Smartphone,
    title: "Relax",
    description: "Get it delivered, enjoy at home",
    bgElement: "phone",
  },
];

const WhatWeBuilding = () => {
  return (
    <section className="section-spacing bg-card/30 relative overflow-hidden">
      {/* Background bottle silhouettes */}
      <div className="absolute left-10 top-20 opacity-[0.02] pointer-events-none">
        <WineBottleSilhouette className="w-32 h-80 text-foreground" />
      </div>
      <div className="absolute right-20 bottom-10 opacity-[0.015] pointer-events-none">
        <WineGlassSilhouette className="w-24 h-48 text-foreground" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to get your drinks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glow-border group"
              whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
            >
              <div className="card-elevated p-8 h-full text-center relative overflow-hidden">
                {/* Background illustration */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                  {feature.bgElement === "map" && (
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <path d="M20,100 Q50,50 100,100 T180,100" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M100,20 Q150,50 100,100 T100,180" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="60" cy="70" r="8" fill="currentColor" />
                      <circle cx="140" cy="90" r="6" fill="currentColor" />
                      <circle cx="100" cy="130" r="10" fill="currentColor" />
                    </svg>
                  )}
                  {feature.bgElement === "handshake" && (
                    <div className="flex items-end justify-center gap-4 h-full pb-8">
                      <WineBottleSilhouette className="w-12 h-32 text-foreground" />
                      <WineGlassSilhouette className="w-10 h-24 text-foreground" />
                    </div>
                  )}
                  {feature.bgElement === "phone" && (
                    <div className="w-20 h-36 border-2 border-current rounded-xl flex items-center justify-center">
                      <WineGlass className="w-8 h-8" />
                    </div>
                  )}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-secondary/20 transition-all duration-300 border border-primary/20">
                    <feature.Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuilding;
