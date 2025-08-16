
import { useEffect, useRef } from 'react';

interface VirtualTourFrameProps {
  src: string;
  title: string;
  location?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const VirtualTourFrame = ({
  src,
  title,
  location,
  width = "100%",
  height = 500,
  className = "",
}: VirtualTourFrameProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      console.log(`Virtual tour iframe for ${title} loaded successfully`);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
      }
    };
  }, [title]);

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg ${className}`}>
      {location && (
        <a 
          href={`https://yandex.com/maps/${location}`} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs absolute top-2 left-2 z-10 bg-black/50 px-2 py-1 rounded"
        >
          {title}
        </a>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen={true}
        className="w-full"
      ></iframe>
    </div>
  );
};

export default VirtualTourFrame;
