import { Hono, type Context } from "hono";
import { serveStatic } from "hono/deno";
import Layout from "./components/Layout.tsx";
import Navbar from "./components/Navbar.tsx";

const app = new Hono();


function Home() {
    return(
        <Layout>
            <>
                <Navbar />
                <main className="max-w-[80%] w-full mt-8 mx-auto flex-grow">
                    <h2 className="text-green-50 text-3xl font-bold text-center max-w-[60ch] w-fit mx-auto">A collection of websites I&apos;ve built using various APIs</h2>
                    <section className="main-grid gap-4 mt-12">
                        <a href="https://countries-api-pi-mocha.vercel.app/" target="_blank" className="bg-slate-200 aspect-square hover:scale-[1.02] transition-all ease-linear p-4 rounded-md">
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-xl underline">Where in the World?</h3>
                                <p className="mt-4">Explore countries around the globe and discover interesting facts about each one, including population, region, and more.</p>
                            </div>
                        </a>
                        <a href="https://artificial-intelligence-api.vercel.app/" target="_blank" className="bg-slate-200 aspect-square hover:scale-[1.02] transition-all ease-linear p-4 rounded-md">
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-xl underline">AI Models</h3>
                                <p className="mt-4">Choose between two powerful AI models: one that detects and highlights all faces in an image given its URL, and another that summarizes any provided text efficiently.</p>
                            </div>
                        </a>
                    </section>
                </main>
            </>
        </Layout>
    )
} 


app.use("/assets/*", serveStatic({ root: "./" }))

app.get("/", (ctx: Context) => {
    return ctx.html(<Home />)
})


export default app;
