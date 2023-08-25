import { useState, useEffect } from "react";
import data from "../data.json";

function Technology() {
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsTablet(window.innerWidth < 821);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // console.log(data);
  const [value, setValue] = useState(0);
  const techZero = () => {
    setValue(0);
  };
  const techOne = () => {
    setValue(1);
  };
  const techTwo = () => {
    setValue(2);
  };
  return (
    <>
      {isTablet ? (
        <div className="techContainer">
          <div className="techContentContainer">
            <div className="destAbs">
              <h5>
                <span>03</span> SPACE LAUNCH 101
              </h5>
            </div>
            <div className="techContent">
              <div className="techBtnContainer">
                <button
                  className={`techBtn ${value === 0 ? "" : "bgNone"}`}
                  onClick={techZero}
                >
                  1
                </button>
                <button
                  className={`techBtn ${value === 1 ? "" : "bgNone"}`}
                  onClick={techOne}
                >
                  2
                </button>
                <button
                  className={`techBtn ${value === 2 ? "" : "bgNone"}`}
                  onClick={techTwo}
                >
                  3
                </button>
              </div>
              <div className="techDesc">
                <p>THE TERMINOLOGY...</p>
                <h3>{data.technology[value].name}</h3>
                <p className="sh2">{data.technology[value].description}</p>
              </div>
            </div>
            <div className="sliderTechContainer">
              <div
                className={`imageTechContainer ${
                  value === 0
                    ? ""
                    : value === 1
                    ? "slide-up1"
                    : value === 2
                    ? "slide-up2"
                    : ""
                }`}
              >
                {data.technology.map((item, i) => (
                  <div key={i}>
                    <img src={item.images.landscape} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="techContainer">
          <div className="techContentContainer">
            <div className="destAbs">
              <h5>
                <span>03</span> SPACE LAUNCH 101
              </h5>
            </div>
            <div className="techContent">
              <div className="techBtnContainer">
                <button
                  className={`techBtn ${value === 0 ? "" : "bgNone"}`}
                  onClick={techZero}
                >
                  1
                </button>
                <button
                  className={`techBtn ${value === 1 ? "" : "bgNone"}`}
                  onClick={techOne}
                >
                  2
                </button>
                <button
                  className={`techBtn ${value === 2 ? "" : "bgNone"}`}
                  onClick={techTwo}
                >
                  3
                </button>
              </div>
              <div className="techDesc">
                <p>THE TERMINOLOGY...</p>
                <h3>{data.technology[value].name}</h3>
                <p className="sh2">{data.technology[value].description}</p>
              </div>
            </div>
            <div className="sliderTechContainer">
              <div
                className={`imageTechContainer ${
                  value === 0
                    ? ""
                    : value === 1
                    ? "slide-up1"
                    : value === 2
                    ? "slide-up2"
                    : ""
                }`}
              >
                {data.technology.map((item, i) => (
                  <div key={i}>
                    <img src={item.images.portrait} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Technology;
