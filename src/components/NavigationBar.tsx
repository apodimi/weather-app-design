import { useMediaQuery } from "@mantine/hooks";
import MapPin from "../assets/icons/map-pin.svg";
import RightArrow from "../assets/icons/right-arrow.svg";
import MainAvatar from "../assets/avatar/main-avatar.svg";

export const NavigationBar = () => {
  const isMobile = useMediaQuery(`(max-width: 640px)`);

  return (
    <div className="flex justify-between items-center">
      <div className="flex max-sm:gap-[10px] gap-[5px] justify-center items-center">
        <img src={MapPin} alt="Map Pin" height={25} className="p-2" />
        <p className="font-medium text-white text-2xl max-sm:text-xl">
          New York
        </p>
        <img
          src={RightArrow}
          alt="Right Arrow"
          height={19}
          className="p-2 max-sm:rotate-90"
        />
      </div>
      {isMobile && (
        <img
          src={MainAvatar}
          alt="Right Arrow"
          height={30}
          className="h-[30px]"
        />
      )}
    </div>
  );
};
