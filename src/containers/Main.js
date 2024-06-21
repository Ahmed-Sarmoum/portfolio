import React, { Component } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Home from "./pages/home/Home"
import Splash from "./pages/splash/Splash"
import Education from "./pages/education/Education"
import Experience from "./pages/experience/Experience"
import Opensource from "./pages/opensource/Opensource"
import Contact from "./pages/contact/Contact"
import Projects from "./pages/projects/Projects"
import { settings } from "../information"
import  "./mainCss.css"

export default class Main extends Component {
     render() {
          const theme = this.props.theme
          if (settings.isSplash) {
               return (
                    <div className="marg">
                         <HashRouter basename="/">
                              <Switch>
                                   <Route
                                        path="/"
                                        exact
                                        render={(props) => (
                                             <Splash {...props} theme={this.props.theme} />
                                        )}
                                   />
                                   <Route
                                        path="/home"
                                        render={(props) => <Home {...props} theme={this.props.theme} />}
                                   />
                                   <Route
                                        path="/experience"
                                        exact
                                        render={(props) => (
                                             <Experience {...props} theme={this.props.theme} />
                                        )}
                                   />
                                   <Route
                                        path="/education"
                                        render={(props) => (
                                             <Education {...props} theme={this.props.theme} />
                                        )}
                                   />
                                   <Route
                                        path="/opensource"
                                        render={(props) => (
                                             <Opensource {...props} theme={this.props.theme} />
                                        )}
                                   />
                                   <Route
                                        path="/contact"
                                        render={(props) => (
                                             <Contact {...props} theme={this.props.theme} />
                                        )}
                                   />
                                   <Route
                                        path="/splash"
                                        render={(props) => (
                                             <Splash {...props} theme={this.props.theme} />
                                        )}
                                   />
                                   <Route
                                        path="/projects"
                                        render={(props) => (
                                             <Projects {...props} theme={this.props.theme} />
                                        )}
                                   />
                              </Switch>
                         </HashRouter>
                    </div>
               );
          } else {
               return (
                    <div>
                         <HashRouter basename="/">
                              <Switch>
                                   <Route
                                        path="/"
                                        exact
                                        render={(props) => <Home {...props} theme={this.props.theme} />}
                                   />
                                   <Route
                                        path="/home"
                                        render={(props) => <Home {...props} theme={this.props.theme} />}
                                   />
                                   <Route
                                        path="/experience"
                                        exact
                                        render={(props) => (
                                             <Experience {...props} theme={this.props.theme} />
                                        )}
                                   />
                                   <Route
                                        path="/education"
                                        render={(props) => (
                                             <Education {...props} theme={this.props.theme} />
                                        )}
                                   />
                                   <Route
                                        path="/opensource"
                                        render={(props) => (
                                             <Opensource {...props} theme={this.props.theme} />
                                        )}
                                   />
                                   <Route
                                        path="/contact"
                                        render={(props) => (
                                             <Contact {...props} theme={this.props.theme} />
                                        )}
                                   />
                                 
                                   <Route
                                        path="/projects"
                                        render={(props) => (
                                             <Projects {...props} theme={this.props.theme} />
                                        )}
                                   />
                              </Switch>
                         </HashRouter>
                    </div>
               );
          }
     }
}
