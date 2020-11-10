import React from "react";
import "./styles/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>All you can do!</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/planner.jpg"
              text="Select, arrange, and organize your schedule online"
              label="Organize"
              path="/Planner"
            />

            <CardItem
              src="images/phone.jpg"
              text="Create your account and use it anywhere"
              label="Technology"
              path="/Planner"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/arms.jpg"
              text="Selected part of body"
              label="WorkOut"
              path="/Planner"
            />
            <CardItem
              src="images/gym.jpg"
              text="Select the Equipment and time, upload your own photos"
              label="Select Equipment"
              path="/Planner"
            />
            <CardItem
              src="images/friends.jpg"
              text="Create a workout with friends using a code"
              label="Team"
              path="/Planner"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
