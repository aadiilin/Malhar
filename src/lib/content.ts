import { createServerSupabaseClient } from "./supabase/server";

export async function getSiteSettings() {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.from("site_settings").select("*");
  const map: Record<string, string> = {};
  data?.forEach((s) => { map[s.key] = s.value; });
  return map;
}
