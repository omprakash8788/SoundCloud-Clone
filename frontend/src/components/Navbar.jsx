import { IoArrowUndoCircle } from "react-icons/io5";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate=useNavigate()

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <IoArrowUndoCircle onClick={()=>navigate(-1)} className="w-8  rounded-2xl cursor-pointer hover:bg-red-500" />
          <IoArrowRedoCircleSharp onClick={()=>navigate(1)} className="w-8 rounded-2xl cursor-pointer hover:bg-red-500" />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:bg-red-500">
            Explore premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer hover:bg-red-500">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-9 h-9 m-1 rounded-full flex items-center justify-center hover:bg-red-500 cursor-pointer">
            OM
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
       <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-red-500">All</p>
       <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-red-500">Music</p>
       <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-red-500">Podcasts</p>

    </div>

    </>
  );
};

export default Navbar;
