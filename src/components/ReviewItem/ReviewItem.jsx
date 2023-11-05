import React from 'react';
import { StarRating } from 'components/StarRating';
import { Avatar, Name, Text } from './ReviewItem.styled';

export const ReviewItem = ({ review }) => {
  const { avatar, name, rating, description } = review;
  return (
    <>
      <Avatar src={avatar} alt="user avatar" />
      <Name>{name}</Name>
      <StarRating rating={rating} />
      <Text>❝ {description} ❞</Text>
    </>
  );
};
