import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from "geist/font/sans"

export const metadata: Metadata = {
  title: "Imperecta – Modern Project Management Platform | Streamline Your Workflow",
  description:
    "Transform your project management with Imperecta's cutting-edge platform. Built with React, Node.js, and PostgreSQL. Streamline workflows, enhance team collaboration, and deliver projects on time with our comprehensive suite of tools.",
  keywords:
    "project management, workflow automation, team collaboration, project tracking, task management, agile project management, project planning software, React, Node.js, PostgreSQL, Drizzle ORM",
  authors: [{ name: "Imperecta Team" }],
  creator: "Imperecta",
  publisher: "Imperecta",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imperecta.com",
    siteName: "Imperecta - Modern Project Management Platform",
    title: "Imperecta – Modern Project Management Platform | Built with React & Node.js",
    description:
      "Transform your project management with Imperecta's cutting-edge platform. Built with modern technology stack including React 18, Node.js, and PostgreSQL. Streamline workflows, enhance team collaboration, and deliver projects on time.",
    images: [
      {
        url: "https://imperecta.com/images/imperecta-logo.png",
        width: 1200,
        height: 630,
        alt: "Imperecta Project Management Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imperecta – Modern Project Management Platform",
    description: "Transform your project management with Imperecta's cutting-edge platform built with React, Node.js, and PostgreSQL.",
    images: ["https://imperecta.com/images/imperecta-logo.png"],
  },
  alternates: {
    canonical: "https://imperecta.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Business Software",
  classification: "Project Management Software",
  other: {
    "msapplication-TileColor": "#8b5cf6",
    "theme-color": "#8b5cf6",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@geist-ui/core@latest/dist/geist-ui.css" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.delionsoft.com" />

        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Imperecta - Modern Project Management Platform",
              description:
                "Imperecta provides comprehensive project management solutions built with React, Node.js, and PostgreSQL to streamline workflows, enhance team collaboration, and deliver projects on time.",
              url: "https://imperecta.com",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, Windows, macOS, Linux",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free tier available with premium plans starting at $12/user/month",
              },
              author: {
                "@type": "Organization",
                name: "DeLion Software",
                url: "https://www.delionsoft.com",
              },
              developer: {
                "@type": "Organization",
                name: "DeLion Software",
                url: "https://www.delionsoft.com",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1500",
              },
              featureList: [
                "Advanced project tracking and management",
                "Team collaboration tools",
                "Workflow automation",
                "Real-time reporting and analytics",
                "Task management and scheduling",
                "Resource allocation and planning",
                "Built with React 18 and Node.js",
                "PostgreSQL database with Drizzle ORM",
                "TypeScript for type safety",
                "Modern UI with Tailwind CSS"
              ],
              audience: {
                "@type": "Audience",
                audienceType: "Business professionals, project managers, development teams",
              },
              softwareVersion: "1.0.0",
              releaseNotes: "Initial release with core project management features",
              downloadUrl: "https://imperecta.com",
              installUrl: "https://imperecta.com",
              screenshot: "https://imperecta.com/images/hero-interface.jpg",
              softwareRequirements: "Modern web browser, internet connection",
              maintainer: {
                "@type": "Organization",
                name: "DeLion Software",
                url: "https://www.delionsoft.com",
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
