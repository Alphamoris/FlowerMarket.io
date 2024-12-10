"use client"

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import Map component
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

interface LocationState {
  loaded: boolean;
  coordinates: { lat: number; lng: number };
  error: { code: number; message: string } | null;
}

const useGeolocation = (): LocationState => {
  const [location, setLocation] = useState<LocationState>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
    error: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!("geolocation" in navigator)) {
      setLocation({
        loaded: true,
        coordinates: { lat: 0, lng: 0 },
        error: {
          code: 0,
          message: "Geolocation not supported",
        },
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          loaded: true,
          coordinates: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          error: null,
        });
      },
      (error) => {
        setLocation({
          loaded: true,
          coordinates: { lat: 0, lng: 0 },
          error: {
            code: error.code,
            message: error.message,
          },
        });
      }
    );
  }, []);

  return location;
};

const LocationComponent: React.FC = () => {
  const location = useGeolocation();

  if (typeof window === 'undefined') {
    return null; // Return null during server-side rendering
  }

  let latitude: number | null = location.coordinates.lat
  let longitude: number | null = location.coordinates.lng

  return (
    <div>
      {location.loaded ? (
        <>
          {location.error ? (
            <div>Error: {location.error.message}</div>
          ) : (
            <Map
              center={[latitude, longitude]}
              zoom={3}
            />
          )}
        </>
      ) : (
        <div>Getting location...</div>
      )}
    </div>
  );
};

export default LocationComponent;
