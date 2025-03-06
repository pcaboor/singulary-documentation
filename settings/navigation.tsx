import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Retourner sur Singulary",
    href: "http://localhost:3000/",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/rubixvi/rubix-documents",
}
