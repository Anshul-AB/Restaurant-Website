import React from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import IndianDishImage from "../assets/IndianDish.jpg";
import ItalianDishImage from "../assets/ItalianDish.jpg";
import VenezuelanDish from "../assets/VenezuelanDish.jpg";
import JapaneseDish from "../assets/JapaneseDish.jpg";
import RatingCard from "../common/RatingCard";
import UserOne from "../assets/user1.jpg";
import UserTwo from "../assets/user2.jpg";
import UserThree from "../assets/user3.jpg";
import UserFour from "../assets/user4.jpg";
import OwnerProfileOne from "../assets/AboutImage1.jpg";
import OwnerProfileTwo from "../assets/AboutImage2.jpg";

const Main = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="heroSection">
        <div className="left-heroSection">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Experience zestful flavors at Little Lemon Restaurant, <br />
            where every bite is a burst of freshness.
          </p>
          <Button buttonLabel={"Reserve a Table"} />
        </div>
        <img src={IndianDishImage} alt="dish image" />
      </div>

      {/* Specials */}
      <div className="specials">
        <div className="specials-top">
          <h1>Specials</h1>
          <Button buttonLabel={"Online Menu"} />
        </div>
        <div className="cards">
          <Card imageSrc={ItalianDishImage} dishName={"Italian"} />
          <Card imageSrc={VenezuelanDish} dishName={"Venezuelan"} />
          <Card imageSrc={JapaneseDish} dishName={"Japanese"} />
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h1>Testimonials</h1>
        <div className="userProfile">
          <RatingCard
            userPhoto={UserOne}
            name={"Eva Ryan"}
            review={"Soooo good"}
          />
          <RatingCard
            userPhoto={UserTwo}
            name={"John Manny"}
            review={"Recommended"}
          />
          <RatingCard
            userPhoto={UserThree}
            name={"Davin Rope"}
            review={"Amazing"}
          />
          <RatingCard
            userPhoto={UserFour}
            name={"Russy Dean"}
            review={"Delicious"}
          />
        </div>
      </div>

      {/* About */}
      <div className="about">
        <div className="left-about">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            impedit nam, perspiciatis cupiditate, optio aut eos vitae provident,
            illo omnis quibusdam quia repellat quo dicta vero assumenda
            recusandae. Dolorem, est? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto impedit nam, perspiciatis cupiditate,
            optio aut eos vitae provident, illo omnis quibusdam quia repellat
            quo dicta vero assumenda recusandae. Dolorem, est?
          </p>
        </div>
        <div className="about-right">
          <img src={OwnerProfileOne} alt="Owner Image" />
          <img src={OwnerProfileTwo} alt="Owner Image" />
        </div>
      </div>
    </>
  );
};

export default Main;
