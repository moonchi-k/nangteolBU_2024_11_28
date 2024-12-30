import { Box, Text } from "@chakra-ui/react";
import BgImg from "../components/bgImg.jpg";
import { questions } from "../components/questions";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();

  const savedIndex = JSON.parse(localStorage.getItem("index")) || 0;

  // 상태 관리. 초기값은 0 (savedIndex가 0이면 로컬스토리지 값이 없거나 초기화된 경우)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    savedIndex || 0
  );

  // 페이지가 로드될 때마다 currentQuestionIndex를 로컬스토리지에 저장
  useEffect(() => {
    // 로컬스토리지에서 가져온 값이 없으면 기본값 0으로 설정
    // savedIndex 값이 초기값이 아닌 경우에만 상태 업데이트
    if (savedIndex === null || savedIndex === undefined) {
      localStorage.setItem("index", JSON.stringify(0));
      setCurrentQuestionIndex(0); // 새로고침 후 초기화
    } else {
      setCurrentQuestionIndex(savedIndex); // 로컬스토리지 값이 있으면 그 값을 사용
    }
  }, []); // 페이지가 처음 렌더링될 때만 실행
  useEffect(() => {
    // currentQuestionIndex 상태가 변경될 때마다 로컬스토리지에 저장
    localStorage.setItem("index", JSON.stringify(currentQuestionIndex));
  }, [currentQuestionIndex]);
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswers = useRef(null); // 답변을 저장할 ref

  const questionContent = currentQuestion.q;

  const firstAnswerContent = currentQuestion.a[0].text;
  const secondAnswerContent = currentQuestion.a[1].text;

  const FirstclickHandler = (answerIndex) => {
    if (!currentQuestion.a || !currentQuestion.a[answerIndex]) {
    }
    const selectedAnswer = currentQuestion.a[answerIndex].text;
    console.log(selectedAnswer);

    selectedAnswers.current = selectedAnswer;
    if (currentQuestionIndex === 1) {
      console.log(selectedAnswer);
      if (selectedAnswer.includes("주민")) {
        navigate("/failure", { state: { index: currentQuestionIndex } });
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else if (currentQuestionIndex === 0) {
      if (selectedAnswer.includes("계단")) {
        setCurrentQuestionIndex(currentQuestionIndex + 2);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else if (currentQuestionIndex === 2) {
      if (selectedAnswer.includes("쇼파")) {
        navigate("/failure", { state: { index: currentQuestionIndex } });
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else if (currentQuestionIndex === 3) {
      if (selectedAnswer.includes("오감")) {
        navigate("/failure", { state: { index: currentQuestionIndex } });
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else if (currentQuestionIndex === 4) {
      if (selectedAnswer.includes("여기")) {
        navigate("/failure", { state: { index: currentQuestionIndex } });
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else if (currentQuestionIndex === 5) {
      // console.log("hello");
      // navigate("/alert", {
      //   state: {
      //     selectedAnswer: selectedAnswer,
      //     currentQuestionIndex: currentQuestionIndex,
      //   },
      // });

      if (selectedAnswer.includes("402호")) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        navigate("/alert", {
          state: {
            selectedAnswer: selectedAnswer,
            currentQuestionIndex: currentQuestionIndex,
          },
        });
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 2);
        navigate("/alert", {
          state: {
            selectedAnswer: selectedAnswer,
            currentQuestionIndex: currentQuestionIndex,
          },
        });
      }
    } else if (currentQuestionIndex === 6) {
      if (selectedAnswer.includes("여기")) {
        navigate("/failure", { state: { index: currentQuestionIndex } });
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 2);
      }
    } else if (currentQuestionIndex === 7) {
      if (selectedAnswer.includes("여기")) {
        navigate("/failure", { state: { index: currentQuestionIndex } });
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else if (currentQuestionIndex === 8) {
      if (selectedAnswer.includes("계단")) {
        navigate("/failure", { state: { index: currentQuestionIndex } });
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else if (currentQuestionIndex === 9) {
      if (selectedAnswer.includes("나간다.")) {
        navigate("/failure", { state: { index: currentQuestionIndex } });
      } else {
        navigate("/alert", {
          state: {
            selectedAnswer: selectedAnswer,
            currentQuestionIndex: currentQuestionIndex,
          },
        });
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else if (currentQuestionIndex === 10) {
      if (selectedAnswer.includes("엘리")) {
        navigate("/success", {
          state: {
            selectedAnswer: selectedAnswer,
            currentQuestionIndex: currentQuestionIndex,
          },
        });
      } else {
        navigate("/failure", { state: { index: currentQuestionIndex } });
      }
    }
  };

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
      p={"0 20px"}
      textAlign={"center"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Text
        marginTop={"70px"}
        fontSize={"32px"}
        as={"h5"}
        letterSpacing={"-4px"}
      >
        {questionContent}
      </Text>
      <Box
        w={"280px"}
        h={"78px"}
        marginTop={"30px"}
        backgroundColor={"white"}
        border={"2px solid black"}
        borderBottom={"6px solid black"}
        borderRadius={"50px"}
        p={"5px"}
        cursor={"pointer"}
      >
        <Box
          onClick={() => FirstclickHandler(0)}
          w={"265px"}
          h={"63px"}
          border={"2px solid black"}
          borderTop={"6px solid black"}
          borderRadius={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {firstAnswerContent}
        </Box>
      </Box>

      <Box
        w={"280px"}
        h={"78px"}
        marginTop={"15px"}
        backgroundColor={"white"}
        border={"2px solid black"}
        borderBottom={"6px solid black"}
        borderRadius={"50px"}
        p={"5px"}
        cursor={"pointer"}
      >
        <Box
          onClick={() => FirstclickHandler(1)}
          w={"265px"}
          h={"63px"}
          border={"2px solid black"}
          borderTop={"6px solid black"}
          borderRadius={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {secondAnswerContent}
        </Box>
      </Box>
    </Box>
  );
};

export default Options;
