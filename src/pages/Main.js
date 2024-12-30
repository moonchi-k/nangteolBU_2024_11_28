import { VscDebugStart } from "react-icons/vsc";
import { Box, Text } from "@chakra-ui/react";
import MainImg from "../components/mainImg.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Box
        maxW={"450px"}
        // p={"20px"}
        maxH={"100vh"}
        h={"100vh"}
        bgImage={`url(${MainImg})`}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgSize={"cover"}
        m={"0 auto"}
        textAlign={"center"}
      >
        <Link to={"/desc"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            w={"116px"}
            m={"0 auto"}
            position={"relative"}
            top={"300px"}
          >
            <Text as={"h4"} fontSize={"24px"} fontWeight={"500"}>
              시작하기
            </Text>
            <VscDebugStart
              strokeWidth={"1px"}
              width={"30px"}
              height={"30px"}
              size={"1.5em"}
            />
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Main;
