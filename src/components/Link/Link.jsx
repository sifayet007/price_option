import PropTypes from "prop-types";

import React from "react";

const Link = ({ route }) => {
  return (
    <li
      className="mr-10 md:ml-0 ml-5 
     duration-300 hover:scale-110"
    >
      <a className=" " href={route.path}>
        {route.name}
      </a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
