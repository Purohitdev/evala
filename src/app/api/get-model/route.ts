import dbConnect from "@/lib/dbConnect";
import sentimentAnalyticsModel from "@/model/SentimentAnalyticsModel";
import machineTranslationModel from "@/model/machineTranslationModel";

export async function POST(req: Request) {

    await dbConnect();

    try {

        const data = await req.json();

        if (!data) {

            return Response.json({ success: false, message: "No filter found" }, { status: 404 });

        }

        if (data.category === "sentiment-analysis") {

            const sentiment = await sentimentAnalyticsModel.find({ name: data.name });

            if (!sentiment) {

                return Response.json({ success: false, message: "No data found" }, { status: 404 });

            }

            return Response.json({ success: true , message: "Data fetched sucessfully", data: sentiment }, { status: 200 });

        }

        if (data.category === "machine-translation") {

            const translation = await machineTranslationModel.find({ name: data.name });

            if (!translation) {

                return Response.json({ success: false, message: "No data found" }, { status: 404 });

            }

            return Response.json({ success: true , message: "Data fetched sucessfully", data: translation }, { status: 200 });

        }

    } catch (error) {
        
        return Response.json({ success: false, message: `Error fetching data: ${error}` }, { status: 500 });

    }

}