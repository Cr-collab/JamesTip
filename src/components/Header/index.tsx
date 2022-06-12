import { useEffect, useState } from "react";
import { useCrudProduct } from "../../hooks/useCrudProduct";

import { NavLink } from "react-router-dom";
import { MenuMobile } from "../MenuMobile";

import logo from "../../assets/JamesTip.png";
import { Container } from "./styles";

export function Header() {
  const { setIsVisibleMenuMobile, isVisibleMenuMobile } = useCrudProduct();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (event: any) => {
      if (event.target.innerWidth <= 600) {
        setIsVisibleMenuMobile(true);
      } else {
        setIsVisibleMenuMobile(false);
      }
    });
  }, []);


  return (
    <Container>
      <div>
        <img src={logo} alt="James Tip" />

        {!isVisibleMenuMobile ? (
          <nav>
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
          </nav>
        ) : (
          <MenuMobile isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
        )}
      </div>
    </Container>
  );
}
