import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: string;
}

const ImagePlaceholder = ({ className = "", aspectRatio = "16/9" }: ImagePlaceholderProps) => {
  return (
    <div
      className={`bg-muted border-2 border-dashed border-border rounded-sm flex items-center justify-center ${className}`}
      style={{ aspectRatio }}
    >
      <ImageIcon className="w-10 h-10 text-steel" />
    </div>
  );
};

export default ImagePlaceholder;
