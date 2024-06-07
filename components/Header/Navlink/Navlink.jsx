"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./Navlink.module.css";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();

  const classes = pathname.startsWith(href)
    ? `${styles.active} ${styles.navlink}`
    : styles.navlink;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

export default Navlink;
