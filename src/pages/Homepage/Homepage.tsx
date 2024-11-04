import { MainInfo } from "./components/MainInfos";
import CloudIcon from "../../assets/icons/cloud.svg";
import { Menu } from "./components/Menu";
import { Activities } from "./components/Activities";
import { Forecast } from "./components/Forecast";
import { Air } from "./components/Air";
import { useMediaQuery } from "@mantine/hooks";
import { WeatherSlider } from "./components/WeatherSlider";

const MobileContent = () => {
  return (
    <div className="flex flex-col gap-6">
      <WeatherSlider />
      <Forecast />
    </div>
  );
};

const DesktopContent = () => {
  return (
    <div className="flex gap-8">
      <Menu />
      <div className="flex flex-col gap-8">
        <Activities />
        <Forecast />
      </div>
      <Air />
    </div>
  );
};

export const Homepage = () => {
  const isMobile = useMediaQuery(`(max-width: 640px)`);

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex justify-between">
        <MainInfo
          city="New York"
          status="Cloudy"
          deegre={22}
          date={"12 Dec 2023"}
          day="Sunday"
        />
        {!isMobile && <img src={CloudIcon} height={321} />}
      </div>
      {isMobile ? <MobileContent /> : <DesktopContent />}
    </div>
  );
};
