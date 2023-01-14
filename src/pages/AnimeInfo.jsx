import TitledBanner from "../components/TitledBanner";
import FavoriteStar from "../components/FavoriteStar";
import Sidebar from "../shared/Sidebar";
import Chips from "../components/Chips";

const AnimeInfo = ({ title, description, genre, src, alt, starred }) => {
  if (title === AnimeInfo.defaultProps.title) {
    // window.location.href = "/";
  }
  return (
    <>
      <Sidebar />
      <div className="content unpadded">
        <TitledBanner />
        <section>
          <div className="titled-image">
            <div>
              <img src={src} alt={alt ?? title + " cover"}></img>
              <Chips items={genre} />
            </div>
            <div>
              <div>
                <p className="title-text">{title}</p>
                <p className="description-text">{description}</p>
              </div>
              <FavoriteStar state={starred} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

AnimeInfo.defaultProps = {
  title: "An unknown error has occurred. Title not found.",
  description: "An unknown error has occurred. Description not found.",
  src: "https://i.pinimg.com/736x/31/76/fd/3176fda4e0f16e61b83833ad2e7838b1.jpg",
  starred: false,
  genre: [],
};

export default AnimeInfo;
