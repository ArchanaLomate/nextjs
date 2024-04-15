
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
     <table>
  <tr>
    <th>Next.js</th>
    <th>Gatsby.js</th>
  </tr>
  <tr>
    <td>1. Used for creating websites that require dynamic features and more real time updates</td>
    <td>1. Gatsby is ideal for creating status and content heavy websites </td>
  </tr>
  <tr>
    <td>2. Next.js provides more flexibility and handle complex interactions like ecommerce websites </td>
    <td>2. Gatsby.js is more streamlined with defined instructions and less customisations </td>
  </tr>
  <tr>
    <td>3. Netflix's content platform utilizes Next.js for its client-facing web pages. Next.js helps Netflix deliver a fast and dynamic user experience for streaming movies and TV shows. </td>
    <td>3. Financial Times to deliver news articles, analysis, and multimedia content to readers with speed and reliability.
</td>
  </tr>
  <tr>
    <td>4. Next.JS uses file based routing where each page has its own file </td>
    <td>4. Gatsby has central routing mechanism where all the routes are listed in one page </td>
  </tr>
</table>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
     
      </div>
    </main>
  );
}
