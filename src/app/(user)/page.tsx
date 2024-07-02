import Banner from "@/components/Banner";
import BestSellers from "@/components/BestSellers";
import HomeBanner from "@/components/HomeBanner";
import NewArrivals from "@/components/NewArrivals";
import YearProduct from "@/components/YearProduct";
import { client } from "@/lib/sanityClient";
import { groq } from "next-sanity";

export const revalidate = 10
const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`

const newArrivalQuery = groq`*[_type == 'product' && position == 'New Arrival']{
  ...
} | order(_createdAt asc)`

const bestSellersQuery = groq`*[_type == 'product' && position == 'Best Sellers']{
  ...
} | order(_createdAt asc)`

const specialOffersQuery = groq`*[_type == 'product' && position == 'Special Offer']{
  ...
} | order(_createdAt asc)`

const HomePage = async() => {
  const banners = await client.fetch(bannerQuery)
  const newArrivalProducts = await client.fetch(newArrivalQuery)
  const bestSellerProducts = await client.fetch(bestSellersQuery)
  const specialOfferProducts = await client.fetch(specialOffersQuery)
  // console.log(banners)
  return(
    <main className="text-sm overflow-hidden min-h-screen">
      <Banner banners={banners}/>
      <NewArrivals products={newArrivalProducts}/>
      <HomeBanner/>
      <BestSellers products={bestSellerProducts} title="Our Bestsellers"/>
      <YearProduct/>
      <BestSellers products={specialOfferProducts} title="Special Offers"/>
    </main>
  ) 
};

export default HomePage;
