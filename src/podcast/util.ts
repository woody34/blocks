import { Dispatch } from "@reduxjs/toolkit";
import { Actions } from "../store/types";
import { cyPodcastTable } from "./components/util";

export const cyPodcast = {
  table: cyPodcastTable,
};

export const actionMiddleware = (callback: (args: Actions) => void) => () => (
  next: Dispatch
) => (action: Actions): Actions => {
  callback(action);
  return next(action);
};
