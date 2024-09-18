import { Link, NavLink } from "react-router-dom";
import { routes } from "../routes";
import { BasketCounter } from "../features/Basket/BasketCounter";
import { FaBasketShopping } from "react-icons/fa6";
import { ReactNode } from "react";

type Props = {
  to: string;
  children: string | ReactNode;
};

const MenuNavLink = ({ to, children }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive
          ? "text-lime-500"
          : isPending
          ? "text-yellow-600"
          : "text-slate-500"
      }
    >
      {children}
    </NavLink>
  );
};

export const Menu = () => {
  return (
    <nav className="fixed w-full p-4 z-10 border-b text-slate-500 bg-white">
      <ul className="flex flex-row justify-between items-center md:mx-10 lg:mx-20">
        <li>
          <Link to={routes.HOME.path}>
            <img className="w-32" src="/images/logo.png" alt="" />
          </Link>
        </li>
        <div className="flex items-center mt-2">
          <li>
            <MenuNavLink to={routes.PRODUCTS.path}>Sklep</MenuNavLink>
          </li>
          <li className="mx-2">
            <MenuNavLink to={routes.BASKET.path}>
              <div className="flex">
                <FaBasketShopping className="mt-1 ml-2 text-xl" />
                <BasketCounter />
              </div>
            </MenuNavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};
