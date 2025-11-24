import Link from "next/link";
import css from "./Header.module.css";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.header_wrapper}>
          <Link href="/" aria-label="Home" className={css.logo}>
            Travel<span className={css.logo_span}>Trucks</span>
          </Link>
          <nav aria-label="Main Navigation">
            <ul className={css.nav_list}>
              <li className={css.nav_el}>
                <Link href="/" className={css.nav_link}>
                  Home
                </Link>
              </li>
              <li className={css.nav_el}>
                <Link href="/catalog" className={css.nav_link}>
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
export default Header;
