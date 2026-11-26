export const COURSE_INFO = {
  code: 'THL 1057',
  title: 'Nhà nước và Pháp luật đại cương',
  subtitle: 'General State and Law — Trường Đại học Luật, ĐHQGHN',
  credits: 2,
  prerequisite: 'PHI1004',
  textbook:
    'Đào Trí Úc, Hoàng Thị Kim Quế (đồng chủ biên, 2018), Giáo trình đại cương về nhà nước và pháp luật, NXB ĐHQGHN.',
  lmsUrl: 'https://lms.vnu.edu.vn/learn/lop-hoc/chi-tiet/f4adf180-a160-4c78-bc29-f515490f19ab',
  playlistUrl: 'https://www.youtube.com/playlist?list=PLIMTPzsaX2BCwrtYYsQzk-dug3K6Z4xWD',
  deCuongPdf:
    'https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/admin/20240306/tmpgdmwo3_final-de-cuong-nnpldc.pdf',
  gradingWeights: [
    { label: 'Thường xuyên (Chuyên cần, Thảo luận, Reflection)', weight: 0.1, pct: '10%' },
    { label: 'Kiểm tra giữa kỳ (Trắc nghiệm / Bài tập)', weight: 0.3, pct: '30%' },
    { label: 'Thi kết thúc học phần', weight: 0.6, pct: '60%' },
  ],
  examCondition:
    'Nghỉ không quá 20% số buổi (hoàn thành đầy đủ Hoạt động học tập/Thảo luận trên LMS), có điểm giữa kỳ và tổng điểm thành phần đạt từ D trở lên.',
  milestones: [
    {
      title: 'Kiểm tra trắc nghiệm giữa kỳ bổ sung',
      date: '30/11/2026 – 06/12/2026',
      detail: '30 câu hỏi • 45 phút • Tối đa 3 lượt làm bài (lấy điểm cao nhất, tối thiểu 1/10)',
      type: 'exam',
    },
    {
      title: 'Bài 5: Ý thức PL, Vi phạm PL & TNPL',
      date: '07/12/2026 – 20/12/2026 (Tuần 10–11)',
      detail: 'Chưa mở trên LMS — Đã có khung bài giảng YouTube, sẽ cập nhật PDF LMS khi mở',
      type: 'upcoming',
    },
    {
      title: 'Bài 6: Một số ngành luật trong HTPL VN',
      date: '21/12/2026 – 27/12/2026 (Tuần 12)',
      detail: 'Chưa mở trên LMS — Đã có khung bài giảng YouTube, sẽ cập nhật PDF LMS khi mở',
      type: 'upcoming',
    },
    {
      title: 'Ôn tập thi kết thúc học phần',
      date: '28/12/2026 – 03/01/2027 (Tuần 13)',
      detail: 'Tổng ôn toàn bộ 6 bài & dạng thức đề thi cuối kỳ',
      type: 'exam',
    },
  ],
};

export const LESSONS = [
  {
    id: 1,
    code: 'Bài 1',
    title: 'Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam',
    schedule: 'Tuần 1–2 (05/10 – 18/10/2026)',
    lmsStatus: 'open',
    clos: ['CLO1', 'CLO2', 'CLO3', 'CLO5', 'CLO6'],
    videos: [
      {
        id: 'CR7i6p3GHho',
        title: '[NNPLDC] Bài 1: Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam',
        chapters: [
          { time: 0, label: '00:00 — Giới thiệu nội dung Bài 1' },
          { time: 116, label: '01:56 — Khái niệm, bản chất nhà nước (tính giai cấp & tính xã hội)' },
          { time: 650, label: '10:50 — 5 đặc trưng cơ bản & phân biệt nhà nước với tổ chức xã hội' },
          { time: 1168, label: '19:28 — Khái niệm & đặc trưng chung của Nhà nước pháp quyền' },
          { time: 1730, label: '28:50 — Nhà nước pháp quyền XHCN Việt Nam (Nghị quyết 27-NQ/TW)' },
        ],
      },
    ],
    lmsResources: [
      {
        title: 'Bài giảng (PDF): Nhà nước pháp quyền XHCN Việt Nam (20 trang)',
        url: 'https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/admin/20240229/tmpdmtzyv_bai-1---nha-nuoc-pq-xhcn-vn-pdf.pdf',
      },
      {
        title: 'Đề cương học phần THL1057 (15 trang)',
        url: 'https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/admin/20240306/tmpgdmwo3_final-de-cuong-nnpldc.pdf',
      },
    ],
    mandatoryReadings: [
      'Bài đọc bắt buộc: Nhà nước pháp quyền XHCNVN - Những giá trị, đặc trưng phổ biến và tính đặc thù',
      'Học liệu mở rộng: Cơ chế kiểm soát quyền lực nhà nước trong nhà nước pháp quyền',
      'Học liệu mở rộng: Tư duy về nhà nước và pháp luật trong thời đại ngày nay',
    ],
    reflectionPrompt:
      'Gợi ý Nhật ký học tập (Reflection) Bài 1 trên LMS: Phân tích vì sao chỉ tuân thủ pháp luật nghiêm minh thôi là chưa đủ để gọi là Nhà nước pháp quyền, mà bản thân hệ thống pháp luật phải dân chủ, công bằng, nhân đạo. Liên hệ một ví dụ thực tiễn bảo vệ quyền công dân ở Việt Nam.',
    sections: [
      {
        heading: '1. Khái niệm, bản chất và 5 đặc trưng của Nhà nước',
        points: [
          'Khái niệm: Nhà nước là tổ chức của quyền lực chính trị công cộng đặc biệt, có bộ máy chuyên cưỡng chế, có lãnh thổ và quản lý dân cư theo lãnh thổ nhằm thực hiện các mục tiêu giai cấp và mục tiêu xã hội.',
          'Bản chất nhà nước gồm 2 thuộc tính thống nhất: Tính giai cấp (bảo vệ lợi ích chủ yếu, trước hết của giai cấp cầm quyền — vd quy định "Bát nghị" thời phong kiến) và Tính xã hội (giải quyết công việc chung: trị thủy, chống ngoại xâm, giữ trật tự, an sinh xã hội). Trong nhà nước đương đại, bản chất xã hội ngày càng mở rộng và bao trùm.',
          '5 đặc trưng phân biệt nhà nước với tổ chức khác: (1) Thiết lập quyền lực chính trị công cộng đặc biệt có bộ máy cưỡng chế chuyên trách (tách khỏi xã hội, khác công xã nguyên thủy); (2) Phân chia và quản lý dân cư theo đơn vị hành chính – lãnh thổ; (3) Đại diện duy nhất và thực thi chủ quyền quốc gia; (4) Ban hành/thừa nhận pháp luật bắt buộc chung; (5) Đặt ra và thu các loại thuế bắt buộc.',
        ],
      },
      {
        heading: '2. Nhà nước pháp quyền là gì?',
        points: [
          'Nhà nước pháp quyền KHÔNG phải một kiểu nhà nước lịch sử (như chiếm hữu nô lệ, phong kiến, tư sản, XHCN) mà là một phương thức tổ chức quyền lực nhà nước tiến bộ mà mọi quốc gia văn minh hướng tới.',
          'Các đặc trưng phổ biến: (1) Tính tối cao (thượng tôn) của pháp luật; (2) Chống lạm quyền thông qua phân định và kiểm soát quyền lực (lập pháp – hành pháp – tư pháp); (3) Tôn trọng, bảo vệ quyền tự do của con người; (4) Tư pháp độc lập (tòa án xét xử độc lập, chỉ tuân theo pháp luật); (5) Tôn trọng các điều ước và pháp luật quốc tế.',
        ],
      },
      {
        heading: '3. Nhà nước pháp quyền XHCN Việt Nam (Hiến pháp 2013 & Nghị quyết 27-NQ/TW năm 2022)',
        points: [
          'Dấu mốc lịch sử: Khái niệm xuất hiện lần đầu trong văn kiện Đảng năm 1994, được hiến định tại Hiến pháp 2013 (Điều 2) và cụ thể hóa thành 8 đặc trưng trong Nghị quyết 27-NQ/TW (2022).',
          'Đặc trưng cốt lõi: (1) Nhà nước của Nhân dân, do Nhân dân, vì Nhân dân; (2) Thượng tôn Hiến pháp và pháp luật; (3) Tôn trọng, bảo đảm, bảo vệ quyền con người, quyền công dân; (4) Hệ thống pháp luật dân chủ, công bằng, nhân đạo, đầy đủ, đồng bộ, minh bạch, khả thi; (5) Quyền lực nhà nước là thống nhất, có sự phân công rành mạch, phối hợp chặt chẽ, kiểm soát hiệu quả; (6) Độc lập của tòa án theo thẩm quyền xét xử; (7) Tôn trọng điều ước quốc tế mà VN là thành viên; (8) Đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.',
        ],
      },
    ],
    comparisons: [
      {
        title: 'Phân biệt Nhà nước với Tổ chức xã hội (vd: Đoàn Thanh niên, Hội Sinh viên)',
        headers: ['Tiêu chí', 'Nhà nước (Cơ quan nhà nước)', 'Tổ chức xã hội'],
        rows: [
          ['Quyền lực & cưỡng chế', 'Quyền lực công cộng đặc biệt, có công an, tòa án, nhà tù chuyên trách', 'Không có bộ máy cưỡng chế nhà nước'],
          ['Phạm vi quy định', 'Ban hành pháp luật áp dụng bắt buộc chung cho toàn xã hội', 'Ban hành điều lệ, quy chế chỉ có giá trị nội bộ hội viên'],
          ['Quản lý thành viên', 'Quản lý dân cư theo đơn vị hành chính – lãnh thổ', 'Tập hợp thành viên theo nghề nghiệp, độ tuổi, mục đích tự nguyện'],
          ['Thu tài chính', 'Đặt ra các loại thuế bắt buộc (nuôi bộ máy & dịch vụ công)', 'Thu hội phí tự nguyện/nội bộ, mức nhỏ và đồng đều'],
          ['Chủ quyền', 'Đại diện duy nhất cho chủ quyền quốc gia', 'Không đại diện cho chủ quyền quốc gia'],
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Tình huống 1: Phân biệt thẩm quyền xử phạt và thu phí',
        scenario:
          'Sinh viên A vượt đèn đỏ gần cổng trường. Chi đoàn lớp yêu cầu A nộp phạt 500.000đ vào quỹ lớp theo "nội quy chi đoàn" và tạm giữ xe máy của A. Việc làm này đúng hay sai về mặt lý luận Nhà nước?',
        analysis: [
          'Sai thẩm quyền: Chi đoàn là tổ chức chính trị – xã hội, chỉ có quy chế nội bộ, KHÔNG phải cơ quan nhà nước nên không có quyền cưỡng chế tạm giữ tài sản hay xử phạt hành chính.',
          'Chỉ cơ quan nhà nước có thẩm quyền (CSGT) mới được áp dụng chế tài cưỡng chế nhà nước theo quy định pháp luật.',
        ],
      },
      {
        title: 'Tình huống 2: Tuân thủ luật nghiêm khắc có đồng nghĩa Nhà nước pháp quyền?',
        scenario:
          'Trong lịch sử có những triều đại phong kiến áp dụng hình phạt rất nghiêm khắc, mọi thần dân đều răm rắp tuân theo mệnh lệnh nhà vua nhưng pháp luật lại bảo vệ đặc quyền hoàng tộc ("Bát nghị"). Đó có phải Nhà nước pháp quyền không?',
        analysis: [
          'Không phải Nhà nước pháp quyền (đó là "pháp trị" hà khắc, bất bình đẳng).',
          'Nhà nước pháp quyền đòi hỏi 2 vế: (1) Thượng tôn pháp luật nghiêm minh VÀ (2) Bản thân pháp luật phải dân chủ, công bằng, nhân đạo, bảo vệ quyền con người và giới hạn quyền lực của chính người cầm quyền.',
        ],
      },
    ],
  },
  {
    id: 2,
    code: 'Bài 2',
    title: 'Bộ máy, chức năng và hình thức nhà nước CHXHCN Việt Nam',
    schedule: 'Tuần 3–4 (19/10 – 01/11/2026)',
    lmsStatus: 'open',
    clos: ['CLO1', 'CLO2', 'CLO3'],
    videos: [
      {
        id: 'RbFALuMANPQ',
        title: 'Bản gộp đầy đủ: Bộ máy, chức năng, hình thức nhà nước CHXHCNVN',
        chapters: [
          { time: 0, label: '00:00 — Phần 1: Bộ máy nhà nước & 5 nguyên tắc tổ chức' },
          { time: 1800, label: '30:00 — Phần 2: Chức năng nhà nước (kinh tế, xã hội...)' },
          { time: 3000, label: '50:00 — Phần 3: Hình thức nhà nước (Chính thể & Cấu trúc)' },
        ],
      },
      {
        id: 'pbnSDXpMTXY',
        title: 'Nội dung 1: Bộ máy, chức năng nhà nước CHXHCNVN',
        chapters: [{ time: 0, label: '00:00 — Bộ máy và chức năng nhà nước' }],
      },
      {
        id: '9aOJE-_5gJA',
        title: 'Nội dung 2: Hình thức nhà nước CHXHCNVN',
        chapters: [{ time: 0, label: '00:00 — Hình thức chính thể & Hình thức cấu trúc' }],
      },
    ],
    lmsResources: [
      {
        title: 'Bài giảng PDF (ND1): Bộ máy, chức năng nhà nước (PGS.TS Nguyễn Minh Tuấn - bản 2025)',
        url: 'https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/hoangnv/20260930/tmphwzklf_bai-2-2025_nguyen-minh-tuan_bo-may-chuc-nang-hinh-thuc.pdf',
      },
      {
        title: 'Bài giảng PDF (ND2): Hình thức nhà nước CHXHCN Việt Nam',
        url: 'https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/admin/20240301/tmpazsate_bai-22---hinh-thuc-pdf.pdf',
      },
    ],
    mandatoryReadings: [
      'Bài đọc 1 (ND1): Giải pháp nâng cao hiệu lực, hiệu quả của Bộ máy hành chính nhà nước Việt Nam',
      'Bài đọc 2 (ND1): Vai trò, chức năng của nhà nước CHXHCN Việt Nam',
      'Bài đọc bắt buộc (ND2): Hình thức nhà nước đương đại',
    ],
    reflectionPrompt:
      'Gợi ý Nhật ký học tập (Reflection) Bài 2 trên LMS: Trình bày điểm cập nhật trong mô hình bộ máy nhà nước Việt Nam hiện nay (cập nhật 2025: chính quyền địa phương tỉnh – xã, TAND/VKSND khu vực) và giải thích quan điểm "Nhà nước cầm lái chứ không cầm chèo" trong chức năng kinh tế.',
    sections: [
      {
        heading: '1. Bộ máy nhà nước CHXHCN Việt Nam (cập nhật theo slide 2025)',
        points: [
          'Khái niệm: Hệ thống các cơ quan nhà nước từ trung ương đến địa phương, tổ chức và hoạt động theo nguyên tắc chung, thống nhất nhằm thực hiện chức năng, nhiệm vụ của nhà nước (lưu ý: Bộ máy nhà nước khác với Hệ thống chính trị).',
          'Cấu trúc chia dọc (5 nhóm + thiết chế hiến định độc lập): (1) Cơ quan quyền lực nhà nước: Quốc hội, HĐND tỉnh, HĐND xã; (2) Cơ quan hành chính nhà nước: Chính phủ, UBND tỉnh, UBND xã; (3) Cơ quan xét xử: TAND tối cao, TAND tỉnh, TAND khu vực; (4) Cơ quan kiểm sát: VKSND tối cao, VKSND tỉnh, VKSND khu vực; (5) Nguyên thủ quốc gia: Chủ tịch nước; cùng Hội đồng Bầu cử quốc gia và Kiểm toán Nhà nước.',
          '5 nguyên tắc tổ chức & hoạt động (Hiến pháp 2013): (1) Tất cả quyền lực thuộc về Nhân dân — dân chủ trực tiếp & đại diện (Đ.2, Đ.6, Đ.8); (2) Quyền lực nhà nước là thống nhất, có phân công, phối hợp, kiểm soát (K3 Đ.2); (3) Bảo đảm sự lãnh đạo của Đảng Cộng sản Việt Nam (Đ.4); (4) Tổ chức và hoạt động theo Hiến pháp, pháp luật, tập trung dân chủ (K1 Đ.8); (5) Công nhận, tôn trọng, bảo vệ và bảo đảm quyền con người, quyền công dân (Đ.3).',
        ],
      },
      {
        heading: '2. Chức năng của Nhà nước CHXHCN Việt Nam',
        points: [
          'Khái niệm: Các phương diện hoạt động chủ yếu, cơ bản của nhà nước trên các lĩnh vực khác nhau của đời sống xã hội phù hợp với bản chất, vai trò, trách nhiệm của nhà nước.',
          'Phân loại: Theo ý nghĩa (chủ yếu / phái sinh); theo phân chia quyền lực (lập pháp / hành pháp / tư pháp); theo phạm vi (đối nội / đối ngoại).',
          'Hình thức & phương pháp thực hiện: 3 hình thức pháp lý (Xây dựng PL – Thực thi PL – Bảo vệ PL); 4 phương pháp (Giáo dục, khuyến khích, thuyết phục, cưỡng chế).',
          'Chức năng kinh tế & xã hội hiện nay: Chuyển sang mô hình "Nhà nước kiến tạo phát triển", tư duy lại 3 trụ cột Nhà nước – Thị trường – Xã hội ("Nhà nước nhỏ, xã hội lớn; nhà nước cầm lái mà không cầm chèo"), khắc phục khuyết tật thị trường (độc quyền, ô nhiễm, phân hóa giàu nghèo) và thúc đẩy chuyển đổi số, phát triển xanh bền vững.',
        ],
      },
      {
        heading: '3. Hình thức nhà nước (Chính thể & Cấu trúc)',
        points: [
          'Hình thức nhà nước là cách thức tổ chức quyền lực nhà nước, gồm 2 yếu tố: Hình thức chính thể và Hình thức cấu trúc nhà nước.',
          'Hình thức chính thể: Quân chủ (tuyệt đối / hạn chế: nhị nguyên, đại nghị) và Cộng hòa (quý tộc / dân chủ; tư sản gồm tổng thống, đại nghị, lưỡng tính/hỗn hợp; XHCN).',
          'Hình thức nhà nước CHXHCN Việt Nam: Chính thể Cộng hòa dân chủ XHCN (bầu cử phổ thông, bình đẳng, trực tiếp, bỏ phiếu kín — Đ.7 HP 2013) và Cấu trúc Nhà nước đơn nhất (1 chủ quyền, 1 Hiến pháp, 1 hệ thống pháp luật, công dân có 1 quốc tịch Việt Nam — Đ.1, Đ.17 HP 2013).',
        ],
      },
    ],
    comparisons: [
      {
        title: 'So sánh Nhà nước đơn nhất và Nhà nước liên bang',
        headers: ['Tiêu chí', 'Nhà nước đơn nhất (vd: Việt Nam, Pháp)', 'Nhà nước liên bang (vd: Mỹ, Đức)'],
        rows: [
          ['Chủ quyền', 'Chỉ có 1 chủ quyền chung toàn vẹn; địa phương không có chủ quyền riêng', 'Nhà nước chung và các bang thành viên đều có chủ quyền riêng'],
          ['Hệ thống pháp luật', '1 Hiến pháp chung, 1 hệ thống pháp luật thống nhất', '2 hệ thống pháp luật (liên bang và tiểu bang)'],
          ['Bộ máy nhà nước', '1 hệ thống cơ quan từ trung ương xuống địa phương', '2 hệ thống cơ quan (liên bang và tiểu bang)'],
          ['Quốc tịch công dân', 'Công dân có 1 quốc tịch', 'Công dân thường có 2 quốc tịch'],
        ],
      },
      {
        title: 'Phân biệt Nhà nước liên minh và Liên minh các nhà nước',
        headers: ['Loại hình', 'Bản chất', 'Ví dụ'],
        rows: [
          ['Nhà nước liên minh', 'Liên kết tạm thời giữa các quốc gia để đạt mục đích chung; sau đó giải tán hoặc chuyển thành nhà nước liên bang', 'Hoa Kỳ giai đoạn 1776–1787'],
          ['Liên minh các nhà nước', 'Các tổ chức quốc tế/khu vực; mỗi quốc gia vẫn giữ chủ quyền, pháp luật, thu thuế, bộ máy riêng', 'UN, EU, ASEAN'],
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Tình huống: Phân định thẩm quyền trong Bộ máy nhà nước',
        scenario:
          'UBND tỉnh X ban hành quyết định xử phạt doanh nghiệp xả thải gây ô nhiễm môi trường. Doanh nghiệp cho rằng mức phạt sai quy định và muốn khởi kiện. Hãy xác định vị trí của UBND tỉnh X và cơ quan giải quyết vụ khởi kiện.',
        analysis: [
          'UBND tỉnh X thuộc hệ thống Cơ quan hành chính nhà nước ở địa phương (thực hiện chức năng hành pháp – quản lý môi trường).',
          'Doanh nghiệp thực hiện quyền khởi kiện vụ án hành chính ra Tòa án nhân dân có thẩm quyền (hệ thống Cơ quan xét xử) — thể hiện cơ chế kiểm soát quyền lực nhà nước.',
        ],
      },
    ],
  },
  {
    id: 3,
    code: 'Bài 3',
    title: 'Khái niệm, thuộc tính, nguồn pháp luật, vai trò, chức năng của pháp luật',
    schedule: 'Tuần 5–6 (02/11 – 15/11/2026)',
    lmsStatus: 'open',
    clos: ['CLO1', 'CLO2', 'CLO3', 'CLO4', 'CLO5', 'CLO6'],
    videos: [
      {
        id: 'm_ZgZKPr1Yk',
        title: '[NNPLDC] Bài 3: Khái niệm, thuộc tính, nguồn và chức năng pháp luật',
        chapters: [
          { time: 0, label: '00:00 — Giới thiệu 3 câu hỏi lớn của Bài 3' },
          { time: 201, label: '03:21 — Luật là gì? Phân biệt Pháp luật với các quy tắc khác' },
          { time: 720, label: '12:00 — Thuộc tính cơ bản của pháp luật' },
          { time: 1020, label: '17:00 — 5 loại Nguồn pháp luật ở Việt Nam' },
          { time: 2150, label: '35:50 — Chức năng của pháp luật' },
        ],
      },
    ],
    lmsResources: [
      {
        title: 'Bài giảng (PDF): Khái niệm, thuộc tính, nguồn và chức năng pháp luật (29 trang)',
        url: 'https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/admin/20240301/tmpqvccfv_bai-3---khai-niem-nguon-pl-pdf.pdf',
      },
    ],
    mandatoryReadings: [
      'Bài đọc 1 (PDF): Giá trị của pháp luật trong việc điều chỉnh quan hệ xã hội',
      'Bài đọc 2 (PDF): Bàn về án lệ và việc áp dụng án lệ ở Việt Nam (PGS.TS Nguyễn Minh Tuấn)',
      'Bài đọc 3 (PDF): Mở rộng nguồn pháp luật đảm bảo quyền tiếp cận công lý tại Việt Nam',
    ],
    reflectionPrompt:
      'Gợi ý Nhật ký học tập (Reflection) Bài 3 trên LMS: Vì sao Văn bản quy phạm pháp luật dù là nguồn chủ yếu nhưng Việt Nam vẫn cần thừa nhận Tập quán pháp, Án lệ và Lẽ công bằng? Nêu ví dụ một quy định pháp luật đã làm thay đổi tích cực thói quen xã hội (như Nghị định xử phạt nồng độ cồn).',
    sections: [
      {
        heading: '1. Khái niệm và thuộc tính của Pháp luật',
        points: [
          'Phân biệt "Luật" phi quan phương và "Pháp luật" chính danh: Luật băng đảng, luật FIFA hay luật giáo hội đều có quy tắc và chế tài, nhưng chỉ Pháp luật mới mang tính quan phương (chính thống, nhân danh quyền lực nhà nước), do chủ thể có thẩm quyền ban hành hoặc thừa nhận và bảo đảm thực hiện bằng cưỡng chế nhà nước.',
          'Thuộc tính theo quan điểm Mác-Lênin: Tính giai cấp và Tính xã hội (hai mặt của một đồng xu).',
          'Thuộc tính pháp lý hiện đại: (1) Tính quyền lực nhà nước (bắt buộc chung); (2) Tính quy phạm phổ biến (chuẩn mực ứng xử chung tiến bộ); (3) Tính hệ thống và thứ bậc hiệu lực (Hiến pháp → Luật → Nghị định → Thông tư); (4) Tính xác định chặt chẽ về hình thức.',
        ],
      },
      {
        heading: '2. Năm loại Nguồn pháp luật ở Việt Nam hiện nay',
        points: [
          'Nguồn pháp luật là nơi chứa đựng các quy tắc/giải pháp pháp lý để tra cứu, viện dẫn khi giải quyết vụ việc.',
          '(1) Văn bản quy phạm pháp luật: Nguồn quan trọng và phổ biến nhất ở Việt Nam. Phải đáp ứng đủ 3 điều kiện: chứa quy tắc xử sự chung + đúng chủ thể có thẩm quyền + đúng trình tự, thủ tục, hình thức.',
          '(2) Tập quán pháp: Quy tắc xử sự của cộng đồng/địa phương được nhà nước thừa nhận làm nguồn bổ sung khi luật thành văn chưa quy định (và không trái nguyên tắc cơ bản của PL).',
          '(3) Án lệ: Lập luận, giải pháp pháp lý trong bản án đã có hiệu lực được Hội đồng Thẩm phán TANDTC lựa chọn và Chánh án TANDTC công bố (Nghị quyết 04/2019/NQ-HĐTP) để áp dụng cho các vụ việc có tình huống pháp lý tương tự.',
          '(4) Điều ước quốc tế: Thỏa thuận quốc tế mà Việt Nam ký kết/gia nhập — có hiệu lực áp dụng ưu tiên cao hơn luật quốc gia (nhưng thấp hơn Hiến pháp).',
          '(5) Lẽ công bằng: Nguồn bổ sung cuối cùng trong lĩnh vực luật tư (dân sự) khi không có văn bản QPPL, tập quán, tương tự pháp luật hay án lệ.',
        ],
      },
      {
        heading: '3. Hệ thống pháp luật & Chức năng của Pháp luật',
        points: [
          'Cấu trúc nội dung của Hệ thống pháp luật (từ nhỏ đến lớn): Quy phạm pháp luật → Chế định pháp luật (nhóm quy phạm điều chỉnh nhóm QHXH gần gũi, vd chế định quốc tịch, bầu cử) → Ngành luật (vd Luật Dân sự, Luật Hình sự).',
          '4 chức năng cơ bản của pháp luật: (1) Điều chỉnh các quan hệ xã hội (vd: Nghị định 100 giảm hành vi uống rượu bia lái xe); (2) Tạo lập và định hướng chuẩn mực giá trị tiến bộ (vd: hôn nhân một vợ một chồng, bình đẳng); (3) Bảo vệ các quan hệ xã hội và quyền lợi hợp pháp; (4) Là cơ sở pháp lý đánh giá hành vi hợp pháp hay bất hợp pháp.',
        ],
      },
    ],
    comparisons: [
      {
        title: 'Thẩm quyền ban hành Văn bản quy phạm pháp luật ở Việt Nam',
        headers: ['Chủ thể có thẩm quyền', 'Tên loại Văn bản QPPL', 'Lưu ý phân biệt'],
        rows: [
          ['Quốc hội', 'Hiến pháp, Bộ luật, Luật, Nghị quyết', 'Cơ quan lập pháp; Hiến pháp có hiệu lực cao nhất'],
          ['Ủy ban Thường vụ Quốc hội', 'Pháp lệnh, Nghị quyết', 'Có thể ban hành Nghị quyết liên tịch với Đoàn Chủ tịch UBTƯ MTTQVN'],
          ['Chủ tịch nước', 'Lệnh, Quyết định (chứa QPPL)', 'Quyết định tặng thưởng huân chương/bổ nhiệm cá nhân KHÔNG phải VBQPPL'],
          ['Chính phủ / Thủ tướng', 'Nghị định (CP) / Quyết định (TTg)', 'Quyết định thành lập 1 trường đại học cụ thể là văn bản cá biệt'],
          ['Hội đồng Thẩm phán TANDTC', 'Nghị quyết', 'Hướng dẫn áp dụng thống nhất pháp luật trong xét xử'],
          ['Bộ trưởng, Thủ trưởng CQ ngang bộ, Chánh án TANDTC, Viện trưởng VKSNDTC', 'Thông tư (hoặc Thông tư liên tịch)', 'Thống đốc NHNN, Chủ nhiệm VPCP là Thủ trưởng cơ quan ngang bộ'],
          ['HĐND / UBND các cấp', 'Nghị quyết (HĐND) / Quyết định (UBND)', 'Có hiệu lực trong phạm vi đơn vị hành chính địa phương'],
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Tình huống: Phân biệt Văn bản QPPL và Văn bản cá biệt',
        scenario:
          'Thủ tướng Chính phủ ban hành 2 văn bản: (A) Quyết định quy định chế độ phụ cấp cho bác sĩ công tác tại vùng sâu vùng xa; (B) Quyết định thành lập Trường Đại học Luật thuộc ĐHQGHN. Văn bản nào là văn bản quy phạm pháp luật?',
        analysis: [
          'Văn bản (A) là Văn bản quy phạm pháp luật vì chứa quy tắc xử sự chung, áp dụng nhiều lần cho mọi bác sĩ thuộc đối tượng quy định.',
          'Văn bản (B) là Văn bản áp dụng pháp luật (quyết định cá biệt), chỉ áp dụng một lần cho một tổ chức cụ thể, không chứa quy tắc xử sự chung.',
        ],
      },
    ],
  },
  {
    id: 4,
    code: 'Bài 4',
    title: 'Quy phạm pháp luật, quan hệ pháp luật và thực hiện pháp luật',
    schedule: 'Tuần 7–8 (16/11 – 29/11/2026)',
    lmsStatus: 'open',
    clos: ['CLO4'],
    videos: [
      {
        id: 'f-9AlvhYwPQ',
        title: '[NNPLDC] Bài 4: Quy phạm pháp luật, quan hệ pháp luật và thực hiện pháp luật',
        chapters: [
          { time: 0, label: '00:00 — Giới thiệu 3 nội dung Bài 4' },
          { time: 45, label: '00:45 — Quy phạm pháp luật & Cấu trúc 3 bộ phận' },
          { time: 262, label: '04:22 — Thực hiện pháp luật (4 hình thức phổ biến)' },
          { time: 500, label: '08:20 — Quan hệ pháp luật, Chủ thể & Sự kiện pháp lý' },
          { time: 940, label: '15:40 — Bài tập tình huống cuối bài' },
        ],
      },
    ],
    lmsResources: [
      {
        title: 'Bài giảng PDF: Quy phạm pháp luật, Quan hệ pháp luật và Thực hiện pháp luật (38 trang)',
        url: 'https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/thaiba/20240301/tmpdlo98u_bai-4---quy-pham-phap-luatpdf.pdf',
      },
    ],
    mandatoryReadings: [
      'Bài đọc bắt buộc (PDF): Quan hệ pháp luật trong kỷ nguyên số (Đoàn Văn Nhật)',
      'Học liệu mở rộng: Bàn về "Lỗ hổng pháp luật"',
      'Học liệu mở rộng: Vấn đề xác định trí tuệ nhân tạo (AI) là chủ thể mới của quan hệ pháp luật',
    ],
    reflectionPrompt:
      'Gợi ý Nhật ký học tập (Reflection) Bài 4 trên LMS: Phân tích mối liên hệ biện chứng giữa Quy phạm pháp luật – Quan hệ pháp luật – Thực hiện pháp luật. Liên hệ câu hỏi mở rộng: Trí tuệ nhân tạo (AI) hiện nay có thể được coi là chủ thể độc lập của quan hệ pháp luật không, hay chỉ là công cụ/tài sản?',
    sections: [
      {
        heading: '1. Quy phạm pháp luật (QPPL)',
        points: [
          'Khái niệm: Quy tắc xử sự chung có tính bắt buộc do nhà nước đặt ra hoặc thừa nhận nhằm điều chỉnh các quan hệ xã hội. Mang tính phi cá nhân, áp dụng nhiều lần và là ranh giới phân biệt hành vi hợp pháp – bất hợp pháp.',
          'Cấu trúc điển hình gồm 3 bộ phận: (1) Giả định (nêu chủ thể, hoàn cảnh, điều kiện xảy ra trong thực tế); (2) Quy định (nêu cách xử sự được phép, bắt buộc hoặc cấm đoán); (3) Chế tài (hậu quả pháp lý bất lợi dự kiến áp dụng đối với chủ thể vi phạm).',
          'Phân loại QPPL: Theo nội dung – hình thức gồm Quy phạm nội dung (xác định quyền, nghĩa vụ → luật nội dung) và Quy phạm thủ tục (cách thức thực hiện → luật hình thức/tố tụng); theo vai trò gồm Quy phạm điều chỉnh, Quy phạm bảo vệ và Quy phạm chuyên môn (định nghĩa, nguyên tắc).',
        ],
      },
      {
        heading: '2. Quan hệ pháp luật (QHPL)',
        points: [
          'Khái niệm: Quan hệ giữa người với người do QPPL điều chỉnh, biểu hiện thành quyền và nghĩa vụ pháp lý cụ thể của các bên và được bảo đảm bằng cưỡng chế nhà nước. Quan hệ pháp luật là tập con của quan hệ xã hội.',
          'Cấu trúc gồm 3 yếu tố: Chủ thể (cá nhân/thể nhân hoặc tổ chức/pháp nhân hội tụ đủ Năng lực pháp luật + Năng lực hành vi); Khách thể (lợi ích vật chất, tinh thần mà các bên hướng tới); Nội dung (quyền chủ thể và nghĩa vụ pháp lý).',
          '3 điều kiện làm phát sinh, thay đổi, chấm dứt QHPL: (1) Có quy phạm pháp luật điều chỉnh; (2) Có chủ thể có năng lực chủ thể; (3) Có Sự kiện pháp lý xảy ra trên thực tế (1 sự kiện pháp lý có thể làm chấm dứt QHPL này đồng thời làm phát sinh QHPL khác, vd sự kiện một người chết).',
        ],
      },
      {
        heading: '3. Thực hiện pháp luật (4 hình thức theo tính chất hành vi)',
        points: [
          'Bản chất: Quá trình chuyển hóa các yêu cầu của pháp luật thành hành vi thực tế hợp pháp của các chủ thể.',
          '4 hình thức thực hiện pháp luật: (1) Tuân thủ pháp luật (kiềm chế không làm điều cấm); (2) Chấp hành/Thi hành pháp luật (tích cực thực hiện nghĩa vụ bắt buộc); (3) Sử dụng pháp luật (chủ động thực hiện quyền của mình); (4) Áp dụng pháp luật (hoạt động mang tính quyền lực của cơ quan/cán bộ có thẩm quyền nhằm cá biệt hóa QPPL vào trường hợp cụ thể).',
        ],
      },
    ],
    comparisons: [
      {
        title: 'Phân biệt 4 hình thức Thực hiện pháp luật',
        headers: ['Hình thức', 'Loại quy phạm tương ứng', 'Bản chất hành vi', 'Chủ thể thực hiện'],
        rows: [
          ['Tuân thủ pháp luật', 'Quy phạm cấm đoán', 'Thụ động — kiềm chế không làm điều bị cấm', 'Mọi cá nhân, tổ chức'],
          ['Chấp hành pháp luật', 'Quy phạm bắt buộc', 'Chủ động — thực hiện nghĩa vụ bằng hành động tích cực', 'Mọi cá nhân, tổ chức'],
          ['Sử dụng pháp luật', 'Quy phạm trao quyền', 'Tự do ý chí — có thể làm hoặc không làm quyền được trao', 'Mọi cá nhân, tổ chức'],
          ['Áp dụng pháp luật', 'Quy phạm trao thẩm quyền công', 'Mang tính quyền lực nhà nước, ban hành văn bản cá biệt', 'Chỉ cơ quan, người có thẩm quyền nhà nước'],
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Bài tập 1 (từ video bài giảng): Hai con chó cắn nhau vs Chó cắn người',
        scenario:
          'So sánh 2 sự việc: (1) Hai con chó cắn nhau trong một khu rừng hoang; (2) Chó của bạn A trong lớp cắn thầy giáo Nguyễn Văn Quân khi đi dạo ngoài phố. Sự việc nào là quan hệ pháp luật? Vì sao?',
        analysis: [
          'Sự việc (1) KHÔNG phải quan hệ pháp luật vì quan hệ pháp luật chỉ phát sinh giữa người với người; động vật không có năng lực pháp luật và năng lực hành vi.',
          'Sự việc (2) LÀ quan hệ pháp luật dân sự (bồi thường thiệt hại do súc vật gây ra theo BLDS 2015) giữa bạn A (chủ vật nuôi — có nghĩa vụ bồi thường) và thầy Quân (người bị thiệt hại — có quyền yêu cầu bồi thường).',
        ],
      },
      {
        title: 'Bài tập 2: Tách 3 bộ phận của Quy phạm pháp luật (Điều 173 BLHS)',
        scenario:
          '"Người nào trộm cắp tài sản của người khác trị giá từ 2.000.000 đồng đến dưới 50.000.000 đồng... thì bị phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm." Hãy xác định Giả định – Quy định – Chế tài.',
        analysis: [
          'Giả định: "Người nào trộm cắp tài sản của người khác trị giá từ 2.000.000 đồng đến dưới 50.000.000 đồng..."',
          'Quy định: Bộ phận ẩn (ngầm hiểu là pháp luật cấm hành vi trộm cắp tài sản của người khác).',
          'Chế tài: "...thì bị phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm."',
        ],
      },
    ],
  },
  {
    id: 5,
    code: 'Bài 5',
    title: 'Ý thức pháp luật, văn hóa pháp luật, vi phạm pháp luật và trách nhiệm pháp lý',
    schedule: 'Tuần 10–11 (07/12 – 20/12/2026)',
    lmsStatus: 'upcoming',
    clos: ['CLO5', 'CLO8', 'CLO9'],
    videos: [
      {
        id: 'OCAdT51qgRo',
        title: '[NNPLDC] Bài 5: Ý thức PL, văn hóa PL, vi phạm PL và trách nhiệm pháp lý',
        chapters: [
          { time: 0, label: '00:00 — Mục 5.1: Ý thức pháp luật (Tâm lý PL & Tư tưởng PL)' },
          { time: 655, label: '10:55 — Văn hóa pháp luật & các loại hình' },
          { time: 940, label: '15:40 — Mục 5.2: Khái niệm & 3 dấu hiệu Vi phạm pháp luật' },
          { time: 1353, label: '22:33 — 4 yếu tố cấu thành Vi phạm pháp luật' },
          { time: 1845, label: '30:45 — Bài tập phân tích cấu thành (A & B trộm 300 triệu)' },
          { time: 2038, label: '33:58 — Phân loại vi phạm pháp luật & Trách nhiệm pháp lý' },
        ],
      },
    ],
    lmsResources: [
      {
        title: 'Chưa mở trên LMS (mở từ 07/12/2026) — Sẽ cập nhật thêm PDF LMS sau khi mở khóa.',
        url: COURSE_INFO.lmsUrl,
      },
    ],
    mandatoryReadings: [
      'Dự kiến mở ngày 07/12/2026: Vai trò của ý thức pháp luật với việc thực hiện pháp luật',
      'Dự kiến mở ngày 07/12/2026: Xã hội học vi phạm pháp luật (TS Phạm Thị Duyên Thảo)',
    ],
    reflectionPrompt:
      'Bài 5 hiện chưa mở trên LMS. Bạn có thể xem trước video bài giảng và ghi nháp trước các câu hỏi ôn tập tại đây.',
    sections: [
      {
        heading: '1. Ý thức pháp luật và Văn hóa pháp luật (Tóm tắt từ Video YouTube)',
        points: [
          'Ý thức pháp luật gồm 2 bộ phận: Tâm lý pháp luật (cảm xúc, thái độ, tâm trạng tự phát) và Tư tưởng pháp luật (quan điểm, học thuyết có hệ thống).',
          'Phân loại theo cấp độ nhận thức: Ý thức PL thông thường, Ý thức PL lý luận, Ý thức PL nghề nghiệp.',
          'Văn hóa pháp luật: Hệ thống giá trị vật chất và tinh thần trong lĩnh vực pháp luật (văn hóa lập pháp, hành pháp, tư pháp).',
        ],
      },
      {
        heading: '2. Vi phạm pháp luật (3 dấu hiệu & 4 yếu tố cấu thành)',
        points: [
          '3 dấu hiệu bắt buộc: (1) Là hành vi thực tế của con người (hành động hoặc không hành động, không tính suy nghĩ trong đầu); (2) Trái pháp luật; (3) Có lỗi của chủ thể có năng lực trách nhiệm pháp lý.',
          '4 yếu tố cấu thành: Mặt khách quan (hành vi, hậu quả, quan hệ nhân quả, thời gian, địa điểm, công cụ) • Mặt chủ quan (lỗi, động cơ, mục đích) • Chủ thể • Khách thể.',
          '4 loại VPPL & Trách nhiệm pháp lý: Hình sự, Hành chính, Dân sự, Kỷ luật.',
        ],
      },
    ],
    comparisons: [
      {
        title: 'Phân biệt 4 loại Lỗi trong Mặt chủ quan',
        headers: ['Loại lỗi', 'Nhận thức tính nguy hiểm', 'Thái độ với hậu quả', 'Ví dụ từ bài giảng'],
        rows: [
          ['Cố ý trực tiếp', 'Thấy trước hậu quả nguy hiểm', 'Mong muốn hậu quả xảy ra', 'Dùng gậy đánh người gây thương tích'],
          ['Cố ý gián tiếp', 'Thấy trước hậu quả có thể xảy ra', 'Không mong muốn nhưng để mặc hậu quả xảy ra', 'Giăng lưới điện chống trộm quanh ao tôm'],
          ['Vô ý vì quá tự tin', 'Thấy trước hậu quả có thể xảy ra', 'Tin rằng hậu quả không xảy ra / ngăn ngừa được', 'Phóng nhanh nhưng tự tin tay lái lụa'],
          ['Vô ý do cẩu thả', 'Không thấy trước dù phải thấy và có thể thấy', 'Do sơ suất, thiếu quan sát', 'Mở cửa xe ô tô không nhìn gương'],
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Bài tập từ video: Phân tích cấu thành VPPL (Vụ trộm 300 triệu nhà ông C)',
        scenario:
          'Vì nghiện ma túy, lúc 23h ngày 01/05/2020, A rủ B trộm tiền nhà ông C. A cạy khóa, đánh thuốc mê chó, cùng B cạy tủ lấy 300 triệu; ông C tỉnh giấc định hô hoán thì bị B dùng gậy đánh bị thương.',
        analysis: [
          'Mặt khách quan: Hành vi cạy khóa, đột nhập, dùng gậy đánh người và lấy 300 triệu đồng; hậu quả thiệt hại tài sản & sức khỏe.',
          'Mặt chủ quan: Lỗi cố ý trực tiếp; Động cơ: cần tiền mua ma túy; Mục đích: chiếm đoạt tài sản.',
          'Chủ thể: A và B (đủ tuổi và năng lực TNHS). Khách thể: Quyền sở hữu tài sản và sức khỏe của ông C.',
        ],
      },
    ],
  },
  {
    id: 6,
    code: 'Bài 6',
    title: 'Một số ngành luật trong hệ thống pháp luật Việt Nam',
    schedule: 'Tuần 12 (21/12 – 27/12/2026)',
    lmsStatus: 'upcoming',
    clos: ['CLO5', 'CLO7', 'CLO8', 'CLO9', 'CLO10', 'CLO11'],
    videos: [
      {
        id: 'uO0JdeZJ-3k',
        title: '[NNPLDC] Bài 6: Một số ngành luật trong hệ thống pháp luật Việt Nam',
        chapters: [
          { time: 0, label: '00:00 — Luật Dân sự & Tố tụng dân sự' },
          { time: 1214, label: '20:14 — Luật Hiến pháp (Đạo luật cơ bản)' },
          { time: 2439, label: '40:39 — Luật Hành chính & Tố tụng hành chính' },
          { time: 5435, label: '90:35 — Luật Hình sự & Tố tụng hình sự' },
        ],
      },
    ],
    lmsResources: [
      {
        title: 'Chưa mở trên LMS (mở từ 21/12/2026) — Sẽ cập nhật thêm PDF LMS sau khi mở khóa.',
        url: COURSE_INFO.lmsUrl,
      },
    ],
    mandatoryReadings: [
      'Dự kiến mở ngày 21/12/2026: Pháp luật dân sự và tố tụng dân sự với việc bảo đảm quyền dân sự theo HP 2013',
      'Dự kiến mở ngày 21/12/2026: Bộ luật Hình sự năm 2015 & Bộ luật Dân sự năm 2015',
    ],
    reflectionPrompt:
      'Bài 6 hiện chưa mở trên LMS. Bạn có thể xem trước bài giảng YouTube về 4 ngành luật trụ cột và ghi chú chuẩn bị cho Bài tập nhóm.',
    sections: [
      {
        heading: '1. Luật Hiến pháp & Luật Hành chính (Tóm tắt từ Video YouTube)',
        points: [
          'Luật Hiến pháp: Ngành luật chủ đạo; Hiến pháp 2013 có hiệu lực pháp lý tối cao, quy định chế độ chính trị, quyền con người, quyền công dân và bộ máy nhà nước.',
          'Luật Hành chính & TTHC: Điều chỉnh quan hệ chấp hành – điều hành bằng phương pháp mệnh lệnh – phục tùng; cá nhân/tổ chức có quyền khởi kiện quyết định hành chính, hành vi hành chính ra Tòa hành chính.',
        ],
      },
      {
        heading: '2. Luật Dân sự & Luật Hình sự (Tóm tắt từ Video YouTube)',
        points: [
          'Luật Dân sự & TTDS: Điều chỉnh quan hệ tài sản và nhân thân theo nguyên tắc bình đẳng, tự do ý chí, tự nguyện thỏa thuận (BLDS 2015).',
          'Luật Hình sự & TTHS: Quy định về tội phạm và hình phạt (BLHS 2015 sửa đổi 2017); chủ thể chịu TNHS gồm cá nhân và pháp nhân thương mại; chỉ Tòa án mới có quyền tuyên có tội và áp dụng hình phạt.',
        ],
      },
    ],
    comparisons: [
      {
        title: 'So sánh nhanh 4 ngành luật trọng tâm',
        headers: ['Ngành luật', 'Đối tượng điều chỉnh', 'Phương pháp điều chỉnh', 'Văn bản gốc'],
        rows: [
          ['Luật Hiến pháp', 'Chế độ chính trị, quyền con người, tổ chức BMNN', 'Xác định nguyên tắc hiến định chung', 'Hiến pháp 2013'],
          ['Luật Hành chính', 'Quan hệ quản lý hành chính nhà nước', 'Mệnh lệnh – phục tùng (quyền uy)', 'Luật XLVPHC, Luật TTHC'],
          ['Luật Dân sự', 'Quan hệ tài sản và nhân thân', 'Bình đẳng, tự nguyện thỏa thuận', 'Bộ luật Dân sự 2015'],
          ['Luật Hình sự', 'Quan hệ giữa Nhà nước và chủ thể phạm tội', 'Quyền uy (chế tài hình phạt)', 'BLHS 2015 (sửa đổi 2017)'],
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Tình huống từ bài giảng: Phân biệt quan hệ Hành chính và Dân sự',
        scenario:
          'UBND xã N quyết định tổ chức cho cán bộ đi nghỉ mát cuối năm và ký hợp đồng thuê xe khách của công ty Z. Quan hệ thuê xe thuộc ngành luật nào?',
        analysis: [
          'Hợp đồng thuê xe giữa UBND xã N và công ty Z là quan hệ pháp luật Dân sự (bình đẳng, thỏa thuận giá cả dịch vụ), không phải quan hệ mệnh lệnh hành chính.',
        ],
      },
    ],
  },
];
