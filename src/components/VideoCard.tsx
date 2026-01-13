import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface VideoCardProps {
  title: string;
  tag: string;
  videoUrl: string;
  index: number;
}

const VideoCard = ({ title, tag, videoUrl, index }: VideoCardProps) => {
  // Convert YouTube shorts URL to embed format
  const getEmbedUrl = (url: string) => {
    const videoId = url.match(/shorts\/([^?]+)/)?.[1] || 
                    url.match(/(?:v=|\/embed\/|youtu\.be\/)([^?&]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-primary/50 via-primary/20 to-accent/50 hover:from-primary/70 hover:via-primary/30 hover:to-accent/70 transition-all duration-500 hover-lift"
    >
      <div className="relative rounded-2xl bg-card overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

        {/* Video embed */}
        <div className="aspect-[9/16] w-full">
          <iframe
            src={getEmbedUrl(videoUrl)}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Card footer */}
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <Badge
            variant="secondary"
            className="bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-foreground transition-colors"
          >
            {tag}
          </Badge>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
