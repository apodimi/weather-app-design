import { useMediaQuery } from "@mantine/hooks";
import MapPin from "../../../assets/icons/map-pin.svg";
import RightArrow from "../../../assets/icons/right-arrow.svg";
import MainAvatar from "../../../assets/avatar/main-avatar.svg";
import CloudIcon from "../../../assets/icons/cloud.svg";

interface MainInfoProps {
  status: string;
  deegre: number;
  day: string;
  date: string | Date;
  city: string;
}

const MainInfoDesktop = ({
  status,
  deegre,
  day,
  date,
  city,
}: MainInfoProps) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-[40px]">
        <div className="flex max-sm:gap-[10px] gap-[5px] items-center hover:bg-slate-300/20 rounded-2xl hover:cursor-pointer">
          <img src={MapPin} alt="Map Pin" height={25} className="p-2" />
          <p className="font-medium text-white text-2xl max-sm:text-xl">
            {city}
          </p>
          <img
            src={RightArrow}
            alt="Right Arrow"
            height={19}
            className="p-2 max-sm:rotate-90"
          />
        </div>
        <p className="text-5xl font-medium text-white">{status}</p>
      </div>
      <div className="text-white">
        <p className="text-[64px] font-medium leading-[77px]">{deegre}°C</p>
        <p className="text-lg font-normal leading-[21px]">
          {day} | {`${date}`}
        </p>
      </div>
    </div>
  );
};

const MainInfoMobile = ({ status, deegre, day, date, city }: MainInfoProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <div className="flex gap-[40px]">
          <div className="flex max-sm:gap-[10px] gap-[5px] items-center hover:bg-slate-300/20 rounded-2xl hover:cursor-pointer">
            <img src={MapPin} alt="Map Pin" height={25} className="p-2" />
            <p className="font-medium text-white text-xl max-sm:text-xl">
              {city}
            </p>
            <img
              src={RightArrow}
              alt="Right Arrow"
              height={19}
              className="p-2 max-sm:rotate-90"
            />
          </div>
        </div>
        <img src={MainAvatar} alt="Right Arrow" height={60} />
      </div>
      <div className="flex flex-col justify-center items-center text-white pt-28">
        <p className="text-2xl font-medium text-white">{status}</p>
        <img src={CloudIcon} className="h-52" />
        <p className="text-[64px] font-medium leading-[77px]">{deegre}°C</p>
        <p className="text-lg font-normal leading-[21px]">
          {day} | {`${date}`}
        </p>
      </div>
    </div>
  );
};

export const MainInfo = ({
  status,
  deegre,
  day,
  date,
  city,
}: MainInfoProps) => {
  const isMobile = useMediaQuery(`(max-width: 640px)`);

  return (
    <>
      {isMobile ? (
        <MainInfoMobile
          status={status}
          deegre={deegre}
          day={day}
          date={date}
          city={city}
        />
      ) : (
        <MainInfoDesktop
          status={status}
          deegre={deegre}
          day={day}
          date={date}
          city={city}
        />
      )}
    </>
  );
};
