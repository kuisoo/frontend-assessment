import './globals.css'
import {Archivo} from 'next/font/google'

const archivo = Archivo({subsets: ['latin']})

export const metadata = {
  title: 'Filta | Exercise 1',
  description: 'Exercise 1: Filta frontend developer test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={archivo.className}>
      <body>{children}</body>
    </html>
  )
}
