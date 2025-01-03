import { useState } from "react";
import Photo1 from "../assets/photography/photography-1.png";
import Photo2 from "../assets/photography/photography-2.png";
import Photo3 from "../assets/photography/photography-3.png";
import Photo4 from "../assets/photography/photography-4.png";
import Photo5 from "../assets/photography/photography-5.png";
import Photo6 from "../assets/photography/photography-6.png";

const Photography = () => {
  const photos = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-[#eb5f2a] text-center my-8">
        Photography
      </h1>
      {/* Grid Layout with Square Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 mx-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden"
            onClick={() => openModal(photo)}
          >
            <img
              src={photo}
              alt={`Photography ${index + 1}`}
              className="w-full h-full object-cover aspect-square shadow-md shadow-[#eb5f2a]"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">
                Click to Enlarge
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <img
              src={selectedPhoto}
              alt="Selected"
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

export default Photography;
