import React, { Component } from "react"
import "./ExperienceCard.css"
import myPortfolioMes from '../../assests/images/logo192.png'
import softMes from '../../assests/images/softMes.png'
import websiteMes from '../../assests/images/websiteMes.png'
import androidMes from '../../assests/images/android_robot.png'
import logoTejarati from '../../assests/images/logo_tejarati.png'
import dynamicWebsite from '../../assests/images/dynamic_website.png'

function getImage(id) {
     if(id === 1) {
          return myPortfolioMes
     } else if(id === 2) {
          return softMes
     } else if(id === 3) {
          return websiteMes
     } else if(id === 4) {
          return androidMes
     } else if(id === 5) {
          return logoTejarati
     }else if(id === 6) {
          return dynamicWebsite
     }
}
class ExperienceCard extends Component {
     
     render() {
          const experience = this.props.experience
          // let legato_logo = require('../../assests/images/legato_logo.png')
          const theme = this.props.theme
          return (
               <div
                    className="experience-card"
                    style={{ border: `1px solid ${experience["color"]}` }}
               >
                    <div className="experience-card-logo-div">
                         <img
                              className="experience-card-logo"
                              src={ getImage(experience['id']) }
                              alt={"card"}
                         />
                    </div>
                    <div className="experience-card-body-div">
                         <div className="experience-card-header-div">
                              <div className="experience-card-heading-left">
                                   <h3
                                        className="experience-card-title"
                                        style={{ color: theme.text }}
                                   >
                                        {experience["title"]}
                                   </h3>
                                   <p
                                        className="experience-card-company"
                                        style={{ color: theme.text }}
                                   >
                                        <a
                                             href={experience["company_url"]}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                        >
                                             {experience["company"]}
                                        </a>
                                   </p>
                              </div>
                              <div className="experience-card-heading-right">
                                   <p
                                        className="experience-card-duration"
                                        style={{ color: theme.secondaryText }}
                                   >
                                        {experience["duration"]}
                                   </p>
                                   <p
                                        className="experience-card-location"
                                        style={{ color: theme.secondaryText }}
                                   >
                                        {experience["location"]}
                                   </p>
                              </div>
                         </div>
                         <p
                              className="experience-card-description"
                              style={{ color: theme.text }}
                         >
                              {experience["description"]}
                         </p>
                    </div>
               </div>
          )
     }
}

export default ExperienceCard