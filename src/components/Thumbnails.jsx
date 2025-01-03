import Thumbnail1 from "../assets/graphic-thumbnails/graphic-thumbnail-14.png";
import Thumbnail2 from "../assets/graphic-thumbnails/graphic-thumbnail-15.png";
import Thumbnail3 from "../assets/graphic-thumbnails/graphic-thumbnail-16.png";
import Thumbnail4 from "../assets/graphic-thumbnails/graphic-thumbnail-17.png";

const Thumbnails = () => {
  const images = [
    Thumbnail1,
    Thumbnail2,
    Thumbnail3,
    Thumbnail4,
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="max-h-sm shadow-lg shadow-[#eb5f2a]"
            />
          </div>
        ))}
      </div>
      <hr className="mt-8 border-t border-gray-300" />
    </div>
  );
};

export default Thumbnails;
