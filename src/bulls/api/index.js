// @flow
import type {Picture} from "../../components/Model";

const bulls = require("./bulls");

export type BullCategory = {
    id: string,
    title: string,
    subtitle: string,
    picture: Picture
};

export type Bulls = {
    id: string,
    title: string,
    people: number,
    minutes: number,
    picture: Picture,
    instructions: string[],
    ingredients: Ingredient[]
};

export type Bull = {
    bullCategories: BullCategory[],
    bulls: { [bullCategory: string] : Bulls[]} 
};

const api: Bull = {
    bullCategories: bulls.bullCategories,
    bulls: bulls.bulls
};

export default api;
