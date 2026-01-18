import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WineBottleSilhouette, WineGlassSilhouette } from "./LiquorIcons";

const ParallaxBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const bottles = [
    { type: "bottle", delay: 0, size: "w-10 md:w-16 h-24 md:h-36" },
    { type: "glass", delay: 0.1, size: "w-8 md:w-12 h-20 md:h-28" },
    { type: "bottle", delay: 0.2, size: "w-12 md:w-18 h-28 md:h-40" },
    { type: "glass", delay: 0.15, size: "w-9 md:w-14 h-22 md:h-32" },
    { type: "bottle", delay: 0.25, size: "w-11 md:w-15 h-26 md:h-38" },
    { type: "glass", delay: 0.3, size: "w-8 md:w-13 h-20 md:h-30" },
    { type: "bottle", delay: 0.35, size: "w-10 md:w-14 h-24 md:h-34" },
    { type: "glass", delay: 0.4, size: "w-9 md:w-12 h-22 md:h-28" },
  ];

  return (
    <section
      ref={ref}
      className="relative h-40 md:h-56 overflow-hidden bg-gradient-to-r from-card via-primary/10 to-card border-y border-border/50"
    >
      {/* Enhanced ambient glow with animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />

      {/* 3D Parallax bottle row with enhanced animations */}
      <motion.div
        style={{ x: x1, opacity, scale }}
        className="absolute inset-0 flex items-center justify-around"
      >
        {bottles.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: item.delay,
              type: "spring",
              stiffness: 100,
            }}
            className="relative"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{
              y: [0, -15, 0],
              rotateZ: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            {item.type === "bottle" ? (
              <motion.div
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(255, 107, 0, 0))",
                    "drop-shadow(0 0 20px rgba(255, 107, 0, 0.5))",
                    "drop-shadow(0 0 0px rgba(255, 107, 0, 0))",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <WineBottleSilhouette className={`${item.size} text-primary/30`} />
              </motion.div>
            ) : (
              <motion.div
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(255, 200, 87, 0))",
                    "drop-shadow(0 0 15px rgba(255, 200, 87, 0.4))",
                    "drop-shadow(0 0 0px rgba(255, 200, 87, 0))",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <WineGlassSilhouette className={`${item.size} text-secondary/25`} />
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced gradient overlays */}
      <motion.div
        className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-card via-card/50 to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-card via-card/50 to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.5,
        }}
      />

      {/* Enhanced center decoration with 3D effect */}
      <motion.div
        style={{ x: x2, rotate }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="flex items-center gap-4">
          <motion.div
            className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent via-primary/50 to-primary"
            animate={{
              scaleX: [0.5, 1, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-primary rounded-full blur-lg opacity-50"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div className="relative w-3 h-3 rounded-full bg-primary" />
          </motion.div>
          <motion.div
            className="h-px w-20 md:w-40 bg-gradient-to-l from-transparent via-primary/50 to-primary"
            animate={{
              scaleX: [0.5, 1, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxBanner;
