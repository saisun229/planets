import React, { useState } from "react";
import "./GeneratePlanets.css";
import { allPlanets } from "../../Planets";

export default function GeneratePlanets({ setPlanets }) {
  const [inputValue, setInputValue] = useState("");
  const [invalidPlanetEntries, setInvalidPlanetEntries] = useState([]);

  /**
   * On Submit form, validates and sets planets.
   *
   * @param {Event}
   * {handleSubmit}
   */
  const handleSubmit = (
    event: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    if (inputValue) {
      let planetsArray: Array<string> = inputValue.trim().split(",");
      setInvalidPlanetEntries([]);
      planetsArray = planetsArray.map((entry: string) => {
        return allPlanets.includes(entry.trim().toLowerCase())
          ? entry.trim().toLowerCase()
          : setInvalidPlanetEntries((previousEntries) => [
              ...previousEntries,
              entry,
            ]);
      }) as Array<string>;
      if (invalidPlanetEntries.length < 1) {
        setPlanets((prevState) =>
          //@ts-ignore type not determined yet.
          [...new Set([...prevState, ...planetsArray])]
        );
      }
    } else {
      setInvalidPlanetEntries([": Please enter valid data"]);
      event.preventDefault();
    }
  };

  /**
   * OnChange input value sets input value
   *
   * @param e {Event}
   */
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  return (
    <React.Fragment>
      {invalidPlanetEntries.length > 0 && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-100 generate-planets__err"
          role="alert"
        >
          <strong className="font-bold">Invalid input</strong>
          <span className="block sm:inline">
            : {invalidPlanetEntries.toString()}
          </span>
        </div>
      )}

      <form
        className="w-full max-w-sm generate-planets"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            id="generate-planets"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Earth"
            aria-label="planets"
            value={inputValue}
            onChange={handleChange}
            required
          />

          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded generate-planets__button"
            type="button"
            onClick={handleSubmit}
          >
            Generate
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
