import axios from "axios";

export const PokemonData = async (pokemonName) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const dataApi = response.data;
    document.querySelector(".pokemon-name").textContent =
      dataApi.name.toUpperCase();
    document.querySelector(".pokeImg").src = dataApi.sprites.front_default;
    document.querySelector(".pokemon-No").textContent = dataApi.id;
    document.querySelector(".pokemon-level").textContent =
      Math.floor(Math.random() * 100) + 1;
    document.querySelector(".pokemon-type").textContent = dataApi.types
      .map((type) => type.type.name)
      .join(", ")
      .toUpperCase();
    document.querySelector(".pokemon-ability").textContent = dataApi.abilities
      .map((ability) => ability.ability.name)
      .join(", ")
      .toUpperCase();
    document.querySelector(".pokemon-height").textContent = `${
      dataApi.height / 10
    } M`;
    document.querySelector(".pokemon-weight").textContent = `${
      dataApi.weight / 10
    } KG`;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
};

export const fetchRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1;
  await PokemonData(randomId);
};

export const fetchRandomOtherPokemons = async () => {
  const otherPokemonSelectors = document.querySelectorAll(".PokeOthers");

  for (let i = 0; i < otherPokemonSelectors.length; i++) {
    const randomId = Math.floor(Math.random() * 898) + 1;
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      const dataApi = response.data;
      otherPokemonSelectors[i].src = dataApi.sprites.front_default;
      otherPokemonSelectors[i].dataset.name = dataApi.name;
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  }
};
