"use client";
import { useState, useEffect } from "react";
import { Mail, Trash2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
}

export default function AdminContactPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
    setMessages(data || []);
    setLoading(false);
  }

  async function remove(id: string) {
    const supabase = createClient();
    await supabase.from("contact_messages").delete().eq("id", id);
    load();
  }

  if (loading) return <div className="p-6 text-gray-600 dark:text-gray-400">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Messages</h1>
      {messages.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{msg.name}</h3>
                  <a href={`mailto:${msg.email}`} className="flex items-center gap-1 text-sm text-emerald-600 hover:underline">
                    <Mail className="w-3 h-3" /> {msg.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500">{msg.created_at ? new Date(msg.created_at).toLocaleDateString() : ""}</span>
                  <button onClick={() => remove(msg.id)} className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {msg.subject && <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject: {msg.subject}</p>}
              <p className="text-gray-600 dark:text-gray-400 text-sm">{msg.message}</p>
              {msg.phone && <p className="text-xs text-gray-500 mt-2">Phone: {msg.phone}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
