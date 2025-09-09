export const API_ENDPOINT =
  process.env.REACT_APP_Environment === "Development"
    ? "https://nandistaging.com"
    : process.env.REACT_APP_Environment === "Staging"
    ? "https://nandistaging.com"
    : process.env.REACT_APP_Environment === "Production"
    ? "https://nandi.live"
    : "";
