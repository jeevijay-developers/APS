import React from 'react'

const VideoPlayer = () => {
  return (
    <div className='video-container'>
      <div className="video-wrapper">
        <video 
          height={600} 
          width={1400} 
          controls
          preload="metadata"
          className="video-element"
          controlsList='nodownload'
        >
          <source src='/APS-video.mp4' type="video/mp4" />
          Your browser doesn't support the video tag.
        </video>
      </div>
      
      <style>
        {`
          .video-container {
            width: 100%;
            margin-top: 7rem;
            display: flex;
            justify-content: center;
          }

          .video-wrapper {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            background: #000;
            min-width: 90%;
          }

          .video-element {
            width: 100%;
            height: auto;
            max-width: 100%;
            display: block;
          }

          /* Custom video controls styling */
          .video-element::-webkit-media-controls-panel {
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          }

          .video-element::-webkit-media-controls-play-button,
          .video-element::-webkit-media-controls-volume-slider,
          .video-element::-webkit-media-controls-timeline {
            filter: brightness(1.2);
          }

          /* Responsive design */
          @media (max-width: 768px) {
            .video-container {
              margin-top: 3rem;
              padding: 0 1rem;
            }
          }

          @media (max-width: 480px) {
            .video-container {
              margin-top: 2rem;
            }
            
            .video-wrapper {
              border-radius: 4px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default VideoPlayer