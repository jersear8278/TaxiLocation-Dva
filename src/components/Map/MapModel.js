import React, { Component } from 'react';
import { connect } from 'dva';
import canUseDOM from "can-use-dom";
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';

const geolocation = (
  canUseDOM && navigator.geolocation ?
  navigator.geolocation :
  ({
    getCurrentPosition(success, failure) {
      failure(`Your browser doesn't support geolocation.`);
    },
  })
);

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.center}
    center={props.center}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: null,
      origin: null,
      destination: null,
      directions: null,
    }
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    geolocation.getCurrentPosition((position) => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({
        origin: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
  }

  componentDidUpdate() {
    const DirectionsService = new google.maps.DirectionsService();
    if(this.props.destination!=null){
      DirectionsService.route({
        origin: this.state.origin,
        destination: new google.maps.LatLng(this.props.destination.lat, this.props.destination.lon),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  render() {
    return (
      <DirectionsExampleGoogleMap
        containerElement={
          <div style={{ height: `500px` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        center={this.state.origin}
        directions={this.state.directions}
      />
    );
  }
}

function mapStateToProps(state) {
  const { destination } = state.map;
  return {
    destination
  };
}

export default connect(mapStateToProps)(Map);
