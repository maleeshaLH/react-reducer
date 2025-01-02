import {CustomerNavigation} from "./CustomerNavigation.tsx";

import {Outlet} from "react-router";

export function RootLayout() {
    return(
        <>
            <CustomerNavigation />
            <Outlet></Outlet>
        </>
    );
}
