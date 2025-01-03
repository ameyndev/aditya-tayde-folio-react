import Post1 from "../assets/graphic-post/graphic-post-1.png";
import Post2 from "../assets/graphic-post/graphic-post-2.png";
import Post3 from "../assets/graphic-post/graphic-post-7.png";
import Post4 from "../assets/graphic-post/graphic-post-8.png";
import Post5 from "../assets/graphic-post/graphic-post-9.png";
import Post6 from "../assets/graphic-post/graphic-post-10.png";

const Posts = () => {
  const images = [
    Post1,
    Post2,
    Post3,
    Post4,
    Post5,
    Post6,
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Post ${index + 1}`}
              className="w-full max-w-sm shadow-lg shadow-[#eb5f2a]"
            />
          </div>
        ))}
      </div>
      <hr className="mt-8 border-t border-gray-300" />
    </div>
  );
}

export default Posts;