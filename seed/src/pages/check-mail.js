// next
import NextLink from 'next/link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Divider, Typography, useMediaQuery } from '@mui/material';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import AuthWrapper from 'sections/auth/AuthWrapper';

// ================================|| CHECK MAIL ||================================ //

const CheckMail = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Hi, Check Your Mail</Typography>
            <Typography color="secondary" sx={{ mb: 0.5, mt: 1.25 }}>
              We have sent a password recover instructions to your email.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <AnimateButton>
            <NextLink href="/login" passHref legacyBehavior>
              <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                Sign in
              </Button>
            </NextLink>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Divider>
            <Typography variant={matchDownSM ? 'subtitle1' : 'h5'}>Sign up with</Typography>
          </Divider>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default CheckMail;
