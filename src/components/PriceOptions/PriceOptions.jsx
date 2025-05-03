import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 free fitness consultation",
        "Access during business hours (8am - 8pm)",
        "Basic workout plan",
        "Monthly fitness progress report",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "All Basic Plan features",
        "Access to all group fitness classes",
        "Free protein shake every week",
        "Unlimited locker access",
        "Extended gym hours (6am - 10pm)",
        "Body composition analysis every month",
        "One guest pass per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 69.99,
      features: [
        "All Standard Plan features",
        "2 Personal trainer sessions per month",
        "24/7 gym access",
        "Access to sauna and steam room",
        "Hydro massage chair use (2x per month)",
        "Advanced workout and meal plan",
        "Fitness tracking app integration",
      ],
    },
    {
      id: 4,
      name: "Elite Plan",
      price: 99.99,
      features: [
        "All Premium Plan features",
        "Weekly personal training sessions",
        "Custom nutrition coaching",
        "Unlimited guest passes",
        "Access to private training studio",
        "Priority booking for classes and trainers",
        "Free gym merchandise pack (t-shirt, bottle)",
        "Monthly health screening and consultation",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h1 className="md:text-5xl text-3xl">Best price in the town</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6">
        {priceOptions.map((option, idx) => (
          <PriceOption key={idx} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
