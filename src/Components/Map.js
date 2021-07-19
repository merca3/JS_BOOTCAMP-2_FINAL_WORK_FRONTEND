import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 56.946285,
            lng: 24.105078
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;