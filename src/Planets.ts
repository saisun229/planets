/**
 * @interface {Planets}
 */
export interface Planets {
    id: string;
    name: string;
    img: string;
    alt: string;
}

/**
 * {Planets} data
 */
export const planets: Array<Planets> = [
    {
      id: "mercury",
      name: "Mercury",
      img:"/img/mercury.jpeg",
      alt: "mercury planet image"
    },
    {
      id: "venus",
      name: "Venus",
      img:"/img/venus.jpeg",
      alt: "venus planet image"
    },
    {
      id: "earth",
      name: "Earth",
      img:"/img/earth.jpeg",
      alt: "earth planet image"
    },
    {
      id: "mars",
      name: "Mars",
      img:"/img/mars.jpeg",
      alt: "mars planet image"
    },
    {
      id: "jupiter",
      name: "Jupiter",
      img:"/img/jupiter.jpeg",
      alt: "jupiter planet image"
    },
    {
      id: "saturn",
      name: "Saturn",
      img:"/img/saturn.jpeg",
      alt: "saturn planet image"
    }
  ];

  //List of available planets
  export const allPlanets = planets.map(planet => planet.name.toLowerCase());