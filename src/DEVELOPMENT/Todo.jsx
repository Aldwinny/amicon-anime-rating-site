import { FaReact } from "react-icons/fa";
import PropTypes from "prop-types";

const Todo = ({ color, context, note }) => {
  return (
    <FaReact
      color={color}
      onClick={() => {
        console.error(note(context));
      }}
    />
  );
};

Todo.defaultProps = {
  color: "lightblue",
  context: "unknown",
  note: (context) => {
    return `Dangling TODO note: Add a pixel icon, context: ${context}`;
  },
};

Todo.propTypes = {
  color: PropTypes.string,
  context: PropTypes.string,
  note: PropTypes.func,
};

export default Todo;
