# Wellness Tracker Dashboard

Dashboard pelacakan kesehatan mental untuk **EmergencyyCall** dengan desain menenangkan dan interaktif.

## 🛠️ Framework & Tools

| Tools          | Versi    | Alasan                                    |
| -------------- | -------- | ----------------------------------------- |
| Next.js        | 16.0.0   | App Router, API routes, SSR support       |
| Tailwind CSS   | 4.1.9    | Rapid styling dengan design tokens custom |
| Shadcn/ui      | Latest   | Pre-built accessible components           |
| Recharts       | 2.15.4   | Data visualization responsif              |
| Framer Motion  | 12.23.24 | Smooth animations & transitions           |
| TypeScript     | 5.x      | Type safety & IDE support                 |
| FavQs API      | -        | Daily motivational quotes                 |
| api-translator | Latest   | Auto-translate quotes ke Indonesian       |

## 📦 Struktur Komponen

```
wellness-tracker-dashboard/
|
|── app/
|   ├── layout.tsx (Root layout + fonts)
|   ├── page.tsx (Main dashboard)
|   ├── globals.css (Design tokens, gradients)
|   └── api/quote/route.ts (Fetch & translate quotes)
|
|── components/
|   ├── Header.tsx (Sticky header + profile dropdown)
|   ├── Container.tsx (Responsive wrapper)
|   ├── SummaryCard.tsx (Session statistics - 24 sesi, 45 menit)
|   ├── MoodChart.tsx (Line chart mood 30 hari)
|   ├── DailyQuote.tsx (Motivational quote + fetch)
|   └── ui/dropdown-menu.tsx (Shadcn component)
|
|── lib/
|   ├── dummyData.ts (Mock data development)
|   |── utils.ts
|   └── translateQuote.ts (Integrasi api-translator)
└── package.json (Dependencies & scripts)

```

## 🎨 Alasan Pemilihan Desain

### Warna (Mental Health Friendly)

- **Biru #a8d5e2**: Menenangkan, trust & stability
- **Peach #f5d5c8**: Hangat, approachable, anti-anxiety
- **Lavender #e8d5f2**: Promote relaksasi
- **Beige #f0ebe3**: Netral, grounding

### Struktur UI

- **Cards**: Rounded 16px untuk softness
- **Spacing**: Generous padding (breathing room)
- **Animations**: 300-500ms smooth transitions
- **Grid**: Responsive (1 col mobile → 3 col desktop)

### Alur Komponen

```
Header (sticky) → Container (wrapper) → Grid
                                        ├─ SummaryCard
                                        ├─ MoodChart
                                        └─ DailyQuote
```

## 🚀 Setup & Jalankan

```bash
npm install
npm run dev    # localhost:3000
npm run build  # production
```

## 🔮 Integrasi Backend (Phase Planning)

### Phase 1: Authentication

- Supabase + Auth0
- JWT token management
- Protected routes

**Endpoints**:

```
POST /api/auth/register
POST /api/auth/login
GET /api/auth/me
```

### Phase 2: Database (PostgreSQL)

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE,
  name VARCHAR,
  created_at TIMESTAMP
);

-- Sessions (Sesi Konseling)
CREATE TABLE sessions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  date DATE,
  duration INTEGER,
  created_at TIMESTAMP
);

-- Mood Entries (Daily Tracking)
CREATE TABLE mood_entries (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  date DATE,
  mood_score INTEGER (0-10),
  created_at TIMESTAMP
);
```

### Phase 3: Real API Endpoints

Replace dummy data dengan:

```
GET /api/sessions/summary     → SummaryCard
GET /api/mood-entries?days=30 → MoodChart
GET /api/quote                → DailyQuote (already exists)
```

**Migrasi Flow**:

```typescript
// Current (Development)
const { totalSessions } = dummyData;

// Future (Production)
const [data, setData] = useState(null);
useEffect(() => {
  fetch("/api/sessions/summary")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);
```

### Phase 4: Enhanced Features

1. Session Booking (calendar integration)
2. Progress Analytics (advanced trends)
3. Notifications (push reminders)
4. PDF Export (mood reports)
5. Counselor Dashboard (monitoring)
6. Social Sharing (support groups)

## 🔐 Security Checklist

- [ ] JWT validation di API routes
- [ ] CORS configuration
- [ ] Rate limiting
- [ ] Encrypt user data
- [ ] Environment variables (.env.local)
- [ ] HTTPS only production

## 📱 Responsive Breakpoints

- Mobile: `< 640px` (1 column)
- Tablet: `640px - 1024px` (2 columns)
- Desktop: `> 1024px` (3 columns full features)

---

Built with ❤️ untuk emotional wellness & mental health awareness.
