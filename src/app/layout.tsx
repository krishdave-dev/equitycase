import type { Metadata } from "next";
import { Nunito,Poppins, Roboto,Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";



const nunito  = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const helveticalNeueMedium = localFont({
  src:"../../public/fonts/Helvetica Neue LT Std 65 Medium.otf",
  variable: "--font-helvetica-neue-medium",
  display: "swap",
})
const helveticalNeueRoman = localFont({
  src:"../../public/fonts/Helvetica Neue LT Std 55 Roman.otf",
  variable: "--font-helvetica-neue-roman",
  display: "swap",
})



export const metadata: Metadata = {
  title: "Equity Case",
  description: "Smarter Trading Starts With Execution",
};

// ${helveticalNeue.variable}${helveticalNeue.variable}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${roboto.variable}  ${poppins.variable} ${inter.variable} ${helveticalNeueMedium.variable} ${helveticalNeueRoman.variable}  antialiased`}
      >
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        {children}


      </body>
    </html>
  );
}
