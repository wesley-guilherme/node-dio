import {disconectToDatabase } from "./utils/database.js";
import { getDataFromApi } from "./utils/api.js";

getDataFromApi();
disconectToDatabase();