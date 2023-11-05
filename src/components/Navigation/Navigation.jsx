import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavSite, Menu, Link } from './Navigation.styled';

const items = [
  {
    href: '/',
    label: 'header.navigation.link1',
  },
  {
    href: '#portfolio',
    label: 'header.navigation.link2',
  },
  {
    href: '#price',
    label: 'header.navigation.link3',
  },
  {
    href: '#contacts',
    label: 'header.navigation.link4',
  },
];

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <NavSite>
      <Menu>
        {items.map(({ href, label }) => (
          <li key={label}>
            <Link href={href}>{t(`${label}`)}</Link>
          </li>
        ))}
      </Menu>
    </NavSite>
  );
};
