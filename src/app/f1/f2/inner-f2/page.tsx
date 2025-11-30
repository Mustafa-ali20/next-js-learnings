import Link from 'next/link'
import React from 'react'

function InnerF2() {
  return (
    <div>
      <h1>This is inner F2</h1>
      <Link href={"/f5"}>F5</Link>
    </div>
  )
}

export default InnerF2
