import React from "react";

const VehiclePanel = ({ setconfirmRidePanel, setVehiclePanel }) => {
  return (
    <div>
      <h5
        onClick={() => setVehiclePanel(false)}
        className="w-[93%]  top-0 rounded-lg px-5 py-3  absolute text-center"
      >
        <i className="ri-arrow-down-wide-line text-gray-400 text-2xl"></i>
      </h5>
      <h3 className="font-semibold text-xl mb-4">Choose a vehicle</h3>

      {/* uberx */}
      <div onClick={() => setconfirmRidePanel(true)} className="flex w-full p-3  mb-3 shadow-lg  rounded-xl justify-between items-center ">
        <img
          className="h-14"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="ml-1 w-1/2">
          <h4 className="text-lg  font-medium">
            UberX{" "}
            <span>
              <i className="ri-user-2-fill">4</i>
            </span>
          </h4>
          <h5>2 mins away</h5>
          <p className="text-gray-500 text-xs">
            Affordable rides for everyday use
          </p>
        </div>
        <h3 className="text-xl font-semibold">₹ 193</h3>
      </div>

      {/* UberMoto */}
      <div onClick={() => setconfirmRidePanel(true)} className="flex w-full p-3  mb-3 shadow-lg rounded-xl justify-between items-center ">
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
          alt=""
        />
        <div className="ml-1 w-1/2">
          <h4 className="text-lg  font-medium">
            UberMoto{" "}
            <span>
              <i className="ri-user-2-fill">1</i>
            </span>
          </h4>
          <h5>3 mins away</h5>
          <p className="text-gray-500 text-xs">
            Affordable rides for everyday use
          </p>
        </div>
        <h3 className="text-xl font-semibold">₹ 60</h3>
      </div>

      {/* uberAuto */}
      <div onClick={() => setconfirmRidePanel(true)} className="flex w-full p-3  mb-3 shadow-lg rounded-xl justify-between items-center ">
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="ml-1 w-1/2">
          <h4 className="text-lg  font-medium">
            UberAuto{" "}
            <span>
              <i className="ri-user-2-fill">3</i>
            </span>
          </h4>
          <h5>1 mins away</h5>
          <p className="text-gray-500 text-xs">
            Affordable rides for everyday use
          </p>
        </div>
        <h3 className="text-xl font-semibold">₹ 120</h3>
      </div>
    </div>
  );
};

export default VehiclePanel;
