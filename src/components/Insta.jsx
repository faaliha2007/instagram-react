import Story from "./Story";

import one from "../assets/images/faali14.jpeg";
import two from "../assets/images/faali52.jpeg";
import three from "../assets/images/faali4.jpeg";
import four from "../assets/images/faali34.jpeg";
import five from "../assets/images/faali37.jpeg";
import six from "../assets/images/edit3.jpeg";
import seven from "../assets/images/faali2.jpeg";
import eight from "../assets/images/faali4.jpeg";
import nine from "../assets/images/faali6.jpeg";
import ten from "../assets/images/faali11.jpeg";
import eleven from "../assets/images/faali15.jpeg";
import twelve from "../assets/images/faali20.jpeg";
import thirteen from "../assets/images/faali22.jpeg";
import fourteen from "../assets/images/faali23.jpeg";
import fifteen from "../assets/images/faali27.jpeg";
import sixteen from "../assets/images/faali30.jpeg";

const stories = [
  { image: one, name: "_.sxnjx._" },
  { image: two, name: "faali._" },
  { image: three, name: "sxnjx_.pvt" },
  { image: four, name: "dreamy._" },
  { image: five, name: "_.faaliha_" },
  { image: six, name: "feroze.07" },
  { image: seven, name: "_.faaaa." },
  { image: eight, name: "faali_.pvt" },
  { image: nine, name: "._khan" },
  { image: ten, name: "sumiii_" },
  { image: eleven, name: "_.fxlix._" },
  { image: twelve, name: "_mohamed_" },
  { image: thirteen, name: "_sumaiya._" },
  { image: fourteen, name: "banu_." },
  { image: fifteen, name: "faaliha_22" },
  { image: sixteen, name: "feroze82_." }
];

function Insta() {
  return (
    <div className="insta">
      <h1 className="title">Instagram</h1>

      <div className="story-container">
        <div className="storybox">
          {stories.map((story, index) => (
            <Story key={index} image={story.image} name={story.name} 
            
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Insta;
