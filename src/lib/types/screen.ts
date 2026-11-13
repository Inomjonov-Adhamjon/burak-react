/** React App State **/

import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState {
    homePage: HomePageState,
};

/** HomePageState **/
export interface HomePageState {
    popularDishes: Product[],
    newDishes: Product[],
    topUsers: Member[],
};

/** Products Page **/


/** Orders Page  **/
