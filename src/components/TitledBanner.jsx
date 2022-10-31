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
  imglink:
    "https://cdn.myanimelist.net/s/common/uploaded_files/1571491125-6c18d311b8b4ee64468b2441b2a401c3.jpeg", // "https://via.placeholder.com/350x150"
};

export default TitledBanner;
