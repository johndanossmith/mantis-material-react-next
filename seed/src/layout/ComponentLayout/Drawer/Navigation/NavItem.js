import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';

// next
import NextLink from 'next/link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Avatar, Chip, Link, ListItemButton, ListItemText, Typography, ListItemIcon } from '@mui/material';

// project import
import Dot from 'components/@extended/Dot';
import useConfig from 'hooks/useConfig';

import { MenuOrientation, ThemeMode } from 'config';
import { dispatch, useSelector } from 'store';
import { openDrawer } from 'store/reducers/menu';

// types
import { activeComponent } from 'store/reducers/menu';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item }) => {
  const theme = useTheme();
  const menu = useSelector((state) => state.menu);

  const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));
  const { drawerOpen } = menu;

  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuOrientation } = useConfig();

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <NextLink href={item.url} passHref legacyBehavior ref={ref}>
        <Link {...props} target={itemTarget} />
      </NextLink>
    ))
  };

  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch(activeComponent({ openComponent: item.id }));
    }
    // eslint-disable-next-line
  }, []);

  const textColor = theme.palette.mode === ThemeMode.DARK ? 'grey.400' : 'text.primary';
  const iconSelectedColor = theme.palette.mode === ThemeMode.DARK ? 'text.primary' : 'primary.main';

  return (
    <>
      {menuOrientation === MenuOrientation.VERTICAL || downLG ? (
        <ListItemButton
          {...listItemProps}
          disabled={item.disabled}
          selected={isSelected}
          sx={{
            zIndex: 1201,
            pl: drawerOpen ? `${level * 28}px` : 1.5,
            py: !drawerOpen && level === 1 ? 1.25 : 1,
            ...(drawerOpen && {
              '&:hover': {
                bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter'
              },
              '&.Mui-selected': {
                bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter',
                borderRight: `2px solid ${theme.palette.primary.main}`,
                color: iconSelectedColor,
                '&:hover': {
                  color: iconSelectedColor,
                  bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter'
                }
              }
            }),
            ...(!drawerOpen && {
              '&:hover': {
                bgcolor: 'transparent'
              },
              '&.Mui-selected': {
                '&:hover': {
                  bgcolor: 'transparent'
                },
                bgcolor: 'transparent'
              }
            })
          }}
          {...(matchDownLg && {
            onClick: () => dispatch(openDrawer(false))
          })}
        >
          {itemIcon && (
            <ListItemIcon
              sx={{
                minWidth: 28,
                color: isSelected ? iconSelectedColor : textColor,
                ...(!drawerOpen && {
                  borderRadius: 1.5,
                  width: 36,
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter'
                  }
                }),
                ...(!drawerOpen &&
                  isSelected && {
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.900' : 'primary.lighter',
                    '&:hover': {
                      bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.darker' : 'primary.lighter'
                    }
                  })
              }}
            >
              {itemIcon}
            </ListItemIcon>
          )}
          {(drawerOpen || (!drawerOpen && level !== 1)) && (
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
                  {item.title}
                </Typography>
              }
            />
          )}
          {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
            <Chip
              color={item.chip.color}
              variant={item.chip.variant}
              size={item.chip.size}
              label={item.chip.label}
              avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
            />
          )}
        </ListItemButton>
      ) : (
        <ListItemButton
          {...listItemProps}
          disabled={item.disabled}
          selected={isSelected}
          sx={{
            zIndex: 1201,
            ...(drawerOpen && {
              '&:hover': {
                bgcolor: 'transparent'
              },
              '&.Mui-selected': {
                bgcolor: 'transparent',
                color: iconSelectedColor,
                '&:hover': {
                  color: iconSelectedColor,
                  bgcolor: 'transparent'
                }
              }
            }),
            ...(!drawerOpen && {
              '&:hover': {
                bgcolor: 'transparent'
              },
              '&.Mui-selected': {
                '&:hover': {
                  bgcolor: 'transparent'
                },
                bgcolor: 'transparent'
              }
            })
          }}
        >
          {itemIcon && (
            <ListItemIcon
              sx={{
                minWidth: 36,
                ...(!drawerOpen && {
                  borderRadius: 1.5,
                  width: 36,
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  '&:hover': {
                    bgcolor: 'transparent'
                  }
                }),
                ...(!drawerOpen &&
                  isSelected && {
                    bgcolor: 'transparent',
                    '&:hover': {
                      bgcolor: 'transparent'
                    }
                  })
              }}
            >
              {itemIcon}
            </ListItemIcon>
          )}

          {!itemIcon && (
            <ListItemIcon
              sx={{
                color: isSelected ? 'primary.main' : 'secondary.main',
                ...(!drawerOpen && {
                  borderRadius: 1.5,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  '&:hover': {
                    bgcolor: 'transparent'
                  }
                }),
                ...(!drawerOpen &&
                  isSelected && {
                    bgcolor: 'transparent',
                    '&:hover': {
                      bgcolor: 'transparent'
                    }
                  })
              }}
            >
              <Dot size={4} color={isSelected ? 'primary' : 'secondary'} />
            </ListItemIcon>
          )}
          <ListItemText
            primary={
              <Typography variant="h6" color="inherit">
                {item.title}
              </Typography>
            }
          />
          {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
            <Chip
              color={item.chip.color}
              variant={item.chip.variant}
              size={item.chip.size}
              label={item.chip.label}
              avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
            />
          )}
        </ListItemButton>
      )}
    </>
  );
};

NavItem.propTypes = {
  item: PropTypes.object
};

export default NavItem;
