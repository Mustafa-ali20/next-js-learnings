import Link from 'next/link'
import React from 'react'

function F1() {
  return (
    <div>
    <div className="flex flex-col gap-6 p-8">
      <h1 className="text-4xl font-bold">F1 page here</h1>
      <div className="flex flex-col gap-4">
        <Link href={"f1/f2"} className="text-lg font-semibold hover:underline">F2</Link>
        <Link href={"/f3"} className="text-lg font-semibold hover:underline">F3</Link>
      </div>
    </div>
    </div>
  )
}

export default F1
