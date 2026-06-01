import { Francois_One, Roboto, Space_Mono } from "next/font/google";
import "./globals.css";
import ParentWrapper from "@/components/ParentWrapper";
import StyledComponentsRegistry from "./registry";

const francoisOne = Francois_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-francois-one",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "MonkeyScope Motion Pictures",
  description: `MonkeyScope is a production house based in India with clientale all over the world. They specialize in creating 
  a wide range of visual content for the entertainment industry.`,
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  themeColor: "#253237",
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#253237",
};

const menuItems= [
  {
    title:'home',
    link:'/',
  },
  {
    title:'about',
    link:'/about',
  },
  {
    title:'productions',
    link:'/productions',
  },
  {
    title:'news',
    link:'/news',
  }
];
export default function RootLayout({ children, params, searchParams }) {

  return (
    <html lang="en">
      <body
        className={`${francoisOne.variable} ${roboto.variable} ${spaceMono.variable}`}
      >
        <StyledComponentsRegistry>
          
           <ParentWrapper menuItems={menuItems}>
            {children}
           </ParentWrapper>
        
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
