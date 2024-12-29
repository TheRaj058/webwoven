import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const LocationMap = () => {
  const center = {
    lat: 52.587441, // Coordinates for WV13LT
    lng: -2.129820
  };

  const containerStyle = {
    width: '100%',
    height: '200px',
    borderRadius: '0.5rem'
  };

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationMap;