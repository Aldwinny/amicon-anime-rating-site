import AITitle from "../components/AITitle";
import TitledBanner from "../components/TitledBanner";
import Sidebar from "../shared/Sidebar";

const AnimeInfo = ({ starred }) => {
  return (
    <>
      <Sidebar />
      <div className="content unpadded">
        <TitledBanner />
        <section className="transform-40">
          <AITitle starred={starred} />
          <p>Fascinating</p>
        </section>
      </div>
    </>
  );
};

AnimeInfo.defaultProps = {
  starred: false,
};

export default AnimeInfo;
