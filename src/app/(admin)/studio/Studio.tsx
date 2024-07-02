"use client"
import { NextStudio } from "next-sanity/studio";
// import config from "./../../../../../../sanity.config";
import config from "../../../../sanity.config"

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

const StudioPage = () => {
  return <NextStudio config={config} />;
}

export default StudioPage