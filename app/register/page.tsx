"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

// 表单类型
interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState<RegisterForm>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");

  // 表单验证函数（返回错误字符串 或 null）
  const validateForm = (): string | null => {
    const { username, email, password, confirmPassword } = form;

    if (username.length < 3 || username.length > 12) {
      return "用户名长度必须在 3 ~ 12 个字符之间";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "邮箱格式不正确";
    }

    if (password.length < 6) {
      return "密码至少 6 位";
    }

    if (password !== confirmPassword) {
      return "两次输入的密码不一致";
    }

    return null;
  };

  // 提交处理
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    alert("注册成功！");
    router.push("/profile");
  };

  // 控制输入变化
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-pink-200">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          会员注册
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 用户名 */}
          <div>
            <label className="block mb-1 text-gray-600">用户名（3~12 字）</label>
            <input
              name="username"
              type="text"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none"
              value={form.username}
              onChange={handleChange}
            />
          </div>

          {/* 邮箱 */}
          <div>
            <label className="block mb-1 text-gray-600">邮箱</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* 密码 */}
          <div>
            <label className="block mb-1 text-gray-600">密码（至少 6 位）</label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* 确认密码 */}
          <div>
            <label className="block mb-1 text-gray-600">确认密码</label>
            <input
              name="confirmPassword"
              type="password"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-full shadow-md hover:bg-pink-600 transition"
          >
            注册
          </button>
        </form>
      </div>
    </main>
  );
}
