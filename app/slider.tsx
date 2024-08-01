// Carousel.tsx
"use client";

import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-270%);
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;  /* Adjust this to fit your design */
  height: 100px;  /* Adjust height as needed */
  overflow: hidden;
  margin: auto;
`;

const SlideWrapper = styled.div`
  display: flex;
  align-items: center;  /* Center items vertically */
  width: 100%;
  height: 100%;
  animation: ${scroll} 5s linear infinite;
`;

const Slide = styled.div`
  flex: 0 0 70%;  /* Adjust this based on the number of images */
  box-sizing: border-box;
  display: flex;
  justify-content: center;  /* Center items horizontally */
  align-items: center;  /* Center items vertically */
`;

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const extendedImages = [...images, ...images]; // Duplicate images for continuous scrolling

  return (
    <CarouselContainer>
      <SlideWrapper>
        {extendedImages.map((image, index) => (
          <Slide key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </Slide>
        ))}
      </SlideWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
