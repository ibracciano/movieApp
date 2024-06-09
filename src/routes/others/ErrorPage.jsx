import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-cover bg-movie">
      <p className="text-4xl">
        {error.status} - {error.statusText}
      </p>
      <p className="text-4xl">{error.data}</p>
      <Link
        to=""
        className="text-transparent border-pink-400 cursor-pointer bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text"
      >
        &larr; Go back home{" "}
      </Link>
    </div>
  );
};

export default ErrorPage;
