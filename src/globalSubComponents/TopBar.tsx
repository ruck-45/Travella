// Dependencies
import { Button } from "@nextui-org/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const social = [<FaXTwitter />, <FaFacebookF />, <BsLinkedin />, <AiFillInstagram />, <FaYoutube />];

const TopBar = () => {
  return (
    <div className="flex bg-[#004493] py-[0.8rem] px-[2rem] justify-between">
      <div className="flex gap-[0.7rem]">
        {social.map((data, index) => (
          <Button
            key={index}
            isIconOnly
            variant="bordered"
            radius="full"
            className="w-[2.5rem] h-[2.5rem] text-[1.2rem] text-white"
          >
            {data}
          </Button>
        ))}
      </div>
      <div className="flex gap-[1rem]">
        <Button
          variant="light"
          radius="sm"
          className="w-full px-[8px] py-[10px] text-[1rem] text-white"
          startContent={<FaUser className="text-[2rem]" />}
        >
          Register
        </Button>
        <Button
          variant="light"
          radius="sm"
          className="w-full px-[8px] py-[10px] text-[1rem] text-white"
          startContent={<BiSolidExit className="text-[2rem]" />}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
