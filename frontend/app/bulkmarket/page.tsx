"use client"

import Prices from "@/components/Prices";
import React, { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { AuthProvider } from "@/components/AuthContext";
import BulkMarket from "@/components/BulkMarket";


export default function Home13() {

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthProvider>
          <BulkMarket />
        </AuthProvider>
      </Suspense>
    </>
  );
}