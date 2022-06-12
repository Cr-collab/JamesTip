import { Dispatch } from "react";

import { NavLink } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

import { HiMenu } from "react-icons/hi";
import { styles } from "./styles";

interface MenuMobileProps {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobile({ isOpen, setIsOpen }: MenuMobileProps) {
  function handleClose() {
    setIsOpen(false);
  }

  function handleOpen() {
    setIsOpen(true);
  }
  return (
    <Menu
      customBurgerIcon={<HiMenu color="#00CFB3" />}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      styles={styles}
      right
      width={300}
    >
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Produtos
      </NavLink>
      <NavLink
        to="/create-product"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Criação de Produtos
      </NavLink>
    </Menu>
  );
}
