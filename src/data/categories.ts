import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'lunch',
    label: '점심',
    labelEn: 'Lunch',
    emoji: '🍚',
    description: '직장인 점심 맛집',
    descriptionEn: 'Great lunch spots for office workers',
  },
  {
    id: 'dinner',
    label: '저녁',
    labelEn: 'Dinner',
    emoji: '🍽️',
    description: '퇴근 후 저녁 식사',
    descriptionEn: 'Dinner spots for after work',
  },
  {
    id: 'night',
    label: '야식',
    labelEn: 'Late Night',
    emoji: '🌙',
    description: '야근 후 야식',
    descriptionEn: 'Late-night bites after overtime',
  },
  {
    id: 'gathering',
    label: '회식',
    labelEn: 'Gatherings',
    emoji: '🍻',
    description: '회식·술집 추천',
    descriptionEn: 'Team dinners & bars',
  },
]

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}
