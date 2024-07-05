import GalleryOne from "../../../assets/images/gallery/team4.jpeg";
import GalleryTwo from "../../../assets/images/gallery/team5.jpeg";
import GalleryThree from "../../../assets/images/gallery/team3.webp";
import GalleryFour from "../../../assets/images/gallery/team2.jpeg";
import GalleryFive from "../../../assets/images/gallery/teampic1.avif";
import GallerySix from "../../../assets/images/gallery/teampic2.jpg";
import GallerySeven from "../../../assets/images/gallery/teampic3.jpg";
import GalleryEight from "../../../assets/images/gallery/teampic3.jpg";
import GalleryNine from "../../../assets/images/gallery/teampic4.jpeg";

const Gallery = () => {
  return (
    <div className="flex flex-row w-full pt-32 pb-32 gap-6 pl-7 pr-7">
      <div>
        <img className="hover:scale-75 cursor-pointer" src={GallerySix} />
      </div>
      <div>
        <img className="hover:scale-75 cursor-pointer" src={GalleryFive} />
      </div>

      <div>
        <img className="hover:scale-75 cursor-pointer" src={GallerySeven} />
      </div>
    </div>
  );
};

export default Gallery;
