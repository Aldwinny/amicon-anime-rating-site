import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Chips from "./Chips";
import { Component } from "react";

const STAR_COLOR = "#4a2f98";

// const AnimeCarouselItem = ({
//   title,
//   imglink,
//   starred,
//   starCallback,
//   genre,
//   onClick,
// }) => {
//   const [starState, setStarState] = useState(starred);
//   const changeStarState = () => {
//     setStarState(!starState);
//     starCallback(!starState);
//   };
//   return (
//     <li>
//       <div>
//         <img alt="anime frame" src={imglink} onClick={onClick}></img>
//         <div className="carousel-title">
//           <h2 onClick={onClick}>{title}</h2>
//           <div onClick={changeStarState}>
//             {starState ? (
//               <AiFillStar color={STAR_COLOR} />
//             ) : (
//               <AiOutlineStar color={STAR_COLOR} />
//             )}
//           </div>
//         </div>
//         <Chips items={genre} />
//         <p>Do we even have descriptions or something?</p>
//       </div>
//     </li>
//   );
// };

class AnimeCarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starState: props.starred,
    };
    this.toAnimeInfo = this.toAnimeInfo.bind(this);
  }

  toAnimeInfo(e) {
    this.props.onClick(e);
  }

  render() {
    const { title, img, starCallback, genre } = this.props;
    const starState = this.state.starState;
    return (
      <li onClick={this.toAnimeInfo}>
        <div>
          <img alt="anime frame" src={img}></img>
          <div className="carousel-title">
            <h2>{title}</h2>
            <div
              onClick={() => {
                starCallback();
                this.setState({ starState: !starState });
              }}
            >
              {starState ? (
                <AiFillStar color={STAR_COLOR} />
              ) : (
                <AiOutlineStar color={STAR_COLOR} />
              )}
            </div>
          </div>
          <Chips items={genre} />
          <p>Do we even have descriptions or something?</p>
        </div>
      </li>
    );
  }
}

AnimeCarouselItem.defaultProps = {
  title: "That time I got reincarnated as an anime title",
  img:
    // "https://i7.xem-truyen.com/manga/19/19587/11.thumb_500x.jpg",
    "https://i.pinimg.com/736x/31/76/fd/3176fda4e0f16e61b83833ad2e7838b1.jpg",
  starred: true,
  starCallback: (val) => {
    console.log(`TEMP_LOG: Changed star state to ${val}`);
  },
  onClick: () => {
    console.log("No acction added.");
  },
  genre: [],
};

export default AnimeCarouselItem;
