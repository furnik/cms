import { TRoute } from "../types/route";

export const parseJson = (json: unknown): Array<TRoute> => {
  return JSON.parse(JSON.stringify(json))?.default || [];
};
