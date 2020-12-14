import React, { FC } from 'react';
import styled from 'styled-components';

const StyledComponentsExample = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const ExamplePage: FC = () => (
  <StyledComponentsExample>I&apos;m an example page!</StyledComponentsExample>
);

export default ExamplePage;
