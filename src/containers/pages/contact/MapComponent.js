import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class MapComponent extends Component {

     render() {
          const containerStyle = {
               position:"relative",
               width: '100%',
               height: '60vh',
               marginTop: '40px'
          }
          return (<div className="map-area">
               <Map
                    containerStyle={containerStyle}
                    google={this.props.google}

                    zoom={8}

                    initialCenter={{

                         lat: 35.876704,

                         lng: 2.007732

                    }}> 
                    <Marker key="marker_1"
                         position={{
                              lat: 35.876704,
                              lng: 2.007732
                         }}

                    />
               </Map>
          </div>
          );
     }
}

export default GoogleApiWrapper({

     apiKey: ('AIzaSyAh_o3rQILuAB7B_hiHxIdblSigSqsLO00'),
     language: 'en'

})(MapComponent);