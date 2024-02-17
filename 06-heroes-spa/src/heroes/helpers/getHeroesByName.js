

import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
  name = name.toLocaleLowerCase().trim();
  if (name.lastIndexOf === 0) {
    return [];
  }

  return heroes.filter(h => h.superhero.toLocaleLowerCase().includes(name));

}
