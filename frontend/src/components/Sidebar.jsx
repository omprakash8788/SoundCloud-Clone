import { IoHomeOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { MdLibraryMusic } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate=useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#bc08db] h-[15%] rounded flex flex-col justify-around">
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <IoHomeOutline className="w-8 hover:w-12"/>
          <p className="font-bold hover:text-black">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <BsSearch className="w-8 hover:w-12"/>
          <p className="font-bold hover:text-black">Search</p>
        </div>
      </div>
      <div className="bg-[#bc08db] h-[85%]">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MdLibraryMusic className="w-8 hover:w-12" />
            <p className="font-semibold hover:text-black">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <FaRegArrowAltCircleRight className="w-5" />
            <FaPlusCircle className="w-5" />
          </div>
        </div>
        <div className="p-4 bg-[#c337dc] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1 className="font-semibold">Create Your First Playlist</h1>
          <p className="font-bold">Its easy we will help you</p>
          <button className="px-4 py-1 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#c337dc] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1 className="font-bold">Lets find some poadcast to follow</h1>
          <p className="font-bold">We will keep you update on new episodes</p>
          <button className="px-4 py-1 bg-white text-[15px] text-black rounded-full mt-4">
            Browse poadcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
