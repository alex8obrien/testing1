import Link from "next/link";
const NavItem = (text: any) => {
  return (
    <Link href={"/"} className={`nav__link`}>
      {text}
    </Link>
  );
};

export default NavItem;