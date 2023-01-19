import AnimeCarouselItem from "./AnimeCarouselItem";

const AnimeCarousel = ({ title, callback }) => {
  const items = [];

  let key = 1; //TODO: Temporary Key; Remove this.

  items.push(
    <AnimeCarouselItem
      genre={[
        "Psychological horror",
        "comedy",
        "romance",
        "romance",
        "romance",
      ]}
      title="That time I became an anime title"
      description="An anime about being reincarnated into an anime title."
      src="https://i7.xem-truyen.com/manga/19/19587/11.thumb_500x.jpg"
      onClick={callback}
      key={key++}
    />
  );

  for (let i = 0; i < 8; i++) {
    items.push(
      <AnimeCarouselItem key={key++} genre={["Horror"]} onClick={callback} />
    );
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
