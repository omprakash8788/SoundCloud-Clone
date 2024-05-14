import { assets, songsData } from "../assets/assets";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { IoPlaySkipForwardCircleOutline } from "react-icons/io5";
import { ImNext } from "react-icons/im";
import { ImLoop2 } from "react-icons/im";
import { IoMdPlayCircle } from "react-icons/io";
import { IoMicCircle } from "react-icons/io5";
import { HiMiniQueueList } from "react-icons/hi2";
import { MdSpeakerGroup } from "react-icons/md";
import { FaVolumeHigh } from "react-icons/fa6";
import { CgMiniPlayer } from "react-icons/cg";
import { MdZoomOutMap } from "react-icons/md";
import { FaCirclePause } from "react-icons/fa6";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {seekBg,seekBar, playStatus, play, pause, track, time, next, previous, seekSong}=useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div className="">
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <BiSolidSkipPreviousCircle onClick={previous} className="w-4 cursor-pointer hover:text-red-500" />
          {
            playStatus ? <FaCirclePause onClick={pause} className="w-4 cursor-pointer hover:text-red-500"/> : 
          <IoPlaySkipForwardCircleOutline onClick={play} className="w-4 cursor-pointer hover:text-red-500" />
          }
          <ImNext onClick={next} className="w-4 cursor-pointer hover:text-red-500" />
          <ImLoop2 className="w-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full " />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <IoMdPlayCircle className="w-4" />
        <IoMicCircle className="w-4" />
        <HiMiniQueueList className="w-4" />
        <MdSpeakerGroup className="w-4" />
        <FaVolumeHigh className="w-4" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <CgMiniPlayer className="w-4" />
        <MdZoomOutMap className="w-4" />
      </div>
    </div>
  );
};

export default Player;
