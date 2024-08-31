import React from "react";

const Review = ({ person, size, index }) => {
  const { rating } = { person };

  return (
    <div className="flex flex-col items-center my-5">
      <div className="rating rating-md">
        

        {[1, 2, 3, 4, 5].map((value) => (
          <input
            key={value}
            type="radio"
            name={`rating-${index}`}
            className="mask mask-star-2 bg-orange-400"
            checked={value === size}
            onChange={(e) => {}}
          />
        ))}
      </div>
      <div className="text-center space-y-6 p-10">
        <p>{person.details}</p>
        <h3 className="font-semibold ">{person.name}</h3>
      </div>
    </div>
  );
};

export default Review;
