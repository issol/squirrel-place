import { Fragment, useEffect } from 'react'
import { NextPage } from 'next'
import Header from '@/components/common/Header'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      ></main>
    </Fragment>
  )
}
