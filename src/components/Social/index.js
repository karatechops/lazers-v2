import React from 'react';
import styled from 'styled-components';

export const Social = styled(props => (
  <div {...props}>
    <a
      href="https://www.linkedin.com/in/lazers-alex/"
      target="__blank"
      rel="noopener noreferrer"
    >
      <img src="/static/linked-in.svg" alt="LinkedIn" />
    </a>
    <a
      href="https://twitter.com/lazersalex"
      target="__blank"
      rel="noopener noreferrer"
    >
      <img
        style={{ position: 'relative', top: '1px' }}
        src="/static/twitter.svg"
        alt="LinkedIn"
      />
    </a>
    <a
      href="https://github.com/karatechops"
      target="__blank"
      rel="noopener noreferrer"
    >
      <img src="/static/github.svg" alt="LinkedIn" />
    </a>
  </div>
))`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: flex-end;

  a {
    position: relative;
    transition: transform 0.2s ease-out;

    &:hover {
      transform: translateY(-2px);
    }
  }

  img {
    width: 25px;
    height: auto;
    margin-right: 1rem;
  }
`;

export default Social;
