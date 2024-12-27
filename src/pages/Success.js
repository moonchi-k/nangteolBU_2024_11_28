import { Box, Text } from "@chakra-ui/react";
import BgImg from "../components/bgImg.png";
import LdImg from "../components/LdImg.png";
import "./Success.css";
import { useEffect, useState } from "react";
import complete from "../components/success.png";
import { Link, useNavigate } from "react-router-dom";
const Success = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const navigate = useNavigate();
  const savedIndex = JSON.parse(localStorage.getItem("index"));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    savedIndex || 0
  );

  // 5초 뒤에 상태를 변경하여 화면을 새로 렌더링
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCompleted(true); // 5초 후에 완료 화면으로 전환
    }, 2000);

    // 컴포넌트가 unmount 될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, []);

  const startNewGame = () => {
    localStorage.removeItem("index"); // 로컬스토리지에서 "index" 항목 삭제
    setCurrentQuestionIndex(0); // 상태를 0으로 초기화하여 게임을 처음부터 시작
    navigate("/options"); // 게임 첫 페이지로 이동
  };

  return (
    <>
      {showCompleted ? (
        <Box
          maxW={"450px"}
          // p={"20px"}
          maxH={"900px"}
          h={"100vh"}
          bgImage={`url(${BgImg})`}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          m={"0 auto"}
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
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              border={"1px solid black"}
              backgroundColor={"white"}
              p={"20px"}
              textAlign={"center"}
              borderRadius={"10px"}
              borderTop={"3px solid black"}
              fontSize={"20px"}
            >
              까르보나라 완성!
              <Box
                marginTop={"20px"}
                marginBottom={"20px"}
                display={"flex"}
                w={"120px"}
                h={"80px"}
                bgImage={`url(${complete})`}
                bgSize={"contain"}
                bgRepeat={"no-repeat"}
              ></Box>
              <Text fontSize={"14px"}> 오늘은 배불리 자야지~ </Text>
            </Box>
          </Box>

          <Text
            onClick={startNewGame}
            as={"h4"}
            fontSize={"20px"}
            fontFamily={""}
            marginTop={"15px"}
          >
            다시하기
          </Text>
        </Box>
      ) : (
        <Box
          maxW={"450px"}
          // p={"20px"}
          maxH={"900px"}
          h={"100vh"}
          bgImage={`url(${BgImg})`}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          m={"0 auto"}
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
              fontWeight={"500"}
            >
              다 찾았다!
              <Box
                marginTop={"20px"}
                display={"flex"}
                w={"150px"}
                justifyContent={"space-between"}
              >
                <Box
                  className="loading"
                  w={"40px"}
                  h={"40px"}
                  display={"flex"}
                  bgImage={`url(${LdImg})`}
                  bgSize={"contain"}
                ></Box>
                <Box
                  className="loading"
                  w={"40px"}
                  h={"40px"}
                  display={"flex"}
                  bgSize={"contain"}
                  bgImage={`url(${LdImg})`}
                ></Box>
                <Box
                  className="loading"
                  w={"40px"}
                  h={"40px"}
                  bgSize={"contain"}
                  bgImage={`url(${LdImg})`}
                  display={"flex"}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Success;
