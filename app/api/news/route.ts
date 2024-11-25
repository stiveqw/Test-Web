import { NextResponse } from 'next/server'

export const newsItems = [
  {
    id: 1,
    image: "/image/news/food-booths.jfif",
    title: "다양한 먹거리 부스 준비 완료",
    description: "이번 축제에서는 다양한 먹거리 부스가 준비되어 있습니다. 맛있는 음식과 함께 즐거운 시간 보내세요!",
    detailedDescription: "이번 축제의 먹거리 부스는 총 20개로, 한식, 중식, 일식, 양식 등 다양한 국가의 요리를 맛볼 수 있습니다. 특히 학생들이 직접 운영하는 부스도 5개나 있어 더욱 특별한 경험을 제공할 예정입니다. 또한, 지역 유명 맛집 10곳과 협력하여 품질 좋은 음식을 저렴한 가격에 제공합니다. 축제 기간 동안 사용 가능한 할인 쿠폰도 배부될 예정이니 많은 관심 부탁드립니다."
  },
  {
    id: 2,
    image: "/image/news/food-festival.jfif", 
    title: "음식 페스티벌 개최 안내",
    description: "다음 주 토요일, 캠퍼스 중앙 광장에서 음식 페스티벌이 열립니다. 다양한 세계 음식을 맛보세요!",
    detailedDescription: "다음 주 토요일, 캠퍼스 중앙 광장에서 다양한 세계 음식을 맛볼 수 있는 음식 페스티벌이 열립니다. 한국, 중국, 일본, 이탈리아 등 다양한 국가의 음식을 맛볼 수 있으며, 학생들이 직접 만든 특별한 메뉴도 준비되어 있습니다.  페스티벌에는 다양한 이벤트와 공연도 준비되어 있으니 많은 참여 바랍니다."
  },
  {
    id: 3,
    image: "/image/news/last-year-highlights.jfif", 
    title: "작년 축제 하이라이트",
    description: "지난해 축제의 감동을 다시 한 번 느껴보세요. 작년 축제 하이라이트 영상을 공개합니다.",
    detailedDescription: "지난해 축제의 하이라이트 영상을 통해 축제의 열기를 다시 한번 느껴보세요.  인기 공연 영상, 흥미로운 이벤트 장면, 그리고 학생들의 즐거운 모습까지 담겨 있습니다.  영상은 우리 대학교 유튜브 채널에서 확인하실 수 있습니다."
  },
  {
    id: 4,
    image: "/image/news/online-tickets.jfif", 
    title: "온라인 티켓 예매 시작",
    description: "이번 축제 티켓 예매가 온라인으로 시작되었습니다. 조기 예매 시 할인 혜택을 놓치지 마세요!",
    detailedDescription: "이번 축제 티켓 예매가 온라인으로 시작되었습니다!  우리 대학교 홈페이지에서 간편하게 예매하실 수 있으며, 조기 예매 시 20% 할인 혜택을 제공합니다.  예매는 선착순으로 진행되니 서둘러주세요.  자세한 내용은 홈페이지 공지를 참고해주세요."
  },
  {
    id: 5,
    image: "/image/news/photo-contest.jfif", 
    title: "축제 사진 콘테스트 안내",
    description: "축제 기간 동안 찍은 사진을 공유하고 상품도 받아가세요. 참여 방법은 홈페이지를 확인해주세요.",
    detailedDescription: "축제 기간 동안 찍은 사진을 공유하고 푸짐한 상품을 받을 수 있는 사진 콘테스트에 참여하세요!  참여 방법은 간단합니다.  우리 대학교 홈페이지에 사진을 업로드하고, 간단한 설명을 작성해주시면 됩니다.  심사를 통해 우수작을 선정하여 상품을 증정할 예정입니다.  많은 참여 바랍니다!"
  },
  {
    id: 6,
    image: "/image/news/traffic-guide.jfif", 
    title: "축제 기간 교통 안내",
    description: "축제 기간 동안 변경되는 교통 정보를 확인하세요. 대중교통 이용을 권장드립니다.",
    detailedDescription: "축제 기간 동안 교통 혼잡이 예상됩니다.  대중교통 이용을 적극 권장하며, 자가용 이용 시 주차 공간이 부족할 수 있으니 가급적 대중교통을 이용해주시기 바랍니다.  주차장 위치 및 대중교통 이용 안내는 우리 대학교 홈페이지에서 확인하실 수 있습니다."
  },
  {
    id: 7,
    image: "/image/news/performance-lineup.jfif", 
    title: "공연 라인업 공개",
    description: "기대하던 축제 공연 라인업이 공개되었습니다. 다양한 장르의 아티스트들을 만나보세요!",
    detailedDescription: "드디어 기다리고 기다리던 축제 공연 라인업이 공개되었습니다!  다양한 장르의 인기 아티스트들이 축제를 더욱 풍성하게 만들어줄 예정입니다.  자세한 공연 일정 및 시간은 우리 대학교 홈페이지에서 확인하실 수 있습니다.  많은 기대 부탁드립니다!"
  },
  {
    id: 8,
    image: "/image/news/volunteers.jfif", 
    title: "축제 자원봉사자 모집",
    description: "축제의 원활한 진행을 위해 자원봉사자를 모집합니다. 관심 있는 학생들의 많은 참여 바랍니다.",
    detailedDescription: "축제의 성공적인 개최를 위해 자원봉사자를 모집합니다.  봉사활동에 관심 있는 학생들의 많은 참여를 기다리고 있습니다.  자세한 내용 및 신청 방법은 우리 대학교 홈페이지에서 확인하실 수 있습니다."
  },
  {
    id: 9,
    image: "/image/news/closing-ceremony.jfif", 
    title: "폐막식 안내",
    description: "축제의 대미를 장식할 폐막식 정보를 확인하세요. 화려한 불꽃놀이로 축제를 마무리합니다.",
    detailedDescription: "축제의 마지막을 화려하게 장식할 폐막식이 진행됩니다.  멋진 공연과 함께 아름다운 불꽃놀이를 감상하실 수 있습니다.  폐막식은 축제 마지막 날 저녁에 진행될 예정이며, 자세한 시간은 추후 공지하겠습니다."
  },
  {
    id: 10,
    image: "/image/news/after-party.jfif", 
    title: "애프터 파티 안내",
    description: "축제 이후 진행되는 애프터 파티에 참여하세요. DJ 공연과 함께 즐거운 시간을 보내세요.",
    detailedDescription: "축제의 열기를 이어갈 애프터 파티가 준비되어 있습니다!  신나는 DJ 공연과 함께 밤늦도록 즐거운 시간을 보내실 수 있습니다.  애프터 파티는 축제 마지막 날 밤에 진행될 예정이며, 참여를 원하시는 분들은 별도의 신청이 필요합니다.  자세한 내용은 추후 공지하겠습니다."
  },
  {
    id: 11,
    image: "/image/news/lost-and-found.jfif", 
    title: "분실물 센터 운영",
    description: "축제 기간 동안 분실물 센터를 운영합니다. 잃어버린 물건을 찾으시거나 주운 물건을 맡기세요.",
    detailedDescription: "축제 기간 동안 분실물 센터를 운영합니다.  잃어버린 물건을 찾으시거나 주운 물건을 맡기실 수 있습니다.  분실물 센터는 축제 기간 동안 캠퍼스 내 지정된 장소에서 운영됩니다.  자세한 위치는 우리 대학교 홈페이지에서 확인하실 수 있습니다."
  },
  {
    id: 12,
    image: "/image/news/survey.jfif", 
    title: "축제 만족도 조사",
    description: "축제 개선을 위한 만족도 조사에 참여해주세요. 여러분의 의견이 내년 축제를 만듭니다.",
    detailedDescription: "더욱 발전된 축제를 만들기 위해 여러분의 소중한 의견을 듣고자 만족도 조사를 실시합니다.  간단한 설문에 참여해주시면 내년 축제를 기획하는데 큰 도움이 됩니다.  설문 참여는 우리 대학교 홈페이지에서 가능합니다.  많은 참여 부탁드립니다!"
  }
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1', 10)
    const itemsPerPage = 6
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const paginatedItems = newsItems.slice(startIndex, endIndex)
    const totalPages = Math.ceil(newsItems.length / itemsPerPage)

    const newsData = {
      welcomeTitle: "최신 뉴스",
      welcomeDescription: "우리 대학의 최신 소식을 확인하세요.",
      welcomeBackgroundImage: "/image/news/fallback-news.jfif",
      subtitle: "News",
      newsItems: paginatedItems,
      totalPages: totalPages
    }
    return NextResponse.json(newsData)
  } catch (error) {
    console.error('Error in /api/news:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

