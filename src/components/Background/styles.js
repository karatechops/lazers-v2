import styled from 'styled-components';

export const BackgroundLayout = styled.div`
  z-index: -1;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  text-align: center;
  opacity: 0.7;

  video {
    height: 100%;
    width: 177.77777778vh; /* 100 * 16 / 9 */
    min-width: 100%;
    min-height: 56.25vw; /* 100 * 9 / 16 */
    filter: hue-rotate(${({ hue }) => hue}deg)
      brightness(${({ brightness }) => brightness})
      saturate(${({ saturate }) => saturate});
  }
`;
