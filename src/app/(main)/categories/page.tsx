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
        <div className="flex flex-col justify-center items-center min-h-screen p-4 space-y-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Sentiment Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                    <Link href="/categories/sentimentanalysis-models"><Button>View Models</Button> </Link>
                </CardContent>
            </Card>
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Machine Translation</CardTitle>
                </CardHeader>
                <CardContent>
                    <Link href="/categories/machinetranslating-model"><Button>View Models</Button> </Link>
                </CardContent>
            </Card>
        </div>
    )
}

export default page

