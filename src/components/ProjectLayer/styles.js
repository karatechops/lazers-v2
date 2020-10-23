import styled, { keyframes } from 'styled-components';
import ContentWrap from '../ContentWrap';

const slideIn = keyframes`
  0% {
    transform: translateX(-50%) translateY(100%);
  }

  90% {
    transform: translateX(-50%) translateY(-51%);
  }

  100% {
    transform: translateX(-50%) translateY(-50%);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%);
  }

  100% {
    transform: translateX(-50%) translateY(100%);
  }
`;

export const CloseButton = styled.a`
  position: absolute;
  height: 25px;
  width: 25px;
  cursor: pointer;
  left: 30px;
  top: 30px;
  img {
    width: 25px;
    height: auto;
  }
`;

export const ProjectImage = styled.div`
  padding-right: 2rem;
  align-items: center;
  justify-content: center;

  img {
    height: auto;
    width: 100%;
  }
`;

export const Button = styled.a`
  background-color: #eee;
  color: #000;
  border: none;
  border-radius: 6px;
  padding: 0.7rem;
  margin-top: 2rem;
  font-family: 'Staatliches', Arial, san-serif;
  font-size: 1.5rem;
  line-height: 1;
  -webkit-font-smoothing: antialiased;

  &:focus {
    outline: 2px solid pink;
    border-radius: 6px;
    outline-offset: -2px;
  }
`;

export const ProjectLayerLayout = styled(ContentWrap)`
  display: flex;
  position: fixed;
  z-index: 3;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: rgba(19, 11, 33, 0.99);
  padding: 60px;
  text-align: left;
  box-sizing: border-box;
  border-radius: 40px;

  animation: ${slideIn} 0.4s ease-in-out;

  &.is-leaving {
    animation: ${slideOut} 0.4s ease-in-out;
    animation-fill-mode: forwards;
  }
`;

export const Copy = styled.div`
  position: relative;
  overflow: auto;
  padding-right: 2rem;

  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #21121e;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #a796a4;
  }
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  box-sizing: border-box;
  max-height: 80vh;

  & > ${Copy}, & > ${ProjectImage} {
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
  }

  h1 {
    font-size: 6rem;
    padding-bottom: 1rem;
  }

  p {
    width: 100%;
    font-size: 1.5rem;
    line-height: 1.2;
  }

  @media (max-width: 1175px) {
    flex-direction: column;
    overflow: auto;

    &::-webkit-scrollbar {
      border-radius: 10px;
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: #21121e;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #a796a4;
    }
    ${Copy} {
      overflow: visible;
    }

    ${ProjectImage} {
      padding-right: 6px;
      padding-bottom: 1rem;
    }
  }
`;
