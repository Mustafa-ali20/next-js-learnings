import { StaticImageData } from "next/image";
import moroco from "./photos/moroco.jpg"
import canada from "./photos/canada.jpg"
import mecca from "./photos/mecca.jpg"
import nepal from "./photos/nepal.jpg"
import srilanka from "./photos/srilanka.jpg"
import peru from "./photos/peru.jpg"


export type WonderImage = {
  id: string;
  name: string;
  location: string;
  src: StaticImageData;
  photographer: string;
}

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Crystal Dunes",
    location: "Saudi Arabia",
    src: mecca,
    photographer: "Ayaan Mir"
  },
  {
    id: "2",
    name: "Emerald Canyon",
    location: "Peru",
    src: peru,
    photographer: "Liam Ortega"
  },
  {
    id: "3",
    name: "Silent Fjords",
    location: "Nepal",
    src: nepal,
    photographer: "Eva Lund"
  },
  {
    id: "4",
    name: "Golden Peaks",
    location: "Srilanka",
    src: srilanka,
    photographer: "Rishi Sen"
  },
  {
    id: "5",
    name: "Moonlit Oasis",
    location: "Canada",
    src: canada,
    photographer: "Hassan Qureshi"
  },
  {
    id: "6",
    name: "Frozen Echo Lake",
    location: "Moroco",
    src: moroco,
    photographer: "Sofia Clarke"
  },
  
];
export default wondersImages;