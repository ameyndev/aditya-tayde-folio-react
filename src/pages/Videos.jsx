import { useState } from "react";
import Video1 from "../assets/videos/video-1.webm";
import Video2 from "../assets/videos/video-2.webm";
import Video3 from "../assets/videos/video-3.webm";
import Video4 from "../assets/videos/video-4.webm";
import Video5 from "../assets/videos/video-5.webm";
import Video6 from "../assets/videos/video-6.webm";
import Video7 from "../assets/videos/video-7.webm";
import Video8 from "../assets/videos/video-8.webm";
import Video9 from "../assets/videos/video-9.webm";
import Video10 from "../assets/videos/video-10.webm";
import Video11 from "../assets/videos/video-11.webm";
import Video12 from "../assets/videos/video-12.webm";
import Video13 from "../assets/videos/video-13.webm";
import Video14 from "../assets/videos/video-14.webm";
import Video15 from "../assets/videos/video-15.webm";
import Video16 from "../assets/videos/video-16.webm";
import Video17 from "../assets/videos/video-17.webm";
import Video18 from "../assets/videos/video-18.webm";
import Video19 from "../assets/videos/video-19.webm";
import Video20 from "../assets/videos/video-20.webm";
// import Video21 from "../assets/videos/video-21.webm";

const Videos = () => {
  const videos = [Video1, Video2, Video3, Video4, Video5, Video6, Video7, Video8, Video9, Video10, Video11, Video12, Video13, Video14, Video15, Video16, Video17, Video18, Video19, Video20];
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-[#eb5f2a] text-center my-8">
        Videos
      </h1>
      {/* Grid Layout with Video Thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 mx-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden"
            onClick={() => openModal(video)}
          >
            <video
              src={video}
              className="w-full h-full object-cover aspect-square shadow-md shadow-[#eb5f2a]"
              muted
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">
                Click to Play
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
