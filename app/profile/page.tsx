// app/profile/page.tsx

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-full max-w-2xl">
        
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-10">
          会员资料
        </h1>

        {/* 头像 */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-pink-300 shadow-lg flex items-center justify-center text-white text-lg">
            上传头像
          </div>
        </div>

        {/* 表单 */}
        <form className="space-y-6">

          {/* 名字 */}
          <FieldText label="名字" type="text" placeholder="请输入名字" />

          {/* 性别（选择框） */}
          <FieldSelect
            label="性别"
            options={["男", "女"]}
          />

          {/* 年龄（限制 1~100） */}
          <div>
            <label className="block mb-1 font-medium text-pink-700">
              年龄
            </label>
            <input
              type="number"
              min={1}
              max={100}
              className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="例如:28"
            />
          </div>

          {/* 生肖 */}
          <FieldSelect
            label="生肖"
            options={[
              "鼠","牛","虎","兔","龙","蛇",
              "马","羊","猴","鸡","狗","猪"
            ]}
          />

          {/* 星座 */}
          <FieldSelect
            label="星座"
            options={[
              "白羊座","金牛座","双子座","巨蟹座","狮子座","处女座",
              "天秤座","天蝎座","射手座","摩羯座","水瓶座","双鱼座"
            ]}
          />

          {/* 是否离异 */}
          <FieldSelect
            label="是否离异"
            options={["是", "否"]}
          />

          {/* 是否带娃 */}
          <FieldSelect
            label="是否带娃"
            options={["是", "否"]}
          />

          {/* 年收入 */}
          <FieldText
            label="年收入"
            placeholder="例如:20万-30万"
            type="text"
          />

          {/* 自我介绍 */}
          <div>
            <label className="block mb-1 font-medium text-pink-700">
              自我介绍
            </label>
            <textarea
              className="w-full p-3 border border-pink-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="写一些你的性格、生活方式、对另一半的期待…"
            ></textarea>
          </div>

          {/* 按钮 */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-ppink-600 text-white py-3 rounded-xl text-lg font-semibold transition"
          >
            保存资料
          </button>

        </form>
      </div>
    </div>
  );
}


/* ------- 小组件（输入框） ------- */
function FieldText({ label, type, placeholder }: any) {
  return (
    <div>
      <label className="block mb-1 font-medium text-pink-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
}

/* ------- 小组件（选择框） ------- */
function FieldSelect({ label, options }: any) {
  return (
    <div>
      <label className="block mb-1 font-medium text-pink-700">{label}</label>
      <select
        className="w-full p-3 border border-pink-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        <option value="">请选择</option>
        {options.map((item: string) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
