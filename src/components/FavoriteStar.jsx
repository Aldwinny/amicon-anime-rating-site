import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const FavoriteStar = ({ onClick, state }) => {
  return (
    <div onClick={onClick} tabIndex={0}>
      {state ? (
        <AiFillStar className="star" />
      ) : (
        <AiOutlineStar className="star" />
      )}
    </div>
  );
};

FavoriteStar.defaultProps = {
  onClick: () => {
    console.warn("FavoriteStar: No action added.");
  },
  state: false,
};

export default FavoriteStar;
