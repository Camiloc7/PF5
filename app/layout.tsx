// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { ThemeProvider } from "@/components/theme-provider";
// import { Toaster } from "@/components/ui/toaster";
// import Navbar from '@/components/navbar';
// import Footer from '@/components/footer';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'INK3D - Asian Fashion E-commerce & Community',
//   description: 'Discover unique Asian fashion styles, join our community, and express your creativity.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="light"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <div className="flex min-h-screen flex-col">
//             <Navbar />
//             <main className="flex-grow">{children}</main>
//             <Footer />
//           </div>
//           <Toaster />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/ui/use-toast"; 
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Chatbot from '@/components/Chatbot'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'INK3D - Asian Fashion E-commerce & Community',
  description: 'Discover unique Asian fashion styles, join our community, and express your creativity.',
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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Chatbot /> 
              <Footer />
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
