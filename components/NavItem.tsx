/*
import React from "react";
import { useRouter } from "next/router";
import propTypes from "prop-types";

const NavItem = (item: any) => {
  const router = useRouter();
  return <>{router.pathname === "/" ? item : ""}</>;
};

export default NavItem;

// proptypes check
NavItem.propTypes = {
  item: propTypes.string,
};
*/

import Link from "next/link";
const NavItem = (text: any) => {
  return (
    <Link href={"/"}>
      <a className={`nav__link`}>{text}</a>
    </Link>
  );
};

export default NavItem;