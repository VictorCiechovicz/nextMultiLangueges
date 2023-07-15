'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { i18n } from '../../../i18n-config'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useEffect, useState } from 'react'

export default function LocaleSwitcher() {
  const [valueSelect, setValueSelect] = useState<string>('')
  const pathName = usePathname()
  const router = useRouter()

  const handleCatchValueSelect = (event: any) => {
    setValueSelect(event)
  }


  useEffect(() => {
    const redirectedPathName = () => {
      if (!pathName) return '/'
      const segments = pathName.split('/')
      segments[1] = valueSelect
      router.push(valueSelect)
 
    }
    redirectedPathName()
  }, [valueSelect])

  return (
    <div>
      <Select onValueChange={handleCatchValueSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Languages</SelectLabel>

            {i18n.locales.map(locale => {
              return (
                <SelectItem value={locale} key={locale}>
                  {locale}
                </SelectItem>
              )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
