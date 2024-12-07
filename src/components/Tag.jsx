import React, { useState } from "react";
import Spinner from "./spinner";
import useGif from "../hooks/useGif";
const Tag = () => {
  const [tag,setTag] = useState('car');
  const {gif,loading,fetchData} = useGif(tag);
  return(
    <div className="w-1/2 bg-blue-500 items-center rounded-lg border border-black
    flex flex-col gap-5 mb-8">
      <h1 className="text-2xl underline uppercase font-bold">RANDOM {tag} GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="350" height="350" alt="NOT FOUND!" />)
      }
      <input className="w-10/12 bg-white rounded-xl py-2 text-center"
      onChange={(event) => setTag(event.target.value)}
      value={tag}/>
      <button onClick={()=>fetchData(tag)} className="w-10/12 bg-white rounded-xl py-2 mb-[30px]">Generate</button>
    </div>
  );
}
export default Tag;