import type { Review } from '../types'

export const reviews: Review[] = [
  {
    id: 'rv01',
    restaurantId: 'r02',
    author: '민지',
    rating: 5,
    text: '접대 자리로 다녀왔는데 코스 구성도 좋고 사장님이 친절하셔서 만족스러웠어요.',
    visibility: 'public',
    createdAt: '2026-07-10',
    comments: [
      { id: 'c01', author: '준호', text: '저도 다음 주에 예약해봐야겠네요!', createdAt: '2026-07-11' },
      { id: 'c02', author: '수아', text: '가격대는 어느 정도였나요?', createdAt: '2026-07-12' },
    ],
  },
  {
    id: 'rv02',
    restaurantId: 'r14',
    author: '태윤',
    rating: 4,
    text: '곱창 냄새 하나도 안 나고 야채곱창이라 부담 없이 먹기 좋았습니다. 회식 장소로 강추.',
    visibility: 'public',
    createdAt: '2026-07-15',
    comments: [
      { id: 'c03', author: '민지', text: '저희 팀 다음 회식 여기로 정했어요 ㅎㅎ', createdAt: '2026-07-16' },
    ],
  },
  {
    id: 'rv03',
    restaurantId: 'r07',
    author: '수아',
    rating: 4,
    text: '노가리랑 생맥이 국룰이죠. 시끌벅적한 분위기가 회식하기 딱 좋아요.',
    visibility: 'public',
    createdAt: '2026-07-18',
    comments: [],
  },
  {
    id: 'rv04',
    restaurantId: 'r13',
    author: '지훈',
    rating: 5,
    text: '주말 브런치로 완벽. 웨이팅은 있지만 그만한 값어치 합니다.',
    visibility: 'public',
    createdAt: '2026-07-20',
    comments: [
      { id: 'c04', author: '태윤', text: '웨이팅 얼마나 하셨어요?', createdAt: '2026-07-20' },
      { id: 'c05', author: '지훈', text: '평일 낮이라 15분 정도밖에 안 걸렸어요!', createdAt: '2026-07-20' },
    ],
  },
  {
    id: 'rv05',
    restaurantId: 'r01',
    author: '나',
    rating: 5,
    text: '혼자 가기 눈치 안 보이고 국물이 진짜 진해서 자주 가는 나만의 점심 맛집.',
    visibility: 'private',
    createdAt: '2026-07-05',
    comments: [],
  },
  {
    id: 'rv06',
    restaurantId: 'r19',
    author: '나',
    rating: 4,
    text: '기념일에 갔던 곳, 조용해서 대화하기 좋았음. 다음엔 다른 메뉴 시켜보기.',
    visibility: 'private',
    createdAt: '2026-07-08',
    comments: [],
  },
]

export function getReviewsByRestaurant(restaurantId: string): Review[] {
  return reviews.filter((r) => r.restaurantId === restaurantId)
}

export function getPublicReviews(): Review[] {
  return reviews.filter((r) => r.visibility === 'public')
}
