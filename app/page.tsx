import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-700">
      {/* 顶部导航 */}
      <nav className="w-full bg-gradient-to-r from-pink-300 to-pink-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">LoveMatch</h1>
        <div className="space-x-4">
          <Link href="/login">
              <button className="px-4 py-2 rounded-full border border-white">
                 登录
              </button>
          </Link>

          <Link href="/register">
              <button className="px-4 py-2 rounded-full bg-white text-pink-600">
                 注册
              </button>
          </Link>
        </div>
      </nav>

      {/* Hero 区 */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">
          遇见让你心动的人
        </h2>
        <p className="text-lg text-pink-500 mb-8">
          用缘分开始一段真实的关系。
        </p>

        <div className="space-x-4">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg">
            开始寻找缘分
          </button>
          <button className="px-6 py-3 border border-pink-500 text-pink-500 rounded-full">
            查看会员
          </button>
        </div>
      </section>

      {/* 三大优势 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20">
        {[
          { title: "真实资料", desc: "每位用户都经过身份验证。" },
          { title: "智能匹配", desc: "找到与你契合的对象。" },
          { title: "安全隐私保护", desc: "您的信息会被严格保密。" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-pink-200 rounded-2xl p-6 text-center shadow-sm"
          >
            <h3 className="text-xl text-pink-600 font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 推荐用户 */}
      <section className="px-6 pb-20">
        <h3 className="text-2xl font-bold text-pink-600 mb-6">推荐用户</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-pink-200 p-6 text-center shadow-md"
            >
              <div className="w-24 h-24 mx-auto bg-pink-200 rounded-full mb-4"></div>
              <h4 className="text-lg font-semibold text-pink-600">
                用户 {i}
              </h4>
              <p className="text-gray-500">26岁 · Toronto</p>
              <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full">
                查看资料
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 底部 */}
      <footer className="bg-pink-100 text-center p-6 text-gray-600">
        © 2025 LoveMatch · All rights reserved.
      </footer>
    </main>
  );
}
// dkjfskj
//sdfsdfsdf
//dddd
