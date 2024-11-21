/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";


const Banner = () => {
  return (
    <div className="bg-blue-100 rounded-md">
      <div className="p-5 grid item-center gap-8 grid-cols-1 md:grid-cols-2">
        <div className="overflow-hidden">
          <Image width={500} height={600} src={'/images.jpeg'} alt="image"  />
        </div>
        <div className="space-y-5 flex flex-col">
          <h4 className="font-bold text-2xl font-mono">Techonology</h4>
          <p className="font-mono text-xl">Technology is the application of conceptual knowledge to achieve practical goals, especially in a reproducible way.[1] The word technology can also mean the products resulting from such efforts,[2] Technology plays a critical role in science, engineering, and everyday life. <br />

          Starting in the 19th century,  The distinction between Technik and Technologie is absent in English, and so both were translated as technology. The term was previously uncommon in English and mostly referred to the academic discipline
          </p>
          <Button variant={'default'} >Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
