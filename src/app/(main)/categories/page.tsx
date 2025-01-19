import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import React from 'react'
import Link from 'next/link'


function page() {
    return (
        <div className="flex  justify-center items-center min-h-screen p-4 gap-5 ">
            <Card className="w-full max-w-md shadow-md hover:shadow-custom transition-shadow duration-300">
                <CardHeader>
                    <CardTitle className="text-3xl">Sentiment Analysis</CardTitle>
                    <p>Sentiment Analysis, also known as opinion mining, is the process of using natural language processing (NLP) and machine learning techniques to determine the emotional tone behind a piece of text. It helps classify text as positive, negatives  expressed by individuals.</p>                </CardHeader>
                <CardContent>
                    <Link href="/categories/sentimentanalysis-models"><Button>View Models</Button> </Link>
                </CardContent>
            </Card>
            <Card className="w-full max-w-md shadow-md hover:shadow-custom transition-shadow duration-300">
                <CardHeader >
                    <CardTitle className="text-3xl">Machine Translation</CardTitle>
                    <p>Machine Translation (MT) is the process of using artificial intelligence to automatically translate text or speech from one language to another. It enables communication across language barriers by providing fast and efficient translations.</p>
                </CardHeader>
                <CardContent>
                    <Link href="/categories/machinetranslating-model"><Button>View Models</Button> </Link>
                </CardContent>
            </Card>

        </div>
    )
}

export default page

