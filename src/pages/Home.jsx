import AnimeCarousel from "../components/AnimeCarousel";
import Sidebar from "../shared/Sidebar";

const Home = ({ callbacks }) => {
  return (
    <main>
      <Sidebar />
      <div>
        <AnimeCarousel title="New" callback={callbacks.AnimeInfo} />
        <AnimeCarousel title="latest" />
        <AnimeCarousel title="Horror" />
      </div>
    </main>
  );
};

export default Home;
