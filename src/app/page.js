"use client";

import React from "react";
import TopBanner from "@/components/TopBAr/topBanner";
import SignUp from "@/components/main/MyComponent";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { userState } from "@/components/Context";
import { useState } from "react";
import LoginPage from "@/components/LoginPage/LoginPage";
import Context from "@/components/Context";
import MainPage from "@/components/MainPage";
export default function Home() {
  const [accountExist, setaccountExist] = useState(true);
 
  
  return (
<Context >
<div className="flex flex-col min-h-screen">
<TopBanner/>
<Header/>
<MainPage/>

<Footer/>
    </div>
</Context>
  );
}
