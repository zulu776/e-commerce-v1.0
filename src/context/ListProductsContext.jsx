import React, { createContext, useReducer } from "react";

import single from "../IMG/single-booster.png";
import prekits from "../IMG/prekit.png";
import bundle from "../IMG/bundle.png";
import draft from "../IMG/draft-booster.png";
import set from "../IMG/set-booster.png";
import collector from "../IMG/collector-booster.webp";

const ListProductsContext = createContext();

const initialState = {
    products: [
        {
            id: 1,
            name:"Single Booster ",
            desc:"Single Booster of Innistrad: Midnight Hunt",
            price: 14000,
            img: single,
            stock: 144,
            Qty: null
        },
        {
            id: 2,
            name:"Prekit",
            desc:"Prekit of Innistrad: Midnight Hunt",
            price: 85000,
            img: prekits,
            stock: 6,
            Qty: null
        },
        {
            id: 3,
            name:"Bundle",
            desc:"Bundle of Innistrad: Midnight Hunt",
            price: 140000,
            img: bundle,
            stock: 6

        },
        {
            id: 4,
            name:"Draft Booster",
            desc:"Draft Booster Box of Innistrad: Midnight Hunt",
            price: 400000,
            img: draft,
            stock: 4

        },
        {
            id: 5,
            name:"Set Booster",
            desc: "Set Booster of Innistrad: Midnight Hunt",
            price: 430000,
            img: set,
            stock: 2

        },
        {
            id: 6,
            name:"Collector Booster",
            desc:"Collector Booster of Innistrad: Midnight Hunt",
            price: 850000,
            img: collector,
            stock: 1

        }
    ]
};

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
        
    }
};

const ListProductsProvider = ({ children }) => {

    const [state] = useReducer(reducer, initialState);
    const data = { state };

    return (
        <ListProductsContext.Provider value={data}>
            {children}
        </ListProductsContext.Provider>
    )
}

export { ListProductsProvider };
export default ListProductsContext;
