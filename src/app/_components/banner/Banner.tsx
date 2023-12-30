import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BannerProps from "./Banner.type";
import Button from "../button/Button";
import Image from "next/image";
import Logo from "/public/images/header/Rectangle 1506.jpg";

const Banner = ({ mode }: BannerProps) => {
  const modeList = [
    "feedback",
    "coworker",
    "creationShare",
    "todayStudy",
    "mentorAdvice",
  ];

  const [index, setIndex] = useState(mode && modeList.indexOf(mode));

  useEffect(() => {
    setIndex(mode && modeList.indexOf(mode));
  }, [mode]);

  const title = [
    "피드백 받기",
    "협력자 찾기",
    "창작물 공유",
    "오늘의 공부",
    "고수들의 조언",
  ];

  const subTitle = [
    "아이디어를 공유하고 피드백을 받아 발전시켜 보세요!",
    "공감되는 아이디어에 협력해서 아이디어를 실현해 보세요!",
    "완성한 창작물을 자유롭게 공유하세요!",
    "오늘 공부한 내용을 꾸준히 기록해봐요!",
    "궁금한 점은 고수들의 조언을 얻어 해결하세요!",
  ];

  return (
    <BannerContainer index={index}>
      <Title>{index && title[index]}</Title>
      <SubTitle>{index && subTitle[index]}</SubTitle>
      <Button
        onClick={() => console.log("Button clicked")}
        width={"103"}
        height={"48"}
        children={
          <div>
            <Image src={Logo} alt="" />
            <p>작성하기</p>
          </div>
        }
      />
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  border-radius: 5px;
  justify-content: center;
  width: 989px;
  height: 99px;
  background: ${({ index }) =>
    index
      ? index === 0 || index === 1
        ? `#dbe5e1;`
        : index === 2
        ? `#E9E5D9;`
        : `#EEDCE1;`
      : `#dbe5e1;`};
`;

const Title = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
