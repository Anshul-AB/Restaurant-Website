import React from "react";

const Card = ({imageSrc, dishName}) => {
  return (
    <article className="card">
      <img src={imageSrc} alt='Dish image'/>
      <div>
        <h3>{dishName}</h3>
        <p>$11.89</p>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic mollitia
        fugit eveniet velit unde accusantium dicta omnis iste, quae veniam,
        cupiditate.
      </p>
      <a href="#">Order a Delivery</a>
    </article>
  );
};

export default Card;
