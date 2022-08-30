import AnimeCarouselItem from "./AnimeCarouselItem";

const AnimeCarousel = ({ title }) => {
  return (
    <section className="carousel-wrapper">
      <h1>{title ?? "AnimeCarousel"}</h1>
      <div className="division-solid"></div>
      <ul className="carousel-items">
        {/* This should be a list UL & LI */}
        <AnimeCarouselItem />
        <AnimeCarouselItem />
        <AnimeCarouselItem />
      </ul>
    </section>
  );
};

export default AnimeCarousel;
