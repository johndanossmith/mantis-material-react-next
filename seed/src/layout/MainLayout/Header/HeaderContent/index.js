import { useMemo } from 'react';

// material-ui

import { Box, useMediaQuery } from '@mui/material';

// project import
import Search from './Search';
import Message from './Message';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import MegaMenuSection from './MegaMenuSection';
import DrawerHeader from 'layout/MainLayout/Drawer/DrawerHeader';

import { MenuOrientation } from 'config';
import useConfig from 'hooks/useConfig';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { menuOrientation } = useConfig();

  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const megaMenu = useMemo(() => <MegaMenuSection />, []);

  return (
    <>
      {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && <DrawerHeader open={true} />}
      {!downLG && <Search />}
      {!downLG && megaMenu}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}

      <Notification />
      <Message />
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </>
  );
};

export default HeaderContent;
