import { Outlet } from '~/modules';

import { DashboardLayout } from './dashboard-layout';

const RootApp = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default RootApp;
