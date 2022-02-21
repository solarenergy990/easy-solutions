import PropTypes from "prop-types";
// import s from "./SvgIcon.module.scss";

// [
//
// ]

const SvgIcon = ({ iconName }) => {
  return (
    <svg viewBox="0 0 28.3 28.3">
      <use xlinkHref={`/sprite.svg#${iconName}`} />
    </svg>
  );
};

export default SvgIcon;

SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
};
