"use client";

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Counter from '@/features/counter';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Counter />
      </div>
    </main>
  )
}
