import type { ReactElement } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import type { IconName } from '@/types/icon';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

interface StrokeProps {
  fill: 'none';
  stroke: string;
  strokeWidth: number;
  strokeLinecap: 'round';
  strokeLinejoin: 'round';
}

const icons: Record<IconName, (s: StrokeProps) => ReactElement> = {
  home: (s) => <Path {...s} d="M3 10.5 12 3l9 7.5M5.5 9.5v10h13v-10M9 19.5v-6h6v6" />,
  search: (s) => (
    <>
      <Circle {...s} cx="10.8" cy="10.8" r="8" />
      <Path {...s} d="m17 17 4 4" />
    </>
  ),
  cart: (s) => (
    <>
      <Path {...s} d="M2.5 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 1.9-1.5L21 8H6" />
      <Circle {...s} cx="9" cy="19.5" r="1.2" />
      <Circle {...s} cx="18" cy="19.5" r="1.2" />
    </>
  ),
  profile: (s) => (
    <>
      <Circle {...s} cx="12" cy="7" r="4" />
      <Path {...s} d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2z" />
    </>
  ),
  location: (s) => (
    <>
      <Path {...s} d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <Circle {...s} cx="12" cy="10" r="2.2" />
    </>
  ),
  phone: (s) => (
    <Path
      {...s}
      d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5 17.5 17.5 0 0 0 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4-2-2 2a14 14 0 0 1-6-6l2-2-2-6Z"
    />
  ),
  mail: (s) => (
    <>
      <Path {...s} d="M3.5 5.5h17v13h-17z" />
      <Path {...s} d="m4 7 8 6 8-6" />
    </>
  ),
};

export function Icon({ name, size = 24, color = '#111111' }: IconProps) {
  const stroke: StrokeProps = {
    fill: 'none',
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {icons[name](stroke)}
    </Svg>
  );
}
