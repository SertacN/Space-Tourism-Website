import { useState } from "react";
import data from "../data.json";

function Destination() {
  // console.log(data);
  const [value, setValue] = useState(0);

  const handleMoon = () => {
    setValue(0);
  };
  const handleMars = () => {
    setValue(1);
  };
  const handleEuropa = () => {
    setValue(2);
  };
  const handleTitan = () => {
    setValue(3);
  };

  return (
    <div className="destContainer">
      <div className="destContentContainer">
        <div className="destAbs">
          <h5>
            <span>01</span> PICK YOUR DESTINATION
          </h5>
        </div>
        <div className="destImage">
          <img src={data.destinations[value].images.png} alt="planets" />
        </div>
        <div className="destContent">
          <div className="btnContainer">
            <button
              className={`navTextBtn ${value === 0 ? "active white" : "gray"}`}
              onClick={handleMoon}
            >
              MOON
            </button>
            <button
              className={`navTextBtn ${value === 1 ? "active white" : "gray"}`}
              onClick={handleMars}
            >
              MARS
            </button>
            <button
              className={`navTextBtn ${value === 2 ? "active white" : "gray"}`}
              onClick={handleEuropa}
            >
              EUROPA
            </button>
            <button
              className={`navTextBtn ${value === 3 ? "active white" : "gray"}`}
              onClick={handleTitan}
            >
              TITAN
            </button>
          </div>
          <h2>{data.destinations[value].name}</h2>
          <p>{data.destinations[value].description}</p>
          <div className="subDest">
            <div className="subLeft">
              <h6 className="sh2">AVG. DISTANCE</h6>
              <h6 className="sh1">{data.destinations[value].distance}</h6>
            </div>
            <div className="subRight">
              <h6 className="sh2">EST. TRAVEL TIME</h6>
              <h6 className="sh1">{data.destinations[value].travel}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
