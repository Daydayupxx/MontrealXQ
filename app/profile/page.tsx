"use client";

import { useState } from "react";
import { updateProfile } from "../actions/updateProfileAction";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const result = await updateProfile(formData);

    alert(result.message);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-center text-pink-600 mb-10">
          会员资料
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* 名字 */}
          <FieldText label="名字" name="name" placeholder="请输入名字" />

          {/* 性别 */}
          <FieldSelect label="性别" name="gender" options={["男", "女"]} />

          {/* 年龄 */}
          <FieldText label="年龄" type="number" name="age" min={1} max={100} placeholder="28" />

          {/* 生肖 */}
          <FieldSelect
            label="生肖"
            name="zodiac"
            options={[
              "鼠","牛","虎","兔","龙","蛇",
              "马","羊","猴","鸡","狗","猪"
            ]}
          />

          {/* 星座 */}
          <FieldSelect
            label="星座"
            name="constellation"
            options={[
              "白羊座","金牛座","双子座","巨蟹座","狮子座","处女座",
              "天秤座","天蝎座","射手座","摩羯座","水瓶座","双鱼座"
            ]}
          />

          {/* 离异 */}
          <FieldSelect label="是否离异" name="divorced" options={["是", "否"]} />

          {/* 带娃 */}
          <FieldSelect label="是否带娃" name="has_child" options={["是", "否"]} />

          {/* 收入 */}
          <FieldText label="年收入" name="income" placeholder="例如:20万-30万" />

          {/* 自我介绍 */}
          <div>
            <label className="block mb-1 font-medium text-pink-700">
              自我介绍
            </label>
            <textarea
              name="bio"
              className="w-full p-3 border border-pink-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="写一些你的性格、生活方式、期待…"
            ></textarea>
          </div>

          {/* 按钮 */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl text-lg font-semibold transition"
          >
            {loading ? "保存中..." : "保存资料"}
          </button>

        </form>
      </div>
    </div>
  );
}

/* ------- 通用输入框组件 ------- */
function FieldText({ label, name, type = "text", ...props }: any) {
  return (
    <div>
      <label className="block mb-1 font-medium text-pink-700">{label}</label>
      <input
        name={name}
        type={type}
        {...props}
        className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
}

/* ------- 下拉框组件 ------- */
function FieldSelect({ label, name, options }: any) {
  return (
    <div>
      <label className="block mb-1 font-medium text-pink-700">{label}</label>
      <select
        name={name}
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

