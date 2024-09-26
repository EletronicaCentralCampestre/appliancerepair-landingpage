/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../assets/eletronicacentral-logo.png";
// Material UI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// Lucide Icons
import { House, Info, MessageSquareText, Phone, AlignJustify } from "lucide-react";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <House />,
    },
    {
      text: "Sobre",
      icon: <Info />,
    },
    {
      text: "Relatos",
      icon: <MessageSquareText />,
    },
    {
      text: "Contato",
      icon: <Phone />,
    }
  ];
  return (
    <nav className="flex items-center justify-between  bg-primary p-3">
      <div className="max-w-[160px] ml-4">
        <img src={Logo} alt="" className="w-24" />
      </div>
      <div className="mr-[3rem] text-black sm:inline hidden">
        <a href="#principal" className="mr-4 text-white text-lg font-medium">Home</a>
        <a href="#sobre" className="mr-4 text-white text-lg font-medium">Sobre</a>
        <a href="#contato" className="mr-4 text-white text-lg font-medium">Contato</a>
        <a href="https://wa.me/todo" target="_blank" rel="noreferrer" className="py-[0.9rem] px-[1.75rem] bg-white rounded-full font-semibold text-lg cursor-pointer">Agende agora</a>
      </div>
      <div className="sm:hidden inline">
        <AlignJustify onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;