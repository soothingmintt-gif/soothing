import { categories } from '../../data/categories'
import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'
import type { CategoryId } from '../../types'

interface Props {
  value: CategoryId | 'all'
  onChange: (categoryId: CategoryId | 'all') => void
}

export function CategoryFilter({ value, onChange }: Props) {
  const { lang } = useLanguage()

  return (
    <div className="district-filter" role="group" aria-label={t('categoryFilterAria', lang)}>
      <button
        type="button"
        className={`chip${value === 'all' ? ' active' : ''}`}
        aria-pressed={value === 'all'}
        onClick={() => onChange('all')}
      >
        {t('filterAll', lang)}
      </button>
      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          className={`chip${value === c.id ? ' active' : ''}`}
          aria-pressed={value === c.id}
          onClick={() => onChange(c.id)}
        >
          {c.emoji} {lang === 'en' ? c.labelEn : c.label}
        </button>
      ))}
    </div>
  )
}
