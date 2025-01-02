export function Modal(props) {
    return (

        <>
            {/*<input type="text" placeholder='name' onChange={(e) => props.setName(e.target.value)}/>*/}
            {/*<input type="text" placeholder='email' onChange={(e) => props.setEmail(e.target.value)}/>*/}
            {/*<input type="text" placeholder='phone' onChange={(e) => props.setPhone(e.target.value)}/>*/}

            {props.type==='customer' ?(
                <>
                    <div
                        className="shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md  p-6 rounded-lg w-full max-w-md ">
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                onChange={(e) => props.setName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={(e) => props.setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                onChange={(e) => props.setPhone(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                </>
            ):(
                <>
                    <div
                        className="shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md  p-6 rounded-lg w-full max-w-md ">
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Item Code"
                                onChange={(e) => props.setItem_Code(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                onChange={(e) => props.setDescription(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <input
                                type="text"
                                placeholder="Qty"
                                onChange={(e) => props.setQty(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <input
                                type="text"
                                placeholder="Price"
                                onChange={(e) => props.setPrice(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>
                </>
            )}

            <button
                className="mt-6 w-full bg-gradient-to-r  bg-blue-500 text-white py-2 px-4 rounded-lg
                                   hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"

                onClick={props.type === 'customer' ? props.handleSubmit : props.handleItemSubmit}>
                {props.children}</button>



                </>
    )}

            {/*<button*/}
            {/*    onClick={handleSubmit}*/}
            {/*    className="mt-6 w-full bg-gradient-to-r  bg-blue-500 text-white py-2 px-4 rounded-lg*/}
            {/*               hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"*/}
            {/*>*/}
            {/*    Add Customer*/}
            {/*</button>*/}