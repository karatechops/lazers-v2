import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('${({ img }) => img}') center center no-repeat;
  background-size: cover;
  opacity: 0.9;
  transform: translateZ(0);
  transition: opacity 0.4s ease-out, filter 0.4s ease-out;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(18, 18, 26);
  opacity: 0;
  transform: translateZ(0);
  transition: opacity 0.4s ease-out, filter 0.4s ease-out;
`;

export const TileLayout = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    position: relative;
    z-index: 1;
    font-size: 5rem;
    font-weight: 100;
    opacity: 0;
    letter-spacing: 0.05rem;
    transition: opacity 0.6s ease-out;
  }

  &:hover {
    h2 {
      opacity: 1;
    }
    ${Background} {
      opacity: 0.4;
      filter: blur(4px) brightness(0.5);
    }
    ${BackgroundOverlay} {
      /* opacity: 0.6; */
      /* filter: blur(10px); */
    }
  }
`;
