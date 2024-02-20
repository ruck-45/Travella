// Dependencies
import { Button } from "@nextui-org/react";
import { BiSolidArrowToTop } from "react-icons/bi";

// Local Files
import { scrollTop } from "../utils/controllers";

const ScrollToTop = () => {
  return (
    <Button
      isIconOnly
      aria-label="LinkTop"
      className="fixed bottom-[1rem] right-[1rem] z-[100] bg-[#13357bff]"
      onClick={() => scrollTop()}
      radius="full"
    >
      <BiSolidArrowToTop className="text-5xl text-white p-2 rounded-xl" />
    </Button>
  );
};

export default ScrollToTop;
