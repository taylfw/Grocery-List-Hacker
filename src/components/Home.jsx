import React from "react";
import { SingleRecipeCard } from ".";
import { Fragment } from "react";
import "./Home.css";

const Home = ({ allRecipes }) => {
  return (
    <div className="home-main-container">
      <div className="blurb">
        GLH was hacked into existence by the supreme being: Frank. It was made
        to make his life easier and to impress his wife. Frank drank very strong
        black coffee and toiled away between the hours of 4AM – 6:45AM for many
        days. The point of this tool, like so many others, was built out of
        frustration. Frank and His wife made their grocery lists by going
        through the common meals they made and basing it off the ingredients of
        the said meals. By the time the grocery list is complete, it’s a
        complete mess! The produce is spread out among the entire list. Frank,
        like many humans inherited a caveman brain and follows the list in
        order. This makes him look like a fool, while an audience of baggers,
        deli workers and stock boys join together in laughter at his zigzagging
        manner around the store. He wasted his precious time! NOT ANYMORE. This
        app will take the ingredients out of the recipes you choose and sort
        them into logical order like the universe intended. Your grocery
        shopping experience will be so cold, calculated and efficient that
        normal people will think you are Dr. Manhattan and won’t dare look you
        in the eye. You’re Welcome!
      </div>
    </div>
  );
};

export default Home;
