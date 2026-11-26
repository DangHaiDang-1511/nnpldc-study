import { useRef } from 'react';
import {
  AlertCircle,
  BookOpen,
  Calculator,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Flame,
  Layers,
  PlayCircle,
  Sparkles,
  Trophy,
  Upload,
  Video,
} from 'lucide-react';
import { COURSE_INFO, LESSONS } from '../data/courseData';
import { FLASHCARDS } from '../data/flashcardsData';
import { QUIZ_QUESTIONS } from '../data/quizData';

function getVnuLetterGrade(score10) {
  if (score10 >= 9.0) return { letter: 'A+', gpa: '4.0', color: 'text-emerald-500' };
  if (score10 >= 8.5) return { letter: 'A', gpa: '3.7', color: 'text-emerald-500' };
  if (score10 >= 8.0) return { letter: 'B+', gpa: '3.5', color: 'text-blue-500' };
  if (score10 >= 7.0) return { letter: 'B', gpa: '3.0', color: 'text-blue-500' };
  if (score10 >= 6.5) return { letter: 'C+', gpa: '2.5', color: 'text-indigo-500' };
  if (score10 >= 5.5) return { letter: 'C', gpa: '2.0', color: 'text-indigo-500' };
  if (score10 >= 5.0) return { letter: 'D+', gpa: '1.5', color: 'text-amber-500' };
  if (score10 >= 4.0) return { letter: 'D', gpa: '1.0', color: 'text-amber-500' };
  return { letter: 'F', gpa: '0.0', color: 'text-rose-500' };
}

export default function Dashboard({
  completedLessons,
  quizHistory,
  wrongIds,
  masteredCards,
  grades,
  onChangeGrades,
  onSelectLesson,
  onStartQuizScope,
  onNavigate,
  onExportData,
  onImportData,
}) {
  const fileInputRef = useRef(null);
  const completedCount = completedLessons.length;
  const openLessons = LESSONS.filter((l) => l.lmsStatus === 'open');
  const completedOpenCount = openLessons.filter((l) => completedLessons.includes(l.id)).length;
  const progressPct = Math.round((completedCount / LESSONS.length) * 100);
  const bestScore =
    quizHistory.length > 0 ? Math.max(...quizHistory.map((h) => h.score)) : null;

  const cc = parseFloat(grades.cc);
  const gk = parseFloat(grades.gk);
  const ck = parseFloat(grades.ck);
  const hasValidGrades = !Number.isNaN(cc) && !Number.isNaN(gk) && !Number.isNaN(ck);
  const totalScore = hasValidGrades
    ? Number((cc * 0.1 + gk * 0.3 + ck * 0.6).toFixed(2))
    : null;
  const vnuGrade = totalScore !== null ? getVnuLetterGrade(totalScore) : null;

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 p-6 text-white shadow-lg md:p-7">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <div className="mb-2.5 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <span>{COURSE_INFO.code}</span>
              <span>•</span>
              <span>{COURSE_INFO.credits} tín chỉ</span>
              <span>•</span>
              <span>Tiên quyết: {COURSE_INFO.prerequisite}</span>
              <span>•</span>
              <span>Bài 1–4 đang mở trên LMS</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              {COURSE_INFO.title}
            </h1>
            <p className="mt-1 text-sm text-blue-100">{COURSE_INFO.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onStartQuizScope('midterm')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-sm transition hover:bg-amber-300"
            >
              <Sparkles className="h-4 w-4" />
              Ôn Giữa kỳ (Bài 1–4)
            </button>
            <a
              href={COURSE_INFO.lmsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 px-3.5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/25"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              LMS VNU
            </a>
            <a
              href={COURSE_INFO.playlistUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 px-3.5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/25"
            >
              <Video className="h-3.5 w-3.5" />
              Playlist
            </a>
            <a
              href={COURSE_INFO.deCuongPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2.5 text-xs font-semibold text-indigo-700 transition hover:bg-blue-50"
            >
              <FileText className="h-3.5 w-3.5" />
              Đề cương
            </a>
          </div>
        </div>

        {/* Progress bars */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-3.5 backdrop-blur-sm">
            <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-blue-100">
              <span>Tiến độ 4 bài đang mở trên LMS</span>
              <span className="font-bold text-white">
                {completedOpenCount}/{openLessons.length} bài
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-amber-300 transition-all duration-500"
                style={{ width: `${Math.round((completedOpenCount / openLessons.length) * 100)}%` }}
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 p-3.5 backdrop-blur-sm">
            <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-blue-100">
              <span>Tổng tiến độ toàn học phần (6 bài)</span>
              <span className="font-bold text-white">
                {completedCount}/{LESSONS.length} bài ({progressPct}%)
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-emerald-300 transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4 Quick Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <button
          onClick={() =>
            onSelectLesson(LESSONS.find((l) => !completedLessons.includes(l.id))?.id || 1)
          }
          className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-500">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Học tiếp bài</p>
            <p className="text-lg font-bold">
              {completedCount}/{LESSONS.length} hoàn thành
            </p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('quiz')}
          className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-emerald-400 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-500">
            <Trophy className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Ngân hàng ({QUIZ_QUESTIONS.length} câu)
            </p>
            <p className="text-lg font-bold">
              {bestScore !== null ? `Cao nhất: ${bestScore}/10` : 'Chưa thi thử'}
            </p>
          </div>
        </button>

        <button
          onClick={() =>
            wrongIds.length > 0 ? onStartQuizScope('wrong') : onNavigate('quiz')
          }
          className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-rose-400 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-500/15 text-rose-500">
            <AlertCircle className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Câu từng làm sai</p>
            <p className="text-lg font-bold">
              {wrongIds.length > 0 ? `${wrongIds.length} câu cần ôn` : '0 câu tồn đọng'}
            </p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('flashcards')}
          className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-amber-400 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Flashcards</p>
            <p className="text-lg font-bold">
              {masteredCards.length}/{FLASHCARDS.length} đã thuộc
            </p>
          </div>
        </button>
      </div>

      {/* Main Grid: Lessons + Right Tools */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* 6 Lessons List */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 lg:col-span-2">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold">Lộ trình 6 bài học</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Bài 1–4 đã đầy đủ PDF & nội dung LMS; Bài 5–6 sẵn video YouTube, sẽ bổ sung học liệu khi LMS mở.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {LESSONS.map((lesson) => {
              const isDone = completedLessons.includes(lesson.id);
              const isOpen = lesson.lmsStatus === 'open';
              return (
                <button
                  key={lesson.id}
                  onClick={() => onSelectLesson(lesson.id)}
                  className="group flex w-full items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-left transition hover:border-indigo-400 hover:bg-indigo-50/40 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-indigo-500/60 dark:hover:bg-slate-800/60"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                        isDone
                          ? 'bg-emerald-500 text-white'
                          : isOpen
                          ? 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400'
                          : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="h-4 w-4" /> : lesson.id}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                          {lesson.code}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            isOpen
                              ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
                              : 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
                          }`}
                        >
                          {isOpen ? 'LMS đang mở' : 'Chưa mở trên LMS • Đã có Video'}
                        </span>
                        {lesson.clos?.map((clo) => (
                          <span
                            key={clo}
                            className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                          >
                            {clo}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-1 font-semibold leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {lesson.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {lesson.schedule} • {lesson.sections.length} chuyên đề •{' '}
                        {lesson.caseStudies.length} tình huống
                      </p>
                    </div>
                  </div>
                  <PlayCircle className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition group-hover:text-indigo-500" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Milestones + Grade Calculator + Backup */}
        <div className="space-y-6">
          {/* Milestones */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3.5 flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              <h2 className="text-base font-bold">Mốc lịch học & thi LMS</h2>
            </div>
            <div className="space-y-2.5">
              {COURSE_INFO.milestones.map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60"
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{m.date}</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold">{m.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Grade Calculator (10% - 30% - 60%) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-2 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-indigo-500" />
              <h2 className="text-base font-bold">Tính điểm THL 1057 (10-30-60)</h2>
            </div>
            <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
              Theo Đề cương ĐHQGHN: Thường xuyên 10% • Giữa kỳ 30% • Cuối kỳ 60%.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: 'cc', label: 'TX (10%)' },
                { key: 'gk', label: 'GK (30%)' },
                { key: 'ck', label: 'CK (60%)' },
              ].map((item) => (
                <div key={item.key}>
                  <label className="mb-1 block text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {item.label}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    placeholder="0-10"
                    value={grades[item.key] || ''}
                    onChange={(e) => onChangeGrades({ ...grades, [item.key]: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2 text-sm font-semibold outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>
              ))}
            </div>
            {vnuGrade && (
              <div className="mt-3 flex items-center justify-between rounded-xl bg-indigo-500/10 px-3.5 py-2.5 text-sm">
                <span>
                  Tổng kết: <strong>{totalScore}/10</strong>
                </span>
                <span className={`font-extrabold ${vnuGrade.color}`}>
                  Điểm chữ: {vnuGrade.letter} (GPA {vnuGrade.gpa})
                </span>
              </div>
            )}
          </div>

          {/* Export / Import */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-sm font-bold">Sao lưu dữ liệu học tập</h2>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Xuất hoặc khôi phục toàn bộ ghi chú, bài nháp Reflection và lịch sử điểm.
            </p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={onExportData}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold transition hover:border-indigo-400 dark:border-slate-700"
              >
                <Download className="h-3.5 w-3.5" />
                Xuất .json
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold transition hover:border-indigo-400 dark:border-slate-700"
              >
                <Upload className="h-3.5 w-3.5" />
                Nhập .json
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) onImportData(file);
                  e.target.value = '';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
