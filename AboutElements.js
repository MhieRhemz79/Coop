import styled from 'styled-components';
// import About from './About';

export const GalleryContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const GalleryBg = styled.div`
    position: absolute;
    top: 70px;
    right: 0;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 85%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    // -o-object-fit: ;
    // object-fit: ;
    background: #232a34;
`;