import React, { Component } from "react"
import "./DegreeCard.css"
import { Fade, Flip } from "react-reveal"
import logo from '../../assests/images/logo_univ.png'

class DegreeCard extends Component {
     render() {
          const degree = this.props.degree
          const theme = this.props.theme
          return (
               <div className="degree-card">

                    <Fade right duration={2000} distance="40px">
                         <div className="card-body">
                              <div
                                   className="body-header"
                                   style={{ backgroundColor: theme.headerColor }}
                              >
                                   <div className="body-header-title">
                                        <h2 className="card-title" style={{ color: theme.text }}>
                                             {degree.title}
                                        </h2>
                                        <h3 className="card-subtitle" style={{ color: theme.text }}>
                                             {degree.subtitle}
                                        </h3>
                                   </div>
                                   <div className="body-header-duration">
                                        <h3 className="duration" style={{ color: theme.text }}>
                                             <Flip left duration={7000}>
                                                  <div className="card-img">
                                                       <img
                                                            style={{
                                                                 maxWidth: "70%",
                                                                 maxHeight: "40%",
                                                            }}
                                                            src={logo}
                                                            alt={degree.alt_name}
                                                       />
                                                  </div>
                                             </Flip>
                                        </h3>
                                   </div>
                              </div>
                              <div className="body-content">
                                   {degree.descriptions.map((sentence,index) => {
                                        return (
                                             <p key={index} className="content-list" style={{ color: theme.text, marginTop:'20px' }}>
                                                  {sentence}
                                             </p>
                                        );
                                   })}
                                   {/* <a
                                        href={degree.website_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                   >
                                        <div
                                             className="visit-btn"
                                             style={{ backgroundColor: theme.headerColor }}
                                        >
                                             <p className="btn" style={{ color: theme.text }}>
                                                  Visit Website
                                             </p>
                                        </div>
                                   </a> */}
                              </div>
                         </div>
                    </Fade>
               </div>
          );
     }
}

export default DegreeCard;
