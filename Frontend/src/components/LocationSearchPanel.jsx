import React from "react";
import { locations } from "../constants/constants";

const LocationSearchPanel = ({vehiclePanel, setVehiclePanel}) => {
  return (
    <div>
      {locations.map((l) => {
        return (
          <div className="flex items-center gap-3 justify-start my-2 p-4 shadow-md rounded-lg">
            <h2 className="bg-[#eee] h-10 flex justify-center w-10 rounded-full p-2">
              <i className="text-xl ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium">{l}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
