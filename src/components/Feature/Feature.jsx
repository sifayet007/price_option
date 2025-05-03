import PropTypes from "prop-types";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex">
        <span className="mr-3 mt-1">
          <IoCheckmarkDoneCircleSharp />
        </span>
        {feature}
      </p>
    </div>
  );
};
Feature.PropTypes = {
  feature: PropTypes.string,
};

export default Feature;
