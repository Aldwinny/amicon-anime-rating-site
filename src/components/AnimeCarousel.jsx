import AnimeCarouselItem from "./AnimeCarouselItem";

const AnimeCarousel = ({ title, callback }) => {
  const items = [];

  items.push(
    <AnimeCarouselItem
      genre={["Psychological horror", "comedy", "romance"]}
      onClick={() => console.log(callback())}
    />
  );

  for (let i = 0; i < 8; i++) {
    items.push(<AnimeCarouselItem />);
  }

  return (
    <section className="carousel-wrapper">
      <h1>{title ?? "AnimeCarousel"}</h1>
      <div className="division-solid"></div>
      <ul className="carousel-items">
        {/* This should be a list UL & LI */}

        {items}
      </ul>
    </section>
  );
};

export default AnimeCarousel;
