import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Chips from "./Chips";

const AnimeCarouselItem = ({
  title,
  imglink,
  starred,
  starCallback,
  genre,
}) => {
  return (
    <li>
      <div>
        <img alt="anime frame" src={imglink}></img>
        <div className="carousel-title">
          <h2>{title}</h2>
          <div onClick={starCallback}>
            {starred ? <AiFillStar /> : <AiOutlineStar />}
          </div>
        </div>
        <Chips items={genre} />
      </div>
    </li>
  );
};

AnimeCarouselItem.defaultProps = {
  title: "That time I got reincarnated as an anime title",
  imglink:
    "https://i.pinimg.com/736x/31/76/fd/3176fda4e0f16e61b83833ad2e7838b1.jpg",
  starred: false,
  starCallback: () => {
    console.log("Error");
  },
  genre: [],
};

export default AnimeCarouselItem;
