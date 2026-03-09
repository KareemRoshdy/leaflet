"use client";

import { Car } from "@/utils/types";
import Image from "next/image";

interface CarsFlowProps {
  data: Car[];
  handleSelectCar: (car: Car) => void;
}

const CarsFlow = ({ data, handleSelectCar }: CarsFlowProps) => {
  return (
    <div>
      {data?.map((item: Car) => (
        <div key={item._id} className="p-5 ">
          <div className="flex items-center gap-5">
            <input
              className="w-5 h-5"
              type="checkbox"
              name={item.model}
              id={item._id}
              onChange={() => handleSelectCar(item)}
            />
            <label htmlFor={item._id}>
              <Image
                src="https://storage.googleapis.com/neom_sharex_images/images/2025-07-01T09-17-19.471Z.webp"
                alt={item.model}
                width={40}
                height={40}
              />
            </label>
            <label htmlFor={item._id}>{item.make}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarsFlow;
