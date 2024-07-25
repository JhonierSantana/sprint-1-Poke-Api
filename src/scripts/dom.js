import pokebola from "../images/pokebola.png";
import pokodex from "../images/pokedex-logo.png";

export const initializeImages = () => {
  const pokebolaImg = document.querySelector(".pokebola");
  const pokedexLogoImg = document.querySelector(".pokedexIcon");

  pokebolaImg.src = pokebola;
  pokedexLogoImg.src = pokodex;
};
