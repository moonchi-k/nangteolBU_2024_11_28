import { useLocation, useNavigate } from "react-router-dom";
import Bacon from "../components/베이컨.png";
import Cheese from "../components/치즈.png";
import { Box } from "@chakra-ui/react";
import Ingre from "../components/ingre.png";
import BgImg from "../components/bgImg.jpg";
import { useEffect, useState } from "react";

const Alert = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showCompleted, setShowCompleted] = useState(false);

  console.log(location);
  const answer = location.state.selectedAnswer;
  const page = location.state.currentQuestionIndex;

  console.log(answer);
  console.log(showCompleted);

  //   localStorage.getItem("index");
  const ingredient = () => {
    switch (answer) {
      case "402호로 간다. (베이컨이 있음)":
        return `${Bacon}`;

      case "다른 냉장고를 더 찾아본다.":
        return `${Ingre}`;

      default:
        return `${Cheese}`;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCompleted(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/options", {
        state: { currentQuestionIndex: page + 1 },
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      maxW={"450px"}
      maxH={"100vh"}
      h={"100vh"}
      bgImage={`url(${BgImg})`}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      bgSize={"cover"}
      m={"0 auto"}
      textAlign={"center"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box
        width={"90%"}
        border={"1px solid black"}
        backgroundColor={"white"}
        p={"10px"}
        borderRadius={"10px"}
        borderBottom={"3px solid black"}
        marginTop={"50px"}
      >
        <Box
          as="h5"
          letterSpacing={"-4px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          border={"1px solid black"}
          backgroundColor={"white"}
          p={"20px"}
          textAlign={"center"}
          borderRadius={"10px"}
          borderTop={"3px solid black"}
          fontSize={"30px"}
        >
          찾았다!
          <Box
            bgImg={ingredient}
            w={"80px"}
            h={"60px"}
            bgSize={"contain"}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Alert;
