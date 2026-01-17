import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WineBottleSilhouette, WineGlassSilhouette, WineBottle, WhiskeyGlass } from "./LiquorIcons";
import { useState, useRef } from "react";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), springConfig);

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Enhanced Background gradient with animated layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      
      {/* Enhanced ambient glow effects with 3D feel */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Animated particle effects */}
      {[...Array(20)].map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = Math.random() * 3 + 2;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
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

      {/* 3D Floating bottle silhouettes with depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[
          { top: '20%', left: '5%', delay: 0, scale: 1 },
          { top: '40%', right: '8%', delay: 0.2, scale: 0.8 },
          { top: '60%', left: '15%', delay: 0.4, scale: 1.2 },
          { top: '80%', right: '12%', delay: 0.6, scale: 0.9 },
        ].map((item, index) => (
          <motion.div
            key={index}
            animate={{
              y: [-15, 15, -15],
              rotateX: [0, 5, 0],
              rotateY: [0, 10, 0],
              rotateZ: [-2, 2, -2],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
            className={`absolute opacity-[0.04] ${item.left ? `left-[${item.left}]` : ''} ${item.right ? `right-[${item.right}]` : ''} ${item.top}`}
            style={{
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) scale(${item.scale})`,
            }}
          >
            <WineBottleSilhouette className="w-20 h-48 text-foreground" />
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Coming Soon Badge with 3D effect */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 z-50"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow layers */}
        <motion.div
          className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        
        <motion.div
          className="relative flex items-center gap-2 px-6 py-3 bg-primary/20 border-2 border-primary/50 rounded-full backdrop-blur-md shadow-2xl"
          animate={{
            y: [0, -5, 0],
            boxShadow: [
              "0 10px 40px rgba(255, 107, 0, 0.3)",
              "0 15px 60px rgba(255, 107, 0, 0.5)",
              "0 10px 40px rgba(255, 107, 0, 0.3)",
            ],
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 2, repeat: Infinity },
          }}
          whileHover={{ scale: 1.1, rotateY: 5 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.5, repeat: Infinity },
            }}
          >
            <Zap className="w-5 h-5 text-primary" />
          </motion.div>
          <span className="text-base font-bold text-primary">Coming Soon</span>
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1], 
              opacity: [0.5, 1, 0.5],
              boxShadow: [
                "0 0 0px rgba(255, 107, 0, 0)",
                "0 0 15px rgba(255, 107, 0, 1)",
                "0 0 0px rgba(255, 107, 0, 0)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="section-container flex items-center justify-between py-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <motion.span 
              className="font-display text-2xl font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              MADI<span className="text-primary">RAL</span>
            </motion.span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            <Link to="/partnership" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
              For Shop Owners
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="section-container relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text with 3D tilt effect */}
          <motion.div 
            className="space-y-8"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
            >
              Your favorite{" "}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
                drinks
              </span>
              , delivered{" "}
              <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                at your doorsteps
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Skip the trip. Get what you want without stepping out. We're building an amazing liquor delivery service for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/get-notified">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 relative overflow-hidden group w-full sm:w-auto"
                  >
                    <span className="relative z-10">Get Notified</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Map Illustration with interactive tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* 3D Card effect */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: -5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Dark map background with depth */}
                <div className="absolute inset-0 bg-card rounded-3xl border border-border overflow-hidden shadow-2xl">
                  {/* Animated grid lines */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={`h-${i}`}
                        className="absolute w-full h-px bg-border"
                        style={{ top: `${(i + 1) * 12.5}%` }}
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={`v-${i}`}
                        className="absolute h-full w-px bg-border"
                        style={{ left: `${(i + 1) * 12.5}%` }}
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Animated abstract roads */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                    <motion.path
                      d="M0,200 Q100,150 200,200 T400,200"
                      stroke="hsl(var(--border))"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.path
                      d="M200,0 Q250,100 200,200 T200,400"
                      stroke="hsl(var(--border))"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.7 }}
                    />
                  </svg>
                </div>

                {/* 3D Location pins with enhanced animations */}
                {[
                  { top: '20%', left: '30%', delay: 0.5, type: 'bottle', z: 10 },
                  { top: '35%', left: '60%', delay: 0.7, type: 'glass', z: 20 },
                  { top: '55%', left: '25%', delay: 0.9, type: 'glass', z: 15 },
                  { top: '70%', left: '70%', delay: 1.1, type: 'bottle', z: 25 },
                  { top: '45%', left: '45%', delay: 0.6, main: true, type: 'bottle', z: 30 },
                ].map((pin, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, z: 0 }}
                    animate={{ opacity: 1, scale: 1, z: pin.z }}
                    transition={{ duration: 0.4, delay: pin.delay }}
                    className="absolute"
                    style={{ 
                      top: pin.top, 
                      left: pin.left,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.div 
                      className={`relative ${pin.main ? 'scale-125' : ''}`}
                      animate={{ 
                        y: [-4, 4, -4],
                        rotateZ: [-2, 2, -2],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut", 
                        delay: index * 0.2 
                      }}
                      whileHover={{ scale: 1.2, z: 50 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-primary rounded-xl blur-lg opacity-50"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <div className="relative bg-gradient-to-br from-primary to-primary/80 p-2.5 rounded-xl shadow-lg shadow-primary/50">
                        {pin.type === 'bottle' ? (
                          <WineBottle className="w-4 h-4 text-primary-foreground" />
                        ) : (
                          <WhiskeyGlass className="w-4 h-4 text-primary-foreground" />
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Enhanced floating store cards with 3D effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotateY: -20 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -right-8 top-1/4 bg-card border border-border rounded-xl p-3 shadow-xl backdrop-blur-sm"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-primary text-lg">🍷</span>
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium">Premium Wines</p>
                      <p className="text-xs text-muted-foreground">0.5 km away</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20, rotateY: 20 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -left-4 bottom-1/4 bg-card border border-border rounded-xl p-3 shadow-xl backdrop-blur-sm"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: -5,
                    z: 50,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center"
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-secondary text-lg">🥃</span>
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium">Whisky House</p>
                      <p className="text-xs text-muted-foreground">1.2 km away</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div 
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center relative overflow-hidden"
          animate={{
            borderColor: ["rgba(255,255,255,0.3)", "rgba(255,107,0,0.6)", "rgba(255,255,255,0.3)"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
