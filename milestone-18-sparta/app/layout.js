import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Potter - Polution Counter',
  description: 'By Milestone 18',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="bg-green4 min-w-screen min-h-screen">
      <Navbar/>
      {children}
      <Footer /></div></body>
    </html>
  )
} 
