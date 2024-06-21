import React, {Component} from 'react'
import ExperienceCard from "../../components/experienceCard/ExperienceCard"
import "./ExperienceAccordion.css"
import Footer from "../../components/footer/Footer"
import {Fade,  Flip } from "react-reveal"
class ExperienceAccordion extends Component {
     render() {
       const theme = this.props.theme;
       return (
         <div >

          <div  className="body-header-duration2">
                                        <h3  className="duration2" style={{ color: theme.text }}>
                                             <Flip left duration={4000}>
                                                  <div className="card-img2">
                                                       <h1 >
                                                          Work
                                                        </h1>
                                                  </div>
                                             </Flip>
                                        </h3>
                                   </div>
        

                   {this.props.experiences.map((experience, index) => {
                     return (
                       <Fade key={index} left bottom duration={3000}>
                        <ExperienceCard experience={experience} theme={theme} />
                      </Fade>
                     );
                   })}
            <Footer theme={this.props.theme} />
         </div>
       );
     }
   }
   
   export default ExperienceAccordion;