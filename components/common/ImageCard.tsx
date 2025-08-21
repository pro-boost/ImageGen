import { GeneratedImageProps } from "@/interfaces";
import Image from "next/image";

const ImageCard: React.FC<GeneratedImageProps> = ({
  imageUrl,
  prompt,
  width,
  height,
  action,
}) => {
  return (
    <div
      onClick={() => action(imageUrl)}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-200 hover:border-blue-300"
    >
      <div className={`relative overflow-hidden w-full ${height || "h-48"}`}>
        <Image
          src={imageUrl}
          alt={prompt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
      </div>

      <div className="p-4">
        <h3
          className={`${
            width ? "text-xs" : "text-sm"
          } font-medium text-gray-500 uppercase tracking-wide mb-1`}
        >
          Prompt
        </h3>
        <p
          className={`${
            width ? "text-sm" : "text-base"
          } text-gray-800 font-medium leading-relaxed line-clamp-3`}
        >
          {prompt}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ImageCard;
