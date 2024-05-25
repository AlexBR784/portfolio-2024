import WeatherImg from "../images/Project-weather.png";
import ColorImg from "../images/Project-color.png";
import CalculatorImg from "../images/Project-calculator.png";

export interface Project {
  id: string;
  name: string;
  url: string;
  img: ImageMetadata;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Weather App",
    url: "https://alexbr784.github.io/weather-app/",
    img: WeatherImg,
  },
  {
    id: "2",
    name: "Color Contrast Checker",
    url: "https://alexbr784.github.io/ColorContrast/",
    img: ColorImg,
  },
  {
    id: "3",
    name: "Calculator App",
    url: "https://alexbr784.github.io/solutions-frontend-mentor/Calculator-App/",
    img: CalculatorImg,
  },
];
