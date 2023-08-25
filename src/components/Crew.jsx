import { useState } from "react";
import data from "../data.json";

function Crew() {
  // console.log(data);
  const [value, setValue] = useState(0);
  const handleZero = () => {
    setValue(0);
  };
  const handleOne = () => {
    setValue(1);
  };
  const handleTwo = () => {
    setValue(2);
  };
  const handleThree = () => {
    setValue(3);
  };

  return (
    <div className="crewContainer">
      <div className="crewContentContainer">
        <div className="destAbs">
          <h5>
            <span>02</span> MEET YOUR CREW
          </h5>
        </div>
        <div className="crewContent">
          <h4 className="crewRole">{data.crew[value].role}</h4>
          <h3 className="crewName">{data.crew[value].name}</h3>
          <p className="crewBio">{data.crew[value].bio}</p>
          <div className="btnCrewContainer">
            <button
              className={value === 0 ? "bg-white" : "opacity-low"}
              onClick={handleZero}
            ></button>
            <button
              className={value === 1 ? "bg-white" : "opacity-low"}
              onClick={handleOne}
            ></button>
            <button
              className={value === 2 ? "bg-white" : "opacity-low"}
              onClick={handleTwo}
            ></button>
            <button
              className={value === 3 ? "bg-white" : "opacity-low"}
              onClick={handleThree}
            ></button>
          </div>
        </div>
        <div className="sliderContainer">
          <div
            className={`imageContainer ${
              value === 1
                ? "slide-left1"
                : value === 2
                ? "slide-left2"
                : value === 3
                ? "slide-left3"
                : ""
            }`}
          >
            {data.crew.map((item, i) => (
              <div key={i}>
                <img src={item.images.png} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
