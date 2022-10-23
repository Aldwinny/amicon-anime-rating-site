import AnimeCarousel from "../components/AnimeCarousel";
import Sidebar from "../shared/Sidebar";

const Home = ({ callbacks }) => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <AnimeCarousel title="New" callback={callbacks.AnimeInfo} />
        <AnimeCarousel title="latest" />
        <AnimeCarousel title="Horror" />
      </div>
    </>
  );
};

export default Home;
