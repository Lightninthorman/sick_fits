import Page from "../components/Page"

export default function MyApp({Component, pageProps}){
    //Component and pageProps are props of _app.js in Next.js
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    )
}