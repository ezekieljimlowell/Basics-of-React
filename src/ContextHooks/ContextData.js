import { createContext } from "react";

export const ContextData = createContext({ status: null, login: () => { }, logout: () => { }, count: 0 });