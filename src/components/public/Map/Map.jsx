import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion, AnimatePresence } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const DentalIcon = new L.Icon({
  iconUrl: "/images/icon.png",
  iconSize: [55, 55],
  iconAnchor: [25, 45],
  popupAnchor: [0, -40],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const CSJDM_CENTER = [14.815710752120832, 121.07312517865853];
const CITY_ZOOM = 13;
const MAP_MIN_ZOOM = 11;
const MAP_MAX_ZOOM = 18;

const Map = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await fetch("http://localhost:3001/clinics");
        const data = await response.json();
        setClinics(data);
      } catch (error) {
        console.error("Failed to fetch clinics:", error);
      }
    };

    fetchClinics();
  }, []);

  const getRecommendationClass = (availability) => {
    if (availability >= 71) return "strong";
    if (availability >= 31) return "moderate";
    return "limited";
  };

  const markerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="map-section">
      <div className="map-container">
        <div className="map-wrapper">
          <MapContainer
            center={CSJDM_CENTER}
            zoom={CITY_ZOOM}
            minZoom={MAP_MIN_ZOOM}
            maxZoom={MAP_MAX_ZOOM}
            scrollWheelZoom={true}
            className="leaflet-container"
          >
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />

            <AnimatePresence>
              {clinics.map((clinic) => {
                const recommendationClass = getRecommendationClass(
                  clinic.availability
                );

                return (
                  <Marker
                    key={clinic.id}
                    position={[clinic.latitude, clinic.longitude]}
                    icon={DentalIcon}
                    eventHandlers={{
                      popupopen: () => setActivePopup(clinic.id),
                      popupclose: () => setActivePopup(null),
                    }}
                  >
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={markerVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <Popup className="custom-popup">
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="popup-content"
                        >
                          <div className="popup-header">
                            <h3 className="clinic-name">{clinic.name}</h3>
                            <span
                              className={`recommendation-tag ${recommendationClass}`}
                            >
                              {recommendationClass.toUpperCase()}
                            </span>
                          </div>

                          <div className="recommendation-indicator">
                            <div
                              className={`recommendation-bar ${recommendationClass}`}
                              style={{ width: `${clinic.availability}%` }}
                            />
                            <span className="availability-percent">
                              {clinic.availability}% Availability
                            </span>
                          </div>

                          <div className="clinic-details">
                            <div className="detail-item">
                              <svg className="detail-icon" viewBox="0 0 24 24">
                                {/* Clock icon */}
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                              </svg>
                              <div>
                                <h4>Operating Hours</h4>
                                <p>{clinic.operating_hours}</p>
                              </div>
                            </div>

                            <div className="detail-item">
                              <svg className="detail-icon" viewBox="0 0 24 24">
                                {/* Medical team icon */}
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                              </svg>
                              <div>
                                <h4>Medical Team</h4>
                                <p>{clinic.doctor_name} Specialists</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </Popup>
                    </motion.div>
                  </Marker>
                );
              })}
            </AnimatePresence>

            {/* Enhanced Legend */}
            <motion.div
              className="map-legend"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <div className="legend-header">
                <h3 className="legend-title">Clinic Recommendation Guide</h3>
                <span className="legend-subtitle">
                  Real-time Patien's Feedback
                </span>
              </div>

              <div className="legend-items">
                <div className="legend-item">
                  <div className="marker-preview">
                    <div className="marker-core"></div>
                    <div className="pulse-effect"></div>
                  </div>
                  <span className="legend-text">Clinic Location</span>
                </div>

                <div className="legend-item">
                  <div className="recommendation-indicator">
                    <div className="recommendation-bar strong"></div>
                  </div>
                  <div className="legend-text">
                    <strong>STRONG</strong>
                    <span>71-100% Feedback Obtained and Availability</span>
                  </div>
                </div>

                <div className="legend-item">
                  <div className="recommendation-indicator">
                    <div className="recommendation-bar moderate"></div>
                  </div>
                  <div className="legend-text">
                    <strong>MODERATE</strong>
                    <span>31-70% Feedback Obtained and Availability</span>
                  </div>
                </div>

                <div className="legend-item">
                  <div className="recommendation-indicator">
                    <div className="recommendation-bar limited"></div>
                  </div>
                  <div className="legend-text">
                    <strong>LIMITED</strong>
                    <span>0-30% Feedback Obtained and Availability</span>
                  </div>
                </div>
              </div>

              <div className="legend-footer">
                <span className="update-info">Updated every 15 minutes</span>
              </div>
            </motion.div>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Map;
