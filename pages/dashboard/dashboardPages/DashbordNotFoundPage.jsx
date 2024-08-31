import { Link } from "react-router-dom";

const DashbordNotFoundPage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <div>
        <h1 className="text-5xl text-gray-700 font-bold">404</h1>
        <p className="text-sm text-gray-400">
          Your search page does not found. please go back to <Link to={'/dashboard/home'} className="text-blue-500 hover:to-blue-600 cursor-pointer duration-300">Dashboard page.</Link>
        </p>
      </div>
    </div>
  );
};

export default DashbordNotFoundPage;