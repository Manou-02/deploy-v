import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
    </div>
  )
}
