import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from './links/button-link';
import ScrollIndicator from './scroll-indicator';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';
import Particles from 'react-tsparticles';

const Background = styled(Particles)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 50%;
  z-index: -99;
`;

const fadeIn = keyframes`
0%{
opacity: 0;
translate
}
100%{
 opacity: 1;
}
`;

const StyledHeroSection = styled(StyledSection)`
  z-index: 1;
  min-height: calc(100vh - 2 * var(--header-height));
  position: relative;
  margin: 0;
  width: 100%;
  ${mq.gt.sm} {
    max-width: 100%;
    min-height: calc(100vh - var(--header-height));
  }
`;

const HeroContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  a {
    display: inline-flex;
  }
  animation: ${fadeIn} 1s ease-out;
  animation-fill-mode: forwards;

  ${mq.lt.sm} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const StyledIntroduction = styled.div`
  color: var(--primary-color);
  font-weight: normal;
`;
const StyledAuthor = styled.h1`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledTagline = styled.h2`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  color: var(--primary-color);
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledDescription = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  max-width: 500px;
`;

const Hero = ({ data }) => {
  const { introduction, author, tagline, description, ctaLink, ctaLabel } = data;

  return (
    <StyledHeroSection>
      <Background
        id="tsparticles"
        options={{
          background: {
            color: {
              value: '#2f3061',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <HeroContainer>
        <StyledIntroduction>{introduction}</StyledIntroduction>
        <StyledAuthor>{author}</StyledAuthor>
        <StyledTagline>{tagline}</StyledTagline>
        <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
        <ButtonLink label={ctaLabel} link={ctaLink} />
        <ScrollIndicator />
      </HeroContainer>
    </StyledHeroSection>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
