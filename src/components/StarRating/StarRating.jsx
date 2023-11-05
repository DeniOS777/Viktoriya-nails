import React from 'react';
import { IoStarOutline, IoStar } from 'react-icons/io5';
import { Container, WrapOutline, WrapColor } from './StarRating.styled';

export const StarRating = ({ rating }) => {
  return (
    <Container>
      <WrapOutline>
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
      </WrapOutline>
      <WrapColor rating={rating}>
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
      </WrapColor>
    </Container>
  );
};
