import React, { useEffect, useState } from "react";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phones?search=Iphone")
      .then((res) => res.json())
      .then((data) => setPhones(data.data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl">Phone {phones.length}</h1>
    </div>
  );
};

export default Phones;
