import { IBM_Plex_Mono } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ibmPlex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "600",
});

export { ibmPlex, inter };
