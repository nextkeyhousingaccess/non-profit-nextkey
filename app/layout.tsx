import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteContent } from "@/lib/content"
import { hero } from "@/app/content/site"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${hero.title} | ${siteContent.organization.name}`,
  description: "NextKey Housing Access Foundation helps New Yorkers understand rental assistance, housing applications, documentation, and tenant rights through housing education, practical resources, and workshops in development.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

