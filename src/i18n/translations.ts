import type { Lang } from '../types'

export const uiText = {
  navHome: { ko: '홈', en: 'Home' },
  navExplore: { ko: '탐색', en: 'Explore' },
  navCommunity: { ko: '커뮤니티', en: 'Community' },
  navArchive: { ko: '아카이브', en: 'Archive' },
  navMe: { ko: '마이', en: 'Me' },
  searchAria: { ko: '검색으로 이동', en: 'Go to search' },
  langToggleAria: { ko: '언어를 영어로 전환', en: 'Switch language to Korean' },
  heroEyebrow: { ko: '지금 추천', en: 'Recommended now' },
  seeMore: { ko: '맛집 보기', en: 'See spots' },
  filterAll: { ko: '전체', en: 'All' },
  filterAria: { ko: '지역(구) 필터', en: 'District filter' },
  bookmarkAria: { ko: '아카이브에 저장', en: 'Save to archive' },
  badgeNew: { ko: 'NEW', en: 'NEW' },
  badgeHot: { ko: 'HOT', en: 'HOT' },
  searchPlaceholder: { ko: '식당, 음식 종류, 태그로 검색', en: 'Search by name, food type, or tag' },
  searchInputAria: { ko: '식당 검색', en: 'Search restaurants' },
  categoryFilterAria: { ko: '카테고리 필터', en: 'Category filter' },
  sortAria: { ko: '정렬 기준', en: 'Sort by' },
  sortRecommended: { ko: '추천순', en: 'Recommended' },
  sortRating: { ko: '평점순', en: 'Top rated' },
  sortReviews: { ko: '리뷰 많은순', en: 'Most reviewed' },
  resultsCount: { ko: '개의 식당', en: 'spots found' },
  emptyResultsTitle: { ko: '검색 결과가 없어요', en: 'No results found' },
  emptyResultsBody: {
    ko: '다른 키워드나 필터로 다시 시도해보세요.',
    en: 'Try a different keyword or filter.',
  },
  explorePageTitle: { ko: '탐색', en: 'Explore' },
  backAria: { ko: '뒤로 가기', en: 'Go back' },
  saveToArchive: { ko: '아카이브에 저장', en: 'Save to archive' },
  savedToArchive: { ko: '저장됨', en: 'Saved' },
  reviewsHeading: { ko: '리뷰', en: 'Reviews' },
  noReviewsTitle: { ko: '아직 공개 리뷰가 없어요', en: 'No public reviews yet' },
  noReviewsBody: {
    ko: '가장 먼저 이 식당의 리뷰를 남겨보세요.',
    en: 'Be the first to review this spot.',
  },
  commentsCount: { ko: '개의 댓글', en: 'comments' },
  notFoundTitle: { ko: '식당을 찾을 수 없어요', en: 'Restaurant not found' },
  notFoundBody: {
    ko: '삭제되었거나 잘못된 주소예요.',
    en: 'It may have been removed, or the link is incorrect.',
  },
  backToExplore: { ko: '탐색으로 돌아가기', en: 'Back to explore' },
  archivePageTitle: { ko: '아카이브', en: 'Archive' },
  archivePageSubtitle: {
    ko: '나만 아는 맛집 리스트를 만들고, 링크로 친구에게만 공유하세요.',
    en: 'Curate lists only you can see, and share the link with friends privately.',
  },
  createListBtn: { ko: '새 리스트 만들기', en: 'New list' },
  createListTitle: { ko: '리스트 만들기', en: 'Create list' },
  listTitleLabel: { ko: '리스트 이름', en: 'List name' },
  listTitlePlaceholder: { ko: '예: 나만 아는 강남 점심 리스트', en: 'e.g. My secret Gangnam lunch spots' },
  listDescLabel: { ko: '설명 (선택)', en: 'Description (optional)' },
  listDescPlaceholder: { ko: '이 리스트는 어떤 리스트인가요?', en: 'What is this list about?' },
  createSubmit: { ko: '만들기', en: 'Create' },
  cancel: { ko: '취소', en: 'Cancel' },
  emptyListsTitle: { ko: '아직 리스트가 없어요', en: 'No lists yet' },
  emptyListsBody: {
    ko: '새 리스트를 만들어 마음에 드는 식당을 모아보세요.',
    en: 'Create a list to start collecting spots you love.',
  },
  restaurantCount: { ko: '개 식당', en: 'spots' },
  shareLinkLabel: { ko: '비공개 공유 링크', en: 'Private share link' },
  copyLink: { ko: '링크 복사', en: 'Copy link' },
  linkCopied: { ko: '복사됨', en: 'Copied' },
  addRestaurantBtn: { ko: '식당 추가', en: 'Add spots' },
  removeFromListAria: { ko: '리스트에서 제거', en: 'Remove from list' },
  deleteListBtn: { ko: '리스트 삭제', en: 'Delete list' },
  listEmptyTitle: { ko: '리스트가 비어있어요', en: 'This list is empty' },
  listEmptyBody: { ko: '식당 추가 버튼으로 채워보세요.', en: 'Tap Add spots to start filling it in.' },
  listNotFoundTitle: { ko: '리스트를 찾을 수 없어요', en: 'List not found' },
  listNotFoundBody: {
    ko: '삭제되었거나 링크가 잘못됐어요.',
    en: 'It may have been deleted, or the link is incorrect.',
  },
  backToArchive: { ko: '아카이브로 돌아가기', en: 'Back to archive' },
  pickerDone: { ko: '완료', en: 'Done' },
  pickerAdded: { ko: '추가됨', en: 'Added' },
  communityPageTitle: { ko: '커뮤니티', en: 'Community' },
  communitySubtitle: {
    ko: '솔직한 리뷰를 공개로 남기고, 댓글로 소통해보세요.',
    en: 'Post honest reviews publicly and chat about them in the comments.',
  },
  writeReviewBtn: { ko: '리뷰 작성', en: 'Write a review' },
  chooseRestaurantLabel: { ko: '어떤 식당인가요?', en: 'Which spot is this about?' },
  changeRestaurant: { ko: '다른 식당 선택', en: 'Choose a different spot' },
  ratingLabel: { ko: '평점', en: 'Rating' },
  reviewTextLabel: { ko: '리뷰 내용', en: 'Review' },
  reviewTextPlaceholder: { ko: '어떤 점이 좋았나요?', en: 'What did you like about it?' },
  postBtn: { ko: '게시하기', en: 'Post' },
  noPublicReviewsTitle: { ko: '아직 공개된 리뷰가 없어요', en: 'No public reviews yet' },
  noPublicReviewsBody: {
    ko: '첫 리뷰를 남겨서 커뮤니티를 시작해보세요.',
    en: 'Be the first to post a review.',
  },
  commentPlaceholder: { ko: '댓글을 남겨보세요', en: 'Add a comment' },
  commentSubmit: { ko: '등록', en: 'Post' },
  viewCommentsToggle: { ko: '댓글 보기', en: 'View comments' },
  hideCommentsToggle: { ko: '댓글 숨기기', en: 'Hide comments' },
  myPageTitle: { ko: '마이페이지', en: 'My Page' },
  myDisplayName: { ko: '나', en: 'Me' },
  myHandle: { ko: '@bboggl_user', en: '@bboggl_user' },
  statReviews: { ko: '작성 리뷰', en: 'Reviews' },
  statLists: { ko: '아카이브 리스트', en: 'Lists' },
  statSaved: { ko: '저장한 식당', en: 'Saved spots' },
  myReviewsHeading: { ko: '내가 쓴 리뷰', en: 'My reviews' },
  noMyReviewsTitle: { ko: '아직 작성한 리뷰가 없어요', en: "You haven't written a review yet" },
  noMyReviewsBody: {
    ko: '식당 상세 페이지나 커뮤니티에서 리뷰를 남겨보세요.',
    en: 'Leave a review from a restaurant page or the community feed.',
  },
  visibilityPublic: { ko: '공개', en: 'Public' },
  visibilityPrivate: { ko: '비공개', en: 'Private' },
  myListsHeading: { ko: '내 아카이브 리스트', en: 'My archive lists' },
  viewAllInArchive: { ko: '아카이브에서 전체 보기', en: 'View all in Archive' },
  settingsHeading: { ko: '설정', en: 'Settings' },
  languageSettingLabel: { ko: '언어', en: 'Language' },
  settingsNote: {
    ko: '알림·계정 설정은 준비 중이에요.',
    en: 'Notification and account settings are coming soon.',
  },
  closeAria: { ko: '닫기', en: 'Close' },
  footerAbout: { ko: '소개', en: 'About' },
  footerPrivacy: { ko: '개인정보처리방침', en: 'Privacy Policy' },
  footerTerms: { ko: '이용약관', en: 'Terms of Service' },
  footerRights: { ko: 'All rights reserved.', en: 'All rights reserved.' },
} as const

export function starRatingAria(n: number, lang: Lang): string {
  return lang === 'ko' ? `${n}점` : `Rate ${n} star${n === 1 ? '' : 's'}`
}

export type UiTextKey = keyof typeof uiText

export function t(key: UiTextKey, lang: Lang): string {
  return uiText[key][lang]
}

const timeSlotMessages: Record<string, Record<Lang, string>> = {
  gathering: {
    ko: '불금이네요, 오늘은 회식·술집 어때요?',
    en: "It's Friday night — how about a team dinner or a bar?",
  },
  lunch: {
    ko: '점심시간이에요, 오늘 뭐 드실래요?',
    en: "It's lunchtime — what are you in the mood for?",
  },
  dinnerPrep: {
    ko: '슬슬 저녁 메뉴 골라볼까요?',
    en: 'Time to start thinking about dinner?',
  },
  dinner: {
    ko: '퇴근 후 저녁, 든든하게 드세요',
    en: 'After work — treat yourself to a good dinner',
  },
  night: {
    ko: '출출한 밤이네요, 야식 어때요?',
    en: "Feeling hungry tonight? How about a late-night bite?",
  },
  lunchPrep: {
    ko: '오늘 점심 메뉴를 미리 골라볼까요?',
    en: "Let's plan today's lunch ahead of time",
  },
}

export function getTimeSlotMessage(messageKey: keyof typeof timeSlotMessages, lang: Lang): string {
  return timeSlotMessages[messageKey][lang]
}

const seoContent = {
  home: {
    ko: { title: '홈', description: '지금 시간대에 맞는 점심·저녁·야식·회식 맛집을 서울 지역구별로 추천합니다.' },
    en: { title: 'Home', description: 'Restaurant recommendations by time of day and Seoul district, right now.' },
  },
  explore: {
    ko: { title: '탐색', description: '식당명, 음식 종류, 태그로 검색하고 지역·카테고리·정렬로 필터링해보세요.' },
    en: { title: 'Explore', description: 'Search restaurants by name, food type, or tag, and filter by district and category.' },
  },
  community: {
    ko: { title: '커뮤니티', description: '솔직한 맛집 리뷰를 공개로 남기고 댓글로 다른 이용자와 소통해보세요.' },
    en: { title: 'Community', description: 'Read and post honest public restaurant reviews, and chat in the comments.' },
  },
  archive: {
    ko: { title: '아카이브', description: '나만 아는 맛집 리스트를 만들고 링크로 친구에게만 공유하세요.' },
    en: { title: 'Archive', description: 'Curate private restaurant lists and share them with friends via a link.' },
  },
  me: {
    ko: { title: '마이페이지', description: '내가 쓴 리뷰와 아카이브 리스트를 한눈에 확인하세요.' },
    en: { title: 'My Page', description: 'See your reviews and archive lists at a glance.' },
  },
  about: {
    ko: { title: '소개', description: 'Bboggl이 어떤 서비스인지 소개합니다.' },
    en: { title: 'About', description: 'Learn what Bboggl is about.' },
  },
  privacy: {
    ko: { title: '개인정보처리방침', description: 'Bboggl의 개인정보 수집 및 이용에 대한 안내입니다.' },
    en: { title: 'Privacy Policy', description: "How Bboggl collects and uses your information." },
  },
  terms: {
    ko: { title: '이용약관', description: 'Bboggl 서비스 이용에 관한 약관입니다.' },
    en: { title: 'Terms of Service', description: 'The terms governing your use of Bboggl.' },
  },
} as const

export function getSeo(pageKey: keyof typeof seoContent, lang: Lang): { title: string; description: string } {
  return seoContent[pageKey][lang]
}
