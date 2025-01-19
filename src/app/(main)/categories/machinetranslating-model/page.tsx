'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { BarChart, CartesianGrid, XAxis, Bar } from 'recharts';

const SentimentModelsComparison: React.FC = () => {
    const [sentimentData, setSentimentData] = useState<any[]>([]);

    const getData = async () => {
        const response = await axios.get('http://localhost:3000/api/get-model');
        setSentimentData(response.data.machine);
    }

    useEffect(() => {
        getData();
    }, []);

    const chartData = sentimentData.map((model) => ({
        name: model.name,
        accuracy: model.bleu_score,
        totaltime: model.total_time,
        estimatedtotal_time: model.estimated_cost,
        total_cost: model.total_cost,
    }));

    const chartConfig = {
        accuracy: {
            label: "Accuracy",
            color: "hsl(var(--chart-1))",
        },
        totaltime: {
            label: "Total Time",
            color: "hsl(var(--chart-2))",
        },
        estimatedtotal_time: {
            label: "Estimated Total Time",
            color: "hsl(var(--chart-3))",
        },
        total_cost: {
            label: "Total Cost",
            color: "hsl(var(--chart-4))",
        },
    } satisfies ChartConfig

    return (
        <div className="flex flex-col items-center p-8">
            <div className="flex flex-col items-center w-full max-w-4xl">
                <div className="flex flex-row justify-around w-full">
                    {sentimentData.map((model, index) => (
                        <div key={index} className="w-2/5 bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-2xl font-bold mb-4">{model.name}</h2>
                            <p className="text-sm mb-4">Dataset {model.dataset}</p>
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Feature</th>
                                        <th className="py-2 px-4 border-b">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b">Bleu Score</td>
                                        <td className="py-2 px-4 border-b">{model.bleu_score}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b">Total time used for 10% data</td>
                                        <td className="py-2 px-4 border-b">{Math.floor(model.total_time)} Seconds</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b">Estimated time for 100% data</td>
                                        <td className="py-2 px-4 border-b">{Math.floor(model.estimated_total_time)} Seconds</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b">Total Cost</td>
                                        <td className="py-2 px-4 border-b">${model.total_cost}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
                <Card className="mt-8 w-full">
                    <CardHeader>
                        <CardTitle>Model Comparison Chart</CardTitle>
                        <CardDescription>Comparison of different models</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart accessibilityLayer data={chartData} width={800} height={400}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dashed" />}
                                />
                                <Bar dataKey="accuracy" fill="var(--color-accuracy)" radius={4} />
                                <Bar dataKey="totaltime" fill="var(--color-totaltime)" radius={4} />
                                <Bar dataKey="estimatedtotal_time" fill="var(--color-estimatedtotal_time)" radius={4} />
                                <Bar dataKey="total_cost" fill="var(--color-total_cost)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SentimentModelsComparison;
