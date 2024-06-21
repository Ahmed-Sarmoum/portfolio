import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import "./SocialMedia.css"
import { socialMediaLinks } from "../../information"
import styled from 'styled-components' 


const IconWraper = styled.span`
     i {
          background-color: ${(props) => props.backgroundColor};    
     } 
     &:hover i {
          background-color: ${( {theme} ) => theme.text};
          transition: 0.3s ease-in;
     }
     `
     const  SocialMedia = (props) => {
          return (
               <div className="social-media-div">
                    
                    {socialMediaLinks.map((media,index) => {
                         return (
                              <a 
                                   key={index}
                                   href={media.link}
                                   className={`icon-button`}
                                   target="_blank"
                                   rel="noopener noreferrer">
                                   
                                   <IconWraper {...media} {...props}>
                                        <i className={`fab ${media.fontAwesomeIcon}`}></i>
                                   </IconWraper>
                              </a>
                         )
                    })}
               </div>
          )
     }

     export default SocialMedia