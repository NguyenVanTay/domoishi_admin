/** @format */

import { LoginPage } from "../pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: <LoginPage />,
    main: () => <LoginPage />,
  },
];

export default routes;
