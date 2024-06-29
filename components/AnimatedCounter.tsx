"use client";
import React from "react";
import CountUp from "react-countup";

export default function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div>
      <CountUp
        duration={2.75}
        decimals={2}
        decimal="."
        prefix="$"
        end={amount}
      />
    </div>
  );
}
