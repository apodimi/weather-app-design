import HeartIcon from "../../../assets/icons/activities/heart.svg";
import Image1 from "../../../assets/images/image-1.png";
import Image2 from "../../../assets/images/image-2.png";
import Image3 from "../../../assets/images/image-3.png";
import Image4 from "../../../assets/images/image-4.png";

const ACTIVITIES = [
  {
    image: Image1,
    title: "2km away",
  },
  {
    image: Image2,
    title: "1.5km away",
  },
  {
    image: Image3,
    title: "3km away",
  },
  {
    image: Image4,
    title: "500m away",
  },
];
export const Activities = () => {
  return (
    <div className="bg-blue-400 flex gap-9 flex-col rounded-[40px] bg-white/[0.27] backdrop-blur-[30px] border-white/[0.21] border pt-5 pb-[35px] px-[35px] grow">
      <div className="flex gap-1">
        <img src={HeartIcon} height={30} />
        <p className="text-white font-medium text-2xl">
          Activities in your area
        </p>
      </div>
      <div className="flex justify-center gap-[21px]">
        {ACTIVITIES.map((activity) => (
          <div key={activity?.title}>
            <img src={activity?.image} width={180} />
            <p className="text-black font-medium text-xs">{activity?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
