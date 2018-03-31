// @flow
import type {Picture} from "../../components/Model";

const jumps = require("./jumps");

export type JumpCategory = {
    id: string,
    title: string,
    subtitle: string,
    picture: Picture
};

export type Ingredient = {
    checked: boolean,
    name: string,
    quantity: string
};

export type Jumps = {
    id: string,
    title: string,
    people: number,
    minutes: number,
    picture: Picture,
    instructions: string[],
    ingredients: Ingredient[]
};

export type Jump = {
    jumpCategories: JumpCategory[],
    jumps: { [jumpCategory: string] : Jumps[]} 
};

const api: Jump = {
    jumpCategories: jumps.jumpCategories,
    jumps: jumps.jumps
};

export default api;
