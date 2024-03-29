import styled from 'styled-components';

export const InfoContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#414a4c' : '#414a4c')};

// @media screen and (max-width: 420px) {
//     padding: 100px 0;

@media screen and (max-width: 820px) {
    // padding-right: 350px;
}
`;

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 600px;
width: 100%;
max-width: 1100px;
margin-right: 50px;
margin-left: 100px;
padding: 0 24px;
justify-content: center;
`;

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto,1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 420px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col1 col1' col2 col2'`)}
};
`;

export const Column1 = styled.div`
margin-bottom: 15px;
margin-right: 10px;
grid-area: col1;
`;

export const Column2 = styled.div`
margin-bottom: 50px;
margin-left: 50px;
grid-area: col2;
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 80px;
`;

export const TopLine = styled.p`
color: darkgoldenrod;
font-size: 26px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1px;
text-transform: uppercase;
margin-bottom: 20px;
align-text: center;

@media screen and (max-width: 820px) {
    font-size: 20px;
    padding-left: 350px;
`;


export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 20px;
line-height: 1.2;
font-weight: 700;
color: goldenrod;
text-align: flex;

@media screen and (max-width: 820px) {
    font-size: 15px;
    padding-left: 350px;
   
}
`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : "#fff")};
`;

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;

@media screen and (max-width: 820px) {
    font-size: 10px;
    padding-left: 350px;

`;

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`;

export const Img = styled.img`
width: 100vh;
margin-right: 1000px;
margin-left: 50px;
margin-top: 50px;
margin-bottom: 50px;
padding-right: 50px;
`;