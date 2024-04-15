
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
    Edge Functions are like small assistants present right at the edge of the internet, close to where your website users are. They're handy for quickly handling simple tasks without having to travel all the way back to the main server. For example, they can swiftly redirect users to different pages or tweak the website's behavior in minor ways. They're like helpers that work fast and efficiently right where they're needed the most. Streaming platforms like Netflix provide personalized recommendations in real-time. E commerce for dynamic pricing adjustments

        </p>
         <p>&nbsp;</p>
        <p>
 Choose Serverless Functions when you have complicated tasks to handle in the background, like sorting through data, managing databases, or connecting with other apps and services. They're perfect for jobs that need to happen quietly in the background, without interrupting what users are doing. Plus, they're flexible and cost-efficient since they only work when needed, so you only pay for what you use.  Websites that handle e-commerce transactions often utilize serverless functions for tasks like processing payments, managing inventory, handling form submissions, and sending transactional emails.
      </p>
         <p>&nbsp;</p>
        <p>
  Edge Middleware is a good choice when you want to make your website better and safer for everyone, right at the beginning of their visit. It's similar to having a team of helpers who can add extra security measures, make your website faster, and enforce certain rules for every visitor before they even get to the main part of your website.
     </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
     
      </div>
    </main>
  );
}
