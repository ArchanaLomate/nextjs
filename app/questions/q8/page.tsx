
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
      Recently, we faced a challenge with the transition of certain integrations from free to paid, resulting in poor communication and customer dissatisfaction. To address this, I collaborated with the product documentation and tech solutions teams to create a new category, "self-serve integration," alongside the existing standard and custom options.
        </p>
        <p>
      We developed a clear process document outlining the commercial model for each integration type, empowering Customer Success Managers to communicate effectively with customers. This solution was rolled out through our internal LMS platform.
      </p>
        <p>
      Success was measured through an internal survey gauging feedback from Customer Success Managers on overall customer satisfaction, as well as by analyzing the opportunity pipeline and conversion rates for integrations, which showed positive changes attributed to improved communication and setting clear commercial expectations from the outset.
     </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
     
      </div>
    </main>
  );
}