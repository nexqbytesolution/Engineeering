import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Paradise Construction | Building Your Vision, Engineering Your Future",
  description:
    "Paradise Construction is a leading construction engineering company dedicated to delivering innovative, sustainable, and high-quality building solutions. With over 20 years of experience, we specialize in commercial, residential, and infrastructure projects that transform skylines and communities. Our team of expert engineers, architects, and project managers work collaboratively to bring your vision to life while ensuring safety, efficiency, and environmental responsibility. Discover how Paradise Construction can help you build a better future today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
