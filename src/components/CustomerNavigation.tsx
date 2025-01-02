import {Link} from "react-router";

export function CustomerNavigation() {
    return (
        <>
            <header className="bg-teal-500 px-4 py-5">
                <nav className="shadow-md shadow-cyan-500/50">
                    <ul className="flex space-x-6 text-white font-semibold">

                        <li>
                            <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded">
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link to="/add" className="custom-link hover:bg-blue-500 px-3 py-2 rounded">
                                Add
                            </Link>
                        </li>

                        <li>
                            <Link to="/update" className="hover:bg-blue-500 px-3 py-2 rounded">
                                Update
                            </Link>
                        </li>
                        <li>
                            <Link to="/delete" className="hover:bg-blue-500 px-3 py-2 rounded">
                                Delete
                            </Link>
                        </li>

                    </ul>
                </nav>
            </header>

            <body className="bg-black"></body>
        </>
    )
}