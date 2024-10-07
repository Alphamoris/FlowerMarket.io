"use client"

import Prices from "@/components/Prices";
import { get_price_details } from "@/apilib/priceapi";
import React, { useEffect, useState } from "react";

interface PriceDetail {
  id: number;
  shop_name: string;
  date: Date;
  time: string;
  fname: string;
  description: string;
  price: number;
  place: string;
}

interface PricePair {
  detail1: PriceDetail;
  detail2: PriceDetail | null;
}


export default function Home2() {
  const [pricePairs, setPricePairs] = useState<PricePair[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const priceDetails: PriceDetail[] = await get_price_details();
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