import React from "react";
import { FaCheck } from "react-icons/fa";

function Overlay() {
  return (
    <div className="flex items-center justify-around py-24">
      <BackgroundSection />
      <BackgroundSection />
    </div>
  );
}

export default Overlay;

const BackgroundSection = () => {
  return (
    <div
      className="relative h-[550px] w-[550px] bg-cover  bg-center rounded-2xl overflow-hidden"
      style={{
        backgroundImage:
          "url('https://teambuilding-ksa.com/wp-content/uploads/2024/11/dddd-1-1-1024x495.jpg')",
      }}
    >
      <div className="flex items-center mt-28 gap-5 flex-col h-screen absolute top-0 right-0">
        <p className="text-[#f08739] text-4xl font-bold text-center">
          {" "}
          Benefits of Team Building <br /> with BrightVision
        </p>

        <div>
          <div className=" flex items-center justify-center gap-3 px-3">
            <FaCheck 
            size={28}
            color="#f08739" />{" "}
            <p  className="text-[#ffffff] font-bold">
              Enhanced Communication: Strengthen the way teams interact and
              communicate.
            </p>
          </div>
          <p className="h-0.5  bg-white mx-10 m-auto"></p>
          <div className=" flex items-center justify-center gap-3 px-3">
            <FaCheck
           size={28} 
            color="#f08739" />{" "}
            <p  className="text-[#ffffff] font-bold">
              Enhanced Communication: Strengthen the way teams interact and
              communicate.
            </p>
          </div>
          <p className="h-0.5  bg-white mx-10 m-auto"></p>
          <div className=" flex items-center justify-center gap-3 px-3">
            
            <FaCheck
            
            size={28}
            color="#f08739" />{" "}
            <p  className="text-[#ffffff] font-bold">
              Enhanced Communication: Strengthen the way teams interact and
              communicate.
            </p>
          </div>
          <p className="h-0.5  bg-white mx-10 m-auto"></p>
          <div className=" flex items-center justify-center gap-3 px-3 ">
            <FaCheck color="#f08739"
            size={28}
            />{" "}
            <p  className="text-[#ffffff] font-bold">
              Enhanced Communication: Strengthen the way teams interact and
              communicate.
            </p>
          </div>

   
        </div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

      {/* Content on top of overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <h1 className="text-white text-5xl font-bold text-center">
          {/* Welcome to GeeksForGeeks */}
        </h1>
      </div>
    </div>
  );
};
