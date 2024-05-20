import React, { useEffect, useState } from 'react';
import JSZip from 'jszip';

const VideoComponent = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const fetchVideoFromZip = async () => {
      try {
        // Load the ZIP file containing the video
        const response = await fetch('/public/assets/videoBg.mp4.zip');
        const zipFile = await response.arrayBuffer();

        // Extract the video file from the ZIP archive
        const zip = await JSZip.loadAsync(zipFile);
        const videoData = await zip.file('videoBg.mp4').async('blob');

        // Create a URL for the video blob
        const url = URL.createObjectURL(videoData);
        setVideoUrl(url);
      } catch (error) {
        console.error('Error loading video:', error);
      }
    };

    fetchVideoFromZip();
  }, []);

  const [loading, setDataLoading] = useState(true)
  const handleVideoLoading = () => { setLoading(false);
  }

  return (
    <div>
      {loading && videoUrl && (
        <video autoPlay muted loop>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoComponent;
