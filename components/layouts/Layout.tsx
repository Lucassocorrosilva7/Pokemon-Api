import * as React from "react";
import Head from "next/head";
import { Navbar } from "../UI";

type Props = {
  children?: React.ReactNode;
  title?: React.ReactNode;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Lucas Silva" />
        <meta
          name="description"
          content={`Informação sobre pokémon : ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta
          property="og:title"
          content={`Informação sobre pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Está página é sobre ${title}`}
        />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
