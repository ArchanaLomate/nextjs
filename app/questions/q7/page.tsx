
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Assignment by AL
          <code className="font-mono font-bold">CSM</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div>
        <p> 
        A  customer new to Next.js and Vercel, asks about overages regarding serverless function execution. What would be the best way to help mitigate this? Feel free to use AI to help supplement your answer, but only use AI to help guide your answer and put it into your own words. You can help the customer by providing Vercel or Next.js resources if necessary.
        </p>
        <p>
I am sharing some best practices and recommendations to help mitigate the overages regarding serverless functions as below: 
        </p>
        <p>
<b>1. Keep an eye on the usage :</b>
          </p>
        <p>
        Establishing monitoring and alerts in Vercel is a great way to track how you're using functions and managing costs. This keeps you in the loop about your usage habits and allows you to act early if you're getting close to set limits.You could refer to <a href="https://vercel.com/docs/pricing/serverless-functions#optimizing-function-duration">this</a> help documentation for the same. 
      </p>
         <p>
<b>2.Cache Mechanism :</b>
          </p>
        <p>
      Cache your responses using <a href="https://vercel.com/docs/edge-network/caching#using-vercel-functions">EDGE CACHING</a> and <a href="https://vercel.com/docs/edge-network/headers#cache-control-header">CACHE CONTROL HEADERS </a>. This can help reduce the number of invocations that your Functions receive and makes responses faster for users 
      </p>
         <p>
<b> 3. Efficient Code :</b>
          </p>
        <p>
   Create serverless functions that work well by cutting down on extra calculations, improving how you interact with the database, and storing data in cache whenever you can. This speeds up how quickly your functions run and ultimately saves you money on execution costs.
      </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
     
      </div>
    </main>
  );
}
