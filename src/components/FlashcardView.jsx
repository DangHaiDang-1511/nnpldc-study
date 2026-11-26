import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Keyboard, RotateCw, Shuffle } from 'lucide-react';
import { LESSONS } from '../data/courseData';
import { FLASHCARDS } from '../data/flashcardsData';

export default function FlashcardView({ masteredCards, onToggleMastered }) {
  const [lessonFilter, setLessonFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all'); // all | unmastered | mastered
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const cards = useMemo(() => {
    let filtered =
      lessonFilter === 'all'
        ? [...FLASHCARDS]
        : FLASHCARDS.filter((c) => c.lessonId === Number(lessonFilter));

    if (statusFilter === 'unmastered') {
      filtered = filtered.filter((c) => !masteredCards.includes(c.id));
    } else if (statusFilter === 'mastered') {
      filtered = filtered.filter((c) => masteredCards.includes(c.id));
    }

    if (shuffleSeed > 0) {
      return [...filtered].sort((a, b) => {
        const ha = ((a.id.charCodeAt(3) * 31 + shuffleSeed * 17) % 97);
        const hb = ((b.id.charCodeAt(3) * 31 + shuffleSeed * 17) % 97);
        return ha - hb;
      });
    }
    return filtered;
  }, [lessonFilter, statusFilter, masteredCards, shuffleSeed]);

  const safeIdx = cards.length > 0 ? currentIdx % cards.length : 0;
  const card = cards[safeIdx];
  const isMastered = card && masteredCards.includes(card.id);

  const goTo = (idx) => {
    if (cards.length === 0) return;
    setFlipped(false);
    setCurrentIdx((idx + cards.length) % cards.length);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space') {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.code === 'ArrowRight') {
        goTo(safeIdx + 1);
      } else if (e.code === 'ArrowLeft') {
        goTo(safeIdx - 1);
      } else if (e.code === 'Enter' && card) {
        onToggleMastered(card.id);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold">Flashcards Thuật ngữ Pháp lý</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Đã thuộc {masteredCards.length}/{FLASHCARDS.length} thẻ • Dùng phím Space để lật, ← → để chuyển thẻ
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1 text-xs dark:border-slate-700 dark:bg-slate-800">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'unmastered', label: 'Chưa thuộc' },
                { id: 'mastered', label: 'Đã thuộc' },
              ].map((st) => (
                <button
                  key={st.id}
                  onClick={() => {
                    setStatusFilter(st.id);
                    setCurrentIdx(0);
                    setFlipped(false);
                  }}
                  className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                    statusFilter === st.id
                      ? 'bg-white text-indigo-600 shadow-sm dark:bg-slate-900 dark:text-indigo-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setShuffleSeed((s) => s + 1);
                setCurrentIdx(0);
                setFlipped(false);
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-500/15 px-3 py-2 text-xs font-semibold text-indigo-600 hover:bg-indigo-500/25 dark:text-indigo-400"
            >
              <Shuffle className="h-3.5 w-3.5" />
              Trộn
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => {
              setLessonFilter('all');
              setCurrentIdx(0);
              setFlipped(false);
            }}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
              lessonFilter === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            Tất cả bài
          </button>
          {LESSONS.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                setLessonFilter(l.id);
                setCurrentIdx(0);
                setFlipped(false);
              }}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                Number(lessonFilter) === l.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {l.code}
            </button>
          ))}
        </div>
      </div>

      {/* Card or Empty state */}
      {card ? (
        <>
          <div
            onClick={() => setFlipped((f) => !f)}
            className={`flex min-h-[280px] cursor-pointer select-none flex-col items-center justify-center rounded-3xl border-2 p-8 text-center shadow-md transition hover:border-indigo-400 ${
              flipped
                ? 'border-emerald-400 bg-emerald-50/50 dark:border-emerald-500/50 dark:bg-slate-900'
                : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
            }`}
          >
            <span className="mb-3 rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              Bài {card.lessonId} • {flipped ? 'Định nghĩa' : 'Thuật ngữ'} ({safeIdx + 1}/
              {cards.length})
            </span>
            {!flipped ? (
              <h2 className="text-2xl font-extrabold md:text-3xl">{card.term}</h2>
            ) : (
              <p className="max-w-xl text-base leading-relaxed md:text-lg">{card.definition}</p>
            )}
            <p className="mt-6 inline-flex items-center gap-1.5 text-xs text-slate-400">
              <RotateCw className="h-3.5 w-3.5" />
              Nhấn vào thẻ hoặc phím Space để lật
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => goTo(safeIdx - 1)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Trước
            </button>

            <button
              onClick={() => onToggleMastered(card.id)}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                isMastered
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              {isMastered ? 'Đã thuộc thẻ này (Enter)' : 'Đánh dấu đã thuộc (Enter)'}
            </button>

            <button
              onClick={() => goTo(safeIdx + 1)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-900"
            >
              Sau
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <Keyboard className="h-3.5 w-3.5" />
            <span>Phím tắt: Space (Lật thẻ) • ← / → (Chuyển thẻ) • Enter (Đã thuộc)</span>
          </div>
        </>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="font-semibold">Không có thẻ nào trong bộ lọc này!</p>
          <button
            onClick={() => {
              setStatusFilter('all');
              setLessonFilter('all');
            }}
            className="mt-3 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white"
          >
            Xem lại tất cả thẻ
          </button>
        </div>
      )}
    </div>
  );
}
