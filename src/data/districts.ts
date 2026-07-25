import type { District } from '../types'

export const districts: District[] = [
  { id: 'gangnam', name: '강남구', nameEn: 'Gangnam-gu' },
  { id: 'mapo', name: '마포구', nameEn: 'Mapo-gu' },
  { id: 'jongno', name: '종로구', nameEn: 'Jongno-gu' },
  { id: 'seongdong', name: '성동구', nameEn: 'Seongdong-gu' },
  { id: 'yongsan', name: '용산구', nameEn: 'Yongsan-gu' },
  { id: 'yeongdeungpo', name: '영등포구', nameEn: 'Yeongdeungpo-gu' },
]

export function getDistrict(id: string): District | undefined {
  return districts.find((d) => d.id === id)
}
