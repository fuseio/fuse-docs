import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '035e1913af3b6d7ea5ad390354583e2408dbf0c6', queries });
export default client;
  