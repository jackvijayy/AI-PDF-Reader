
import "./globals.css";
import { Outfit } from 'next/font/google'
import { Provider } from "./provider";
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: "MICO",
  description: "AI Powered Pdf Summarizer",
};

const outfit = Outfit({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
