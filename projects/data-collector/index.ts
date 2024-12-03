import * as DOTENV from "dotenv";
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production")
  DOTENV.config({ path: ".env.production" });
else DOTENV.config();

import { App } from "./app";

new App();
