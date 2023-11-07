import type { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div>
      <h2 className='text-xl text-center py-3 mb-3'>Dashboard</h2>
      {children}
    </div>
  );
};

export default DashboardLayout;
