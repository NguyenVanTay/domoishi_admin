/** @format */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
// import { differenceInYears, parse } from "date-fns";
import { Tabs } from "antd";

export const path = {
  // Product
  LOGIN: "/",
  PRODUCTMANAGE: "/manage-product",
  PRODUCTADD: "/create-product",
  PRODUCTVIEW: "/view-product",
  PRODUCTEDIT: "/edit-product",

  // Category
  CATEGORYMANAGE: "/manage-category",
  CATEGORYADD: "/create-category",
  CATEGORYEDIT: "/edit-category",

  // Contents

  CONTENTMANAGE: "/manage-content",
  CONTENTCREATE: "/create-content",
  CONTENTEDIT: "/edit-content",

  // Events
  EVENTMANAGE: "/manage-event",
  EVENTCREATE: "/create-event",
  EVENTEDIT: "/edit-event",

  // Jobs
  JOBMANAGE: "/manage-job",
  JOBCREATE: "/create-job",
  JOBEDIT: "/edit-job",
};
export const formatVietnameseToString = (keyword) => {
  return keyword
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const formatCurrency = (price) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "VND",
  }).format(price);
};
export const useOnKeyPress = (callback, targetkey, searchKey) => {
  useEffect(() => {
    if (searchKey !== "") {
      const keyPressHandler = (event) => {
        if (event.key === targetkey) {
          callback();
        }
      };
      window.addEventListener("keydown", keyPressHandler);
      return () => {
        window.removeEventListener("keydown", keyPressHandler);
      };
    }
  }, [callback, targetkey]);
};

export const SliceString = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

export const yearOld = (date, currentYear) => {
  // const dateParsed = parse(date, "dd.MM.yyyy", new Date());
  // const year_old = differenceInYears(new Date(currentYear, 1, 1), dateParsed);
  // return year_old;
  return 0;
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
