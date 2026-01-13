import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Palette, Music, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <Film className="w-5 h-5" />,
      text: "Cinematic editing with compelling visual storytelling",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      text: "Color grading and visual aesthetics that captivate",
    },
    {
      icon: <Music className="w-5 h-5" />,
      text: "Sound design and audio synchronization",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: "Motion graphics and visual effects",
    },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="font-serif italic text-gradient">Me</span>
            </h2>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left - Description */}
            <div className="md:col-span-3 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground">Divyansh Singh</span>, a passionate video editor who transforms raw footage into captivating visual stories.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating engaging content for YouTube, Instagram Reels, Shorts, and brand videos. 
                My approach combines technical precision with creative vision to deliver content that resonates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From fast-paced montages to cinematic narratives, I bring ideas to life through seamless transitions, 
                dynamic pacing, color grading, and impactful sound design.
              </p>
            </div>

            {/* Right - Highlights */}
            <div className="md:col-span-2 space-y-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0 p-2 rounded-md bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
