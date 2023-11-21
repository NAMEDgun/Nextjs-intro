import Head from "next/head"

export default function Lee({title}){
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    );
}