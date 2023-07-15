'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Counter({
  dictionary
}: {
  dictionary: {
    increment: string
    decrement: string
  }
}) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>
        This compoment is rendered on client:
        <Button variant={'outline'} onClick={() => setCount(n => n - 1)}>
          {dictionary.decrement}
        </Button>
        {count}
        <Button variant={'outline'} onClick={() => setCount(n => n + 1)}>
          {dictionary.increment}
        </Button>
      </p>
    </div>
  )
}
