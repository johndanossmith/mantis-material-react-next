import PropTypes from 'prop-types';

// scroll bar
import 'simplebar/dist/simplebar.css';

// apex-chart
import 'styles/apex-chart.css';
import 'styles/react-table.css';

// next
import { SessionProvider } from 'next-auth/react';

// third party
import { Provider as ReduxProvider } from 'react-redux';

// project import
import Locales from 'components/Locales';
import ScrollTop from 'components/ScrollTop';
// import RTLLayout from 'components/RTLLayout';
import Snackbar from 'components/@extended/Snackbar';
import Notistack from 'components/third-party/Notistack';
// import { ConfigProvider } from 'contexts/ConfigContext';
import { store } from 'store';
import ThemeCustomization from 'themes';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ReduxProvider store={store}>
      {/* <ConfigProvider> */}
      <ThemeCustomization>
        {/* <RTLLayout> */}
        <Locales>
          <ScrollTop>
            <SessionProvider session={pageProps.session} refetchInterval={0}>
              <>
                <Notistack>
                  <Snackbar />
                  {getLayout(<Component {...pageProps} />)}
                </Notistack>
              </>
            </SessionProvider>
          </ScrollTop>
        </Locales>
        {/* </RTLLayout> */}
      </ThemeCustomization>
      {/* </ConfigProvider> */}
    </ReduxProvider>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};
