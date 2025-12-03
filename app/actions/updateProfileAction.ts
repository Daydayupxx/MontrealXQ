"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function updateProfile(formData: FormData) {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, message: "未登录" };
  }

  const profileData = {
    name: formData.get("name")?.toString(),
    gender: formData.get("gender")?.toString(),
    age: Number(formData.get("age")),
    zodiac: formData.get("zodiac")?.toString(),
    constellation: formData.get("constellation")?.toString(),
    divorced: formData.get("divorced")?.toString(),
    has_child: formData.get("has_child")?.toString(),
    income: formData.get("income")?.toString(),
    bio: formData.get("bio")?.toString(),
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from("profiles")
    .upsert({ user_id: user.id, ...profileData });

  if (error) {
    return { success: false, message: "保存失败: " + error.message };
  }

  return { success: true, message: "资料已保存！" };
}
