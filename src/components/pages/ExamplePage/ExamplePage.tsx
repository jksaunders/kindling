import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import useStores from '../../../stores';
import { ROUTES } from '../../Routes';

const StyledComponentsExample = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

interface AnimatedButtonProps {
  onClick: () => void;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ children, onClick }) => {
  const transitions = useTransition(true, null, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.button key={key} style={props} onClick={onClick}>
              {children}
            </animated.button>
          )
      )}
    </>
  );
};

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
      <AnimatedButton onClick={(): void => history.push(ROUTES.ANOTHER_PAGE)}>
        Go to another page
      </AnimatedButton>
    </StyledComponentsExample>
  );
};

export default ExamplePage;
