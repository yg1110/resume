/**
 * 프로젝트 모달 데이터 상수
 * - 회사/프로젝트 추가·수정 시 이 파일만 편집하면 됨
 */
const PROJECT_MODAL_DATA = [
  {
    modalId: "modal-team-pass",
    panelId: "panel-team-pass",
    title: "팀패스 (Team Pass)",
    period: "2025.04 - 2025.12 (9개월)",
    desc: "브래닛 서비스의 프론트엔드 전 범위를 수행한 프로젝트입니다.",
    projects: [
      {
        title: "브래닛 웹 플랫폼",
        summary:
          "화장품 제조 뷰티 플랫폼의 프론트엔드 전 범위 개발. UI 표준화·Storybook 컴포넌트 정비, 구독 결제(토스페이먼츠) 연동, React Query/Zustand 기반 상태 관리로 1~2주 스프린트 배포를 수행했습니다.",
        images: ["", "", "", "", "", ""],
        techStack: ["React", "TypeScript", "React Query", "Tailwind"],
      },
    ],
  },
  {
    modalId: "modal-cavement",
    panelId: "panel-cavement",
    title: "케이브먼트 (Cavement)",
    period: "2023.11 - 2025.04 (1년 6개월)",
    desc: "미남이오·제모데이 서비스의 앱/웹 개발 프로젝트입니다.",
    projects: [
      {
        title: "미남이오 앱/웹",
        summary:
          "‘미남이오’는 남성들의 성형·시술 및 탈모 관심 증가에 맞춰 남성 사용자만을 타겟으로 한 전문 플랫폼입니다. 사용자는 시술·치료 정보를 쉽고 빠르게 탐색하고, 병원·후기·커뮤니티 콘텐츠를 통해 본인에게 적합한 선택을 효율적으로 결정할 수 있습니다. 이를 통해 정보 탐색부터 비교·결정까지의 과정을 한 곳에서 매끄럽게 연결합니다.",
        images: [
          "img/케이브먼트/미남이오/1.jpg",
          "img/케이브먼트/미남이오/2.jpg",
          "img/케이브먼트/미남이오/3.jpg",
          "img/케이브먼트/미남이오/4.jpg",
          "img/케이브먼트/미남이오/5.jpg",
          "img/케이브먼트/미남이오/6.jpg",
          "img/케이브먼트/미남이오/7.jpg",
          "img/케이브먼트/미남이오/8.jpg",
          "img/케이브먼트/미남이오/9.jpg",
          "img/케이브먼트/미남이오/10.jpg",
          "img/케이브먼트/미남이오/11.jpg",
          "img/케이브먼트/미남이오/12.jpg",
        ],
        techStack: ["Next.js", "React Native", "TypeScript"],
        features: [
          {
            title: "비대면 견적 기능",
            description:
              "사용자가 자신의 상태를 촬영해 업로드하면 병원으로부터 비대면 견적과 상담 정보를 받을 수 있는 기능입니다. 이를 통해 시간·장소 제약 없이 전문가 의견을 확인하고 의사결정을 빠르게 진행할 수 있습니다.",
          },
          {
            title: "후기 작성 및 정보 공유 기능",
            description:
              "시술 경험을 바탕으로 후기를 작성하고 공유할 수 있는 기능입니다. 이를 통해 다른 사용자들이 시술 선택에 필요한 실제 경험 기반 정보를 참고할 수 있습니다.",
          },
          {
            title: "병원 정보 제공 기능",
            description:
              "병원의 위치, 전문 분야, 시술 항목, 후기·평가 등을 종합적으로 제공하는 기능입니다. 이를 통해 사용자는 조건에 맞는 병원을 비교하고 쉽게 선택할 수 있습니다.",
          },
          {
            title: "커뮤니티 기능",
            description:
              "사용자들이 관심사 기반으로 소통하며 뷰티·건강 정보를 교환할 수 있는 기능입니다. 이를 통해 사용자 간 경험과 지식이 축적되고 플랫폼 체류와 참여가 강화됩니다.",
          },
          {
            title: "발품후기",
            description:
              "시술 후기뿐 아니라 사용자가 여러 병원을 직접 방문해 얻은 정보를 공유할 수 있는 기능입니다. 이를 통해 방문 경험 기반의 구체적인 비교 정보가 제공되어 병원 선택의 신뢰도를 높입니다.",
          },
          {
            title: "미남비결",
            description:
              "미남이오 팀이 의사·뷰티 관련 콘텐츠를 선별·요약하고, 관련 추천 상품과 함께 제공하는 기능입니다. 이를 통해 사용자는 핵심 노하우를 빠르게 습득하고 필요한 상품 정보를 한 번에 확인할 수 있습니다.",
          },
          {
            title: "병원 지도 기능",
            description:
              "병원을 지도에서 직관적으로 탐색하고, 위치 기반으로 정보를 확인할 수 있는 기능입니다. 이를 통해 사용자는 주변 병원을 빠르게 찾고 후기·평가까지 함께 비교할 수 있습니다.",
          },
          {
            title: "미남위키",
            description:
              "의사 답변을 정리해 데이터베이스화하고 검색/열람이 가능하도록 고도화한 기능입니다. 이를 통해 신뢰도 높은 의학·뷰티 지식을 축적하고 사용자의 반복 질문을 효율적으로 해결합니다.",
          },
          {
            title: "골라드림",
            description:
              "남성 관리 아이템을 비교 분석해 사용자에게 적합한 제품을 추천하는 기능입니다. 이를 통해 사용자는 가격·특징·리뷰를 종합적으로 비교하지 않아도 빠르게 결정을 내리고, 쿠팡파트너스를 통해 구매까지 자연스럽게 이어갈 수 있습니다.",
          },
          {
            title: "고민해결템",
            description:
              "피부/탈모/몸매 관리 등 고민 카테고리별로 해결 아이템을 추천하는 기능입니다. 이를 통해 사용자는 목적에 맞는 솔루션을 빠르게 탐색하고 개인화된 쇼핑 경험을 얻을 수 있습니다.",
          },
          {
            title: "향수 차트",
            description:
              "월별로 업데이트되는 남성 향수 차트를 제공하는 기능입니다. 이를 통해 사용자는 최신 트렌드와 계절/상황별 추천 정보를 참고해 자신에게 맞는 향수를 쉽게 선택할 수 있습니다.",
          },
          {
            title: "스토어",
            description:
              "Shopby를 활용해 스킨케어·헤어케어·바디케어 등 남성 관리 아이템을 한 곳에서 구매할 수 있는 기능입니다. 이를 통해 사용자는 필요한 제품을 빠르게 찾고 일관된 흐름으로 쇼핑을 완료할 수 있습니다.",
          },
        ],
      },
      {
        title: "제모데이 웹",
        summary:
          "‘제모데이’는 미남이오 운영 과정에서 축적된 사용자 피드백과 데이터 중 병원 지도·제모 서비스 수요를 기반으로 만든 제모 전용 플랫폼입니다. 남성 중심 타겟에서 남성·여성 모두로 확장하여, 병원 탐색부터 정보 확인·결제까지 제모 서비스 의사결정과 이용 과정을 단순화합니다. 이를 통해 사용자는 조건에 맞는 병원을 더 빠르고 정확하게 선택할 수 있습니다.",
        images: [
          "img/케이브먼트/제모데이/1.png",
          "img/케이브먼트/제모데이/2.png",
          "img/케이브먼트/제모데이/3.png",
          "img/케이브먼트/제모데이/4.png",
        ],
        techStack: ["Next.js", "TypeScript"],
        features: [
          {
            title: "업데이트 병원, 지역 거점 병원",
            description:
              "최신 정보가 반영된 병원과 지역 중심 병원 목록을 제공하는 기능입니다. 이를 통해 사용자는 신뢰도 높은 병원을 우선적으로 확인하고, 거주 지역 기준으로 빠르게 방문 가능한 선택지를 확보할 수 있습니다.",
          },
          {
            title: "제모 지도",
            description:
              "전국 병원을 지도에서 탐색하고, 병원 서비스·기기·시술 정보까지 한 번에 확인할 수 있는 기능입니다. 이를 통해 사용자는 위치 기반 탐색과 필터링으로 조건에 맞는 병원을 효율적으로 선별할 수 있습니다.",
          },
          {
            title: "질문 답변",
            description:
              "제모 관련 궁금증을 전문가·병원 관계자·이용자 답변을 통해 해결할 수 있는 기능입니다. 이를 통해 사용자는 과정·사후관리·가격 비교 등 실질적인 정보를 바탕으로 더 합리적인 결정을 내릴 수 있습니다.",
          },
          {
            title: "미리결제",
            description:
              "병원 이벤트 가격을 확인하고, 내부 간편결제를 통해 사전 결제 후 서비스를 이용할 수 있는 기능입니다. 이를 통해 사용자는 결제 과정을 단순화하고 예약·방문 경험을 더 빠르게 진행할 수 있습니다.",
          },
        ],
      },
    ],
  },
  {
    modalId: "modal-pet-people",
    panelId: "panel-pet-people",
    title: "펫피플 (Pet People)",
    period: "2022.04 - 2023.03 (1년)",
    desc: "와요/펫플래닛 앱 프로젝트입니다.",
    projects: [
      {
        title: "플레이스",
        summary:
          "‘플레이스’는 반려동물 동반 가능 여부를 지도 기반으로 탐색할 수 있는 ‘와요’ 앱의 핵심 기능입니다. 카페, 식당, 미용, 돌봄, 호텔, 유치원, 수영장, 운동장, 용품점, 동물병원 등 다양한 카테고리를 제공하며, 마커 선택 시 상세 페이지로 이동해 정보를 확인할 수 있습니다. 이를 통해 사용자는 목적에 맞는 장소를 빠르게 비교하고 방문 결정을 효율적으로 내릴 수 있습니다.",
        images: [
          "img/펫피플/플레이스/1.jpeg",
          "img/펫피플/플레이스/2.jpeg",
          "img/펫피플/플레이스/3.jpeg",
          "img/펫피플/플레이스/4.jpeg",
          "img/펫피플/플레이스/5.jpeg",
          "img/펫피플/플레이스/6.jpeg",
          "img/펫피플/플레이스/7.jpeg",
        ],
        techStack: ["React Native"],
        features: [
          {
            title: "카테고리 기반 장소 탐색",
            description:
              "카페, 식당, 미용, 돌봄, 호텔, 유치원, 수영장, 운동장, 용품점, 동물병원 등 카테고리별로 장소를 탐색할 수 있는 기능입니다. 이를 통해 사용자는 목적에 맞는 장소를 빠르게 좁혀볼 수 있습니다.",
          },
          {
            title: "지도 마커 기반 위치 탐색",
            description:
              "지도를 통해 주변 장소를 마커로 확인하고 위치 기반으로 탐색할 수 있는 기능입니다. 이를 통해 사용자는 현재 위치를 기준으로 접근성이 좋은 장소를 직관적으로 찾을 수 있습니다.",
          },
          {
            title: "상세 페이지 이동 및 정보 확인",
            description:
              "마커 선택 시 상세 페이지로 이동해 장소의 세부 정보를 확인할 수 있는 기능입니다. 이를 통해 사용자는 방문 전 필요한 정보를 한 화면에서 확인하고 의사결정을 빠르게 진행할 수 있습니다.",
          },
          {
            title: "반려동물 동반 가능 여부 표시",
            description:
              "장소별 반려동물 동반 가능 여부를 명확히 표시하는 기능입니다. 이를 통해 사용자는 불필요한 문의나 방문 실패를 줄이고 효율적으로 장소를 선택할 수 있습니다.",
          },
        ],
      },
      {
        title: "호텔",
        summary:
          "‘호텔’은 숙소 정보를 탐색하고 상세 정보 확인부터 결제까지 이어지는 ‘와요’ 앱의 예약 기능입니다. 반려동물 동반 가능/불가능 숙소를 구분해 제공하며, 반려동물 사이즈 필터를 통해 조건에 맞는 숙소를 빠르게 찾을 수 있습니다. 이를 통해 사용자는 반려동물 동반 조건에 맞춘 숙소를 효율적으로 비교하고 예약을 완료할 수 있습니다.",
        images: [
          "img/펫피플/호텔/1.jpeg",
          "img/펫피플/호텔/2.jpeg",
          "img/펫피플/호텔/3.jpeg",
          "img/펫피플/호텔/4.jpeg",
          "img/펫피플/호텔/5.jpeg",
          "img/펫피플/호텔/6.jpeg",
          "img/펫피플/호텔/7.jpeg",
          "img/펫피플/호텔/8.jpeg",
          "img/펫피플/호텔/9.jpeg",
          "img/펫피플/호텔/10.jpeg",
          "img/펫피플/호텔/11.jpeg",
        ],
        techStack: ["React Native"],
        features: [
          {
            title: "숙소 리스트 및 상세 정보 제공",
            description:
              "숙소 목록을 탐색하고 상세 페이지에서 위치, 정책, 편의시설 등 세부 정보를 확인할 수 있는 기능입니다. 이를 통해 사용자는 예약 전 필요한 조건을 빠르게 검토할 수 있습니다.",
          },
          {
            title: "반려동물 동반 가능/불가능 숙소 구분",
            description:
              "반려동물 동반 가능 숙소와 동반 불가능 숙소를 구분해 제공하는 기능입니다. 이를 통해 사용자는 조건에 맞지 않는 숙소를 제외하고 탐색 시간을 줄일 수 있습니다.",
          },
          {
            title: "반려동물 사이즈 필터",
            description:
              "반려동물 크기(사이즈) 조건에 따라 숙소를 필터링할 수 있는 기능입니다. 이를 통해 사용자는 동반 규정에 맞는 숙소만 선별해 효율적으로 비교할 수 있습니다.",
          },
          {
            title: "예약 및 결제 플로우",
            description:
              "숙소 선택 후 예약 정보를 입력하고 결제까지 완료할 수 있는 기능입니다. 이를 통해 사용자는 앱 내에서 예약 과정을 끊김 없이 마무리할 수 있습니다.",
          },
        ],
      },
      {
        title: "훈련 솔루션 카드",
        summary:
          "‘훈련 솔루션 카드’는 사용자가 반려동물 훈련을 예약한 이후, 훈련사가 훈련 진행 내용을 단계별로 기록하고 솔루션을 앱 내에서 작성할 수 있는 기능입니다. 앱 종료 또는 백그라운드 전환 상황에서도 작성 흐름이 끊기지 않도록 임시저장 기능을 제공해 현장 사용성을 개선했습니다. 이를 통해 훈련사는 기록 부담을 줄이고, 사용자는 일관된 교육 솔루션을 제공받을 수 있습니다.",
        images: [
          "img/펫피플/훈련솔루션카드/1.png",
          "img/펫피플/훈련솔루션카드/2.png",
          "img/펫피플/훈련솔루션카드/3.png",
          "img/펫피플/훈련솔루션카드/4.png",
          "img/펫피플/훈련솔루션카드/5.png",
          "img/펫피플/훈련솔루션카드/6.png",
          "img/펫피플/훈련솔루션카드/7.png",
          "img/펫피플/훈련솔루션카드/8.png",
        ],
        techStack: ["React Native"],
        features: [
          {
            title: "훈련 예약 연계",
            description:
              "사용자의 훈련 예약 건과 연동되어 훈련사가 해당 케이스를 선택해 기록을 시작할 수 있는 기능입니다. 이를 통해 예약-진행-기록 흐름이 자연스럽게 연결됩니다.",
          },
          {
            title: "스텝(단계) 기반 솔루션 작성",
            description:
              "훈련 진행 과정을 단계별로 구분해 솔루션을 작성할 수 있는 기능입니다. 이를 통해 훈련사는 현장 흐름에 맞춰 체계적으로 기록하고 전달할 수 있습니다.",
          },
          {
            title: "임시저장",
            description:
              "앱 종료 또는 백그라운드 전환 상황에서도 작성 내용이 유지되도록 임시저장하는 기능입니다. 이를 통해 훈련사는 현장 상황 변화에도 기록을 안정적으로 이어갈 수 있습니다.",
          },
          {
            title: "솔루션 공유 및 열람",
            description:
              "작성된 솔루션을 앱 내에서 저장하고 이후 열람할 수 있는 기능입니다. 이를 통해 사용자는 훈련 결과와 가이드를 언제든지 확인하며 재훈련에 활용할 수 있습니다.",
          },
        ],
      },
    ],
  },
];

function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/**
 * 데이터 기반으로 모달 패널 HTML 생성
 * @param {typeof PROJECT_MODAL_DATA} data
 * @returns {string}
 */
function renderProjectFeatures(features) {
  if (!features || features.length === 0) return "";
  return `
              <div class="mt-4 pt-4 border-t border-slate-200">
                <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">주요 기능</h4>
                <div class="space-y-4">
                  ${features
                    .map(
                      (f) => `
                    <div class="pl-3 border-l-2 border-blue-200 bg-slate-50/50 rounded-r-lg py-2 pr-3">
                      <h5 class="font-semibold text-gray-900 text-sm mb-1">${escapeHtml(f.title)}</h5>
                      <p class="text-sm text-gray-600 leading-relaxed">${escapeHtml(f.description)}</p>
                    </div>`,
                    )
                    .join("")}
                </div>
              </div>`;
}

function renderProjectCard(project, IMG_LINK_CLASS) {
  const featuresHtml = renderProjectFeatures(project.features);
  return `
          <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5 p-3 bg-slate-50">
              ${(project.images || [])
                .map(
                  (src, i) => `
              <a href="#" class="${IMG_LINK_CLASS}" aria-label="새 탭에서 이미지 보기">
                <img src="${escapeHtml(src || "")}" alt="${escapeHtml(project.title)} 스크린샷 ${i + 1}" class="w-full h-full object-cover" />
              </a>`,
                )
                .join("")}
            </div>
            <div class="p-4">
              <h3 class="font-bold text-gray-900 mb-1">${escapeHtml(project.title)}</h3>
              <p class="text-sm text-gray-700 leading-relaxed mb-3">${escapeHtml(project.summary)}</p>
              <div class="flex flex-wrap gap-2">
                ${(project.techStack || [])
                  .map(
                    (tech) =>
                      `<span class="px-2 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded">${escapeHtml(tech)}</span>`,
                  )
                  .join("")}
              </div>
              ${featuresHtml}
            </div>
          </div>`;
}

function renderModalPanels(data) {
  const IMG_LINK_CLASS =
    "project-img-link block aspect-square rounded-lg overflow-hidden project-img-placeholder cursor-pointer hover:opacity-90 transition-opacity";

  return data
    .map(
      (company) => `
      <div id="${company.panelId}" class="modal-panel hidden space-y-8">
        ${(company.projects || [])
          .map((p) => renderProjectCard(p, IMG_LINK_CLASS))
          .join("")}
      </div>`,
    )
    .join("");
}
