import AnimeCarousel from "../components/AnimeCarousel";
import Sidebar from "../shared/Sidebar";

const Home = () => {
  return (
    <main>
      <Sidebar />
      <div>
        <AnimeCarousel title="New" />
        <AnimeCarousel title="latest" />
        <AnimeCarousel title="Horror" />
      </div>
    </main>
  );
};

export default Home;
