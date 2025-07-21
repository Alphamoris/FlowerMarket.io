


"use client"

import Prices from "@/components/Prices";
import React, { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { AuthProvider } from "@/components/AuthContext";
import Bulkmarket from "@/components/Bulkmarket";


export default function Home13() {

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthProvider>
          <Bulkmarket />
        </AuthProvider>
      </Suspense>
    </>
  );
}