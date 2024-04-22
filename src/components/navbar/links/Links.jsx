"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "../Navbar.module.css";

const links = [
  { link: "/movies", label: "MOVIES" },
  { link: "/topIMDb", label: "TOP IMDB" },
  { link: "/tvShows", label: "TV SHOWS" },
];

const Links = () => {
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} passHref>
      <div
        data-active={active === link.link || undefined}
        onClick={() => {
          setActive(link.link);
        }}
        className={classes.link}
      >
        {link.label}
      </div>
    </Link>
  ));

  return items;
};

export default Links;
