import React from 'react';
import styled from 'styled-components';
import { Layout, Typography } from '@jksaunders/bonfire';
import { observer } from 'mobx-react-lite';
import useStores from '@stores';

const Content = styled(Layout)`
  background-color: rgba(255, 255, 255, 0.7);
`;

const ExampleStoreUsage = observer(() => {
  const { authStore } = useStores();
  // eslint-disable-next-line no-console
  console.log(authStore.isLoggedIn);
  return null;
});

const ExamplePage = () => (
  <Content height="auto" width="100%" padding="16px" centered>
    <Typography>I&apos;m an example page!</Typography>
    <ExampleStoreUsage />
  </Content>
);

export default ExamplePage;
