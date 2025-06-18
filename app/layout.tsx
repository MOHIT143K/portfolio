import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohit Khandelwal - Technical Lead & Full Stack Developer',
  description: 'Portfolio of Mohit Khandelwal, a Technical Lead with 11+ years of experience in full stack development and web development',
  icons: { icon: "https://cdn.iconscout.com/icon/free/png-256/free-michael-kors-logo-icon-download-in-svg-png-gif-file-formats--brand-fashion-pack-logos-icons-2854266.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
  );
}