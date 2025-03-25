import WeatherImg from "../images/projects/Project-weather.png";
import ColorImg from "../images/projects/Project-color.png";
import CalculatorImg from "../images/projects/Project-calculator.png";
import PrecioEnergiaImg from "../images/projects/Project-precioenergia.png";

export interface Project {
  id: string;
  name: string;
  url: string;
  img: ImageMetadata;
  desc: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Precio Energia",
    url: "https://alexbr784.github.io/precioenergia",
    img: PrecioEnergiaImg,
    desc: "¿Necesitas revisar el precio de la luz de hoy? Este recurso te permite ver el precio de la luz mediante gráficas y tablas.",
  },
  {
    id: "2",
    name: "Weather App",
    url: "https://alexbr784.github.io/weather-app/",
    img: WeatherImg,
    desc: "¿No sabes que tiempo va a hacer en tu ciudad? Guarda localizaciones favoritas para que puedas ver el clima en ellas en tiempo real.",
  },  
  {
    id: "3",
    name: "Calculator App",
    url: "https://alexbr784.github.io/solutions-frontend-mentor/Calculator-App/",
    img: CalculatorImg,
    desc: "Si necesitas una calculadora estilizada sencilla, este es el lugar.",
  },
];
