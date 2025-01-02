import {Dashboard} from "./pages/Customer/Dashboard.tsx";
import {Add} from "./pages/Customer/Add.tsx";
import {Delete} from "./pages/Customer/Delete.tsx";
import {Update} from "./pages/Customer/Update.tsx";
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";

import './App.css'
import {RootLayout} from "./components/RootLayout.tsx";
import {ItemProvider} from "./store/ItemProvider.tsx";

function App() {


    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '/', element : <Dashboard/>},
                { path : '/add', element : <Add/>},
                { path : '/delete', element : <Delete/>},
                { path : '/update', element : <Update/>},
                // { path : '/item', element : <ItemDashboard/>},
                // { path : '/addItem', element : <AddItem/>},
                // { path : '/deleteItem', element : <DeleteItem/>},
                // { path : '/updateItem', element : <UpdateItem/>}
            ]
        },
    ])

    return (
        <>

            <CustomerProvider>
                <ItemProvider>
                    <RouterProvider router={routes} />
                </ItemProvider>
            </CustomerProvider>


        </>
    );
}

export default App;
