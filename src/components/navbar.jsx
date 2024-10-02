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
import { House, Info,  Phone, AlignJustify,ArrowRight } from "lucide-react";
import { Link } from "@mui/material";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <House />,
      href: "#principal",
    },
    {
      text: "Sobre",
      icon: <Info />,
      href: "#about",
    },
    {
      text: "Funcionamento",
      icon: <ArrowRight />,
      href: "#work",
    },
    {
      text: "Contato",
      icon: <Phone />,
      href: "#contato",
    }
  ];
  return (
    <nav className="flex items-center justify-between  bg-primary p-3">
      <div className="max-w-[160px] ml-4">
        <img src={Logo} alt="" className="w-24" />
      </div>
      <div className="mr-[3rem] text-black sm:inline hidden">
        <a href="#principal" className="mr-4 text-white text-lg font-medium">Home</a>
        <a href="#about" className="mr-4 text-white text-lg font-medium">Sobre</a>
        <a href="#work" className="mr-4 text-white text-lg font-medium">Funcionamento</a>
        <a href="tel:+553598784997" target="_blank" rel="noreferrer" className="py-[0.9rem] px-[1.75rem] bg-white rounded-full font-semibold text-lg cursor-pointer">Nos ligue (35)9878-4997</a>
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
            {menuOptions.map((data) => (
              <ListItem key={data.text} disablePadding>
                <Link href={data.href} underline="none"> 
                <ListItemButton>
                  <ListItemIcon>{data.icon}</ListItemIcon>
                  <ListItemText primary={data.text} />
                  
                </ListItemButton>
                </Link>
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