import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

// Input Selector: homePage state'ini oladi
const selectHomePage = (state: AppRootState) => state.homePage;
export const retrievePopularDishes = createSelector(
    selectHomePage,  // Input Selector
    (HomePage) => HomePage.popularDishes // Result Function
);


export const retrieveNewDishes = createSelector(
    selectHomePage,
    (HomePage) => HomePage.newDishes
);


export const retrieveTopUsers = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topUsers
);