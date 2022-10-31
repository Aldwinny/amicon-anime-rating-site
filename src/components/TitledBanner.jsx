const TitledBanner = ({ title, alt, imglink }) => {
  return (
    <section className="titled-banner">
      {title ? <h1>{title}</h1> : <></>}
      <img src={imglink} alt="Titled Banner"></img>
    </section>
  );
};

TitledBanner.defaultProps = {
  alt: "banner",
  imglink: "https://pbs.twimg.com/media/Eo-TYK3XEAI8adM?format=jpg&name=large", // "https://via.placeholder.com/350x150"
};

export default TitledBanner;
