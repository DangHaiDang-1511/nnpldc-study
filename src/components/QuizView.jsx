import { useEffect, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Flag,
  RotateCcw,
  Sparkles,
  Trophy,
  XCircle,
  Zap,
} from 'lucide-react';
import { LESSONS } from '../data/courseData';
import { QUIZ_QUESTIONS } from '../data/quizData';

export default function QuizView({
  initialScope,
  quizHistory,
  wrongIds,
  onFinishQuiz,
}) {
  const [mode, setMode] = useState('setup'); // setup | active | result
  const [selectedScope, setSelectedScope] = useState(initialScope || 'midterm');
  const [instantFeedback, setInstantFeedback] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(0);

  const getScopeLabel = (scope) => {
    if (scope === 'midterm') return 'Ôn Giữa kỳ (Bài 1–4)';
    if (scope === 'all') return 'Thi thử Toàn khóa (Bài 1–6)';
    if (scope === 'wrong') return 'Ôn lại câu từng sai';
    return `Luyện tập Bài ${scope}`;
  };

  const submitQuiz = () => {
    let correctCount = 0;
    const newlyWrong = [];
    const newlyRight = [];

    questions.forEach((q) => {
      if (answers[q.id] === q.correctIndex) {
        correctCount += 1;
        newlyRight.push(q.id);
      } else {
        newlyWrong.push(q.id);
      }
    });

    const score = Number(((correctCount / questions.length) * 10).toFixed(2));
    onFinishQuiz(
      {
        date: new Date().toLocaleString('vi-VN'),
        scope: getScopeLabel(selectedScope),
        correctCount,
        total: questions.length,
        score,
      },
      newlyWrong,
      newlyRight
    );
    setMode('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (mode !== 'active' || instantFeedback || secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  });

  const startQuiz = (scope, useInstant = instantFeedback) => {
    let pool = [];
    if (scope === 'midterm') {
      pool = QUIZ_QUESTIONS.filter((q) => q.lessonId <= 4)
        .sort(() => Math.random() - 0.5)
        .slice(0, 30);
    } else if (scope === 'all') {
      pool = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 30);
    } else if (scope === 'wrong') {
      pool = QUIZ_QUESTIONS.filter((q) => wrongIds.includes(q.id));
    } else {
      pool = QUIZ_QUESTIONS.filter((q) => q.lessonId === Number(scope));
    }

    if (pool.length === 0) return;

    setSelectedScope(scope);
    setInstantFeedback(useInstant);
    setQuestions(pool);
    setAnswers({});
    setFlagged({});
    setSecondsLeft(scope === 'midterm' || scope === 'all' ? 45 * 60 : pool.length * 90);
    setMode('active');
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${String(m).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  };

  const toggleFlag = (qId) => {
    setFlagged((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  if (mode === 'setup') {
    const midtermCount = QUIZ_QUESTIONS.filter((q) => q.lessonId <= 4).length;

    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-2xl font-bold">Phòng Luyện Trắc nghiệm & Thi thử</h1>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Tổng ngân hàng {QUIZ_QUESTIONS.length} câu bám sát bài giảng ĐH Luật — ĐHQGHN.
              </p>
            </div>

            {/* Mode Toggle */}
            <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-800">
              <button
                onClick={() => setInstantFeedback(false)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  !instantFeedback
                    ? 'bg-white text-indigo-600 shadow-sm dark:bg-slate-900 dark:text-indigo-400'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Phòng thi bấm giờ
              </button>
              <button
                onClick={() => setInstantFeedback(true)}
                className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  instantFeedback
                    ? 'bg-white text-emerald-600 shadow-sm dark:bg-slate-900 dark:text-emerald-400'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Zap className="h-3.5 w-3.5" />
                Chấm giải thích ngay
              </button>
            </div>
          </div>

          {/* Exam Cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col justify-between rounded-2xl border-2 border-indigo-500/40 bg-indigo-50/50 p-5 dark:bg-indigo-950/25">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                  <Sparkles className="h-3 w-3" />
                  Sát đợt thi 30/11 – 06/12
                </span>
                <h2 className="mt-2.5 text-lg font-bold">Đề ôn Giữa kỳ (Bài 1–4)</h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Rút ngẫu nhiên 30 câu từ {midtermCount} câu thuộc 4 bài đã mở trên LMS • 45 phút.
                </p>
              </div>
              <button
                onClick={() => startQuiz('midterm', false)}
                className="mt-4 w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-700"
              >
                Vào phòng thi Giữa kỳ
              </button>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
              <div>
                <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Toàn học phần
                </span>
                <h2 className="mt-2.5 text-lg font-bold">Thi thử Cuối kỳ (Bài 1–6)</h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Trộn ngẫu nhiên 30 câu từ toàn bộ 6 bài học • 45 phút • Thang điểm 10.
                </p>
              </div>
              <button
                onClick={() => startQuiz('all', false)}
                className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600"
              >
                Làm đề tổng hợp
              </button>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-rose-200 bg-rose-50/40 p-5 dark:border-rose-900/40 dark:bg-rose-950/20">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-rose-600 dark:text-rose-400">
                  <AlertCircle className="h-3 w-3" />
                  Khắc phục lỗ hổng
                </span>
                <h2 className="mt-2.5 text-lg font-bold">Ôn lại câu từng sai</h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Hiện có <strong>{wrongIds.length}</strong> câu bạn từng chọn sai hoặc bỏ trống. Làm đúng sẽ tự xóa khỏi danh sách!
                </p>
              </div>
              <button
                disabled={wrongIds.length === 0}
                onClick={() => startQuiz('wrong', true)}
                className="mt-4 w-full rounded-xl bg-rose-600 py-2.5 text-xs font-bold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {wrongIds.length > 0 ? `Ôn ngay ${wrongIds.length} câu sai` : 'Chưa có câu sai nào'}
              </button>
            </div>
          </div>

          {/* Per-lesson buttons */}
          <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
            <h3 className="text-sm font-bold">Luyện tập chuyên sâu theo từng bài</h3>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {LESSONS.map((l) => {
                const count = QUIZ_QUESTIONS.filter((q) => q.lessonId === l.id).length;
                return (
                  <button
                    key={l.id}
                    onClick={() => startQuiz(l.id, instantFeedback)}
                    className="flex items-center justify-between rounded-xl border border-slate-200 p-3 text-left text-xs transition hover:border-indigo-400 dark:border-slate-800 dark:hover:border-indigo-500"
                  >
                    <div className="truncate pr-2">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        {l.code}:{' '}
                      </span>
                      <span className="font-medium">{l.title}</span>
                    </div>
                    <span className="shrink-0 rounded-lg bg-slate-100 px-2 py-1 font-semibold dark:bg-slate-800">
                      {count} câu
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* History */}
        {quizHistory.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold">
              <Trophy className="h-4 w-4 text-amber-500" />
              Lịch sử làm bài gần đây
            </h3>
            <div className="space-y-2">
              {quizHistory.slice(0, 8).map((h, i) => (
                <div
                  key={i}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-50 px-4 py-2.5 text-sm dark:bg-slate-950/60"
                >
                  <div>
                    <span className="font-semibold">{h.scope}</span>
                    <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">{h.date}</span>
                  </div>
                  <div className="font-bold text-indigo-600 dark:text-indigo-400">
                    {h.score}/10 ({h.correctCount}/{h.total} đúng)
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  const correctCount = questions.reduce(
    (acc, q) => (answers[q.id] === q.correctIndex ? acc + 1 : acc),
    0
  );
  const finalScore = ((correctCount / questions.length) * 10).toFixed(2);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      {/* Questions Column */}
      <div className="space-y-4 lg:col-span-3">
        {/* Top Sticky Status */}
        <div className="sticky top-16 z-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
          <div>
            <span className="text-sm font-bold">{getScopeLabel(selectedScope)}</span>
            <span className="ml-3 text-xs text-slate-500 dark:text-slate-400">
              Đã trả lời {Object.keys(answers).length}/{questions.length}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {mode === 'active' ? (
              <>
                {!instantFeedback && (
                  <div className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500/15 px-3 py-1.5 text-sm font-bold text-amber-600 dark:text-amber-400">
                    <Clock className="h-4 w-4" />
                    {formatTime(secondsLeft)}
                  </div>
                )}
                <button
                  onClick={() => setMode('setup')}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  Thoát
                </button>
                <button
                  onClick={submitQuiz}
                  className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 sm:text-sm"
                >
                  Nộp bài & Chấm điểm
                </button>
              </>
            ) : (
              <>
                <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                  Kết quả: {finalScore}/10 ({correctCount}/{questions.length})
                </span>
                <button
                  onClick={() => setMode('setup')}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Đề khác
                </button>
              </>
            )}
          </div>
        </div>

        {/* Question List */}
        {questions.map((q, idx) => {
          const userAns = answers[q.id];
          const isAnswered = userAns !== undefined;
          const showAnswer = mode === 'result' || (instantFeedback && isAnswered);
          const isCorrect = userAns === q.correctIndex;
          const isFlagged = !!flagged[q.id];

          return (
            <div
              id={`quiz-q-${idx}`}
              key={q.id}
              className="scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold leading-snug">
                  <span className="mr-2 font-bold text-indigo-600 dark:text-indigo-400">
                    Câu {idx + 1} (Bài {q.lessonId}).
                  </span>
                  {q.question}
                </h3>
                <div className="flex shrink-0 items-center gap-2">
                  {mode === 'active' && (
                    <button
                      onClick={() => toggleFlag(q.id)}
                      title="Đánh dấu phân vân"
                      className={`rounded-lg p-1.5 transition ${
                        isFlagged
                          ? 'bg-amber-500/20 text-amber-500'
                          : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Flag className="h-4 w-4" />
                    </button>
                  )}
                  {showAnswer &&
                    (isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-rose-500" />
                    ))}
                </div>
              </div>

              <div className="mt-3.5 space-y-2">
                {q.options.map((opt, oIdx) => {
                  let btnClass =
                    'border-slate-200 bg-slate-50 hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-indigo-500';

                  if (!showAnswer && userAns === oIdx) {
                    btnClass =
                      'border-indigo-500 bg-indigo-500/15 font-semibold text-indigo-700 dark:text-indigo-300';
                  } else if (showAnswer) {
                    if (oIdx === q.correctIndex) {
                      btnClass =
                        'border-emerald-500 bg-emerald-500/15 font-semibold text-emerald-700 dark:text-emerald-300';
                    } else if (userAns === oIdx && oIdx !== q.correctIndex) {
                      btnClass = 'border-rose-500 bg-rose-500/15 text-rose-600 dark:text-rose-400';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={mode === 'result' || (instantFeedback && isAnswered)}
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: oIdx }))}
                      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-2.5 text-left text-sm transition ${btnClass}`}
                    >
                      <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {showAnswer && (
                <div className="mt-3.5 rounded-xl bg-blue-50/80 p-3.5 text-xs leading-relaxed text-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    Giải thích:{' '}
                  </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Question Navigator Grid */}
      <div className="lg:col-span-1">
        <div className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Bảng câu hỏi
          </h3>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => {
              const userAns = answers[q.id];
              const isAnswered = userAns !== undefined;
              const isFlagged = !!flagged[q.id];
              let cellClass =
                'border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300';

              if (mode === 'result') {
                cellClass =
                  userAns === q.correctIndex
                    ? 'border-emerald-500 bg-emerald-500 text-white'
                    : 'border-rose-500 bg-rose-500 text-white';
              } else if (isFlagged) {
                cellClass = 'border-amber-500 bg-amber-500/20 font-bold text-amber-600 dark:text-amber-400';
              } else if (isAnswered) {
                cellClass = 'border-indigo-500 bg-indigo-600 font-bold text-white';
              }

              return (
                <a
                  key={q.id}
                  href={`#quiz-q-${idx}`}
                  className={`flex h-9 items-center justify-center rounded-lg border text-xs font-semibold transition ${cellClass}`}
                >
                  {idx + 1}
                </a>
              );
            })}
          </div>
          <div className="mt-4 space-y-1.5 border-t border-slate-200 pt-3 text-[11px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-sm bg-indigo-600" /> Đã chọn đáp án
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-sm bg-amber-500" /> Đánh dấu xem lại
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
