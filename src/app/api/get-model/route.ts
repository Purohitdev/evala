import dbConnect from "@/lib/dbConnect";
import Product from "@/model/Product";
import Client from "@/model/Client";

export async function GET() {

    await dbConnect();

    try {

        const products = await Product.find({});
        const clients = await Client.find({});

        if (!products || !clients) {

            return Response.json({ success: false, message: "No data found" }, { status: 404 });
        
        }



        return Response.json({ success: true , message: "Data fetched sucessfully", sentiment: clients, machine: products }, { status: 200 });


    } catch (error) {

        console.log(error);
        return Response.json({ success: false, message: `Error fetching data: ${error}` }, { status: 500 });
        

    }


}