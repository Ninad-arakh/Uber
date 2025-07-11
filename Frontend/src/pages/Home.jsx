import React, { useRef, useState } from "react";
import UberMap from "../assets/UberMap.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import Car from "../assets/car.png";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const panelRef = useRef(null);

  useGSAP(
    function () {
      if (panel) {
        gsap.to(panelRef.current, {
          height: "70%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [panel]
  );

  const submitHandler = (e) => {};
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        alt="Uber logo"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />
      {/* temp background map image */}
      <div className="h-screen w-full">
        <img
          className="w-full h-full object-cover "
          src={UberMap}
          alt="uber-map-background"
        />
      </div>

      <div className="h-screen flex flex-col justify-end absolute top-0 w-full">
        <div className="h-[30%] p-5  bg-white relative">
          <h5
            className="absolute top-6 right-6 text-2xl"
            onClick={() => setPanel(!panel)}
          >
            {panel ? (
              <i className="ri-arrow-down-wide-line"></i>
            ) : (
              <i className="ri-arrow-up-wide-line"></i>
            )}
          </h5>
          <h4 className="font-semibold text-2xl">Find a trip</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler(e);
            }}
          >
            <div className="line absolute w-1 top-[43%] left-10 h-16 bg-gray-600 rounded-full"></div>
            <input
              onClick={() => setPanel(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-4"
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => setPanel(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-4"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0">
          <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      <div className="fixed w-full z-10 bottom-0 px-3 translate-y-full py-6 bg-white">
        <h3 className="font-semibold text-xl mb-4">Choose a vehicle</h3>

        {/* uberx */}
        <div className="flex w-full p-3  mb-3 shadow-lg  rounded-xl justify-between items-center ">
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
        <div className="flex w-full p-3  mb-3 shadow-lg rounded-xl justify-between items-center ">
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
        <div className="flex w-full p-3  mb-3 shadow-lg rounded-xl justify-between items-center ">
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
    </div>
  );
};

export default Home;
