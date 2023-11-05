import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from './Phone.styled';

export const Phone = ({ mobile }) => {
  return (
    <Link href="tel:+380669874518" mobile={mobile}>
      <FaPhoneAlt />
      <span>38(066)-987-45-18</span>
    </Link>
  );
};
