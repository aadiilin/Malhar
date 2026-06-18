"use client";
import { useState, useEffect } from "react";
import { Upload, Trash2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  type: string;
  created_at: string;
}

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from("gallery").select("*").order("created_at", { ascending: false });
    setItems(data || []);
    setLoading(false);
  }

  async function remove(id: string) {
    const supabase = createClient();
    await supabase.from("gallery").delete().eq("id", id);
    load();
  }

  if (loading) return <div className="p-6 text-gray-600 dark:text-gray-400">Loading...</div>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Gallery</h1>
        <Button variant="primary" size="sm" icon={<Upload className="w-4 h-4" />}>Upload Images</Button>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No images yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="relative group aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-amber-100 dark:from-emerald-900/30 dark:to-amber-900/30 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center px-2">{item.title}</span>
              <button onClick={() => remove(item.id)}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
