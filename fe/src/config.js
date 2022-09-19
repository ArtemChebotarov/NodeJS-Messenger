import configDev from "./config.dev.json";
import configProd from "./config.prod.json";

let config;

if (process.env.REACT_APP_STAGE === "development") {
  config = configDev;
} else {
  config = configProd;
}

export default config;
