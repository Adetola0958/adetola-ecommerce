import { urlImageFor } from "@/lib/sanityClient";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { ProductProps } from "../../../../type";

//Note you can use ! instead of writing as string in typescript

export const POST = async(req: NextRequest) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!) //can also be written as process.env.STRIPE_SECRET_KEY as string
    try {
        const body = await req.json()
        // console.log(body)
        const {items, email} = await body
        const updatedItems = await items.map((item: ProductProps) => ({
            quantity: item.quantity,
            price_data: {
                currency: "gbp",
                unit_amount: item.price * 100,
                product_data: {
                    name: item.title,
                    description: item.description,
                    images: [urlImageFor(item.image).url()]
                },
            },
        }))   

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: updatedItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
            metadata: {
                email,
            }
        })
        return NextResponse.json({
            message: "Connection is alive",
            success: true,
            id: session.id
        })
    } catch (error:any) {
        return NextResponse.json({error: error?.message}, {status: 500})
    }
}