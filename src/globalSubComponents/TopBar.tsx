// Dependencies
import { Button } from "@nextui-org/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const social = [<FaXTwitter />, <FaFacebookF />, <BsLinkedin />, <AiFillInstagram />, <FaYoutube />];

const TopBar = () => {
  return (
    <div className="flex bg-[#13357bff] py-[0.3rem] px-[2rem] justify-between">
      <div className="flex">
        {social.map((data, index) => (
          <Button key={index} isIconOnly variant="light" radius="full" className="text-[1rem] text-white">
            {data}
          </Button>
        ))}
      </div>
      <div className="flex gap-[1rem]">
        <Button
          variant="light"
          radius="sm"
          className="w-full px-[8px] py-[10px] text-[1rem] text-white"
          startContent={<FaUser className="text-[1.5rem]" />}
        >
          Register
        </Button>
        <Button
          variant="light"
          radius="sm"
          className="w-full px-[8px] py-[10px] text-[1rem] text-white"
          startContent={<BiSolidExit className="text-[1.5rem]" />}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
