import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import styled from 'styled-components';
import useStores from '../../../stores';

const StyledComponentsExample = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const StoresExampleUsage = observer(() => {
  const { userStore } = useStores();
  return <div>{userStore.name}</div>;
});

const ExamplePage: FC = () => (
  <StyledComponentsExample>
    I&apos;m an example page!
    <StoresExampleUsage />
  </StyledComponentsExample>
);

export default ExamplePage;
