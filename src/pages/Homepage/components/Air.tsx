import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClcokIcon from "../../../assets/icons/forecast/clock.svg";
import { WeatherSlider } from "./WeatherSlider";
import TempIcon from "../../../assets/icons/temp.svg";
import WindIcon from "../../../assets/icons/wind.svg";
import DropIcon from "../../../assets/icons/drop.svg";
import SunIcon from "../../../assets/icons/sun.svg";

const AIR_CONDITIONS = [
  {
    title: "Real Feel",
    value: "30°",
    icon: TempIcon,
  },
  {
    title: "Wind",
    value: "0.8 km/hr",
    icon: WindIcon,
  },
  {
    title: "Chance of rain",
    value: "2%",
    icon: DropIcon,
  },
  {
    title: "UV Index",
    value: "4",
    icon: SunIcon,
  },
];

export const Air = () => {
  return (
    <div className="bg-blue-400 bg-air-mount bg-contain bg-no-repeat bg-center-bottom-39 w-[100px] flex grow  flex-col h-[537px] rounded-[40px] bg-white/[0.27] backdrop-blur-[30px] border-white/[0.21] border p-4">
      <WeatherSlider />
      <div className="flex justify-center mt-4 gap-1">
        <img src={ClcokIcon} alt="Clock" className="h-5" />
        <p className="text-white text-sm font-medium text-center">8:00PM GMT</p>
      </div>
      <p className="text-white font-bold text-sm mt-9">AIR CONDITIONS</p>
      <div className="flex flex-col gap-11 mt-4">
        {AIR_CONDITIONS.map((condition) => (
          <div className="flex gap-2">
            <img src={condition?.icon} alt={condition?.title} height={25} />
            <div>
              <p className="text-white text-xs font-medium">
                {condition?.title}
              </p>
              <p className="text-white text-base font-medium">
                {condition?.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
