import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Typography, Paper, CircularProgress, Alert, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import 'leaflet/dist/leaflet.css';
import './AyurvedicCenters.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom marker icons
const userMarkerIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzRBNjc0MSIgZD0iTTEyIDJjMy4zMSAwIDYgMi42OSA2IDZzLTIuNjkgNi02IDYtNi0yLjY5LTYtNiAyLjY5LTYgNi02em0wIDJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00em0wIDdjLTIuNjcgMC04IDEuMzQtOCA0djNoMTZ2LTNjMC0yLjY2LTUuMzMtNC04LTR6Ii8+PC9zdmc+',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

const centerMarkerIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0MxN0Y1OSIgZD0iTTEyIDJDOC4xMyAyIDUgNS4xMyA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODctMy4xMy03LTctN3ptMCA5LjVjLTEuMzggMC0yLjUtMS4xMi0yLjUtMi41czEuMTItMi41IDIuNS0yLjUgMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41eiIvPjwvc3ZnPg==',
    iconSize: [35, 35],
    iconAnchor: [17.5, 35],
    popupAnchor: [0, -35],
});

const AyurvedicCenters = () => {
    const [centers, setCenters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (location) => {
                const { latitude, longitude } = location.coords;
                setUserLocation([latitude, longitude]);
                try {
                    const query = `
                        [out:json][timeout:25];
                        (
                            // Ayurvedic centers
                            node["healthcare"="ayurvedic"](around:5000,${latitude},${longitude});
                            // Homeopathic centers
                            node["healthcare"="homeopathic"](around:5000,${latitude},${longitude});
                            // General hospitals and clinics
                            node["amenity"="hospital"](around:5000,${latitude},${longitude});
                            node["amenity"="clinic"](around:5000,${latitude},${longitude});
                        );
                        out body;
                        >;
                        out skel qt;
                    `;

                    const response = await fetch(
                        `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`
                    );
                    const data = await response.json();

                    const foundCenters = data.elements
                        .filter(element => element.lat && element.lon)
                        .map(element => ({
                            id: element.id,
                            name: element.tags?.name || 'Health Center',
                            position: [element.lat, element.lon],
                            address: element.tags?.["addr:full"] || 
                                    element.tags?.["addr:street"] || 
                                    element.tags?.address || 
                                    'Address not available',
                            phone: element.tags?.phone || 
                                   element.tags?.["contact:phone"] || 
                                   'Contact not available',
                            type: element.tags?.healthcare || element.tags?.amenity || 'Health Center',
                        }));

                    setCenters(foundCenters);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching centers:', error);
                    setError('Unable to fetch nearby centers. Please try again.');
                    setLoading(false);
                }
            },
            (error) => {
                console.error("Error getting location:", error);
                setError('Please enable location services to find nearby centers.');
                setLoading(false);
            }
        );
    }, []);

    if (loading) {
        return (
            <Box className="loading-container">
                <CircularProgress sx={{ color: '#4A6741' }} />
                <Typography variant="h6" sx={{ mt: 2, color: '#4A6741' }}>
                    Finding nearby centers...
                </Typography>
            </Box>
        );
    }

    return (
        <Box className="ayurvedic-centers-container">
            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <Grid container spacing={2}>
                {/* Centers List */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} className="centers-list">
                        <Typography 
                            variant="h6" 
                            gutterBottom 
                            sx={{ 
                                color: '#4A6741',
                                borderBottom: '2px solid #4A6741',
                                paddingBottom: '8px'
                            }}
                        >
                            Nearby Centers
                        </Typography>
                        {centers.length === 0 ? (
                            <Typography variant="body1" sx={{ textAlign: 'center', mt: 3 }}>
                                No centers found in your area. Try a different location.
                            </Typography>
                        ) : (
                            centers.map(center => (
                                <Paper 
                                    key={center.id} 
                                    elevation={1} 
                                    className="center-card"
                                >
                                    <Typography 
                                        variant="subtitle1" 
                                        sx={{ color: '#4A6741', fontWeight: 600 }}
                                    >
                                        {center.name}
                                    </Typography>
                                    <Typography 
                                        variant="caption" 
                                        sx={{ 
                                            color: '#666',
                                            display: 'block',
                                            mb: 1
                                        }}
                                    >
                                        {center.type}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <LocationOnIcon sx={{ color: '#4A6741', mr: 1 }} fontSize="small" />
                                        <Typography variant="body2">
                                            {center.address}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <PhoneIcon sx={{ color: '#4A6741', mr: 1 }} fontSize="small" />
                                        <Typography variant="body2">
                                            {center.phone}
                                        </Typography>
                                    </Box>
                                </Paper>
                            ))
                        )}
                    </Paper>
                </Grid>

                {/* Map */}
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} className="map-container">
                        <MapContainer
                            center={userLocation || [28.6139, 77.2090]}
                            zoom={13}
                            style={{ height: '100%', width: '100%' }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {userLocation && (
                                <Marker position={userLocation} icon={userMarkerIcon}>
                                    <Popup>
                                        <Typography variant="body1" sx={{ color: '#4A6741', fontWeight: 600 }}>
                                            Your Location
                                        </Typography>
                                    </Popup>
                                </Marker>
                            )}
                            {centers.map(center => (
                                <Marker 
                                    key={center.id} 
                                    position={center.position}
                                    icon={centerMarkerIcon}
                                >
                                    <Popup>
                                        <div className="popup-content">
                                            <Typography 
                                                variant="subtitle1" 
                                                sx={{ color: '#4A6741', fontWeight: 600 }}
                                            >
                                                {center.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                {center.address}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                {center.phone}
                                            </Typography>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AyurvedicCenters;
