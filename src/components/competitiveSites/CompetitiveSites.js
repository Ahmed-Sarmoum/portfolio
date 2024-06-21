import React from "react";
import "./CompetitiveSites.css";
import courseraImg from '../../assests/images/coursera.png'
import kaggleImg from '../../assests/images/kaggle.png'
// import { Icon } from '@iconify/react';
// import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          <Fade>
            <div
              className="cert-header"
            >
              <img
                className="logo_img1"
                src={courseraImg}
                alt={"coursera"}
              />
              <img
                className="logo_img2"
                src={kaggleImg}
                alt={"kaggle"}
              />
            </div>
          </Fade>
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
