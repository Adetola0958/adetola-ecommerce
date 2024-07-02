import {createSlice} from "@reduxjs/toolkit"
import { ProductProps } from "../../type"

interface StoreState{
    productData: ProductProps[]
}
const initialState:StoreState = {
    productData: []
}

export const orebiSlice = createSlice({
    name: "orebi",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state?.productData.find(
                (item: ProductProps) =>  item?._id === action?.payload?._id
            );
            if (existingProduct) {
              existingProduct.quantity += action.payload.quantity;
            } else {
              state.productData.push(action.payload);
            }
        },
        increaseProduct: (state, action) => {
            const existingProduct = state.productData.find(
                (product:ProductProps) => product._id === action.payload._id
            )
            existingProduct && existingProduct.quantity++
        },
        reduceProduct: (state, action) => {
            const existingProduct = state.productData.find(
              (item: ProductProps) => item._id === action.payload._id
            );
            if (existingProduct?.quantity === 1) {
              existingProduct.quantity === 1;
            } else {
              existingProduct && existingProduct.quantity--;
            }
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter(
              (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = []
        }
    }
})

export const {
    addToCart, 
    increaseProduct,
    reduceProduct,
    deleteProduct,
    resetCart,
} = orebiSlice.actions
export default orebiSlice.reducer