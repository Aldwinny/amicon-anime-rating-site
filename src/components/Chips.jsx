const Chips = ({ items }) => {
  return (
    <ul className="chips">
      {!items.length ? (
        <li>none</li>
      ) : (
        items.map((item) => {
          return <li>{item}</li>;
        })
      )}
    </ul>
  );
};

export default Chips;
