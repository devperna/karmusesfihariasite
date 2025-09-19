
import React, { useState, useRef, useEffect } from 'react';

// IMPORTANTE:
// Coloque seus vídeos na pasta `public/videos/`
// E renomeie eles exatamente como nesta lista:
const videoFiles = [
  'SaveVid.Net_AQMBTKgFJTgamMxJTztJ89uN-bSAfwA53NqJnKktFF3bfHto9GjzOxvmP3AZDQyQ3HB4XMEuOgwFCxAYzYixzZGyPWdRJekJ5oabJLQ.mp4',
  'SaveVid.Net_AQNh9pUCFs8CJ6b2Ghs1ltMFYdynqYyv-4LJI7sG_M9T6qVd7SneJBt0FdpxBMTZarAqgeomLn3Zsl3TvXzR-lW3BeLSM2QqKQgXfB0.mp4',
  'SaveVid.Net_AQNryXh3s2jwllgbyhpBsy0TZwVpXO9lOIknxOxePYPic5qzlf_R234ZFURlsY-crasvHHI-1FSFcfhzhZ6B3CEOTCs51wq8DC2RgZM.mp4',
  'SaveVid.Net_AQO1sehKZPzB6ZEMl9VF5O05S-2w95Ps9x18pL8PjPcbgzQv720LYNtxdopZFwGo9g_fFdx9gZElEIg5aLWVRmWiioJxXkeAfv73mqo.mp4'
];

export const VideoPlayer = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoFiles.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = `/videos/${videoFiles[currentVideoIndex]}`;
      videoRef.current.play().catch(error => {
        // Autoplay pode ser bloqueado, o usuário pode precisar interagir primeiro.
        console.error("Erro ao tentar tocar o vídeo automaticamente:", error);
      });
    }
  }, [currentVideoIndex]);

  return (
    <div className="video-player-container mb-5">
        <div className="row justify-content-center">
            <div className="col-md-5">
                <video 
                    ref={videoRef}
                    width="100%" 
                    height="auto" 
                    onEnded={handleVideoEnded}
                    autoPlay
                    muted // Autoplay geralmente requer que o vídeo esteja sem som inicialmente
                    playsInline
                    className="img-fluid rounded-3" // Using img-fluid for responsiveness and rounded-3 for styling
                >
                    {/* O browser não suporta o elemento de vídeo. */}
                </video>
            </div>
        </div>
    </div>
  );
};
