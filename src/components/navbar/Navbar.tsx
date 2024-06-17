"use client";
import { useState } from "react";
import { Container, Group, Button, Autocomplete, rem } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Navbar.module.css";
import { IconSearch } from "@tabler/icons-react";
import Links from "@/components/navbar/links/Links";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../app/icon.ico"

const Navbar = () => {
  return (
    <header className={classes.header}>
      <Container size="responsive" className={classes.inner}>
        <Link href="/" passHref className={classes.logo}>
          <Image
            src={Logo}
            width={80}
            height={80}
            alt=""
          />
        </Link>
        <Group gap={5} visibleFrom="xs">
          <Links />
        </Group>
        <Autocomplete
          className={classes.search}
          placeholder="Search"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          data={[
            "React",
            "Angular",
            "Vue",
            "Next.js",
            "Riot.js",
            "Svelte",
            "Blitz.js",
          ]}
          visibleFrom="xs"
        />
        <Button variant="default" className={classes.login}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-user"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
            <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
          </svg>
          <span>&nbsp;&nbsp;</span>
          <span>Log in</span>
        </Button>
      </Container>
    </header>
  );
};

export default Navbar;
