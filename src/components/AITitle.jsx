import FavoriteStar from "./FavoriteStar";

const AITitle = ({ title, src, alt, starred }) => {
  return (
    <div className="titled-image">
      <img src={src} alt={alt ?? title + " cover"}></img>
      <p>{title}</p>
      <FavoriteStar state={starred} />
    </div>
  );
};

AITitle.defaultProps = {
  title:
    "That time I got reincarnated as an Anime title that pretty much challenges the limits of borders",
  src: "https://i.pinimg.com/736x/31/76/fd/3176fda4e0f16e61b83833ad2e7838b1.jpg",
  starred: false,
};

export default AITitle;
