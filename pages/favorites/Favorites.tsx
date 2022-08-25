import React, { useEffect, useState } from "react";

import NoFavorites from "../../components/UI/NoFavorites";
import { Layout } from "../../components/layouts";
import { localFavorites } from "../../utils";
import { FavoritesPokemons } from "../../components/pokemon";

const Favorites = () => {
  const [favoritePokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
