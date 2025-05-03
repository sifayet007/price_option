import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-700 p-5 rounded-lg mt-5 flex flex-col text-white ">
      <h3 className="text-center">
        <span className="md:text-6xl  text-4xl text-white">{price}</span>
        <span className="md:text-2xl text-xl">/mon</span>
      </h3>
      <h3 className="text-3xl text-center font-semibold mt-4">{name}</h3>
      <div className="mt-5 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="md:mt-5 mt-3 bg-white text-black w-full md:py-2 py-1 rounded-xl font-semibold cursor-pointer hover:scale-105 duration-300 md:text-xl ">
        Buy now
      </button>
    </div>
  );
};
PriceOption.PropTypes = {
  option: PropTypes.object,
};

export default PriceOption;
