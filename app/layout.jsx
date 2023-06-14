import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <Nav></Nav>
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
