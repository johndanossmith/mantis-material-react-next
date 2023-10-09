// next
import NextLink from 'next/link';

// material-ui
import { Grid, Link, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthForgotPassword from 'sections/auth/auth-forms/AuthForgotPassword';

// ================================|| FORGOT PASSWORD ||================================ //

const ForgotPassword = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Forgot Password</Typography>
          <NextLink href="/login" passHref legacyBehavior>
            <Link variant="body1" color="primary">
              Back to Login
            </Link>
          </NextLink>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AuthForgotPassword />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default ForgotPassword;
