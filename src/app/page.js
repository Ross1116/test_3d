import Image from "next/image";
import SplineWrapper from "./components/SplineWrapper";

export default function Home() {
  return (
    <main className="snap-y bg-green-950 h-dvh w-screen">
      <div className="w-full h-full fixed z-10 top-0 left-0 pointer-events-none">
        <SplineWrapper/>
      </div>
      <div className="snap-start w-screen h-dvh bg-black bg-opacity-60 flex justify-center items-center" id="part1">
        <h1 className="text-9xl font-extrabold text-center">
          The Journey of an<br/>Apple
          </h1>
      </div>
      <div className="snap-start w-screen h-dvh bg-red-500d bg-opacity-60 flex justify-center items-center" id="part2">
        <h1 className="text-9xl font-extrabold text-center">
          The Journey of an<br/>Apple
          </h1>
      </div>
      <div className="snap-start w-screen h-dvh bg-blue-500 bg-opacity-60 flex justify-center items-center" id="part3">
        <h1 className="text-9xl font-extrabold text-center">
          The Journey of an<br/>Apple
          </h1>
      </div>
      <div className="snap-start w-screen h-dvh bg-black bg-opacity-60 flex justify-center items-center" id="part4">
        <h1 className="text-9xl font-extrabold text-center">
          The Journey of an<br/>Apple
          </h1>
      </div>

    </main>
  );
}
