import { GoogleMap, MarkerF } from "@react-google-maps/api";
import ContactSection from "../components/contact-components/ContactSection";

const MapComponent = () => {
  const markers = [
    {
      position: {
        lat: 44.781886,
        lng: 17.198945,
      },
      // label: { color: "black", text: "Alpha logistics" },
    },
  ];

  const containerStyle = {
    width: "100%",
    height: "450px",
  };

  const center = {
    lat: 44.781886,
    lng: 17.198945,
  };

  return (
    <>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {markers.map((marker, index) => (
          <MarkerF
            key={index}
            position={marker.position}
            // label={marker.label}
          ></MarkerF>
        ))}
      </GoogleMap>
      <ContactSection />
    </>
  );
};

export default MapComponent;
