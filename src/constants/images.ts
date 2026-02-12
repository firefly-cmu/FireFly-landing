import { asset } from "../utils/asset";

export const Coverimage = [
  asset("coverslide/Cover (SlideShow).png"),
  asset("coverslide/Property 1=2.png"),
  asset("coverslide/Property 1=3.png"),
  asset("coverslide/Property 1=4.png"),
  asset("coverslide/Property 1=5.png"),
];

export const Logo = [
  asset("partnerlogo/Rmit.png"),
  asset("partnerlogo/Cmu.png"),
  asset("partnerlogo/Glasgow.png"),
  asset("partnerlogo/Apnic.png"),
];

const landingdecorationPath = "picture/landing-decor/";
export const cardData = [
  {
    image: asset(landingdecorationPath + "drone.png"),
    description: "UAV-Based system for remote area surveying",
  },
  {
    image: asset(landingdecorationPath + "station.png"),
    description: "Design of ground-based IoT sensors for smoke detection",
  },
  {
    image: asset(landingdecorationPath + "signal.png"),
    description: "Robust communication channels between UAVs and IoT sensors",
  },
  {
    image: asset(landingdecorationPath + "navigate.png"),
    description: "Machine learning algorithms for fire prediction",
  },
  {
    image: asset(landingdecorationPath + "navigate2.png"),
    description: "Real-time data visualization dashboard",
  },
];

export const OtherData = [
  {
    topic: "TEAM",
    Image: asset("other/Vector.png"),
  },
  {
    topic: "PUBLICATIONS",
    Image: asset("other/fluent_document-folder-16-regular.png"),
  },
  {
    topic: "GALLERY",
    Image: asset("other/clarity_image-gallery-line.png"),
  },
  {
    topic: "NEWS",
    Image: asset("other/heroicons_newspaper.png"),
  },
];

export const Footerlogo = [
  asset("footer/Cmu-footer.png"),
  asset("footer/Uog-footer.png"),
  asset("footer/Rmit-footer.png"),
];
