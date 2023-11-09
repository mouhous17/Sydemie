import React from "react";

import { Input } from "@/components/ui/input";
import Logo from "@/pics/logo.png";
export type HeaderData = {
  value: string;
};
export default function Header({
  data,

  // logo = "logo",
  cours = "cours",
}: // bdr = "voici  ma BDR",
{
  data: HeaderData[];

  logo?: string;
  cours?: string;
  bdr?: string;
}) {
  return (
    <div className=" bg-white">
      <div className=" flex flex-row items-center  flex-nowrap justify-evenly  p-1">
        <div className=" flex justify-evenly basis-5/12 items-center">
          {" "}
          <div className=" font-monFont font-bold text-monBleu ">{cours}</div>
          <div className="">
            <form>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <Input
                  type="search"
                  placeholder="Search for something"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </form>
          </div>
        </div>
        <div className=" basis-1/12">
          <img src={Logo} alt="" width={35} />
        </div>
        <div className=" basis-4/12">
          <ul className="flex flex-row justify-around text-monBleu font-monFont font-bold ">
            {data.map((item, index) => (
              <li key={index}>{item.value}</li>
            ))}
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}
