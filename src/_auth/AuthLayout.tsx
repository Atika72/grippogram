//this file gonna wrap both signin and signup forms
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center flex-col py-10 items-center">
            <Outlet />
          </section>

          <img
            src="/public/assets/images/animation.gif"
            alt=""
            className="hidden xl:block p-20 object-center bg-no-repeat w-1/2"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
