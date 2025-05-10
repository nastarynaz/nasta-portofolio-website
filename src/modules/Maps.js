"use client";
import { useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { MapPinned } from "lucide-react";

export default function Maps() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["marker"],
      });

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const locationInMap = {
        lat: -7.765249643091827,
        lng: 110.37251692944315,
      };

      if (mapRef.current) {
        const map = new Map(mapRef.current, {
          center: locationInMap,
          zoom: 15,
          mapId: "NEXT_MAPS_TUTS",
          mapTypeId: "roadmap",
        });

        new AdvancedMarkerElement({
          map,
          position: locationInMap,
          title: "Fakultas Teknik UGM!",
        });
      }
    };
    initializeMap();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <div className="w-[80%] flex flex-row justify-end items-center gap-10">
        <div
          ref={mapRef}
          className="w-[60%] aspect-[1.1/1] rounded-xl shadow-2xl border-2 border-gray-200"
        />
        <div className="flex flex-col justify-center items-left">
          <h2 className="font-bold text-2xl">📍 Yogyakarta, Indonesia</h2>
          <p className="mt-4 text-gray-600">
            I study Information Engineering at Universitas Gadjah Mada. Explore
            the map above to find the location of Fakultas Teknik UGM!
          </p>
        </div>
      </div>
    </section>
  );
}
