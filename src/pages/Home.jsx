import AnimeCarousel from "../components/AnimeCarousel";
import TitledBanner from "../components/TitledBanner";
import Sidebar from "../shared/Sidebar";

const Home = ({ callbacks }) => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <TitledBanner title="" />
        <AnimeCarousel title="My Collection" callback={callbacks.AnimeInfo} />
        <AnimeCarousel title="Recommended" callback={callbacks.AnimeInfo} />
      </div>
    </>
  );
};

export default Home;
