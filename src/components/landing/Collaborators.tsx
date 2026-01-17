import { motion } from "framer-motion";
import { WineBottleSilhouette, WineGlassSilhouette, WineBottle, WineGlass, WhiskeyGlass } from "./LiquorIcons";

const Collaborators = () => {
  const stores = [
    { Icon: WineBottle, name: "Wine Cellar" },
    { Icon: WhiskeyGlass, name: "Whisky House" },
    { Icon: WineGlass, name: "Fine Spirits" },
    { Icon: WineBottle, name: "Vintage Vault" },
    { Icon: WhiskeyGlass, name: "Craft Corner" },
    { Icon: WineGlass, name: "Local Liquors" },
  ];

  // Duplicate stores for seamless scrolling
  const duplicatedStores = [...stores, ...stores, ...stores];
  
  // Calculate one set width: 6 cards * (300px card + 24px gap) = 1944px
  const oneSetWidth = stores.length * (300 + 24);

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Shelf background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {/* Shelf lines */}
          <line x1="0" y1="200" x2="1200" y2="200" stroke="currentColor" strokeWidth="3" />
          <line x1="0" y1="400" x2="1200" y2="400" stroke="currentColor" strokeWidth="3" />
          {/* Bottle silhouettes on shelves */}
          {[100, 200, 350, 500, 650, 800, 950, 1100].map((x, i) => (
            <rect key={i} x={x} y={i % 2 === 0 ? 120 : 320} width="30" height={i % 2 === 0 ? 80 : 80} rx="4" fill="currentColor" />
          ))}
        </svg>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[5%] top-20 opacity-[0.02] pointer-events-none"
      >
        <WineBottleSilhouette className="w-20 h-48 text-foreground" />
      </motion.div>
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] bottom-20 opacity-[0.02] pointer-events-none"
      >
        <WineGlassSilhouette className="w-16 h-32 text-foreground" />
      </motion.div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Collaborating <span className="text-gradient">Stores</span>
          </h2>
          <p className="text-muted-foreground">
            Partnership applications opening soon
          </p>
        </motion.div>

        {/* Scrolling Treadmill Effect */}
        <div className="relative overflow-hidden">
          {/* Upper Row - Scrolls Left to Right (items move from right to left) */}
          <div className="mb-6 overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -oneSetWidth], // Move left by exactly one set width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35, // Slow, smooth speed
                  ease: "linear",
                },
              }}
            >
              {duplicatedStores.map((store, index) => (
                <div
                  key={`upper-${index}`}
                  className="flex-shrink-0 w-[300px] card-elevated p-8 flex flex-col items-center justify-center text-center group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-secondary/10 group-hover:scale-110 transition-all duration-300 border border-border group-hover:border-primary/30">
                    <store.Icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <p className="text-sm text-muted-foreground/70 mb-3 font-medium">{store.name}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-primary">Coming Soon</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Lower Row - Scrolls Right to Left (items move from left to right) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [-oneSetWidth, 0], // Move right from negative to 0 (one set width)
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35, // Slow, smooth speed
                  ease: "linear",
                },
              }}
            >
              {duplicatedStores.map((store, index) => (
                <div
                  key={`lower-${index}`}
                  className="flex-shrink-0 w-[300px] card-elevated p-8 flex flex-col items-center justify-center text-center group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-secondary/10 group-hover:scale-110 transition-all duration-300 border border-border group-hover:border-primary/30">
                    <store.Icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <p className="text-sm text-muted-foreground/70 mb-3 font-medium">{store.name}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-primary">Coming Soon</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
