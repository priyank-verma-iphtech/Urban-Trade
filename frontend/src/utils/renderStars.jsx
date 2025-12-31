import { FaStar } from "react-icons/fa";

export const renderStars = (rating) => {
  const rounded = Math.round(rating);
  return [...Array(5)].map((_, i) => (
    <FaStar key={i} size={14} color={i < rounded ? "#FF9529" : "#CCCCCC"} />
  ));
};

export const getRatingText = (rating) => {
  switch (rating) {
    case 5:
      return "Great";
    case 4:
      return "Very Good";
    case 3:
      return "Good";
    case 2:
      return "Bad";
    case 1:
      return "Very Bad";
    default:
      return "No Rating";
  }
};
