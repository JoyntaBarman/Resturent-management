import { Link, Outlet } from 'react-router-dom';
import DashLink from '../pages/dashboard/dashboardLink/DashLink';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [screenWidth, setScreenWidth] = useState(innerWidth);

  const handleResize = () => {
    setScreenWidth(innerWidth);
  };

  console.log(screenWidth);

  useEffect(() => {
    addEventListener('resize', handleResize);

    return () => removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-6">
      <div className="hidden lg:flex bg-yellow-600 min-h-screen text-black flex-col items-center font-medium gap-5 py-5">
        <div className="flex flex-col items-start gap-4">
          <Link to={'/'} className="mb-4">
            <h1 className="uppercase text-2xl font-semibold">Bistro boss</h1>
            <h1 className="uppercase text-2xl font-light flex-1 tracking-widest text-center">
              Resture
            </h1>
          </Link>
          <DashLink />
        </div>
      </div>

      {/* mobile dashboard menu */}
      {screenWidth < 1024 && (
        <div className="lg:hidden bg-yellow-600 min-h-screen text-black flex flex-col items-center font-medium gap-5 py-5">
          <div className="flex flex-col items-start gap-4">
            <Link to={'/'} className="mb-4">
              <h1 className="uppercase text-2xl font-semibold">Bistro boss</h1>
              <h1 className="uppercase text-2xl font-light flex-1 tracking-widest text-center">
                Resture
              </h1>
            </Link>
            <DashLink />
          </div>
        </div>
      )}
      <div className="lg:col-span-5 w-full min-h-screen relative">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
