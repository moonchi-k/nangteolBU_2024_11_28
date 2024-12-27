import { Box, Image } from "@chakra-ui/react";
import Bg from "./bgImg.png";
const BgImg = () => {
  return (
    <Box position={"relative"} maxW={450} m={"0 auto"} p={20}>
      <Image src={Bg} alt="background"></Image>
    </Box>
  );
};

export default BgImg;
