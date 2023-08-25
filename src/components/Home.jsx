import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="homeContainer">
      <div className="homeContentContainer">
        <div className="homeDescription">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className="homeTitle">SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="homeBtn">
          <button
            onClick={() => navigate("/space-tourism-website/destination")}
          >
            <h4>EXPLORE</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
