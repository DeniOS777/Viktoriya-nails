import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Link } from './Social.styled';

export const Social = () => {
  return (
    <Link
      href="https://www.instagram.com/viktoria_nails_slavyansk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </Link>
  );
};
