import { Box, Text } from "@chakra-ui/react";
import MainImg from "../components/Main.png";
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
        paddingTop={"300px"}
      >
        <Link to={"/desc"}>
          <Text as={"h4"} fontSize={"24px"} fontWeight={"500"}>
            시작하기!
          </Text>
        </Link>
      </Box>
    </>
  );
};

export default Main;
