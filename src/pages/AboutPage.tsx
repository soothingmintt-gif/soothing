import { useLanguage } from '../i18n/LanguageContext'
import { getSeo } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'

const content = {
  ko: {
    title: 'Yumming 소개',
    body: [
      'Yumming은 직장인의 하루 식사 고민을 덜어주는 맛집 추천 서비스입니다. 점심, 퇴근 후 저녁, 야근 후 야식, 그리고 주말을 앞둔 금요일의 회식·술자리까지 — 지금 이 시간에 딱 맞는 메뉴와 장소를 서울 지역구별로 추천합니다.',
      '단순 추천에 그치지 않고, 내가 직접 가본 곳을 기록해두는 개인 아카이브(비공개 리스트) 기능을 제공합니다. 플레이리스트를 공유하듯, 나만의 맛집 리스트를 링크 하나로 친구에게만 살짝 공유할 수 있어요.',
      '반대로 누구에게나 솔직한 후기를 남기고 싶다면 커뮤니티에 공개 리뷰를 올리고 댓글로 다른 이용자와 소통할 수 있습니다.',
      '이 사이트는 현재 개발 중이며, 실제 서비스 데이터가 아닌 예시 데이터로 구성되어 있습니다.',
    ],
  },
  en: {
    title: 'About Yumming',
    body: [
      'Yumming helps busy professionals figure out what to eat, right now. From lunch to after-work dinner, late-night bites after overtime, and Friday team dinners before the weekend — we recommend the right spot for the right moment, organized by Seoul district.',
      'Beyond recommendations, Yumming lets you keep a private archive of places you have actually visited. Like sharing a playlist, you can share a curated list of your favorite spots with friends through a single private link.',
      'If you would rather share your honest opinion with everyone, you can post a public review in the Community feed and chat about it in the comments.',
      'This site is under active development and currently uses example data rather than real listings.',
    ],
  },
}

export function AboutPage() {
  const { lang } = useLanguage()
  useSeo(getSeo('about', lang))
  const c = content[lang]

  return (
    <div className="app-container legal-page">
      <h1 className="explore-title">{c.title}</h1>
      {c.body.map((p, i) => (
        <p key={i} className="legal-paragraph">
          {p}
        </p>
      ))}
    </div>
  )
}
