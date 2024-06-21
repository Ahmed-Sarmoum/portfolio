import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal"
import pythonImg from '../../assests/images/python.svg'
import introMlImg from '../../assests/images/intro_ml.svg'
import intermidMlImg from '../../assests/images/intermid_ml.svg'
import pandasImg from '../../assests/images/pandas.svg'
import dateVisualisationImg from '../../assests/images/data_visualisation.svg'
import featureEngineeringImg from '../../assests/images/feature_engineering.svg'
import introToSqlImg from '../../assests/images/intro_sql.svg'
import advancedSqlImg from '../../assests/images/advanced_sql.svg'


function getImage(imgName) {
     if (imgName === "python") {
          return pythonImg
     } else if (imgName === "intro_ml") {
          return introMlImg
     } else if (imgName === "intermid_ml") {
          return intermidMlImg
     } else if (imgName === "pandas") {
          return pandasImg
     } else if (imgName === "data_visualisation") {
          return dateVisualisationImg
     } else if (imgName === "feature_engineering") {
          return featureEngineeringImg
     } else if (imgName === "intro_sql") {
          return introToSqlImg
     } else if (imgName === "advanced_sql") {
          return advancedSqlImg
     }
}

class CertificationCard extends Component {

     render() {
          const certificate = this.props.certificate
          const theme = this.props.theme

          return (
               <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                         <div className="content">
                              <a
                                   href={certificate.certificate_link}
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   <div className="content-overlay"></div>
                                   <div
                                        className="cert-header"
                                        style={{ backgroundColor: certificate.color_code }}
                                   >
                                        <img
                                             className="logo_img"
                                             src={getImage(certificate.logo_path)}
                                             alt={certificate.alt_name}
                                        />
                                   </div>
                                   <div className="content-details fadeIn-top">
                                        <h3 className="content-title" style={{ color: theme.body }}>
                                             Certificate
                                        </h3>
                                   </div>
                              </a>
                         </div>
                         <div className="cert-body">
                              <h2 className="cert-body-title" style={{ color: theme.text }}>
                                   {certificate.title}
                              </h2>
                              <h3
                                   className="cert-body-subtitle"
                                   style={{ color: theme.secondaryText }}
                              >
                                   {certificate.subtitle}
                              </h3>
                         </div>
                    </div>
               </Fade>
          )
     }
}

export default CertificationCard