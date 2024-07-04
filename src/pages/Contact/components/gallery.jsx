import GalleryOne from "../../../assets/images/gallery/team4.jpeg";
import GalleryTwo from "../../../assets/images/gallery/team5.jpeg";
import GalleryThree from "../../../assets/images/gallery/team3.webp";
import GalleryFour from "../../../assets/images/gallery/team2.jpeg";

const Gallery = () => {
  return (
    <div className="flex flex-row w-full pt-32 pb-32 gap-6">
      <div>
        <img className="hover:scale-75" src={GalleryOne} />
      </div>
      <div>
        <img className="hover:scale-75" src={GalleryThree} />
      </div>
      <div>
        <img className="hover:scale-75" src={GalleryFour} />
      </div>
      <div>
        <img className="hover:scale-75" src={GalleryTwo} />
      </div>
    </div>
  );
};

export default Gallery;
