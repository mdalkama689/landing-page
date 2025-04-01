import Image from "next/image";
import React from "react";

function HexaColum() {
  return (
    <>
      <div className="bg-white flex items-center justify-center gap-3 ">
        <div className="w-[400px] h-[700px] overflow-hidden">
          <Image
            src="https://teambuilding-ksa.com/wp-content/uploads/2024/11/dddd-1-1-1024x495.jpg"
            alt="Hexagon Image"
            className="w-full h-full object-cover"
            style={{
              clipPath:
                "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
            }}
            width={150}
            height={150}
            unoptimized
          />
        </div>

        <div className="flex items-center justify-center flex-col">
          <h1 className="text-[#f08739] font-bold text-2xl">
            Why Team Building
          </h1>
          <h1 className="text-[#f08739] font-bold text-2xl">is Critical for</h1>
          <h1 className="text-[#f08739] font-bold text-2xl">Organizational</h1>
          <h1 className="text-[#f08739] font-bold text-2xl">Success </h1>
          <div className="mt-3 text-center text-[#174782]">
            <p>Team building is essential for improving collaboration,</p>
            <p>communication, and overall team performance. At</p>
            <p>BrightVision, we specialize in team building programs</p>
            <p>designed to help your employees work better together,</p>
            <p>boosting productivity and morale.</p>
          </div>
        </div>

        <div className="w-[400px] h-[700px] overflow-hidden">
          <Image
            src="https://teambuilding-ksa.com/wp-content/uploads/2024/11/Trafigura91-scaled-1-1024x576.jpg"
            alt="Hexagon Image"
            className="w-full h-full object-cover"
            style={{
              clipPath:
                "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
            }}
            width={150}
            height={150}
            unoptimized
          />
        </div>
      </div>

      <CollaborationCard />
    </>
  );
}

export default HexaColum;

function CollaborationCard() {
  return (
    <div className="flex justify-center items-center gap-4 p-8 bg-gray-50">
    <div className="flex flex-col items-center bg-white border-2 border-orange-400 rounded-2xl p-4 shadow-md min-w-[150px] ">
      <div className="text-4xl mb-2">🤝</div>
      <h3 className="text-xl font-semibold text-orange-500">Collaboration</h3>
    </div>
    <div className="w-12 h-1 bg-orange-400 rounded-full"></div>
    <div className="flex flex-col items-center bg-white border-2 border-orange-400 rounded-2xl p-4 shadow-md min-w-[150px] ">
      <div className="text-4xl mb-2">💬</div>
      <h3 className="text-xl font-semibold text-orange-500">Communication</h3>
    </div>
    <div className="w-12 h-1 bg-orange-400 rounded-full"></div>
    <div className="flex flex-col items-center bg-white border-2 border-orange-400 rounded-2xl p-4 shadow-md min-w-[150px] ">
      <div className="text-4xl mb-2">📈</div>
      <h3 className="text-xl font-semibold text-orange-500">Performance</h3>
    </div>
  </div>
  );
}
