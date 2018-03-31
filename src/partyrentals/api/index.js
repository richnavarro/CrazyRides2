// @flow
import type {Picture} from "../../components/Model";

const items = require("./partyrentals");

export type ItemCategory = {
    id: string,
    title: string,
    subtitle: string,
    picture: Picture
};

export type Items = {
    id: string,
    title: string,
    people: number,
    minutes: number,
    picture: Picture,
    instructions: string[],
    ingredients: Ingredient[]
};

export type Item = {
    itemCategories: ItemCategory[],
    items: { [itemCategory: string] : Items[]} 
};

const api: Item = {
    itemCategories: items.itemCategories,
    items: items.items
};

export default api;
