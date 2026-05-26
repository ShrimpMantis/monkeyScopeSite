import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParentWrapper from "@/components/ParentWrapper";
import StyledComponentsRegistry from "./registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MonkeyScope",
  description: "MonkeyScope film production",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          
           <ParentWrapper menuItems={menuItems}>
            {children}
           </ParentWrapper>
        
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
