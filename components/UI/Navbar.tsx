import { useTheme, Text, Spacer, Link } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <header
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0x 10px ",
        backgroundColor: theme?.colors.red600.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="Logo do app"
        width={90}
        height={90}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites/Favorites" passHref>
        <Link>
          <Text css={{ paddingRight: "$10", fontWeight: "700" }}>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </header>
  );
};
