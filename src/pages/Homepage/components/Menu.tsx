import MainAvatar from "../../../assets/avatar/main-avatar.svg";
import CitiesIcon from "../../../assets/icons/menu/cities.svg";
import ExploreIcon from "../../../assets/icons/menu/explore.svg";
import WeatherIcon from "../../../assets/icons/menu/weather.svg";
import SettingsIcon from "../../../assets/icons/menu/settings.svg";

const MENU_ITEMS = [
  {
    icon: WeatherIcon,
    title: "Weather",
  },
  {
    icon: ExploreIcon,
    title: "Explore",
  },
  {
    icon: CitiesIcon,
    title: "Cities",
  },
  {
    icon: SettingsIcon,
    title: "Settings",
  },
];

export const Menu = () => {
  return (
    <div className="bg-blue-400 w-[100px] flex justify-between flex-col h-[537px] rounded-[40px] bg-white/[0.27] backdrop-blur-[30px] border-white/[0.21] border p-5">
      <img src={MainAvatar} alt="Right Arrow" height={60} />
      <div className="flex flex-col gap-[22px]">
        {MENU_ITEMS.map((item) => (
          <div
            key={item?.title}
            className="flex flex-col items-center gap-1 hover:cursor-pointer  "
          >
            <img src={item?.icon} alt={item?.title} height={50} />
            <p className="text-white text-sm font-semibold hover:text-blue-950">
              {item?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
