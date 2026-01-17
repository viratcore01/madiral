import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MapPin, Search, Star } from "lucide-react";
import { useRef, useState } from "react";

const AppComingSoon = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [20, -20]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);

  return (
    <section 
      className="section-spacing bg-gradient-to-b from-card/50 to-background overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background particles */}
      {[...Array(30)].map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        const randomDelay = Math.random() * 3;
        const randomDuration = Math.random() * 4 + 3;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [null, -200],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeOut",
            }}
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
            }}
          />
        );
      })}

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - 3D Phone Mockup */}
          <motion.div
            ref={phoneRef}
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative flex justify-center lg:justify-end order-2 lg:order-1"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Enhanced 3D Phone Frame */}
            <motion.div
              className="relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Multiple glow layers for depth */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-primary/30 to-secondary/20 rounded-[3rem] blur-[80px]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/10 rounded-[3rem] blur-[60px] -z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              
              {/* Phone with 3D depth */}
              <motion.div
                className="relative w-[280px] h-[580px] bg-card rounded-[3rem] border-4 border-border p-3 shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    "0 35px 70px -12px rgba(255, 107, 0, 0.4)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Screen with animated content */}
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* Animated status bar */}
                  <motion.div
                    className="h-8 bg-card/80 flex items-center justify-center"
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <motion.div
                      className="w-20 h-5 bg-background rounded-full"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                  
                  {/* App content with animations */}
                  <div className="p-4 space-y-4">
                    {/* Animated search bar */}
                    <motion.div
                      className="flex items-center gap-2 bg-muted rounded-xl p-3"
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(255, 107, 0, 0)",
                          "0 0 20px rgba(255, 107, 0, 0.3)",
                          "0 0 0px rgba(255, 107, 0, 0)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Search className="w-4 h-4 text-muted-foreground" />
                      </motion.div>
                      <span className="text-sm text-muted-foreground">Search liquor...</span>
                    </motion.div>
                    
                    {/* Enhanced map preview with 3D effect */}
                    <motion.div
                      className="h-32 bg-card rounded-xl border border-border relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className="absolute inset-0 opacity-30">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-full h-px bg-border"
                            style={{ top: `${(i + 1) * 25}%` }}
                            animate={{
                              opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                          className="relative"
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-primary rounded-full blur-md opacity-50"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                          <div className="relative bg-primary p-2 rounded-full">
                            <MapPin className="w-3 h-3 text-primary-foreground" />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Animated store cards */}
                    {[1, 2].map((_, index) => (
                      <motion.div
                        key={index}
                        className="bg-card rounded-xl p-3 border border-border"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          boxShadow: [
                            "0 0 0px rgba(255, 107, 0, 0)",
                            "0 0 15px rgba(255, 107, 0, 0.2)",
                            "0 0 0px rgba(255, 107, 0, 0)",
                          ],
                        }}
                        transition={{
                          opacity: { duration: 0.5, delay: index * 0.2 },
                          y: { duration: 0.5, delay: index * 0.2 },
                          boxShadow: {
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5,
                          },
                        }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                              scale: { duration: 2, repeat: Infinity, delay: index * 0.3 },
                            }}
                          >
                            <span className="text-lg">{index === 0 ? '🍷' : '🥃'}</span>
                          </motion.div>
                          <div className="flex-1">
                            <div className="h-3 w-24 bg-muted rounded" />
                            <div className="h-2 w-16 bg-muted/50 rounded mt-2" />
                          </div>
                          <div className="flex items-center gap-1">
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.2,
                              }}
                            >
                              <Star className="w-3 h-3 text-secondary fill-secondary" />
                            </motion.div>
                            <span className="text-xs">4.8</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="space-y-6 order-1 lg:order-2"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, hsl(var(--foreground)), hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--foreground)))",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mobile App{" "}
              <span className="text-gradient">Launching Soon</span>
            </motion.h2>
            
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Available for Android & iOS. Get notified when we launch and be among the first to experience seamless liquor delivery service.
            </motion.p>
            <motion.p
              className="text-muted-foreground/70 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We're working hard to bring you an amazing experience. Stay tuned for updates!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppComingSoon;
