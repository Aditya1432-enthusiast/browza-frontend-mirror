"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { statusApi } from "../lib/api";

interface StatusData {
  ok: boolean;
  ts: string;
}

const Status = () => {
  const { data, isLoading, isError } = useQuery<StatusData | null>({
    queryKey: ["status"],
    queryFn: async (): Promise<StatusData | null> => {
      const res = await statusApi();
      return res ?? null; 
    },
  });

  if (isLoading) return <div>Loading status...</div>;
  if (isError) return <div>Failed to fetch status.</div>;

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <div>No status data available</div>
      )}
    </div>
  );
};

export default Status;
