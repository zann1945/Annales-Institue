/* =========================================================
   DATA KUIS — Matematika, Fisika, Sejarah (masing-masing 10 soal)
   ========================================================= */
const QUIZ_DATA = {
  matematika: {
    title: 'Matematika',
    questions: [
      { q: 'Berapakah hasil dari 7 x 8?', options: ['54', '56', '58', '64'], correct: 1 },
      { q: 'Akar kuadrat dari 144 adalah?', options: ['10', '11', '12', '14'], correct: 2 },
      { q: 'Keliling lingkaran dengan jari-jari 7 cm (π = 22/7) adalah?', options: ['22 cm', '44 cm', '66 cm', '88 cm'], correct: 1 },
      { q: 'Nilai dari 2 pangkat 5 adalah?', options: ['16', '32', '64', '10'], correct: 1 },
      { q: 'Jika x + 5 = 12, maka nilai x adalah?', options: ['5', '6', '7', '8'], correct: 2 },
      { q: 'Luas persegi dengan panjang sisi 9 cm adalah?', options: ['18 cm²', '36 cm²', '72 cm²', '81 cm²'], correct: 3 },
      { q: 'Hasil dari 15% dari 200 adalah?', options: ['20', '25', '30', '35'], correct: 2 },
      { q: 'Manakah dari bilangan berikut yang merupakan bilangan prima?', options: ['9', '15', '17', '21'], correct: 2 },
      { q: 'Jumlah besar sudut dalam sebuah segitiga adalah?', options: ['90°', '180°', '270°', '360°'], correct: 1 },
      { q: 'Hasil dari (3 + 4) x 2 adalah?', options: ['10', '11', '14', '20'], correct: 2 },
    ],
  },
  fisika: {
    title: 'Fisika',
    questions: [
      { q: 'Satuan SI untuk gaya adalah?', options: ['Joule', 'Newton', 'Watt', 'Pascal'], correct: 1 },
      { q: 'Kecepatan cahaya di ruang hampa kira-kira sebesar?', options: ['3×10⁵ km/s', '3×10⁸ m/s', '3×10⁶ m/s', '3×10³ m/s'], correct: 1 },
      { q: 'Hukum Newton I juga dikenal sebagai hukum?', options: ['Aksi-reaksi', 'Kelembaman (inersia)', 'Gravitasi umum', 'Kekekalan energi'], correct: 1 },
      { q: 'Satuan energi dalam Sistem Internasional adalah?', options: ['Newton', 'Watt', 'Joule', 'Pascal'], correct: 2 },
      { q: 'Air mendidih pada suhu berapa derajat Celsius dalam tekanan normal?', options: ['90°C', '95°C', '100°C', '110°C'], correct: 2 },
      { q: 'Alat untuk mengukur kuat arus listrik disebut?', options: ['Voltmeter', 'Amperemeter', 'Barometer', 'Termometer'], correct: 1 },
      { q: 'Percepatan gravitasi di permukaan bumi kira-kira sebesar?', options: ['9,8 m/s²', '8,9 m/s²', '10,8 m/s²', '7,8 m/s²'], correct: 0 },
      { q: 'Gelombang bunyi tidak dapat merambat melalui?', options: ['Udara', 'Air', 'Besi', 'Ruang hampa'], correct: 3 },
      { q: 'Rumus usaha (kerja) dalam fisika adalah?', options: ['W = m.a', 'W = F.s', 'W = m.v', 'W = F.m'], correct: 1 },
      { q: 'Perubahan wujud dari gas menjadi cair disebut?', options: ['Menguap', 'Mengembun', 'Membeku', 'Menyublim'], correct: 1 },
    ],
  },
  sejarah: {
    title: 'Sejarah',
    questions: [
      { q: 'Proklamasi Kemerdekaan Indonesia dibacakan pada tanggal?', options: ['16 Agustus 1945', '17 Agustus 1945', '18 Agustus 1945', '20 Mei 1945'], correct: 1 },
      { q: 'Siapakah yang membacakan teks Proklamasi Kemerdekaan Indonesia?', options: ['Mohammad Hatta', 'Soekarno', 'Sutan Syahrir', 'Ahmad Soebardjo'], correct: 1 },
      { q: 'Perang Dunia II berakhir pada tahun?', options: ['1943', '1944', '1945', '1946'], correct: 2 },
      { q: 'Organisasi pergerakan nasional pertama di Indonesia adalah?', options: ['Budi Utomo', 'Sarekat Islam', 'Indische Partij', 'Perhimpunan Indonesia'], correct: 0 },
      { q: 'Peristiwa runtuhnya Tembok Berlin terjadi pada tahun?', options: ['1987', '1989', '1991', '1993'], correct: 1 },
      { q: 'Kerajaan Majapahit mencapai puncak kejayaan pada masa pemerintahan raja?', options: ['Ken Arok', 'Hayam Wuruk', 'Kertanegara', 'Jayabaya'], correct: 1 },
      { q: 'Perjanjian yang mengakhiri Perang Dunia I adalah?', options: ['Perjanjian Versailles', 'Perjanjian Postdam', 'Perjanjian Roem-Royen', 'Perjanjian Linggarjati'], correct: 0 },
      { q: 'Peristiwa Rengasdengklok terjadi sebelum peristiwa apa?', options: ['Perjanjian Renville', 'Proklamasi Kemerdekaan', 'Konferensi Meja Bundar', 'Agresi Militer Belanda'], correct: 1 },
      { q: 'Piramida Giza dibangun oleh peradaban?', options: ['Mesopotamia', 'Mesir Kuno', 'Romawi Kuno', 'Yunani Kuno'], correct: 1 },
      { q: 'Surat Perintah Sebelas Maret (Supersemar) dikeluarkan pada tahun?', options: ['1965', '1966', '1967', '1968'], correct: 1 },
    ],
  },
};

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

/* State kuis yang sedang berjalan */
const quizState = {
  subjectKey: null,
  index: 0,
  score: 0,
  answered: false,
};

function startQuiz(subjectKey) {
  quizState.subjectKey = subjectKey;
  quizState.index = 0;
  quizState.score = 0;
  quizState.answered = false;
  renderQuiz();

  const runnerPanel = document.getElementById('kuisRunner');
  runnerPanel.classList.add('is-open');
  runnerPanel.scrollTop = 0;
}

function renderQuiz() {
  const container = document.getElementById('quizContent');
  const subject = QUIZ_DATA[quizState.subjectKey];
  if (!container || !subject) return;

  const total = subject.questions.length;

  /* Kuis selesai: tampilkan hasil */
  if (quizState.index >= total) {
    const percent = Math.round((quizState.score / total) * 100);
    let remark = 'Terus belajar, ya!';
    if (percent === 100) remark = 'Sempurna! Luar biasa.';
    else if (percent >= 70) remark = 'Bagus sekali, hampir sempurna!';
    else if (percent >= 40) remark = 'Lumayan, masih bisa ditingkatkan.';

    container.innerHTML = `
      <div class="quiz-result">
        <span class="quiz-result-eyebrow">Hasil Kuis &middot; ${subject.title}</span>
        <div class="quiz-result-score">${quizState.score} / ${total}</div>
        <p class="quiz-result-label">${percent}% jawaban benar &mdash; ${remark}</p>
        <div class="quiz-result-actions">
          <button class="quiz-btn-primary" id="retryQuizBtn">Ulangi Kuis</button>
          <button class="quiz-btn-secondary" id="otherQuizBtn">Pilih Mapel Lain</button>
        </div>
      </div>
    `;

    document.getElementById('retryQuizBtn').addEventListener('click', () => startQuiz(quizState.subjectKey));
    document.getElementById('otherQuizBtn').addEventListener('click', () => {
      document.getElementById('kuisRunner').classList.remove('is-open');
    });
    return;
  }

  const q = subject.questions[quizState.index];
  const progressPercent = Math.round((quizState.index / total) * 100);

  container.innerHTML = `
    <div class="quiz-header">
      <span class="quiz-subject-title">${subject.title}</span>
      <span class="quiz-progress-text">Soal ${quizState.index + 1} dari ${total}</span>
    </div>
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${progressPercent}%"></div></div>
    <h3 class="quiz-question">${q.q}</h3>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <button class="quiz-option" data-option="${i}">
          <span class="quiz-option-letter">${OPTION_LETTERS[i]}</span>
          <span>${opt}</span>
        </button>
      `).join('')}
    </div>
    <p class="quiz-feedback" id="quizFeedback"></p>
    <button class="quiz-next-btn" id="quizNextBtn" disabled>Lanjut</button>
  `;

  quizState.answered = false;

  const optionButtons = container.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('quizNextBtn');

  optionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (quizState.answered) return;
      quizState.answered = true;

      const chosen = Number(btn.dataset.option);
      const isCorrect = chosen === q.correct;
      if (isCorrect) quizState.score += 1;

      optionButtons.forEach((b) => {
        b.disabled = true;
        const idx = Number(b.dataset.option);
        if (idx === q.correct) b.classList.add('is-correct');
        else if (idx === chosen) b.classList.add('is-wrong');
      });

      feedback.textContent = isCorrect
        ? 'Benar! Jawabanmu tepat.'
        : `Kurang tepat. Jawaban yang benar: ${q.options[q.correct]}.`;

      nextBtn.disabled = false;
    });
  });

  nextBtn.addEventListener('click', () => {
    quizState.index += 1;
    renderQuiz();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const scrollCue   = document.getElementById('scrollCue');
  const indexSection = document.getElementById('index');
  const cards       = document.querySelectorAll('.index-card');
  const panels      = document.querySelectorAll('[data-panel]');
  const backButtons = document.querySelectorAll('[data-back]');

  /* Scroll cue "menutup" (fade out) begitu halaman indeks mulai terlihat */
  const cueObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollCue.classList.add('is-closed');
      } else {
        scrollCue.classList.remove('is-closed');
      }
    });
  }, { threshold: 0.05 });

  cueObserver.observe(indexSection);

  scrollCue.addEventListener('click', () => {
    indexSection.scrollIntoView({ behavior: 'smooth' });
  });

  /* Buka panel saat kartu indeks dipencet */
  function openPanel(id) {
    const panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.add('is-open');
    panel.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeAllPanels() {
    panels.forEach((p) => p.classList.remove('is-open'));
    document.body.style.overflow = '';
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      openPanel(card.dataset.target);
    });
  });

  backButtons.forEach((btn) => {
    btn.addEventListener('click', closeAllPanels);
  });

  /* Tombol Escape juga menutup panel yang sedang terbuka */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllPanels();
  });

  /* Klik nama admin/pemateri untuk membuka info singkat */
  document.querySelectorAll('[data-person]').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.closest('.person-item').classList.toggle('is-open');
    });
  });

  /* Klik kartu mapel di laman Kuis untuk memulai kuis tersebut */
  document.querySelectorAll('[data-quiz]').forEach((btn) => {
    btn.addEventListener('click', () => {
      startQuiz(btn.dataset.quiz);
    });
  });

  /* Tombol kembali khusus di dalam kuis: hanya menutup panel soal,
     laman menu Kuis di baliknya tetap terbuka */
  document.querySelectorAll('[data-quiz-back]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById('kuisRunner').classList.remove('is-open');
    });
  });
});
