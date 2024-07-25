import axios from "axios";

import {
  PokemonData,
  fetchRandomPokemon,
  fetchRandomOtherPokemons,
} from "./api.js";

export const addOtherPokemonClickListener = () => {
  const otherPokemonSelectors = document.querySelectorAll(".PokeOthers");

  otherPokemonSelectors.forEach((element) => {
    element.addEventListener("click", async () => {
      const pokemonName = element.dataset.name;
      if (pokemonName) {
        PokemonData(pokemonName);
      }

      const randomId = Math.floor(Math.random() * 898) + 1;
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/${randomId}"
        );
        const dataApi = response.data;
        element.src = dataApi.sprites.front_default;
        element.dataset.name = dataApi.name;
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    });
  });
};

export const addSearchButtonClickListener = () => {
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-input");

  searchButton.addEventListener("click", () => {
    const pokemonName = searchInput.value.trim().toLowerCase();
    if (pokemonName) {
      PokemonData(pokemonName);
    } else {
      console.error("Please enter a Pokémon name.");
    }
  });
};