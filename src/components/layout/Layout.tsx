import React from 'react';
import HeaderTwo from '@/components/HeaderTwo';
import Footer from '@/components/Footer';
import DummyFooter from '../DummyFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderTwo isDarkLogoSame={true} />
      {children}
      <DummyFooter />
    </>
  );
};

export default Layout;
