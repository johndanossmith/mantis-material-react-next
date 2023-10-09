// material-ui
import { Grid } from '@mui/material';

// project-import
import Layout from 'layout';
import Page from 'components/Page';
import VirtualizedInfiniteScrollTable from 'sections/tables/react-table/VirtualizedInfiniteScrollTable';
import VirtualizedRowsTable from 'sections/tables/react-table/VirtualizedRowsTable';

// ==============================|| REACT TABLE - VIRTUALIZED ||============================== //

const VirtualizedRows = () => {
  return (
    <Page title="Basic Table">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <VirtualizedInfiniteScrollTable />
        </Grid>
        <Grid item xs={12}>
          <VirtualizedRowsTable />
        </Grid>
      </Grid>
    </Page>
  );
};

VirtualizedRows.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default VirtualizedRows;
