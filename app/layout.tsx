import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  title:
    "Moumita Haque Mohona | AI Researcher",

  description:
    "AI Researcher specializing in Artificial Intelligence, Deep Learning, Computer Vision, Biomedical AI and Explainable AI.",

  keywords:[
    "Artificial Intelligence",
    "Deep Learning",
    "Computer Vision",
    "Biomedical AI",
    "Machine Learning",
    "AI Researcher"
  ],

};




export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};



export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html

lang="en"

className={`
${geistSans.variable}
${geistMono.variable}
h-full
antialiased
`}

>


<body

className="
min-h-screen
w-full
overflow-x-hidden
font-sans
"

>


{children}


</body>


</html>


);

}