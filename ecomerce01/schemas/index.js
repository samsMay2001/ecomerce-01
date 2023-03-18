import banner from "./banner";
import product from "./product";

/**
 * creating schemas is like creating tables in mysql except sanity does everything for you. 
 * by now you just created a banner schema and a product schema
 * this line bellow tells sanity the structure of the schemas to be created. 
 */
export const schemaTypes = [product, banner]
