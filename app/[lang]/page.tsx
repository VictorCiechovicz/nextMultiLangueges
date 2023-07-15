import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import Counter from './components/counter'
import LocaleSwitcher from './components/locale-switcher'

export default async function IndexPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="flex flex-col items-center pt-20">
      <LocaleSwitcher />
      <div className="pt-10 pb-10">
        <div className='pb-24'>
          <p>Current locale: {lang}</p>
          <p>
            This text is rendered on the server:{' '}
            {dictionary['server-component'].welcome}
          </p>
        </div>

        <Counter dictionary={dictionary.counter} />
      </div>
    </div>
  )
}
