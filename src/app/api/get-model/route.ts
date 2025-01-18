import dbConnect from "@/lib/dbConnect";
import sentimentAnalytics from "@/model/sentimentAnalytics";
import machineTranslation from "@/model/machineTranslation";
import { sentimentAnalyticsSchema } from "@/schema/sentimentAnalyticsSchema";
import { machineTranslationSchema } from "@/schema/machineTranslationSchema";

export async function GET() {
    await dbConnect();

    try {
        const sentimentAnalyticsData = await sentimentAnalytics.find({});
        const machineTranslationData = await machineTranslation.find({});

        // Instead of returning an error, return empty arrays.
        const validatedSentimentAnalytics = sentimentAnalyticsSchema.safeParse(
            sentimentAnalyticsData || []
        );
        const validatedMachineTranslation = machineTranslationSchema.safeParse(
            machineTranslationData || []
        );

        if (!validatedSentimentAnalytics.success) {
            return Response.json(
                {
                    success: false,
                    message: `Error validating data: ${validatedSentimentAnalytics.error}`
                },
                { status: 500 }
            );
        }

        if (!validatedMachineTranslation.success) {
            return Response.json(
                {
                    success: false,
                    message: `Error validating data: ${validatedMachineTranslation.error}`
                },
                { status: 500 }
            );
        }

        return Response.json(
            {
                success: true,
                sentimentAnalytics: validatedSentimentAnalytics.data,
                machineTranslation: validatedMachineTranslation.data
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            { success: false, message: `Error fetching data: ${error}` },
            { status: 500 }
        );
    }
}