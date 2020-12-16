import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useStores from '../../../stores';
import { ROUTES } from '../../Routes';

const StyledComponentsExample = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const StoresExampleUsage = observer(() => {
  const { userStore } = useStores();
  return <div>{userStore.name}</div>;
});

const ExamplePage: FC = () => {
  const history = useHistory();
  return (
    <StyledComponentsExample>
      I&apos;m an example page!
      <StoresExampleUsage />
      <button onClick={(): void => history.push(ROUTES.ANOTHER_PAGE)}>
        Go to another page
      </button>
    </StyledComponentsExample>
  );
};

export default ExamplePage;
