"use client"

import Prices from "@/components/Prices";
import { getPriceDetails } from "@/apilib/Apilib";
import React, { useEffect, useState } from "react";
import { PriceDetail , PricePair } from "@/interfaces/interfaces"



export default function Home2() {
  const [pricePairs, setPricePairs] = useState<PricePair[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const priceDetails: PriceDetail[] = await getPriceDetails();
        const pairs: PricePair[] = [];

        for (let i = 0; i < priceDetails.length; i += 2) {
          pairs.push({
            detail1: priceDetails[i],
            detail2: priceDetails[i + 1] || null
          });
        }

        setPricePairs(pairs);
      } catch (error) {
        console.error("Error fetching price details:", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <>
      <Prices PriceList={pricePairs} />
    </>
  );
}