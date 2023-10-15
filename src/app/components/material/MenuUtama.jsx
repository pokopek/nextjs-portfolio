"use client"
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
import Link from "next/link";
   
  export default function MenuUtama() {
    return (
      <Menu>
        <MenuHandler>
          <Button>Open Menu</Button>
        </MenuHandler>
        <MenuList>
        </MenuList>
          <Link href="/playground">          
          <MenuItem className="text-coolGray-100" >playgroud</MenuItem>
          </Link>
          
          <Link href="/portofolio">          
          <MenuItem className="text-coolGray-100" >portofolio</MenuItem>
          </Link>

          
      </Menu>
    );
  }

