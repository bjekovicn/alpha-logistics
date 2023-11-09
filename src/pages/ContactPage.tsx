import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";
import ContactSection from "../components/contact-components/ContactSection";
import config from "../config/config";

const MapComponent = () => {
  const markers = [
    {
      position: {
        lat: 44.77286511464016,
        lng: 17.193188635406432,
      },
      // label: { color: "black", text: "Alpha logistics" },
    },
  ];

  const containerStyle = {
    width: "100%",
    height: "450px",
  };

  const center = {
    lat: 44.77286511464016,
    lng: 17.193188635406432,
  };

  return (
    <>
      <Wrapper apiKey={config.GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          {markers.map((marker, index) => (
            <MarkerF
              key={index}
              position={marker.position}
              // label={marker.label}
            ></MarkerF>
          ))}
        </GoogleMap>
      </Wrapper>
      <ContactSection />
    </>
  );
};

export default MapComponent;
