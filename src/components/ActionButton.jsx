import PropTypes from "prop-types";
import { FaReact } from "react-icons/fa";

const ActionButton = ({ action, content }) => {
  return (
    <button className="fancy-btn" onClick={action}>
      <div>{content}</div>
    </button>
  );
};

ActionButton.defaultProps = {
  action: () => {
    console.log("No action indicated.");
  },
  content: <FaReact></FaReact>,
};

ActionButton.propTypes = {
  action: PropTypes.func,
  content: PropTypes.object,
};

export default ActionButton;
