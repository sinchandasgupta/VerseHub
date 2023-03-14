export const options = {
  method: "GET",
  headers: {
    // Your Rapid-API Key
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    // API-Host
    "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
  },
};
