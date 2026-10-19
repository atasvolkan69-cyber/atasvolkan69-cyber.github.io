/* Vionda – Einstellungen für Website und Portal.
   Die zwei Supabase-Werte findest du in Supabase unter: Project Settings → API.
   Der "anon public" Schlüssel darf öffentlich sein – die Zugriffsregeln schützen deine Daten. */
window.VIONDA_CONFIG = {
  SUPABASE_URL: "https://imhxngpcfnyayfpflthg.supabase.co",          // z. B. "https://abcdefghijk.supabase.co"
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaHhuZ3BjZm55YXlmcGZsdGhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0MjA3NzcsImV4cCI6MjEwNzk5Njc3N30.nv073qYCyIlpI4y8bOzwugFxJl3IX24BIExH2-6wOHg",     // langer Schlüssel, beginnt meist mit "eyJ"
  FORMSPREE_ID: "xyekanzz",          // optional: z. B. "xdoqwerty" – dann bekommst du zusätzlich eine E-Mail bei jeder Anfrage
  TAWK_ID: "",               // optional: Chat-Widget-ID von tawk.to, z. B. "65ab12cd34ef/1hk2abcde"
  KONTAKT_EMAIL: "hallo@vionda.at"
};
