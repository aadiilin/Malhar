CREATE TABLE site_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL DEFAULT '',
  category TEXT DEFAULT 'Campus',
  type TEXT DEFAULT 'image',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT DEFAULT '',
  subject TEXT DEFAULT '',
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

INSERT INTO site_settings (key, value) VALUES
  ('site_name', 'Malharul Islam Academy'),
  ('site_tagline', 'Empowering Community Through Education'),
  ('hero_title', 'Malharul Islam Academy'),
  ('hero_subtitle', 'Empowering Community Through Education'),
  ('hero_description', 'A premier institution at Vellamchira, Thodupuzha, dedicated to educational excellence, Islamic values, and community development.'),
  ('about_mission', 'To provide quality education rooted in Islamic values, fostering academic excellence, moral integrity, and community service.'),
  ('about_vision', 'To be a leading institution nurturing well-rounded individuals who excel academically and contribute positively to society.'),
  ('contact_email', 'info@malharulislamacademy.com'),
  ('contact_phone', '+91 9446XXXXXX'),
  ('address', 'Vellamchira, Thodupuzha, Idukki, Kerala - 685584'),
  ('whatsapp', '919446XXXXXX');
