"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import { Save } from "lucide-react";

interface Setting {
  id: string;
  key: string;
  value: string;
}

export default function AdminContentPage() {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase.from("site_settings").select("*").order("key");
      setSettings(data || []);
      setLoading(false);
    }
    load();
  }, []);

  async function save() {
    setSaving(true);
    const supabase = createClient();
    for (const s of settings) {
      await supabase.from("site_settings").update({ value: s.value }).eq("id", s.id);
    }
    await fetch("/api/revalidate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ path: "/" }) });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (loading) return <div className="p-6 text-gray-600 dark:text-gray-400">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Website Content</h1>
        <Button variant="primary" size="sm" icon={<Save className="w-4 h-4" />} onClick={save} disabled={saving}>
          {saved ? "Saved!" : saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <div className="space-y-4">
        {settings.map((s) => (
          <div key={s.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 capitalize">{s.key.replace(/_/g, " ")}</label>
            {s.key.includes("description") || s.key.includes("mission") || s.key.includes("vision") || s.key.includes("about_") ? (
              <textarea value={s.value} onChange={(e) => setSettings(settings.map((x) => x.id === s.id ? { ...x, value: e.target.value } : x))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/50 resize-none" rows={4} />
            ) : (
              <input value={s.value} onChange={(e) => setSettings(settings.map((x) => x.id === s.id ? { ...x, value: e.target.value } : x))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/50" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
