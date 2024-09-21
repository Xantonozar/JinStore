"use client";
import { builder, Builder } from "@builder.io/react";
import CountdownTimer from "./components/TopBAr/CountdownTimer";
import TopBanner from "./components/TopBAr/topBanner";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(CountdownTimer, {
  name: "CountdownTimer",
});

Builder.registerComponent(TopBanner, {
  name: "TopBanner",
});
