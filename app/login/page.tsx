// app/login/page.tsx

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200 p-6">
      
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
          登录账户
        </h1>

        <form className="space-y-6">

          {/* 邮箱 */}
          <div>
            <label className="block mb-1 font-medium text-pink-700">
              邮箱
            </label>
            <input
              type="email"
              className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="请输入邮箱"
            />
          </div>

          {/* 密码 */}
          <div>
            <label className="block mb-1 font-medium text-pink-700">
              密码
            </label>
            <input
              type="password"
              className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="请输入密码"
            />
          </div>

          {/* 登录按钮 */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl text-lg font-semibold transition"
          >
            登录
          </button>
        </form>

        {/* 注册入口 */}
        <p className="text-center text-pink-700 mt-6">
          还没有账号？  
          <a href="/register" className="text-pink-600 font-semibold underline">
            点击注册
          </a>
        </p>

      </div>
    </div>
  );
}
