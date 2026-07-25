import type { PrivateList } from '../types'

export const archiveLists: PrivateList[] = [
  {
    id: 'al01',
    title: '나만 아는 강남 점심 리스트',
    description: '혼밥하기 좋고 줄 안 서는 곳들만 모음',
    restaurantIds: ['r01', 'r18', 'r16'],
    shareSlug: 'gangnam-lunch-secret',
    createdAt: '2026-06-20',
  },
  {
    id: 'al02',
    title: '데이트 코스',
    description: '분위기 좋은 저녁+술 조합',
    restaurantIds: ['r06', 'r19', 'r11'],
    shareSlug: 'date-course-2026',
    createdAt: '2026-07-02',
  },
]
