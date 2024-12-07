import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
import "./index.css";
export default function App() {
  return(
    <div className="w-full h-auto flex flex-col relative background text-center">
      <h1 className="bg-white rounded-lg absolute w-[1000px] mt-[40px]
      px-10 py-2 text-3xl font-bold ml-[135px]">RANDOM GIFS</h1>
      <div className="flex flex-col mt-[100px] w-full items-center">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
