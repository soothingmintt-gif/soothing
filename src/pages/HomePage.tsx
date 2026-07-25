import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTimeSlot } from '../hooks/useTimeSlot'
import { categories, getCategory } from '../data/categories'
import { restaurants } from '../data/restaurants'
import { DistrictFilter } from '../components/restaurant/DistrictFilter'
import { CategorySection } from '../components/restaurant/CategorySection'
import { useLanguage } from '../i18n/LanguageContext'
import { getTimeSlotMessage, getSeo, t } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'

export function HomePage() {
  const timeSlot = useTimeSlot()
  const { lang } = useLanguage()
  const [districtId, setDistrictId] = useState('all')
  useSeo(getSeo('home', lang))

  const primaryCategory = getCategory(timeSlot.primary)
  const filtered = restaurants.filter((r) => districtId === 'all' || r.districtId === districtId)

  return (
    <div className="app-container">
      <section className="home-hero">
        <p className="home-hero-eyebrow">{t('heroEyebrow', lang)}</p>
        <h1>{getTimeSlotMessage(timeSlot.messageKey, lang)}</h1>
        {primaryCategory && (
          <Link to={`/explore?category=${timeSlot.primary}`} className="btn">
            {primaryCategory.emoji} {lang === 'en' ? primaryCategory.labelEn : primaryCategory.label}{' '}
            {t('seeMore', lang)}
          </Link>
        )}
      </section>

      <DistrictFilter value={districtId} onChange={setDistrictId} />

      {categories
        .slice()
        .sort((a, b) => (a.id === timeSlot.primary ? -1 : b.id === timeSlot.primary ? 1 : 0))
        .map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            restaurants={filtered.filter((r) => r.categories.includes(category.id))}
            highlighted={category.id === timeSlot.primary}
          />
        ))}
    </div>
  )
}
