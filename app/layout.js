import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import CloudBackground from "./components/CloudBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Roopam Badoniya - DevOps & Cloud Engineer",
  description: "Portfolio of Roopam Badoniya showcasing DevOps, Cloud Engineering, and Infrastructure projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">
        <CloudBackground />
        {children}
      </body>
    </html>
  );
}
