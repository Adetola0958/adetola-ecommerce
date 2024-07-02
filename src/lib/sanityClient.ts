import {createClient, groq} from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
// import { groq } from "next-sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const token = process.env.SANITY_API_TOKEN

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlImageFor = (source:any) => {
    return builder.image(source)
}

export const allProductsQuery = groq`*[_type == 'product']{
    ...
} | order(_createdAt desc)`

export const allProducts = async() => {
    const productsData = await client.fetch(allProductsQuery)
    return productsData
}