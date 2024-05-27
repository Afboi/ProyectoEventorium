// Importing React library, Material-UI components, and search bar options and styles
import "../homepage_components/styles.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ThemeProvider } from "@mui/material/styles";
import {
  optionsTipoDeEvento,
  optionsOrganizador,
  optionsFrecuencia,
  style,
} from "../../utils/filterSearchBar";

// Constants that store the data to be displayed in the filters, as well as the visual style
const tipoDeEvento = optionsTipoDeEvento();
const organizador = optionsOrganizador();
const frecuencia = optionsFrecuencia();
const theme = style();

/**
 * Search component.
 * Search bar with filters for type of event, organizer, and frequency
 *
 */
export function Search() {
  return (
    <div className="w-full bg-white my-4 dark:bg-dark-blue">
      {/* Search bar */}
      <div className="flex items-center justify-center rounded-full h-20 bg-blue-600">
        <div className="flex w-full h-14 mx-4 rounded-full bg-light-gray sm:w-[70%] dark:bg-not-so-dark-blue">
          <input
            className=" w-full text-[1.5rem] border-none rounded-full bg-light-gray px-4 py-1 text-blue outline-none focus:outline-none dark:bg-not-so-dark-blue dark:text-white"
            type="search"
            name="search"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-blue px-4  text-white dark:bg-orange"
          >
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex  items-center justify-center gap-2 lg:gap-5 pb-4 px-4">
        {/* Search filter by event type */}
        <ThemeProvider theme={theme}>
          <Autocomplete
            id="tipoDeEvento"
            size="small"
            options={tipoDeEvento}
            getOptionLabel={(option) => option.title}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Tipo de Evento" />
            )}
          />
        </ThemeProvider>
        {/* Search filter by organizer */}
        <ThemeProvider theme={theme}>
          <Autocomplete
            id="organizador"
            size="small"
            options={organizador}
            getOptionLabel={(option) => option.title}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Organizador" />
            )}
          />
        </ThemeProvider>
        {/* Search Filter by Frequency */}
        <ThemeProvider theme={theme}>
          <Autocomplete
            id="frecuencia"
            size="small"
            options={frecuencia}
            getOptionLabel={(option) => option.title}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Frecuencia" />
            )}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}
