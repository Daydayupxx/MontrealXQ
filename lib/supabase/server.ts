import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function createServerSupabaseClient() {
  // Next.js 16: cookies() 返回 Promise → 必须 await
  const cookieStore = await cookies();

  // 手动创建同步版本的 cookies 以满足 Supabase SSR 要求
  const cookieAdapter = {
    get(name: string) {
      const c = cookieStore.get(name);
      return c?.value ?? undefined;
    },
    set() {
      // Next.js 16 不允许在 server action 里直接写 cookie
      console.warn("Supabase SSR: cookies.set() 在服务器端不可用");
    },
    remove() {
      console.warn("Supabase SSR: cookies.remove() 在服务器端不可用");
    },
  };

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: cookieAdapter,
    }
  );
}
