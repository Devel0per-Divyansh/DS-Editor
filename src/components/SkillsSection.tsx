import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Film, 
  Palette, 
  Music, 
  Sparkles, 
  MonitorPlay,
  Layers,
  Zap,
  Camera,
  Youtube,
  Instagram
} from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: <Film className="w-5 h-5" />,
      title: "Video Editing Software",
      skills: ["DaVinci Resolve", "Adobe Premiere Pro", "CapCut"],
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Color Grading & LUTs",
      skills: ["Color Correction", "Cinematic LUTs", "Color Matching", "HDR Grading", "Skin Tone Balancing"],
    },
    {
      icon: <Music className="w-5 h-5" />,
      title: "Audio & Sound Design",
      skills: ["Audio Mixing", "Sound Effects", "Music Sync", "Voice Enhancement", "Noise Reduction"],
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Motion Graphics & VFX",
      skills: ["Text Animations", "Transitions", "Visual Effects", "Compositing"],
    },
    {
      icon: <MonitorPlay className="w-5 h-5" />,
      title: "Content Formats",
      skills: ["YouTube Videos", "Reels & Shorts", "Vlogs", "Documentaries", "Commercials"],
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Design Tools",
      skills: ["Photoshop", "Canva", "Thumbnail Design"],
    },
  ];

  const whatIDo = [
    { icon: <Youtube className="w-5 h-5" />, title: "YouTube Editing", desc: "Long-form content, vlogs, tutorials" },
    { icon: <Instagram className="w-5 h-5" />, title: "Reels & Shorts", desc: "Viral short-form content" },
    { icon: <Camera className="w-5 h-5" />, title: "Story Edits", desc: "Dramatic storytelling" },
    { icon: <Palette className="w-5 h-5" />, title: "Color Grading", desc: "Professional color workflows" },
    { icon: <Sparkles className="w-5 h-5" />, title: "Motion Graphics", desc: "Animated titles & effects" },
    { icon: <Zap className="w-5 h-5" />, title: "Fast Turnaround", desc: "Quick delivery without compromise" },
  ];

  return (
    <section id="skills" className="section-padding bg-card/30" ref={ref}>
      <div className="container-narrow">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl">🎬</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & <span className="font-serif italic text-gradient">Expertise</span>
            </h2>
          </div>
        </motion.div>

        {/* Skills grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What I Actually Do */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl">🎥</span>
            <h3 className="text-2xl md:text-3xl font-bold">
              What I <span className="font-serif italic text-gradient">Actually Do</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whatIDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-card-hover transition-all duration-300 text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
