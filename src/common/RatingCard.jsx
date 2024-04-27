import React from "react";
import { IoMdStar } from "react-icons/io";

const RatingCard = ({ userPhoto, name, review }) => {
  return (
    <article className="ratingCard">
      <span>
        <IoMdStar size={24} color="gold" />
        <IoMdStar size={24} color="gold" />
        <IoMdStar size={24} color="gold" />
        <IoMdStar size={24} color="gold" />
        <IoMdStar size={24} color="gold" />
      </span>
      <div>
        <img src={userPhoto} alt="user" />
        <h5>{name}</h5>
      </div>
      <p>{review}</p>
    </article>
  );
};

export default RatingCard;
