import { useLocation, useNavigate } from "react-router-dom";
import Bacon from "../components/베이컨.png";
import Cheese from "../components/치즈.png";
import { Box } from "@chakra-ui/react";
import BgImg from "../components/bgImg.png";
import { useEffect, useState } from "react";

const Alert = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showCompleted, setShowCompleted] = useState(false);

  console.log(location);
  const answer = location.state.selectedAnswer;
  const page = location.state.currentQuestionIndex;

  console.log(answer);

  //   localStorage.getItem("index");
  const ingredient = () => {
    switch (answer) {
      case "402호로 간다. (베이컨이 있음)":
        return `${Bacon}`;

      default:
        return `${Cheese}`;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCompleted(true); // 5초 후에 완료 화면으로 전환
    }, 4000);

    // 컴포넌트가 unmount 될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/options", {
        state: { currentQuestionIndex: page + 1 },
      });
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      maxW={"450px"}
      maxH={"900px"}
      h={"100vh"}
      bgImage={`url(${BgImg})`}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
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
            w={"120px"}
            h={"100px"}
            bgSize={"contain"}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Alert;
