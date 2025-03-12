import React, { useState, useEffect } from 'react';

function Map() {
  // State to track the active marker
  const [activeMarker, setActiveMarker] = useState(null);

  // Marker positions (adjust as per your map's layout)
  const markerPositions = {
    x_ray: { top: "39%", left: "43%" },
    neurology: { top: "45%", left: "60%" },
    dental: { top: "45%", left: "24%" },
    main: { top: "65%", left: "66%" },
    cafe: { top: "67%", left: "40%" },
    fun: { top: "26%", left: "56%" },
  };

  return (
    <>
      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => window.history.back()}
          className="bg-white border-2 border-[#33CCCC] text-[#33CCCC] px-4 py-2 rounded-full font-bold"
        >
          &larr; Back
        </button>
      </div>

      {/* Containers */}
      <div className="w-full flex flex-wrap text-[#33CCCC]">
        {Object.keys(markerPositions).map((key) => (
          <div
            key={key}
            onClick={() => setActiveMarker(key)}
            className="bg-white border-2 border-[#33CCCC] flex-1 min-w-[150px] sm:min-w-[200px] md:min-w-[200px] lg:min-w-[200px] p-4 flex justify-center items-center cursor-pointer text-[#33CCCC] font-bold text-lg rounded-lg"
          >
            {key.replace("_", " ")}
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="relative w-full">
        <img
          src="/images/map.png"
          alt="Hospital Map"
          className="h-full w-full"
        />
        {Object.keys(markerPositions).map((key) => (
          <div
            key={key}
            className={`absolute ${activeMarker === key ? "block" : "hidden"}`}
            style={{
              top: markerPositions[key].top,
              left: markerPositions[key].left,
              color: "#33CCCC",
              fontSize: "3rem",
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="relative">
              <i className="fa-solid fa-map-pin"></i>
              <div
                className="absolute top-[-45px] left-[-20%] text-lg w-[120px] text-[#33CCCC] px-3 py-1 rounded-lg shadow-lg border-2 border-[#33CCCC] bg-white text-center font-bold"
              >
                {key.replace("_", " ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Map;
