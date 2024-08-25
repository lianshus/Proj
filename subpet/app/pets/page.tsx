"use client";
import { Sign } from "crypto";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import {usePetData} from '../context/PetDataContext';
import { Transaction } from "@mysten/sui/transactions";
import { useNetworkVariable } from "../networkConfig";

export default function Home() {
  const { petData, setPetData } = usePetData();
  const [imgUrl, setImgUrl] = useState("");
  const counterPackageId = useNetworkVariable("counterPackageId");

  useEffect(() => {
    setImgUrl(window.localStorage.getItem("imgUrl") || "/base.gif");
  }, [imgUrl]);

  const petInfo = JSON.parse(window.localStorage.getItem("petInfo") || "")

  return (
    <>
          <div className="w-3/4">
            <div className="text-2xl flex flex-col h-full">
              <div className="p-3 bg-white border rounded-lg flex flex-col w-2/3 items-center justify-content ">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert items-center justify-content mt-20"
                  src={imgUrl || "/base.gif"}
                  alt="Base"
                  width={300}
                  height={300}
                  priority
                />
              </div>
          
            </div>
          </div>

          <div className="w-1/4 flex flex-col -ml-40">
            <div className="text-3xl bg-white rounded-md w-full">
              Pets Information
            </div>

            <div className="text-3xl mt-3 bg-white rounded-md h-96 w-full p-3">
              <ul>
                <li>Name:  {petData.name || petInfo.name}</li>
                <li>Birth:  {petData.birthdate || petInfo.birthdate}</li>
                <li>Level:  {petData.grade_level || petInfo.grade_level}</li>
              </ul>
            </div>
          </div> 
    </>
 
  );
}
