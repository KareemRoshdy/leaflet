"use client";

import { Car } from "@/utils/types";
import CarsFlow from "./CarsFlow";
import { Activity, useState } from "react";
import LeafletMap from "./LeafletMap";

interface MapProps {
  data: Car[];
}

const Map = ({ data }: MapProps) => {
  const [open, setOpen] = useState(false);
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);

  const handleSelectCar = (car: Car) => {
    const exists = selectedCars.some((c) => c._id === car._id);

    if (exists) {
      setSelectedCars(selectedCars.filter((c) => c._id !== car._id));
    } else {
      setSelectedCars([...selectedCars, car]);
    }
  };

  return (
    <div className="w-full h-screen relative">
      <Activity mode={open ? "hidden" : "visible"}>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 p-2 rounded-sm cursor-pointer absolute z-1000 top-5 right-5 shadow-xl text-xl"
        >
          open
        </button>
      </Activity>

      <div
        className={`absolute  h-full bg-black/90 z-1000 top-0 right-0 text-white p-5 transition-all duration-500 ease-in-out ${open ? "w-[300px] opacity-100" : "w-0 opacity-0 overflow-hidden"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="bg-red-600 text-sm p-1.5 rounded-sm cursor-pointer"
        >
          close
        </button>

        <CarsFlow data={data} handleSelectCar={handleSelectCar} />
      </div>
      <LeafletMap selectedCars={selectedCars} />
    </div>
  );
};

export default Map;
