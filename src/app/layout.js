import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/Provider";
import Footer from "@/components/Footer";

const options = {
  title: "Akama Gospel Obasesam | Software Developer and Tech enthusiast",
  description:
    "Akama Gospel Obasesam is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open-source communities",
  url: "https://gospelobasesam.com", // ✅ Added missing URL
  ogImage:
    "https://res.cloudinary.com/dijs29rd9/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1746619454/Snapchat-765535805_sxrij6.jpg",
};

// ✅ Fix: Rename `Metadata` to `metadata` and ensure `options.url` is defined
export const metadata = {
  title: options.title,
  metadataBase: new URL(options.url), // ✅ Now options.url is defined
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url, // ✅ Ensure URL is passed
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-black bg-white dark:text-white text-zinc-700">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
