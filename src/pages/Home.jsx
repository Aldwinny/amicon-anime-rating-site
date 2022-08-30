import AnimeCarousel from "../components/AnimeCarousel";

const Home = () => {
  return (
    <main>
      <AnimeCarousel title="New" />
      <AnimeCarousel title="latest" />
      <AnimeCarousel title="Horror" />
    </main>
  );
};

export default Home;
