import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  Copy,
  ExternalLink,
  FileText,
  Lightbulb,
  MessageSquareQuote,
  NotebookPen,
  Play,
  Table2,
} from 'lucide-react';
import { LESSONS } from '../data/courseData';

export default function LessonView({
  lesson,
  isCompleted,
  onToggleComplete,
  note,
  onSaveNote,
  reflection,
  onSaveReflection,
  onStartLessonQuiz,
  onSelectLesson,
}) {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [startSeconds, setStartSeconds] = useState(0);
  const [activeTab, setActiveTab] = useState('summary');
  const [openCases, setOpenCases] = useState({});
  const [copiedReflection, setCopiedReflection] = useState(false);

  const currentVideo = lesson.videos[activeVideoIdx] || lesson.videos[0];
  const prevLesson = LESSONS.find((l) => l.id === lesson.id - 1);
  const nextLesson = LESSONS.find((l) => l.id === lesson.id + 1);

  const wordCount = (reflection || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const copyReflection = async () => {
    if (!reflection) return;
    try {
      await navigator.clipboard.writeText(reflection);
      setCopiedReflection(true);
      setTimeout(() => setCopiedReflection(false), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-indigo-500/15 px-2.5 py-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                {lesson.code}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{lesson.schedule}</span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  lesson.lmsStatus === 'open'
                    ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
                    : 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
                }`}
              >
                {lesson.lmsStatus === 'open'
                  ? 'LMS đang mở'
                  : 'LMS chưa mở — Xem trước qua Video YouTube'}
              </span>
              {lesson.clos?.map((clo) => (
                <span
                  key={clo}
                  className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                >
                  {clo}
                </span>
              ))}
            </div>
            <h1 className="mt-2 text-xl font-bold md:text-2xl">{lesson.title}</h1>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onToggleComplete(lesson.id)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                isCompleted
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
              {isCompleted ? 'Đã hoàn thành' : 'Đánh dấu đã học'}
            </button>
            <button
              onClick={() => onStartLessonQuiz(lesson.id)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Trắc nghiệm {lesson.code}
            </button>
          </div>
        </div>
      </div>

      {/* Video Player + Sidebar Resources */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:col-span-2">
          {lesson.videos.length > 1 && (
            <div className="flex flex-wrap gap-2 border-b border-slate-200 p-3 dark:border-slate-800">
              {lesson.videos.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => {
                    setActiveVideoIdx(idx);
                    setStartSeconds(0);
                  }}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                    idx === activeVideoIdx
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                  }`}
                >
                  Video {idx + 1}: {v.title.split(':')[0]}
                </button>
              ))}
            </div>
          )}
          <div className="aspect-video w-full bg-black">
            <iframe
              key={`${currentVideo.id}-${startSeconds}`}
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${currentVideo.id}?start=${startSeconds}&rel=0`}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold">{currentVideo.title}</p>
          </div>
        </div>

        {/* Timestamps + LMS PDFs + Mandatory Readings */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-2.5 flex items-center gap-2 text-sm font-bold">
              <Play className="h-4 w-4 text-indigo-500" />
              Mốc thời gian bài giảng
            </h3>
            <div className="space-y-1">
              {currentVideo.chapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => setStartSeconds(ch.time)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-xs font-medium transition ${
                    startSeconds === ch.time
                      ? 'bg-indigo-500/15 font-semibold text-indigo-600 dark:text-indigo-400'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-2.5 flex items-center gap-2 text-sm font-bold">
              <FileText className="h-4 w-4 text-rose-500" />
              Slide & Tài liệu LMS
            </h3>
            <div className="space-y-2">
              {lesson.lmsResources.map((res, idx) => (
                <a
                  key={idx}
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start justify-between gap-2 rounded-xl border border-slate-200 p-2.5 text-xs transition hover:border-indigo-400 dark:border-slate-700 dark:hover:border-indigo-500"
                >
                  <span className="font-medium leading-snug">{res.title}</span>
                  <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                </a>
              ))}
            </div>

            {lesson.mandatoryReadings?.length > 0 && (
              <div className="mt-3 border-t border-slate-200 pt-3 dark:border-slate-800">
                <h4 className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">
                  <BookMarked className="h-3.5 w-3.5 text-amber-500" />
                  Bài đọc trên LMS
                </h4>
                <ul className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                  {lesson.mandatoryReadings.map((rd, i) => (
                    <li key={i} className="leading-relaxed">
                      • {rd}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Study Content Tabs */}
      <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap gap-1 border-b border-slate-200 p-2 dark:border-slate-800">
          {[
            { id: 'summary', label: 'Tóm tắt trọng tâm', icon: BookOpen },
            { id: 'compare', label: 'Bảng so sánh', icon: Table2 },
            { id: 'cases', label: 'Tình huống thực hành', icon: Lightbulb },
            { id: 'reflection', label: 'Nháp Reflection LMS', icon: MessageSquareQuote },
            { id: 'notes', label: 'Ghi chú riêng', icon: NotebookPen },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="p-5">
          {activeTab === 'summary' && (
            <div className="space-y-6">
              {lesson.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2.5">
                  <h3 className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                    {sec.heading}
                  </h3>
                  <ul className="space-y-2">
                    {sec.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3.5 text-sm leading-relaxed dark:bg-slate-950/60"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'compare' && (
            <div className="space-y-6">
              {lesson.comparisons.map((cmp, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-base font-bold">{cmp.title}</h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-100 dark:bg-slate-800">
                        <tr>
                          {cmp.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-3 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {cmp.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`px-4 py-3 align-top ${
                                  cIdx === 0
                                    ? 'font-semibold text-indigo-600 dark:text-indigo-400'
                                    : ''
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'cases' && (
            <div className="space-y-4">
              {lesson.caseStudies.map((cs, idx) => {
                const isOpen = !!openCases[idx];
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-amber-50/40 p-4 dark:border-slate-800 dark:bg-slate-950/60"
                  >
                    <h3 className="font-bold text-amber-700 dark:text-amber-400">{cs.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{cs.scenario}</p>
                    <button
                      onClick={() => setOpenCases((prev) => ({ ...prev, [idx]: !prev[idx] }))}
                      className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-500/20 dark:text-indigo-400"
                    >
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      {isOpen ? 'Ẩn gợi ý giải quyết' : 'Tự suy nghĩ xong → Xem gợi ý giải quyết'}
                    </button>
                    {isOpen && (
                      <ul className="mt-3 space-y-2 border-t border-slate-200 pt-3 text-sm dark:border-slate-800">
                        {cs.analysis.map((a, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <span className="font-bold text-emerald-500">→</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'reflection' && (
            <div className="space-y-3">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-3.5 text-xs leading-relaxed text-slate-700 dark:border-indigo-500/30 dark:bg-indigo-950/30 dark:text-slate-200">
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  Lưu ý chuyên cần LMS:{' '}
                </span>
                {lesson.reflectionPrompt}
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Số từ hiện tại: {wordCount} từ (tự động lưu)</span>
                <button
                  onClick={copyReflection}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
                >
                  {copiedReflection ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      Đã sao chép
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy để dán lên LMS
                    </>
                  )}
                </button>
              </div>
              <textarea
                value={reflection || ''}
                onChange={(e) => onSaveReflection(lesson.id, e.target.value)}
                rows={8}
                placeholder={`Soạn trước Nhật ký học tập (Reflection) hoặc bài thảo luận cho ${lesson.code} tại đây...`}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950"
              />
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ghi chú riêng khi nghe giảng (mẹo nhớ nhanh, câu hỏi cần tra cứu thêm) — tự động lưu trên máy của bạn.
              </p>
              <textarea
                value={note || ''}
                onChange={(e) => onSaveNote(lesson.id, e.target.value)}
                rows={8}
                placeholder={`Nhập ghi chú cá nhân cho ${lesson.code}...`}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950"
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Prev / Next Navigation */}
      <div className="flex items-center justify-between gap-3">
        {prevLesson ? (
          <button
            onClick={() => onSelectLesson(prevLesson.id)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            {prevLesson.code}: {prevLesson.title}
          </button>
        ) : (
          <div />
        )}
        {nextLesson && (
          <button
            onClick={() => onSelectLesson(nextLesson.id)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-900"
          >
            {nextLesson.code}: {nextLesson.title}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
