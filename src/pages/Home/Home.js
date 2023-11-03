import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';

const HomeContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
}
