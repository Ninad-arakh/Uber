import React, { useRef, useState } from "react";
import UberMap from "../assets/UberMap.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
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
    <div className="h-screen relative">
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
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;
