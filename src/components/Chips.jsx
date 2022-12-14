const Chips = ({ items }) => {
  return (
    <div className="chips-wrapper">
      <ul className="chips">
        {!items.length ? (
          <li>none</li>
        ) : (
          items.map((item) => {
            return <li tabIndex={0}>{item}</li>;
          })
        )}
      </ul>
    </div>
  );
};

export default Chips;
