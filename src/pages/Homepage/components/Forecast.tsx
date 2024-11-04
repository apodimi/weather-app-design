import ClockIcon from "../../../assets/icons/forecast/clock.svg";
import { TempChart } from "./TempChart";

export const Forecast = () => {
  return (
    <div className="bg-blue-400 flex  flex-col rounded-[20px]  md:rounded-[40px] bg-white/[0.27] backdrop-blur-[30px] border-white/[0.5] md:border-white/[0.21] border ">
      <div className="flex gap-1 pt-5 pb-[35px] px-[35px]">
        <img src={ClockIcon} height={16} />
        <p className="text-white font-medium text-sm">24-hour forecast</p>
      </div>
      <div className="flex justify-center gap-[21px]">
        <TempChart />
      </div>
      <div className="flex justify-center gap-[21px] text-white md:hidden">
        <div className="bg-gold rounded-3xl px-[43px] py-2 text-xs font-medium mb-5 mt-6 hover:cursor-pointer hover:bg-gold/70">
          5-day forecast
        </div>
      </div>
    </div>
  );
};
