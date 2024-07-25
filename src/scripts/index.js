import "../styles/main.scss";
import { initializeImages } from "./dom.js";
import { fetchRandomPokemon, fetchRandomOtherPokemons } from "./api.js";
import {
  addOtherPokemonClickListener,
  addSearchButtonClickListener,
} from "./events.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeImages();
  fetchRandomPokemon();
  fetchRandomOtherPokemons();
  addOtherPokemonClickListener();
  addSearchButtonClickListener();
});