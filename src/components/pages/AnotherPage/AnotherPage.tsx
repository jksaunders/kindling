import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '@jksaunders/bonfire';

const StyledComponentsExample = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const AnotherPage: FC = () => (
  <StyledComponentsExample>
    I&apos;m another example page!
    <Button color="blue" />
  </StyledComponentsExample>
);

export default AnotherPage;
