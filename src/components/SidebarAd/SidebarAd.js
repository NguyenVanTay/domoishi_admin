/** @format */

import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { PowerIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/constant";
const SidebarAd = () => {
  // Navigate

  const navigate = useNavigate();

  const [openEcommerce, setOpenEcommerce] = useState(false);
  const [openUser, setOpenUsers] = useState(false);
  const handleOpenEcommerce = () => setOpenEcommerce((cur) => !cur);
  const handleOpenUsers = () => setOpenUsers((cur) => !cur);

  return (
    <Card className="h-full w-full p-4 shadow-xl shadow-blue-gray-900/5">
      <List>
        <div className="flex items-center justify-between ">
          <button className="cursor-pointer">
            <p className="text-xl">Doimoishi Admin</p>
          </button>
          <div className="flex flex-col items-center gap-1">
            <div className="h-6 w-6  rounded-full">
              <img
                className="h-6 w-6 bg-green-300 rounded-full"
                src="https://png.pngtree.com/png-vector/20190629/ourmid/pngtree-office-work-user-icon-avatar-png-image_1527655.jpg"
              ></img>
            </div>
            <p className="">admin</p>
          </div>
        </div>
        <ListItem
          className=""
          onClick={() => {
            navigate("../" + path.CONTENTMANAGE);
          }}
        >
          <div className="text-lg flex items-center gap-2">
            <ListItemPrefix>
              <Icon
                icon="fluent:content-view-20-regular"
                className="h-5 w-5"
              ></Icon>
            </ListItemPrefix>
            <p className=""> Contents</p>
          </div>
        </ListItem>
        <ListItem
          className=""
          onClick={() => {
            navigate("../" + path.JOBMANAGE);
          }}
        >
          <div
            className="text-lg flex items-center gap-2"
            onClick={() => {
              navigate("../" + path.JOBMANAGE);
            }}
          >
            <ListItemPrefix>
              <Icon
                icon="oui:ml-outlier-detection-job"
                className="h-5 w-5"
              ></Icon>
            </ListItemPrefix>
            <p className="">Jobs</p>
          </div>
        </ListItem>
        <ListItem
          className=""
          onClick={() => {
            navigate("../" + path.EVENTMANAGE);
          }}
        >
          <div className="text-lg flex items-center gap-2">
            <ListItemPrefix>
              <Icon icon="mdi:events-check" className="h-5 w-5"></Icon>
            </ListItemPrefix>
            <p className="">Events</p>
          </div>
        </ListItem>

        <Accordion open={openEcommerce} className="overflow-hidden">
          <AccordionHeader
            onClick={() => handleOpenEcommerce()}
            className="py-0 text-lg"
          >
            <ListItem className="flex gap-2 items-center">
              <ListItemPrefix>
                <Icon
                  className="h-5 w-5"
                  icon={"healthicons:market-stall-outline"}
                ></Icon>
              </ListItemPrefix>
              <p className="text-lg">E-Commerce</p>

              <ChevronDownIcon className="h-5 w-5" />
            </ListItem>
          </AccordionHeader>
          <AccordionBody>
            <div
              className=" flex items-center justify-start pl-10 gap-x-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer"
              onClick={() => {
                navigate("../" + path.PRODUCTMANAGE);
              }}
            >
              <Icon icon="gridicons:product" width={20} height={20}></Icon>
              <p className="">Product Manage</p>
            </div>

            <div
              className=" flex items-center justify-start pl-10 gap-x-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer"
              onClick={() => {
                navigate("../" + path.CATEGORYMANAGE);
              }}
            >
              <Icon
                icon="icon-park-outline:ad-product"
                width={20}
                height={20}
              ></Icon>
              <p className="">Categories Manage</p>
            </div>
          </AccordionBody>
        </Accordion>

        <ListItem
          className=" text-lg flex  items-center gap-2"
          onClick={() => {
            navigate("../" + path.LOGIN);
          }}
        >
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <p className="">Log out</p>
        </ListItem>
      </List>
    </Card>
  );
};
export default SidebarAd;
