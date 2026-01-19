import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import VideoCard from "./VideoCard";

const videos = [
  {
    title: "Edit - 1",
    tag: "DaVinci Resolve",
    videoUrl: "https://youtube.com/shorts/VQfNI0tpL4I",
  },
    {
    title: "Edit - 2",
    tag: "DaVinci Resolve",
    videoUrl: "https://youtube.com/shorts/R44Lc-akqaA?si=JGkzHobQR6V7kqo1",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="projects" className="section-padding bg-card/30" ref={ref}>
      <div className="container-narrow">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="font-serif italic text-gradient">Work</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            A showcase of my video editing projects — watch my latest reel edits.
          </p>
        </motion.div>

        {/* Videos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <VideoCard key={video.title} {...video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
