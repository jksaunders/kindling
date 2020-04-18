import React from 'react';
import styled from 'styled-components';
import { Layout, Typography } from '@jksaunders/bonfire';

const Content = styled(Layout)`
  background-color: rgba(255, 255, 255, 0.7);
`;

const ExamplePage = () => (
  <Content height="auto" width="100%" padding="16px" centered>
    <Typography>I&apos;m an example page!</Typography>
  </Content>
);

export default ExamplePage;
