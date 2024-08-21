import React, { useState } from "react";

const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          onClick={() => setRatingValue(i)}
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill={i <= ratingValue ? "yellow" : "white"}
          stroke="currentColor"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15 8.9 22 9.8 17 14.6 18.5 21.5 12 17.8 5.5 21.5 7 14.6 2 9.8 9 8.9 12 2" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {renderStars()}
      </div>
      <div>
        <button
          onClick={() => setRatingValue(1)}
          style={{ margin: "5px", padding: "10px", fontSize: "12px" }}
        >
          Плохо
        </button>
        <button
          onClick={() => setRatingValue(2)}
          style={{ margin: "5px", padding: "10px", fontSize: "12px" }}
        >
          Приемлемо
        </button>
        <button
          onClick={() => setRatingValue(3)}
          style={{ margin: "5px", padding: "10px", fontSize: "12px" }}
        >
          Хорошо
        </button>
        <button
          onClick={() => setRatingValue(4)}
          style={{ margin: "5px", padding: "10px", fontSize: "12px" }}
        >
          Отлично
        </button>
        <button
          onClick={() => setRatingValue(5)}
          style={{ margin: "5px", padding: "10px", fontSize: "12px" }}
        >
          Превосходно
        </button>
      </div>
    </div>
  );
};

export default Rating;
