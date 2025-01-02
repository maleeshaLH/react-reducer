import {createContext, useReducer} from "react";
import {ItemReducer} from "../reducers/ItemReducer.ts";

// @ts-ignore
export const ItemContext  = createContext();

// @ts-ignore
export function ItemProvider({children}:{children:ReactNode}) {

    // @ts-ignore
    const [item, setItem] = useReducer(ItemReducer,[]);

    return (
        <ItemContext.Provider value={[item, setItem]}>
            {children}
        </ItemContext.Provider>
    );
}