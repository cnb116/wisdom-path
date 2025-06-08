import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* 헤더 섹션 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            지혜의 길
          </h1>
          <p className="text-xl text-gray-600 text-center mt-2">
            삶의 지혜를 나누는 공간
          </p>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* 카테고리 섹션 */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 건강 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold ml-4 text-gray-800">건강한 삶</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              건강한 노후를 위한 운동과 식단 관리 팁
            </p>
          </div>

          {/* 여가 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold ml-4 text-gray-800">여가 생활</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              취미와 문화생활로 풍요로운 일상 만들기
            </p>
          </div>

          {/* 재테크 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold ml-4 text-gray-800">현명한 재테크</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              안정적인 노후를 위한 재무 관리 방법
            </p>
          </div>
        </section>

        {/* 최신 글 섹션 */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">최신 글</h2>
          <div className="grid grid-cols-1 gap-6">
            {/* 글 카드 예시 */}
            <article className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                하루 30분 걷기의 놀라운 효과
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                매일 30분 걷기로 건강도 지키고 마음의 여유도 가져보세요.
              </p>
              <div className="flex items-center text-gray-500">
                <span className="text-base">2024년 3월 15일</span>
                <span className="mx-2">•</span>
                <span className="text-base">건강한 삶</span>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-50 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="text-lg">지혜의 길 © 2024</p>
            <p className="mt-2 text-base">함께 나누는 삶의 지혜, 더불어 성장하는 우리</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
