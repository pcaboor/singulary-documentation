import Link from "next/link"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center bg-[url('/images/Frame2.jpg')] bg-cover bg-center rounded-2xl bg-black/30 bg-blend-multiply">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">Apprendre Singulary</h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        A simple open-source product documentation platform. That&apos;s simple
        to use and easy to customize.
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}
