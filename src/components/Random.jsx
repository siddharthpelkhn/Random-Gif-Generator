import Spinner from "./spinner";
import useGif from "../hooks/useGif";
export default function Random() {
  const {gif,loading,fetchData} = useGif('');
  return(
    <div className="w-1/2 bg-green-500 items-center rounded-lg border border-black
    flex flex-col gap-5 mb-8 mt-7">
      <h1 className="text-2xl underline uppercase font-bold">A RANDOM GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="350" height="350" alt="NOT FOUND!" />)
      }
      <button onClick={()=>fetchData('')} className="w-10/12 bg-white rounded-xl py-2 mb-[30px]">Generate</button>
    </div>
  );
}
