import Banner1 from "../assets/graphic-banner/graphic-banners-18.png";
import Banner2 from "../assets/graphic-banner/graphic-banners-19.png";
import Banner3 from "../assets/graphic-banner/graphic-banners-20.png";

const Banners = () => {
  const images = [
    Banner1,
    Banner2,
    Banner3,
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
}

export default Banners;