import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Notes({ heading, text }) {
  return (
    <div className="note-set">
      <h3 className="note-heading">{heading}</h3>
      <p className="note-content">{text}</p>
    </div>
  );
}

export default Notes;

Notes.PropTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
