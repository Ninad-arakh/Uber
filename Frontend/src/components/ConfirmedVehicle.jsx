import React from "react";

const ConfirmedVehicle = ({ setconfirmRidePanel }) => {
  return (
    <div>
      <h5
        onClick={() => setconfirmRidePanel(false)}
        className="w-[93%]  top-0 rounded-lg px-5 py-3  absolute text-center"
      >
        <i className="ri-arrow-down-wide-line text-gray-400 text-2xl"></i>
      </h5>
      <h3 className="font-semibold text-xl mb-4">Confirm your Ride</h3>

      <div className="flex gap-3 flex-col justify-between items-center">
        <img
          className="h-32"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 shadow-lg">
            <h5>
              <i className="text-lg ri-map-pin-fill"></i>
            </h5>
            <div>
              <h3 className="font-medium text-lg">562/11-S</h3>
              <p className="text-gray-600 text-sm  -mt-1">Nainital, Kerala</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 shadow-lg">
            <h5>
             <i className="text-lg ri-map-pin-user-fill"></i>
            </h5>
            <div>
              <h3 className="font-medium text-lg">562/11-S</h3>
              <p className="text-gray-600 text-sm  -mt-1">Nainital, Kerala</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 shadow-lg">
            <h5>
              <i className="text-lg ri-money-rupee-circle-line"></i>
            </h5>
            <div>
              <h3 className="font-medium text-lg">562/11-S</h3>
              <p className="text-gray-600 text-sm  -mt-1">Nainital, Kerala</p>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-700 text-white p-2 rounded-xl">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedVehicle;
