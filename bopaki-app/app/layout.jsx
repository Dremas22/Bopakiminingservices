import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Bopaki Mining Services (Pty) Ltd",
  description:
    "A 100% black woman-owned enterprise providing services and solutions to the mining and engineering sectors. Founded by Ms. Keikanetswe Teme, the company continues to redefine excellence in industries traditionally dominated by men, driven by her extensive knowledge, experience, and passion for business innovation.",
  keywords: [
    "Bopaki Mining Services",
    "Mining services South Africa",
    "Engineering solutions",
    "Black woman-owned business",
    "Industrial supplies",
    "Catering services",
    "PPE and corporate clothing",
    "Fire protection equipment",
    "Fuel and lubricants",
    "Industrial gearboxes",
    "Plant hire",
    "Logistics services",
    "Office space hire",
    "Keikanetswe Teme",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <main className="flex-1 container mx-auto p-8 min-h-screen">
            {children}
          </main>

          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
