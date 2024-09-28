"use client"

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapProps {
  center: [number, number];
  zoom: number;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  useEffect(() => {
    (async function init() {
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: './marker-icon-2x.png',
        iconUrl: './marker-icon.png',
        shadowUrl: './marker-shadow.png',
      });
    })();
  }, []);

  return (
    <div className='m-5 p-2 bg-dark-subtle border border-5 border-success'>
      <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            Your Location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;