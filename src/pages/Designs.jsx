import Posts from "../components/Posts";
import Thumbnails from "../components/Thumbnails";
import Banners from "../components/Banners";

const Designs = () => {
  return (
    <>
      <div className="bg-[#312f30] text-[#eb5f2a] min-h-screen px-8 py-16">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Graphic Designing
        </h1>

        {/* Sub-components */}
        <div className="space-y-16">
          <section id="posts">
            <h2 className="text-3xl text-white text-center font-medium mb-4">Posts</h2>
            <Posts />
          </section>

          <section id="thumbnails">
            <h2 className="text-3xl text-white text-center font-medium mb-4">Thumbnails</h2>
            <Thumbnails />
          </section>

          <section id="banners">
            <h2 className="text-3xl text-white text-center font-medium mb-4">Banners</h2>
            <Banners />
          </section>
        </div>
      </div>
    </>
  );
};

export default Designs;