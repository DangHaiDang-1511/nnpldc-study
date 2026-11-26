import { useEffect, useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Home,
  Layers,
  Menu,
  Moon,
  Search,
  Sun,
  Trophy,
  X,
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import FlashcardView from './components/FlashcardView';
import LessonView from './components/LessonView';
import QuizView from './components/QuizView';
import { COURSE_INFO, LESSONS } from './data/courseData';
import { FLASHCARDS } from './data/flashcardsData';

function useLocalStorage(key, defaultValue) {
  const [val, setVal] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch {
      return defaultValue;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch {
      // ignore storage errors
    }
  }, [key, val]);
  return [val, setVal];
}

export default function App() {
  const [view, setView] = useState('dashboard'); // dashboard | lesson | quiz | flashcards
  const [activeLessonId, setActiveLessonId] = useState(1);
  const [quizScope, setQuizScope] = useState('midterm');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useLocalStorage('nnpldc_darkMode', false);
  const [completedLessons, setCompletedLessons] = useLocalStorage('nnpldc_completed', []);
  const [lessonNotes, setLessonNotes] = useLocalStorage('nnpldc_notes', {});
  const [reflections, setReflections] = useLocalStorage('nnpldc_reflections', {});
  const [quizHistory, setQuizHistory] = useLocalStorage('nnpldc_quiz_history', []);
  const [wrongIds, setWrongIds] = useLocalStorage('nnpldc_wrong_ids', []);
  const [masteredCards, setMasteredCards] = useLocalStorage('nnpldc_mastered_cards', []);
  const [grades, setGrades] = useLocalStorage('nnpldc_grades', { cc: '9', gk: '', ck: '' });

  const toggleComplete = (id) => {
    setCompletedLessons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const saveNote = (id, text) => {
    setLessonNotes((prev) => ({ ...prev, [id]: text }));
  };

  const saveReflection = (id, text) => {
    setReflections((prev) => ({ ...prev, [id]: text }));
  };

  const handleFinishQuiz = (result, newlyWrong, newlyRight) => {
    setQuizHistory((prev) => [result, ...prev].slice(0, 25));
    setWrongIds((prev) => {
      const next = new Set(prev);
      newlyRight.forEach((id) => next.delete(id));
      newlyWrong.forEach((id) => next.add(id));
      return Array.from(next);
    });
  };

  const toggleMastered = (cardId) => {
    setMasteredCards((prev) =>
      prev.includes(cardId) ? prev.filter((c) => c !== cardId) : [...prev, cardId]
    );
  };

  const openLesson = (id) => {
    setActiveLessonId(id);
    setView('lesson');
    setMobileMenuOpen(false);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startQuizScope = (scope) => {
    setQuizScope(scope);
    setView('quiz');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExportData = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      completedLessons,
      lessonNotes,
      reflections,
      quizHistory,
      wrongIds,
      masteredCards,
      grades,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nnpldc-thl1057-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportData = (file) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (Array.isArray(data.completedLessons)) setCompletedLessons(data.completedLessons);
        if (data.lessonNotes) setLessonNotes(data.lessonNotes);
        if (data.reflections) setReflections(data.reflections);
        if (Array.isArray(data.quizHistory)) setQuizHistory(data.quizHistory);
        if (Array.isArray(data.wrongIds)) setWrongIds(data.wrongIds);
        if (Array.isArray(data.masteredCards)) setMasteredCards(data.masteredCards);
        if (data.grades) setGrades(data.grades);
      } catch {
        // invalid json
      }
    };
    reader.readAsText(file);
  };

  const qLower = searchQuery.trim().toLowerCase();
  const searchLessons =
    qLower.length > 1
      ? LESSONS.filter(
          (l) =>
            l.title.toLowerCase().includes(qLower) ||
            l.sections.some(
              (s) =>
                s.heading.toLowerCase().includes(qLower) ||
                s.points.some((p) => p.toLowerCase().includes(qLower))
            )
        )
      : [];
  const searchCards =
    qLower.length > 1
      ? FLASHCARDS.filter(
          (c) =>
            c.term.toLowerCase().includes(qLower) || c.definition.toLowerCase().includes(qLower)
        ).slice(0, 4)
      : [];

  const activeLesson = LESSONS.find((l) => l.id === activeLessonId) || LESSONS[0];

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="rounded-lg p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 lg:hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setView('dashboard')}
              className="flex items-center gap-2.5 text-left"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-extrabold leading-tight">
                  {COURSE_INFO.code} Study Hub
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Nhà nước & Pháp luật đại cương • ĐHQGHN
                </div>
              </div>
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative hidden max-w-sm flex-1 md:block">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm khái niệm, điều luật, bài học..."
              className="w-full rounded-xl border border-slate-200 bg-slate-100 py-1.5 pl-9 pr-3 text-sm outline-none focus:border-indigo-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:bg-slate-900"
            />
            {(searchLessons.length > 0 || searchCards.length > 0) && (
              <div className="absolute left-0 right-0 top-11 max-h-80 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                {searchLessons.map((r) => (
                  <button
                    key={`l-${r.id}`}
                    onClick={() => openLesson(r.id)}
                    className="block w-full rounded-xl px-3 py-2 text-left text-xs hover:bg-indigo-500/10"
                  >
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">
                      {r.code}:{' '}
                    </span>
                    {r.title}
                  </button>
                ))}
                {searchCards.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setView('flashcards');
                      setSearchQuery('');
                    }}
                    className="block w-full rounded-xl px-3 py-2 text-left text-xs hover:bg-amber-500/10"
                  >
                    <span className="font-bold text-amber-600 dark:text-amber-400">
                      Thuật ngữ:{' '}
                    </span>
                    {c.term} — <span className="text-slate-500">{c.definition.slice(0, 60)}...</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setDarkMode((d) => !d)}
            className="rounded-xl border border-slate-200 bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-amber-400 dark:hover:bg-slate-700"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        {/* Sidebar */}
        <aside
          className={`${
            mobileMenuOpen
              ? 'fixed inset-0 top-14 z-20 block overflow-y-auto bg-slate-50 p-4 dark:bg-slate-950'
              : 'hidden'
          } w-full shrink-0 lg:static lg:block lg:w-64 lg:bg-transparent`}
        >
          <nav className="space-y-1.5">
            {[
              { id: 'dashboard', label: 'Tổng quan môn học', icon: Home },
              { id: 'quiz', label: 'Trắc nghiệm & Thi thử', icon: Trophy },
              { id: 'flashcards', label: 'Flashcards thuật ngữ', icon: Layers },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                    view === item.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}

            <div className="pb-1 pt-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Bài 1–4 (Đang mở trên LMS)
            </div>
            {LESSONS.filter((l) => l.lmsStatus === 'open').map((l) => {
              const isDone = completedLessons.includes(l.id);
              const isActive = view === 'lesson' && activeLessonId === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => openLesson(l.id)}
                  className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-xs font-medium transition ${
                    isActive
                      ? 'bg-indigo-500/15 font-bold text-indigo-600 dark:text-indigo-400'
                      : 'text-slate-700 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <BookOpen className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">
                      {l.code}: {l.title}
                    </span>
                  </span>
                  {isDone && <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />}
                </button>
              );
            })}

            <div className="pb-1 pt-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Bài 5–6 (Sắp mở • Học qua Video)
            </div>
            {LESSONS.filter((l) => l.lmsStatus !== 'open').map((l) => {
              const isDone = completedLessons.includes(l.id);
              const isActive = view === 'lesson' && activeLessonId === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => openLesson(l.id)}
                  className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-xs font-medium transition ${
                    isActive
                      ? 'bg-indigo-500/15 font-bold text-indigo-600 dark:text-indigo-400'
                      : 'text-slate-500 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <BookOpen className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">
                      {l.code}: {l.title}
                    </span>
                  </span>
                  {isDone && <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          {view === 'dashboard' && (
            <Dashboard
              completedLessons={completedLessons}
              quizHistory={quizHistory}
              wrongIds={wrongIds}
              masteredCards={masteredCards}
              grades={grades}
              onChangeGrades={setGrades}
              onSelectLesson={openLesson}
              onStartQuizScope={startQuizScope}
              onNavigate={setView}
              onExportData={handleExportData}
              onImportData={handleImportData}
            />
          )}
          {view === 'lesson' && (
            <LessonView
              key={activeLesson.id}
              lesson={activeLesson}
              isCompleted={completedLessons.includes(activeLesson.id)}
              onToggleComplete={toggleComplete}
              note={lessonNotes[activeLesson.id]}
              onSaveNote={saveNote}
              reflection={reflections[activeLesson.id]}
              onSaveReflection={saveReflection}
              onStartLessonQuiz={startQuizScope}
              onSelectLesson={openLesson}
            />
          )}
          {view === 'quiz' && (
            <QuizView
              key={quizScope}
              initialScope={quizScope}
              quizHistory={quizHistory}
              wrongIds={wrongIds}
              onFinishQuiz={handleFinishQuiz}
            />
          )}
          {view === 'flashcards' && (
            <FlashcardView masteredCards={masteredCards} onToggleMastered={toggleMastered} />
          )}
        </main>
      </div>
    </div>
  );
}
