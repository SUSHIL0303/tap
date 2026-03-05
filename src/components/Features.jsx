import "../styles/Features.css";

import Bed from "../assets/bed.png";
import Bookmark from "../assets/bookmark.png";
import Pc from "../assets/computer.png";
import Home from "../assets/home.png";
import Social from "../assets/social.png";
import Sparkles from "../assets/sparkles.png";
import Kitchen from "../assets/cutlery.png";
import Tshirt from "../assets/tshirt.png";

export default function Features() {
  return (
    <section className="features-wrapper">

      <div className="features-container">

        {/* Row 1 */}
        <div className="features-row">

          <div className="feature-box">
            <img src={Home} className="box-img" />
            <p>Home</p>
          </div>

          <div className="feature-box">
            <img src={Kitchen} className="box-img" />
            <p>Kitchen Storage</p>
          </div>

          <div className="feature-box">
            <img src={Bed} className="box-img" />
            <p>Bedroom Setup</p>
          </div>

          <div className="feature-box">
            <img src={Tshirt} className="box-img" />
            <p>Closet Organizer</p>
          </div>

        </div>

        {/* Row 2 */}
        <div className="features-row">

          <div className="feature-box">
            <img src={Pc} className="box-img" />
            <p>Desktop Setup</p>
          </div>

          <div className="feature-box">
            <img src={Social} className="box-img" />
            <p>Amazon Finds</p>
          </div>

          <div className="feature-box">
            <img src={Sparkles} className="box-img" />
            <p>Space saving</p>
          </div>

          <div className="feature-box">
            <img src={Bookmark} className="box-img" />
            <p>Top Picks</p>
          </div>

        </div>

      </div>

    </section>
  );
}