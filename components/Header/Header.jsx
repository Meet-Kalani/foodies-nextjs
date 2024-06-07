import React from "react";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import HeaderBackground from "../HeaderBackground/HeaderBackground";
import Navlink from "./Navlink/Navlink";

const Header = () => {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logoImg.src}
            width={100}
            height={100}
            alt="A plate with food on it"
            priority
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
