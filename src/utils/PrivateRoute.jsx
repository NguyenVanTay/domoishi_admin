/** @format */

import {
  CategoriesEdit,
  CategoriesAdd,
  CategoriesManage,
  ProductAdd,
  ProductEdit,
  ProductView,
  ProductManage,

  // Contents
  ManageContents,
  CreateContent,
  EditContent,

  // Events
  ManageEvents,
  CreateEvent,
  EditEvent,

  // Jobs
  ManageJobs,
  CreateJob,
  EditJob,
} from "../pages";
import { path } from "./constant";

const routes = [
  // manage user
  // {
  //   path: "/dashboard",
  //   exact: true,
  //   component: <DashBoard />,
  //   main: () => <DashBoard />,
  // },
  // {
  //   path: "/userlist",
  //   exact: true,
  //   component: <UserList />,
  //   main: () => <UserList />,
  // },
  // {
  //   path: "/useredit",
  //   exact: true,
  //   component: <UserEdit />,
  //   main: () => <UserEdit />,
  // },
  // {
  //   path: "/useradd",
  //   exact: true,
  //   component: <UserAdd />,
  //   main: () => <UserAdd />,
  // },

  // {
  //   path: "/userview",
  //   exact: true,
  //   component: <UserView />,
  //   main: () => <UserView />,
  // },

  // manage product
  {
    path: path.PRODUCTMANAGE,
    exact: true,
    component: <ProductManage />,
    main: () => <ProductManage />,
  },
  {
    path: path.PRODUCTADD,
    exact: true,
    component: <ProductAdd />,
    main: () => <ProductAdd />,
  },
  {
    path: `${path.PRODUCTEDIT}/:id`,
    exact: true,
    component: <ProductEdit />,
    main: () => <ProductEdit />,
  },
  {
    path: `${path.PRODUCTVIEW}/:id`,
    exact: true,
    component: <ProductView />,
    main: () => <ProductView />,
  },

  // Categories
  {
    path: path.CATEGORYMANAGE,
    exact: true,
    component: <CategoriesManage />,
    main: () => <CategoriesManage />,
  },
  {
    path: `${path.CATEGORYEDIT}/:id`,
    exact: true,
    component: <CategoriesEdit />,
    main: () => <CategoriesEdit />,
  },
  {
    path: path.CATEGORYADD,
    exact: true,
    component: <CategoriesAdd />,
    main: () => <CategoriesAdd />,
  },

  // Content
  {
    path: path.CONTENTMANAGE,
    exact: true,
    component: <ManageContents />,
    main: () => <ManageContents />,
  },
  {
    path: `${path.CONTENTEDIT}/:id`,
    exact: true,
    component: <EditContent />,
    main: () => <EditContent />,
  },
  {
    path: path.CONTENTCREATE,
    exact: true,
    component: <CreateContent />,
    main: () => <CreateContent />,
  },

  // Event
  {
    path: path.EVENTMANAGE,
    exact: true,
    component: <ManageEvents />,
    main: () => <ManageEvents />,
  },
  {
    path: `${path.EVENTEDIT}/:id`,
    exact: true,
    component: <EditEvent />,
    main: () => <EditEvent />,
  },
  {
    path: path.EVENTCREATE,
    exact: true,
    component: <CreateEvent />,
    main: () => <CreateEvent />,
  },

  // Content
  {
    path: path.JOBMANAGE,
    exact: true,
    component: <ManageJobs />,
    main: () => <ManageJobs />,
  },
  {
    path: `${path.JOBEDIT}/:id`,
    exact: true,
    component: <EditJob />,
    main: () => <EditJob />,
  },
  {
    path: path.JOBCREATE,
    exact: true,
    component: <CreateJob />,
    main: () => <CreateJob />,
  },
];

export default routes;
