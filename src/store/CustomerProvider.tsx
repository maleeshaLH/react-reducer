import {createContext, useReducer} from "react";
import {CustomerReducer} from "../reducers/CustomerReducer.ts";

// @ts-ignore
export const CustomerContext  = createContext();

// @ts-ignore
export function CustomerProvider({children}:{children:ReactNode}) {

    // @ts-ignore
    const [customers, dispatch] = useReducer(CustomerReducer,[]);

    return (
        <CustomerContext.Provider value={[customers, dispatch]}>
            {children}
        </CustomerContext.Provider>
    );
}

