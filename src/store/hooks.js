/** @format */

import { useContext } from "react";
import Context from "./Context";

export const useStore = () => {
  const [State, dispatch] = useContext(Context);
  return useContext(Context);
};
