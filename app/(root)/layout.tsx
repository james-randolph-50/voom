import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Voom - Video Conferencing",
  description: "Video conferencing app built in NextJS",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({children}: {children:ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}

      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout