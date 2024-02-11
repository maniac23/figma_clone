'use client';

import Image from 'next/image';
import { memo } from 'react';

import { navElements } from '@/constants';
import { ActiveElement, NavbarProps } from '@/types/type';
import ActiveUsers from './users/ActiveUsers';

// import { Button } from "./ui/button";
// import ShapesMenu from "./ShapesMenu";
// import ActiveUsers from "./users/ActiveUsers";
// import { NewThread } from "./comments/NewThread";

const Navbar = () => {
  return (
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white ">
      <Image src="/assets/logo.svg" alt="logo" width={58} height={20} />
      <ActiveUsers />
    </nav>
  );
};

export default Navbar;
