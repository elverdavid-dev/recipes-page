import { Kanit, Rubik } from "next/font/google";

export const kanit = Kanit({
  subsets: ["latin"],
  preload: true,
  display: "auto",
  weight: "500",
  style: "normal",
  variable: "--kanit",
});

export const rubik = Rubik({
  subsets: ["latin"],
  preload: true,
  display: "auto",
  weight: "400",
  style: "normal",
  variable: "--rubik",
});
