// 'use client'
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import {
//     ChartConfig,
//     ChartContainer,
//     ChartTooltip,
//     ChartTooltipContent,
// } from "@/components/ui/chart"
// import { BarChart, CartesianGrid, XAxis, Bar } from 'recharts';
// import { TrendingUp } from 'lucide-react';

// const SentimentModelsComparison: React.FC = () => {
//     const [sentimentData, setSentimentData] = useState<any[]>([]);

//     const getData = async () => {
//         const response = await axios.get('http://localhost:3000/api/get-model');
//         setSentimentData(response.data.sentiment);
//     }

//     useEffect(() => {
//         getData();
//     }, []);

//     const chartData = sentimentData.map((model) => ({
//         name: model.name,
//         accuracy: model.accuracy,
//         precision: model.precision,
//         recall: model.recall,
//         f1: model.f1,
//     }));

//     const chartConfig = {
//         accuracy: {
//             label: "Accuracy",
//             color: "hsl(var(--chart-1))",
//         },
//         precision: {
//             label: "Precision",
//             color: "hsl(var(--chart-2))",
//         },
//         recall: {
//             label: "Recall",
//             color: "hsl(var(--chart-3))",
//         },
//         f1: {
//             label: "F1 Score",
//             color: "hsl(var(--chart-4))",
//         },
//     } satisfies ChartConfig

//     return (
//         <div className="flex flex-col items-center p-8">
//             <div className="flex flex-col items-center w-full max-w-4xl">
//                 <div className="flex flex-row justify-around w-full">
//                     {sentimentData.map((model, index) => (
//                         <div key={index} className="w-2/5 bg-white shadow-md rounded-lg p-6">
//                             <h2 className="text-2xl font-bold mb-4">{model.name}</h2>
//                             <p className="text-sm mb-4">Dataset {model.dataset}</p>
//                             <table className="min-w-full bg-white">
//                                 <thead>
//                                     <tr>
//                                         <th className="py-2 px-4 border-b">Feature</th>
//                                         <th className="py-2 px-4 border-b">Details</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td className="py-2 px-4 border-b">Accuracy</td>
//                                         <td className="py-2 px-4 border-b">{model.accuracy}</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="py-2 px-4 border-b">Precision</td>
//                                         <td className="py-2 px-4 border-b">{model.precision}</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="py-2 px-4 border-b">Recall</td>
//                                         <td className="py-2 px-4 border-b">{model.recall}</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="py-2 px-4 border-b">F1</td>
//                                         <td className="py-2 px-4 border-b">{model.f1}</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="py-2 px-4 border-b">Total time used for 10% data</td>
//                                         <td className="py-2 px-4 border-b">{Math.floor(model.total_time)} Seconds</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="py-2 px-4 border-b">Estimated time for 100% data</td>
//                                         <td className="py-2 px-4 border-b">{Math.floor(model.estimated_total_time)} Seconds</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="py-2 px-4 border-b">Total Cost</td>
//                                         <td className="py-2 px-4 border-b">${model.total_cost}</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     ))}
//                 </div>
//                 <Card className="mt-8 w-full">
//                     <CardHeader>
//                         <CardTitle>Model Comparison Chart</CardTitle>
//                         <CardDescription>Comparison of different models</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                         <ChartContainer config={chartConfig}>
//                             <BarChart accessibilityLayer data={chartData} width={800} height={400}>
//                                 <CartesianGrid vertical={false} />
//                                 <XAxis
//                                     dataKey="name"
//                                     tickLine={false}
//                                     tickMargin={10}
//                                     axisLine={false}
//                                 />
//                                 <ChartTooltip
//                                     cursor={false}
//                                     content={<ChartTooltipContent indicator="dashed" />}
//                                 />
//                                 <Bar dataKey="accuracy" fill="var(--color-accuracy)" radius={4} />
//                                 <Bar dataKey="precision" fill="var(--color-precision)" radius={4} />
//                                 <Bar dataKey="recall" fill="var(--color-recall)" radius={4} />
//                                 <Bar dataKey="f1" fill="var(--color-f1)" radius={4} />
//                             </BarChart>
//                         </ChartContainer>
//                     </CardContent>
//                     <CardFooter className="flex-col items-start gap-2 text-sm">
//                         <div className="flex gap-2 font-medium leading-none">
//                             Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//                         </div>
//                         <div className="leading-none text-muted-foreground">
//                             Showing model performance comparison
//                         </div>
//                     </CardFooter>
//                 </Card>
//             </div>
//         </div>
//     );
// };

// export default SentimentModelsComparison;


"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, CartesianGrid, XAxis, Bar } from "recharts";
import { TrendingUp } from "lucide-react";
import ChatBot from "@/components/ChatBot";

const SentimentModelsComparison: React.FC = () => {
  const [sentimentData, setSentimentData] = useState<any[]>([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/api/get-model");
    setSentimentData(response.data.sentiment);
  };

  useEffect(() => {
    getData();
  }, []);

  const chartData = sentimentData.map((model) => ({
    name: model.name,
    accuracy: model.accuracy,
    precision: model.precision,
    recall: model.recall,
    f1: model.f1,
  }));

  const chartConfig = {
    accuracy: {
      label: "Accuracy",
      color: "hsl(var(--chart-1))",
    },
    precision: {
      label: "Precision",
      color: "hsl(var(--chart-2))",
    },
    recall: {
      label: "Recall",
      color: "hsl(var(--chart-3))",
    },
    f1: {
      label: "F1 Score",
      color: "hsl(var(--chart-4))",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex gap-5 min-h-screen p-8">
      {/* Left Section */}
      <div className="flex flex-col min-h-[90vh] w-full border border-gray-200 px-5 py-4 rounded-3xl">
        <div className="py-4 w-full">
          <div className="flex flex-row justify-around w-full gap-5">
            {sentimentData.map((model, index) => (
              <div key={index} className="w-[50%] bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">{model.name}</h2>
                <p className="text-sm mb-4">Dataset {model.dataset}</p>
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b text-start">Feature</th>
                      <th className="py-2 px-4 border-b text-start">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b text-start">Bleu Score</td>
                      <td className="py-2 px-4 border-b text-start">{model.bleu_score}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-start">Total time used for 10% data</td>
                      <td className="py-2 px-4 border-b text-start">{Math.floor(model.total_time)} Seconds</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-start">Estimated time for 100% data</td>
                      <td className="py-2 px-4 border-b text-start">{Math.floor(model.estimated_total_time)} Seconds</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-start">Total Cost</td>
                      <td className="py-2 px-4 border-b text-start">${model.total_cost}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
        <Card className="mt-2 w-full">
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
                <Bar dataKey="precision" fill="var(--color-precision)" radius={4} />
                <Bar dataKey="recall" fill="var(--color-recall)" radius={4} />
                <Bar dataKey="f1" fill="var(--color-f1)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center w-[40%] max-h-[90vh border border-gray-200 rounded-3xl">
        <h1 className="py-4 text-2xl font-semibold">Need Help ?</h1>
        <ChatBot />
      </div>
    </div>
  );
};

export default SentimentModelsComparison;
