"use client";
import { apiConnector } from "@/services/apiConnector";
import { endpoints } from "@/services/apis";
import { useEffect } from "react";
import toast from "react-hot-toast";

const { SERVER_CONNECTION_CHECK } = endpoints;

export default function Home() {
  useEffect(() => {
    const serverConnectionCheck = async () => {
      const notify = toast.loading("Loading...");
      const response = await apiConnector("GET", SERVER_CONNECTION_CHECK);
      toast.dismiss(notify);
      if (response.data.success === true) {
        toast("Server Connection Successfull");
        console.log(response.data.message);
      }
    };
    serverConnectionCheck();
  }, []);
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-10 bg-blue-100 text-center p-5 text-black">
      <img src="./logo.png" alt="logo" className="h-[150px] w-[150px] logo" />
      <h1 className="text-4xl font-extrabold">Flipkart Clone</h1>
      <h3 className="text-3xl font-semibold">
        Currently this web application is under development! Please come back
        later 🥲.....
      </h3>
    </div>
  );
}
