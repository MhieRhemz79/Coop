import React from 'react';
import { Button } from '../ButtonElements';
import { Column2, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper,  Heading, Subtitle, BtnWrap, Img, TopLine }  from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, topLine2, lightText, lightText2, headline, headline2, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
      <InfoContainer lightBg = {lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart = {imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <TopLine>{topLine2}</TopLine>
                    <Heading lightText={lightText2}>{headline2}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <Button to="home" >{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={img} alt={alt}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
