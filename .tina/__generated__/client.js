import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'dd362ccf58b166176f0b818999c405cd90b8d1fb', queries });
export default client;
  