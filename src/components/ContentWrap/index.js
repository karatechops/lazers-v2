import React from 'react';
import styled from 'styled-components';

export const ContentWrap = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))`
  width: 100%;
  max-width: 1790px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 4rem 2rem;
  text-align: center;
`;

export default ContentWrap;
