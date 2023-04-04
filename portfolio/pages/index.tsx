import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Header from '@component/components/Header'
import Bio from '@component/components/Bio'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
          <Header/>
          <Bio/>
      </div>
  )
}
