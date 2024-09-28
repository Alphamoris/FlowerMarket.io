
"use client"

import Map from "@/components/Map"
import { useState, useEffect } from 'react';

interface LocationState {
  loaded: boolean;
  coordinates: { lat: number ; lng: number  };
  error: { code: number; message: string } | null;
}


const useGeolocation = (): LocationState => {
  const [location, setLocation] = useState<LocationState>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
    error: null,
  });

  useEffect(() => {
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
  let latitude : number | null = location.coordinates.lat
  let longitude : number | null = location.coordinates.lng
  return (
    <>
      {/* <h2>User Location</h2>
      {location.loaded ? (
        <>
          {location.error ? (
            <p>Error: {location.error.message}</p>
          ) : (
            <p>
              Latitude: {latitude}, Longitude: {longitude}
            </p>
          )}
        </>
      ) : (
        <p>Loading location...</p>
      )} */}
      <Map center={[latitude,longitude]} zoom={3} />
    </>
  );
};


export default LocationComponent;


