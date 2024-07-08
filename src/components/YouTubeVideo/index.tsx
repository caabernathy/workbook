import React, { useState } from "react";
import styles from "./styles.module.css";

interface YouTubeVideoProps {
  id: string;
  title: string;
  startTime?: number;
}

export const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  id,
  title,
  startTime = 0,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Construct the YouTube URL with the start time parameter
  const videoUrl = `https://www.youtube.com/embed/${id}${
    startTime > 0 ? `?start=${startTime}` : ""
  }`;

  return (
    <div className={styles.videoContainer}>
      <iframe
        className={styles.video}
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded && (
        <div className={styles.videoInfo}>
          <p className={styles.videoInfoP}>{title}</p>
          {startTime > 0 && (
            <p className={styles.videoInfoP}>
              (starting at: {formatTime(startTime)})
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Helper function to format seconds into MM:SS
function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
