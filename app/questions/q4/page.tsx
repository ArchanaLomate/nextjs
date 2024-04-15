
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
        A customer is  just getting started with Vercel and has questions about recommended options for third-party integrations for Monitoring or Logging. Knowing that:
Vercel has in-house observability products.Vercel likes to guide processes,but Vercel doesn’t like to steer customers towards one solution or another, but demonstrates what the product can do.
        </p>
        <p>&nbsp;</p>
        <p> How would you respond to the customer? </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        <p> Dear [Customer],</p>
    <p>
I'm here to assist you in your decision-making process regarding the selection of a monitoring and logging tool.
      </p>
        <p>
Although this topic may have been discussed during the sales cycle, I want to ensure you're aware that Vercel also offers a similar capability. 
           <p>&nbsp;</p>
          Here are some advantages of using Vercel's in-house tool:
        </p>
         <p>&nbsp;</p>
<p>
1. Vercel's observability tools are seamlessly integrated with our platform, providing tailored monitoring and logging specifically designed for Vercel deployments.
 </p> 
    <p>&nbsp;</p>
 <p>       
2. With Vercel, there are no additional expenses for utilizing our observability tools, as they are included as part of your Vercel subscription. This ensures a transparent and predictable pricing structure.
</p>
         <p>&nbsp;</p>
         <p>&nbsp;</p>
  <p>      
   To better understand your requirements and showcase our capabilities, I suggest we engage in a detailed conversation with our technical team. Are there any specific priorities you have in mind for the integration, or are there any tools you're currently evaluating?
Looking forward to assisting you further and ensuring we find the best solution for your needs.	
     </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
     
      </div>
    </main>
  );
}
