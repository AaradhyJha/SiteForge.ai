import { PLANS } from "../config/plan.js"
import stripe from "../config/stripe.js"

export const billing=async (req,res) => {
    try {
        const {plantType}=req.body
        const userId=req.user._id
        const plan=PLANS[plantType]
        if(!plan || plan.price==0){
            return res.status(400).json({message:"invalid paid plan"})
        }
        const session=stripe.checkout.sessions.create({
            mode:"payment",
            payment_method_types:["card"],
            line_items:[
                {
                    price_data:{
                        currency:"inr",
                        product_data:{
                            name:`SiteForge.ai ${plantType.toUpperCase()}`
                        }
                    }
                }
            ]
        })
    } catch (error) {
        
    }
}