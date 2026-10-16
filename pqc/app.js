const PASS_PERCENT = 66;
const FULL_EXAM_QUESTIONS = 50;

const DOMAINS = [
  { id: 'foundations', code: 'F', icon: '⚛️', short: 'Foundations', name: 'Quantum Computing Foundations' },
  { id: 'threats', code: 'R', icon: '⚠️', short: 'Threats & Risk', name: 'Quantum Threats & Risk' },
  { id: 'qkd', code: 'Q', icon: '🔦', short: 'QKD', name: 'Quantum Key Distribution' },
  { id: 'algorithms', code: 'A', icon: '🧮', short: 'PQC Algorithms', name: 'PQC Algorithms & Mechanisms' },
  { id: 'standards', code: 'S', icon: '📜', short: 'Standards & Roadmaps', name: 'Standards, Compliance & Roadmaps' },
  { id: 'migration', code: 'M', icon: '🧭', short: 'Migration', name: 'PQC Migration & Program Management' },
  { id: 'protocols', code: 'P', icon: '🔌', short: 'Protocols & Testing', name: 'Protocols, Implementation & Testing' },
  { id: 'cyber', code: 'C', icon: '🛡️', short: 'Cyber Fundamentals', name: 'Cybersecurity Fundamentals' },
];

const DOMAIN_BY_CODE = Object.fromEntries(DOMAINS.map((d) => [d.code, d.id]));

/** Parser labels for Q301–Q500. Not selectable exams. */
const MODULE_ID_BY_LETTER = { E: 'modE', T: 'modT', C: 'modC', G: 'modG' };

/**
 * Module questions carry no domain code in the answers file.
 * Each module has a default domain; listed IDs override it.
 */
const MODULE_DOMAIN_MAP = {
  modE: {
    default: 'migration',
    overrides: {
      threats: [302, 325, 327, 328, 329, 339, 340, 348],
      implementation: [313, 317, 331, 332, 344],
      foundations: [314],
      qkd: [345],
    },
  },
  modT: {
    default: 'implementation',
    overrides: {
      foundations: [356, 359, 392, 393, 396, 399],
      threats: [360],
      standards: [381, 382, 383, 384, 385, 386],
    },
  },
  modC: {
    default: 'threats',
    overrides: {
      implementation: [404, 405, 406, 407, 409, 410, 411, 412, 413, 416, 419, 420, 421, 422, 434, 435, 438],
      migration: [408, 430, 431, 433, 440, 441, 445],
    },
  },
  modG: {
    default: 'standards',
    overrides: {
      migration: [451, 452, 453, 454, 459, 460, 473, 476, 488, 493, 494],
    },
  },
};

const PRESET_COUNTS = new Set([10, 25, 50, 100]);
const ALLOWED_MODES = new Set(['exam', 'practice']);
const BANK_QUESTIONS_URL = './pqc-questions.md';
const BANK_ANSWERS_URL = './pqc-answers.md';
const MAX_BANK_BYTES = 5 * 1024 * 1024;
const MIN_QUESTION_COUNT = 1;
const MAX_QUESTION_COUNT = 526;
const NAME_MAX_LEN = 40;
const NAME_PATTERN = /^[\p{L}](?:[\p{L} '\-]{0,38}[\p{L}])?$/u;

/** Built-in fallback acronyms if Working Glossary is missing/incomplete. */
const FALLBACK_GLOSSARY = {
  PQC: 'Post-Quantum Cryptography',
  PQ: 'Post-Quantum',
  CRQC: 'Cryptanalytically Relevant Quantum Computer',
  KEM: 'Key-Encapsulation Mechanism',
  KDF: 'Key-Derivation Function',
  QKD: 'Quantum Key Distribution',
  QBER: 'Quantum Bit Error Rate',
  HNDL: 'Harvest Now, Decrypt Later',
  CBOM: 'Cryptography Bill of Materials',
  PKI: 'Public Key Infrastructure',
  CA: 'Certificate Authority',
  HSM: 'Hardware Security Module',
  CAVP: 'Cryptographic Algorithm Validation Program',
  CMVP: 'Cryptographic Module Validation Program',
  OTP: 'One-time pad',
  'IND-CCA': 'Indistinguishability under chosen-ciphertext attack',
  'ML-KEM': 'Module-Lattice-Based Key-Encapsulation Mechanism',
  'ML-DSA': 'Module-Lattice-Based Digital Signature Algorithm',
  'SLH-DSA': 'Stateless Hash-Based Digital Signature Algorithm',
  'FN-DSA': 'FN-DSA (Falcon-derived signature, standardization in progress)',
  HQC: 'Hamming Quasi-Cyclic KEM',
  AES: 'Advanced Encryption Standard',
  RSA: 'Rivest–Shamir–Adleman public-key cryptosystem',
  ECC: 'Elliptic-Curve Cryptography',
  ECDH: 'Elliptic-Curve Diffie–Hellman',
  ECDSA: 'Elliptic-Curve Digital Signature Algorithm',
  DH: 'Diffie–Hellman',
  TLS: 'Transport Layer Security',
  NIST: 'National Institute of Standards and Technology',
  FIPS: 'Federal Information Processing Standards',
  BB84: 'Bennett–Brassard 1984 QKD protocol',
  CQSP: 'Certified Quantum Security Professional',
  SSH: 'Secure Shell',
  IKE: 'Internet Key Exchange',
  IKEv2: 'Internet Key Exchange version 2',
  IPsec: 'Internet Protocol Security',
  HPKE: 'Hybrid Public Key Encryption',
  GCM: 'Galois/Counter Mode',
  'AES-GCM': 'AES in Galois/Counter Mode',
  HMAC: 'Hash-based Message Authentication Code',
  PSK: 'Pre-Shared Key',
  '0-RTT': 'Zero Round-Trip Time (early data)',
  HRR: 'HelloRetryRequest',
  KMS: 'Key Management Service',
  MFA: 'Multi-Factor Authentication',
  SaaS: 'Software as a Service',
  OT: 'Operational Technology',
  ICS: 'Industrial Control Systems',
  'M&A': 'Mergers and Acquisitions',
  NCSC: 'National Cyber Security Centre (UK)',
  NSA: 'National Security Agency (US)',
  EO: 'Executive Order',
  BSI: 'Bundesamt für Sicherheit in der Informationstechnik (German Federal Office for Information Security)',
  ANSSI: 'Agence nationale de la sécurité des systèmes d’information (French national cybersecurity agency)',
  ETSI: 'European Telecommunications Standards Institute',
  ISO: 'International Organization for Standardization',
  IEC: 'International Electrotechnical Commission',
  NIS2: 'EU Network and Information Security Directive 2',
  DORA: 'EU Digital Operational Resilience Act',
  GDPR: 'EU General Data Protection Regulation',
  'PCI DSS': 'Payment Card Industry Data Security Standard',
  IR: 'Interagency or Internal Report (NIST)',
  SP: 'Special Publication (NIST)',
  RFC: 'Request for Comments (IETF standard document)',
  IETF: 'Internet Engineering Task Force',
  'X.509': 'ITU-T public-key certificate standard',
  CRL: 'Certificate Revocation List',
  OCSP: 'Online Certificate Status Protocol',
  RNG: 'Random Number Generator',
  CSPRNG: 'Cryptographically Secure Pseudorandom Number Generator',
  SBOM: 'Software Bill of Materials',
};

const state = {
  bank: [],
  questionsText: '',
  answersText: '',
  glossary: { ...FALLBACK_GLOSSARY },
  selectedDomains: DOMAINS.map((d) => d.id),
  mock: 'shuffle',
  questionCount: 50,
  questionCountMode: 'preset', // 'preset' | 'custom'
  mode: 'exam',
  session: null,
  index: 0,
  revealed: false,
  timerId: null,
  loadInfo: { questions: 0, answers: 0, ready: 0, missingAnswers: 0 },
  loadSource: null, // 'fetch' | 'embedded' | null
  reviewItems: [],
  reviewFilterDomain: null,
  reviewFilterStatus: 'all',
  examReview: null,
};

const $ = (id) => document.getElementById(id);

function setText(el, value) {
  if (el) el.textContent = value == null ? '' : String(value);
}

function toExternalHttps(value) {
  try {
    const url = new URL(value);
    if (url.protocol === 'http:') url.protocol = 'https:';
    if (url.protocol !== 'https:') return '';
    return url.href;
  } catch (_err) {
    return '';
  }
}

function fillTextWithLinks(el, value) {
  if (!el) return;
  const text = value == null ? '' : String(value);
  const pattern = /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s)]+)/g;
  el.replaceChildren();
  let cursor = 0;
  let match;
  while ((match = pattern.exec(text))) {
    if (match.index > cursor) {
      el.appendChild(document.createTextNode(text.slice(cursor, match.index)));
    }
    const label = match[1] || match[3];
    const href = toExternalHttps(match[2] || match[3]);
    if (href) {
      const link = document.createElement('a');
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = label;
      el.appendChild(link);
    } else {
      el.appendChild(document.createTextNode(match[0]));
    }
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) {
    el.appendChild(document.createTextNode(text.slice(cursor)));
  }
}

function maxAvailableQuestions() {
  const pool = state.bank.filter((q) => state.selectedDomains.includes(q.domain));
  return Math.min(MAX_QUESTION_COUNT, pool.length || MAX_QUESTION_COUNT);
}

function validateQuestionCount(raw) {
  const max = Math.max(MIN_QUESTION_COUNT, maxAvailableQuestions());
  const value = Number(raw);
  if (!Number.isInteger(value)) {
    return { ok: false, count: state.questionCount, message: `Enter a whole number (1–${max}).` };
  }
  if (value < MIN_QUESTION_COUNT || value > max) {
    return { ok: false, count: value, message: `Choose between ${MIN_QUESTION_COUNT} and ${max}.` };
  }
  return { ok: true, count: value, message: `Will ask up to ${value} questions.` };
}

function syncCountUi() {
  const customRow = $('count-custom-row');
  const customInput = $('count-custom-input');
  const isCustomCount = state.questionCountMode === 'custom';
  customRow.classList.toggle('hidden', !isCustomCount);

  [...$('count-chips').querySelectorAll('button[data-count]')].forEach((el) => {
    const key = el.dataset.count;
    if (key === 'custom') {
      el.classList.toggle('active', isCustomCount);
    } else {
      el.classList.toggle('active', !isCustomCount && Number(key) === state.questionCount);
    }
  });

  if (isCustomCount) {
    const max = maxAvailableQuestions();
    customInput.max = String(max);
    customInput.min = String(MIN_QUESTION_COUNT);
    if (document.activeElement !== customInput) {
      customInput.value = String(state.questionCount);
    }
    const check = validateQuestionCount(customInput.value);
    const hint = $('count-custom-hint');
    setText(hint, check.ok ? `Available pool: ${max}.` : check.message);
    hint.classList.toggle('error', !check.ok);
    hint.classList.toggle('ok', check.ok);
  }
}

function validateCandidateName(raw) {
  const name = String(raw ?? '').trim().replace(/\s+/g, ' ');
  if (!name) {
    return { ok: false, name: '', message: 'Enter a candidate name.' };
  }
  if (name.length < 2 || name.length > NAME_MAX_LEN) {
    return { ok: false, name, message: `Name must be 2–${NAME_MAX_LEN} letters.` };
  }
  if (/\d/.test(name)) {
    return { ok: false, name, message: 'Numbers are not allowed in the name.' };
  }
  if (!NAME_PATTERN.test(name)) {
    return {
      ok: false,
      name,
      message: 'Use letters and spaces only (hyphen/apostrophe allowed).',
    };
  }
  return { ok: true, name, message: 'Name looks good.' };
}

function resolveDomainId(raw) {
  const normalized = String(raw || '').trim().toLowerCase();
  if (!normalized) return null;

  const byCode = DOMAIN_BY_CODE[normalized.toUpperCase()];
  if (byCode) return byCode;

  const byId = DOMAINS.find((d) => d.id === normalized);
  if (byId) return byId.id;

  if (normalized.includes('hands-on') || normalized.includes('virtual environment') || normalized.includes('practical implementation')) {
    return 'protocols';
  }
  if (normalized.includes('threat') || normalized.includes('risk')) return 'threats';
  if (normalized.includes('qkd') || normalized.includes('key distribution')) return 'qkd';
  if (normalized.includes('standard')) return 'standards';
  if (normalized.includes('migration')) return 'migration';
  if (normalized.includes('foundation')) return 'foundations';

  const byName = DOMAINS.find(
    (d) =>
      d.name.toLowerCase() === normalized ||
      d.name.toLowerCase().includes(normalized) ||
      normalized.includes(d.short.toLowerCase()),
  );
  return byName ? byName.id : null;
}

function domainLabel(id, short = true) {
  const found = DOMAINS.find((d) => d.id === id);
  if (!found) return id;
  return short ? `${found.icon} ${found.short}` : found.name;
}

function shuffle(items) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ---------------- PQC bank parsers ---------------- */

function parsePqcQuestions(markdown) {
  const text = markdown.replace(/\r\n/g, '\n');
  const questions = [];
  const sectionRe = /^##\s+(?:Mock Exam\s+([A-F])|Module\s+([A-Z])\s*:[^\n]*)\s*$/gim;
  let match;

  while ((match = sectionRe.exec(text))) {
    const mock = match[1] ? match[1].toUpperCase() : MODULE_ID_BY_LETTER[match[2].toUpperCase()];
    if (!mock) continue;
    const start = match.index + match[0].length;
    const nextHeading = text.slice(start).search(/^##\s/m);
    const end = nextHeading >= 0 ? start + nextHeading : text.length;
    questions.push(...parsePqcQuestionSection(text.slice(start, end), mock));
  }

  if (questions.length) return questions;

  // Domain-ordered study bank: each record is "### Q001" plus metadata, stem, and A–D.
  const study = parseStudyQuestionRecords(text);
  if (study.length) return study;

  // Fallback: old single-file format with embedded answers
  return parseLegacyBank(markdown);
}

function parsePqcQuestionSection(body, mock) {
  const blocks = body.split(/\n(?=\d+\.\s+\*\*Q\d{3}\b)/);
  const questions = [];

  blocks.forEach((block) => {
    // Format: 1. **Q001 · Applied**: Stem text...
    const header = block.match(
      /^\d+\.\s+\*\*(Q\d{3})\s*[·•\-–—]\s*([^*]+?)\*\*:\s*([\s\S]*?)(?=\n\s*-\s*\*\*[A-D]\.\*\*|$)/i,
    );
    if (!header) return;

    const id = header[1].toUpperCase();
    const difficulty = header[2].trim();
    let stem = header[3].replace(/\s+/g, ' ').trim();

    const choices = {};
    const choiceRe = /-\s*\*\*([A-D])\.\*\*\s*(.+)/g;
    let choiceMatch;
    while ((choiceMatch = choiceRe.exec(block))) {
      choices[choiceMatch[1]] = choiceMatch[2].replace(/\s+/g, ' ').trim();
    }

    if (!stem || !['A', 'B', 'C', 'D'].every((key) => choices[key])) return;

    questions.push({
      id,
      mock,
      difficulty,
      domain: null,
      stem,
      choices,
      answer: null,
      explanation: '',
      sourceFile: 'pqc-questions.md',
    });
  });

  return questions;
}

function parseStudyQuestionRecords(text) {
  const questions = [];
  const parts = text.split(/\n(?=### Q\d{3}\s*$)/m);

  parts.forEach((part) => {
    const header = part.match(/^### (Q\d{3})\s*\n/);
    if (!header) return;

    const id = header[1].toUpperCase();
    let body = part.slice(header[0].length);
    const sectionEnd = body.search(/\n## /);
    if (sectionEnd >= 0) body = body.slice(0, sectionEnd);

    const difficultyMatch = body.match(/^-\s+\*\*Difficulty:\*\*\s*(.+)$/m);
    const content = body
      .split('\n')
      .filter((line) => !/^-\s+\*\*(?:Domain|Subtopic|Subtopic name|Difficulty|Tags):\*\*/.test(line))
      .join('\n')
      .trim();

    const bits = content.split(/\n-\s+\*\*([A-D])\.\*\*\s+/);
    const stem = (bits[0] || '').replace(/\s+/g, ' ').trim();
    const choices = {};
    for (let i = 1; i + 1 < bits.length; i += 2) {
      choices[bits[i].toUpperCase()] = bits[i + 1].replace(/\s+/g, ' ').trim();
    }

    if (!stem || !['A', 'B', 'C', 'D'].every((key) => choices[key])) return;

    questions.push({
      id,
      mock: 'study',
      difficulty: difficultyMatch ? difficultyMatch[1].trim() : '',
      domain: null,
      stem,
      choices,
      answer: null,
      explanation: '',
      sourceFile: 'pqc-questions.md',
    });
  });

  return questions;
}

function moduleDomainFor(id, mock) {
  const config = MODULE_DOMAIN_MAP[mock];
  if (!config) return null;
  const num = Number(String(id).replace(/^Q/i, ''));
  const hit = Object.entries(config.overrides || {}).find(([, ids]) => ids.includes(num));
  return hit ? hit[0] : config.default;
}

function parsePqcAnswers(markdown) {
  const text = markdown.replace(/\r\n/g, '\n');
  const byId = {};

  // Compact key tables: | Q001 | D |
  const keyRe = /\|\s*(Q\d{3})\s*\|\s*([A-D])\s*(?=\|)/gi;
  let keyMatch;
  while ((keyMatch = keyRe.exec(text))) {
    const id = keyMatch[1].toUpperCase();
    byId[id] = byId[id] || {};
    byId[id].answer = keyMatch[2].toUpperCase();
  }

  // Explanations:
  //   Mocks:   1. **Q001: D** · M, Quantum-Safe Migration Strategy · Applied
  //   Modules: 1. **Q301: B** · Program launch and governance · Applied
  const explRe =
    /^\d+\.\s+\*\*(Q\d{3}):\s*([A-D])\*\*\s*·\s*([^\n·]+?)\s*·\s*([^\n]+?)\s*\n+([\s\S]*?)(?=^\d+\.\s+\*\*Q\d{3}:|^##\s|$)/gim;

  let explMatch;
  while ((explMatch = explRe.exec(text))) {
    const id = explMatch[1].toUpperCase();
    const answer = explMatch[2].toUpperCase();
    const label = explMatch[3].trim();
    const difficulty = explMatch[4].trim();
    const explanation = explMatch[5]
      .replace(/^Correct answer:\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();

    const coded = label.match(/^([FQRSMP])\s*,\s*(.+)$/);
    byId[id] = {
      answer,
      domain: coded ? resolveDomainId(coded[1]) || resolveDomainId(coded[2]) : null,
      topic: coded ? '' : label,
      difficulty,
      explanation,
    };
  }

  // Domain-ordered study bank: "### Q001" plus "**Correct answer:** D" and the explanation.
  const study = parseStudyAnswerRecords(text);
  Object.keys(study).forEach((id) => {
    const prev = byId[id] || {};
    const next = study[id];
    byId[id] = {
      answer: next.answer || prev.answer,
      domain: prev.domain || next.domain || null,
      topic: next.topic || prev.topic || '',
      difficulty: next.difficulty || prev.difficulty || '',
      explanation: next.explanation || prev.explanation || '',
    };
  });

  return byId;
}

function parseStudyAnswerRecords(text) {
  const byId = {};
  const parts = text.split(/\n(?=### Q\d{3}\s*$)/m);

  parts.forEach((part) => {
    const header = part.match(/^### (Q\d{3})\s*\n/);
    if (!header) return;

    const id = header[1].toUpperCase();
    let body = part.slice(header[0].length);
    const sectionEnd = body.search(/\n## /);
    if (sectionEnd >= 0) body = body.slice(0, sectionEnd);

    const answerMatch = body.match(/\*\*Correct answer:\*\*\s*([A-D])\b/i);
    if (!answerMatch) return;

    const difficultyMatch = body.match(/^-\s+\*\*Difficulty:\*\*\s*(.+)$/m);
    const topicMatch = body.match(/^-\s+\*\*Subtopic name:\*\*\s*(.+)$/m);
    let explanation = body.slice(answerMatch.index + answerMatch[0].length);
    explanation = explanation
      .replace(/^####\s+/gm, '')
      .replace(/^-\s+\*\*Reading focus:\*\*\s*/gm, 'Reading focus: ')
      .replace(/\s+/g, ' ')
      .trim();

    byId[id] = {
      answer: answerMatch[1].toUpperCase(),
      domain: null,
      topic: topicMatch ? topicMatch[1].trim() : '',
      difficulty: difficultyMatch ? difficultyMatch[1].trim() : '',
      explanation,
    };
  });

  return byId;
}

function shortenGlossaryMeaning(raw) {
  let text = String(raw || '')
    .split(/\s*\(\[/)[0]
    .replace(/\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Prefer the short label before the first colon when present,
  // unless it is only a context prefix like "In the performance questions:".
  const colon = text.indexOf(':');
  if (colon > 0 && /^In (the|this)\b/i.test(text)) {
    text = text.slice(colon + 1).trim();
    const semi = text.indexOf(';');
    if (semi > 0) text = text.slice(0, semi).trim();
  } else if (colon > 0 && colon < 80) {
    text = text.slice(0, colon).trim();
  } else {
    const semi = text.indexOf(';');
    if (semi > 0 && semi < 100) text = text.slice(0, semi).trim();
  }

  return text.replace(/\.$/, '');
}

const GLOSSARY_HEADINGS = [
  /^##\s+Working Glossary\s*$/im,
  /^##\s+Additional Acronyms and Technical Terms\s*$/im,
];

function parseGlossarySection(text, headingRe) {
  const start = text.search(headingRe);
  if (start < 0) return {};

  const rest = text.slice(start);
  const endMatch = rest.search(/\n##\s+/);
  const section = endMatch > 0 ? rest.slice(0, endMatch) : rest;
  const glossary = {};

  const rowRe = /^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/gm;
  let match;
  while ((match = rowRe.exec(section))) {
    const termCell = match[1].trim();
    const meaningCell = match[2].trim();
    if (/^Term$/i.test(termCell) || /^-+$/.test(termCell.replace(/\s/g, ''))) continue;

    const meaning = shortenGlossaryMeaning(meaningCell);
    if (!meaning) continue;

    // Cells like "PKI / CA" pair with "Public Key Infrastructure / Certificate Authority".
    const terms = termCell.split(/\s+\/\s+/).map((t) => t.trim()).filter(Boolean);
    const meanings = meaning.split(/\s+\/\s+/).map((m) => m.trim()).filter(Boolean);
    const paired = terms.length > 1 && meanings.length === terms.length;
    terms.forEach((term, i) => {
      glossary[term] = paired ? meanings[i] : meaning;
    });
  }

  return glossary;
}

function parseGlossary(markdown) {
  const text = markdown.replace(/\r\n/g, '\n');
  return GLOSSARY_HEADINGS.reduce(
    (acc, headingRe) => ({ ...acc, ...parseGlossarySection(text, headingRe) }),
    {},
  );
}

function rebuildGlossary() {
  const parsed = state.answersText ? parseGlossary(state.answersText) : {};
  state.glossary = { ...FALLBACK_GLOSSARY, ...parsed };
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function detectAcronymsInQuestion(question) {
  const haystack = [
    question.stem,
    ...Object.values(question.choices || {}),
  ].join('\n');

  const terms = Object.keys(state.glossary).sort((a, b) => b.length - a.length);
  const found = [];

  terms.forEach((term) => {
    const pattern = new RegExp(`(^|[^A-Za-z0-9])${escapeRegExp(term)}([^A-Za-z0-9]|$)`);
    if (pattern.test(haystack)) {
      found.push({ term, meaning: state.glossary[term] });
    }
  });

  return found;
}

function renderAcronymStrip(question) {
  const box = $('q-acronyms');
  if (!box) return;

  const hits = detectAcronymsInQuestion(question);
  if (!hits.length) {
    box.classList.add('hidden');
    box.replaceChildren();
    return;
  }

  box.classList.remove('hidden');
  box.replaceChildren();
  hits.forEach((item) => {
    const span = document.createElement('span');
    span.className = 'acronym-item';
    const strong = document.createElement('strong');
    strong.textContent = item.term;
    span.append(strong, document.createTextNode(` — ${item.meaning}`));
    box.appendChild(span);
  });
}

function mergeBank(questions, answersById) {
  let ready = 0;
  let missingAnswers = 0;

  const bank = questions.map((q) => {
    const ans = answersById[q.id];
    if (!ans || !ans.answer) {
      missingAnswers += 1;
      return { ...q };
    }
    ready += 1;
    return {
      ...q,
      answer: ans.answer,
      domain: (typeof window !== 'undefined' && window.PQC_DOMAIN_BY_ID && window.PQC_DOMAIN_BY_ID[q.id])
        || ans.domain
        || moduleDomainFor(q.id, q.mock)
        || q.domain,
      topic: ans.topic || '',
      difficulty: ans.difficulty || q.difficulty,
      explanation: ans.explanation || '',
    };
  });

  return {
    bank: bank.filter((q) => q.answer && q.domain),
    ready,
    missingAnswers,
    totalQuestions: questions.length,
    totalAnswers: Object.keys(answersById).length,
  };
}

function rebuildBank() {
  rebuildGlossary();

  if (!state.questionsText || !state.answersText) {
    state.bank = [];
    state.loadInfo = { questions: 0, answers: 0, ready: 0, missingAnswers: 0 };
    renderDomains();
    updateReady();
    return;
  }

  const questions = parsePqcQuestions(state.questionsText);
  const answers = parsePqcAnswers(state.answersText);
  const merged = mergeBank(questions, answers);

  state.bank = merged.bank;
  state.loadInfo = {
    questions: merged.totalQuestions,
    answers: merged.totalAnswers,
    ready: merged.ready,
    missingAnswers: merged.missingAnswers,
  };

  renderDomains();
  updateReady();
}

/* ---------------- Legacy / sample parsers (kept as fallback) ---------------- */

function parseLegacyBank(markdown) {
  // Minimal support for older sample banks in data/questions
  const defaultDomain = extractDefaultDomain(markdown);
  const blocks = markdown.replace(/\r\n/g, '\n').split(/\n(?=#{2,3}\s*(?:Q)?\d+)/);
  const questions = [];

  blocks.forEach((block, index) => {
    const idMatch = block.match(/^#{2,3}\s*((?:Q)?\d+)/i);
    const answerMatch = block.match(/\*\*Answer:\s*([A-D])\*\*/i);
    if (!answerMatch || !defaultDomain) return;
    const choices = {};
    const choiceRe = /^([A-D])\.\s+(.+)$/gm;
    let m;
    while ((m = choiceRe.exec(block))) choices[m[1]] = m[2].trim();
    if (!['A', 'B', 'C', 'D'].every((k) => choices[k])) return;
    const stem = block
      .replace(/^#{2,3}.+$/m, '')
      .replace(/^[A-D]\.\s+.+$/gm, '')
      .replace(/\*\*Answer:[\s\S]*$/i, '')
      .replace(/\*\*Explanation:[\s\S]*$/i, '')
      .replace(/\s+/g, ' ')
      .trim();
    const rawId = (idMatch ? idMatch[1] : `Q${index + 1}`).replace(/^Q/i, 'Q');
    questions.push({
      id: rawId.startsWith('Q') ? rawId : `Q${rawId}`,
      mock: 'custom',
      domain: defaultDomain,
      stem,
      choices,
      answer: answerMatch[1].toUpperCase(),
      explanation: '',
      sourceFile: 'legacy',
    });
  });

  return questions;
}

function extractDefaultDomain(markdown) {
  const heading = markdown.match(/^#\s*Domain:\s*(.+)$/im);
  if (heading) return resolveDomainId(heading[1]);
  const field = markdown.match(/^domain:\s*(.+)$/im);
  if (field) return resolveDomainId(field[1]);
  return null;
}

/* ---------------- Sampling ---------------- */

function countByDomain(questions) {
  const counts = {};
  DOMAINS.forEach((d) => { counts[d.id] = 0; });
  questions.forEach((q) => { counts[q.domain] = (counts[q.domain] || 0) + 1; });
  return counts;
}

function sampleCustom(pool, count, selectedDomains) {
  const domains = (selectedDomains || []).filter((id) => DOMAINS.some((d) => d.id === id));
  if (!domains.length) return [];
  const byDomain = {};
  domains.forEach((domain) => {
    byDomain[domain] = shuffle(pool.filter((q) => q.domain === domain));
  });

  const available = domains.reduce((sum, domain) => sum + byDomain[domain].length, 0);
  const target = Math.min(count, available);
  if (!target) return [];

  const quotas = {};
  const order = shuffle(domains.slice());
  const base = Math.floor(target / order.length);
  let remaining = target;
  order.forEach((id) => {
    const take = Math.min(byDomain[id].length, base);
    quotas[id] = take;
    remaining -= take;
  });
  while (remaining > 0) {
    const room = order.filter((id) => quotas[id] < byDomain[id].length);
    if (!room.length) break;
    room.forEach((id) => {
      if (remaining <= 0 || quotas[id] >= byDomain[id].length) return;
      quotas[id] += 1;
      remaining -= 1;
    });
  }

  const picked = [];
  domains.forEach((domain) => {
    picked.push(...byDomain[domain].slice(0, quotas[domain] || 0));
  });

  if (picked.length < target) {
    const ids = new Set(picked.map((q) => q.id));
    const leftovers = shuffle(pool.filter((q) => domains.includes(q.domain) && !ids.has(q.id)));
    picked.push(...leftovers.slice(0, target - picked.length));
  }

  return shuffle(picked).slice(0, target);
}

function mockLabelText() {
  return 'Shuffle';
}

function buildExamQuestions() {
  return sampleCustom(state.bank, state.questionCount, state.selectedDomains);
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function examDurationMs(questionCount, mode) {
  if (mode === 'practice') return 0;
  return Math.round((questionCount / 50) * 60 * 60 * 1000);
}

/* ---------------- UI ---------------- */

function showScreen(name) {
  ['setup', 'exam', 'results', 'about'].forEach((key) => {
    $(`screen-${key}`).classList.toggle('hidden', key !== name);
  });
}

function renderDomains() {
  const counts = countByDomain(state.bank);
  const list = $('domain-list');
  list.replaceChildren();

  DOMAINS.forEach((domain) => {
    const checked = state.selectedDomains.includes(domain.id);
    const label = document.createElement('label');
    label.className = checked ? 'domain on' : 'domain';
    label.title = domain.name;

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = checked;
    input.dataset.domain = domain.id;

    const icon = document.createElement('span');
    icon.className = 'domain-icon';
    icon.textContent = domain.icon;
    icon.setAttribute('aria-hidden', 'true');

    const body = document.createElement('span');
    body.className = 'domain-text';
    const strong = document.createElement('strong');
    strong.textContent = domain.short;
    const small = document.createElement('small');
    small.textContent = `${domain.code} · ${counts[domain.id] || 0} in bank`;
    body.append(strong, small);

    input.addEventListener('change', () => {
      if (state.selectedDomains.includes(domain.id)) {
        state.selectedDomains = state.selectedDomains.filter((id) => id !== domain.id);
      } else {
        state.selectedDomains.push(domain.id);
      }
      renderDomains();
      updateReady();
    });

    label.append(input, icon, body);
    list.appendChild(label);
  });
}

function updateReady() {
  const mockPool = state.bank.filter((q) => state.selectedDomains.includes(q.domain));

  const countCheck = validateQuestionCount(
    state.questionCountMode === 'custom'
      ? $('count-custom-input').value
      : state.questionCount,
  );

  if (countCheck.ok) {
    state.questionCount = countCheck.count;
  }

  const willAsk = Math.min(state.questionCount, mockPool.length);

  const nameCheck = validateCandidateName($('candidate-name').value);
  const nameStatus = $('name-status');
  setText(nameStatus, nameCheck.message);
  nameStatus.classList.toggle('error', !nameCheck.ok && Boolean($('candidate-name').value.trim()));
  nameStatus.classList.toggle('ok', nameCheck.ok);

  syncCountUi();

  const canStart = nameCheck.ok
    && countCheck.ok
    && state.selectedDomains.length > 0
    && willAsk > 0
    && state.bank.length > 0;
  $('start-btn').disabled = !canStart;

  if (!state.questionsText || !state.answersText) {
    setText($('bank-status'), 'Built-in bank not loaded');
    setText(
      $('ready-status'),
      'Could not load bank. Use a local server, or run build-bank.ps1 then reopen index.html.',
    );
  } else {
    const sourceNote = state.loadSource === 'embedded' ? ' · offline embed' : '';
    setText(
      $('bank-status'),
      `${state.loadInfo.ready} ready / ${state.loadInfo.questions} Q · ${state.loadInfo.answers} A${sourceNote}`,
    );
    setText(
      $('mock-hint'),
      `Shuffle: an equal share from each checked domain, drawn at random from all ${state.bank.length} questions.`,
    );
    setText(
      $('ready-status'),
      state.selectedDomains.length
        ? `${mockPool.length} available · ask ${willAsk}`
        : 'Select at least one domain',
    );
  }
}

async function fetchBankFile(url) {
  const response = await fetch(url, { method: 'GET', credentials: 'same-origin', cache: 'no-store' });
  if (!response.ok) throw new Error(`Failed to load ${url}`);
  const lengthHeader = response.headers.get('content-length');
  if (lengthHeader && Number(lengthHeader) > MAX_BANK_BYTES) {
    throw new Error(`Bank file too large: ${url}`);
  }
  const text = await response.text();
  if (text.length > MAX_BANK_BYTES) {
    throw new Error(`Bank file too large: ${url}`);
  }
  return text;
}

function applyBankTexts(questionsText, answersText, source) {
  if (typeof questionsText !== 'string' || typeof answersText !== 'string') {
    return false;
  }
  if (!questionsText.trim() || !answersText.trim()) {
    return false;
  }
  if (questionsText.length > MAX_BANK_BYTES || answersText.length > MAX_BANK_BYTES) {
    return false;
  }
  state.questionsText = questionsText;
  state.answersText = answersText;
  state.loadSource = source;
  rebuildBank();
  return state.bank.length > 0;
}

function loadEmbeddedBank() {
  const embedded = typeof window !== 'undefined' ? window.PQC_EMBEDDED_BANK : null;
  if (!embedded) return false;
  return applyBankTexts(embedded.questions, embedded.answers, 'embedded');
}

async function tryAutoLoad() {
  setText($('bank-status'), 'Loading built-in question bank…');
  try {
    const [questionsText, answersText] = await Promise.all([
      fetchBankFile(BANK_QUESTIONS_URL),
      fetchBankFile(BANK_ANSWERS_URL),
    ]);
    if (!applyBankTexts(questionsText, answersText, 'fetch')) {
      throw new Error('Parsed bank was empty');
    }
  } catch (_err) {
    if (loadEmbeddedBank()) {
      return;
    }
    state.questionsText = '';
    state.answersText = '';
    state.bank = [];
    state.loadSource = null;
    setText($('bank-status'), 'Failed to load built-in bank files');
    updateReady();
  }
}

function startExam() {
  const nameCheck = validateCandidateName($('candidate-name').value);
  if (!nameCheck.ok) {
    updateReady();
    $('candidate-name').focus();
    return;
  }
  if (!state.selectedDomains.length) {
    updateReady();
    return;
  }
  const countCheck = validateQuestionCount(
    state.questionCountMode === 'custom'
      ? $('count-custom-input').value
      : state.questionCount,
  );
  if (!ALLOWED_MODES.has(state.mode) || !countCheck.ok) {
    alert('Invalid exam settings.');
    updateReady();
    return;
  }
  state.questionCount = countCheck.count;
  state.mock = 'shuffle';

  const questions = buildExamQuestions();
  if (!questions.length) {
    alert('No questions available for this selection.');
    return;
  }

  const incomplete = questions.filter((q) => !q.answer);
  if (incomplete.length) {
    alert('Question bank is incomplete. Edit pqc-answers.md in the project folder.');
    return;
  }

  const answers = {};
  const flagged = {};
  questions.forEach((q) => {
    answers[q.id] = null;
    flagged[q.id] = false;
  });

  state.session = {
    candidateName: nameCheck.name,
    mode: state.mode,
    mock: state.mock,
    questions,
    answers,
    flagged,
    startedAt: Date.now(),
    durationMs: examDurationMs(questions.length, state.mode),
  };
  state.index = 0;
  state.revealed = false;
  state.examReview = null;
  closeEndReview();

  showScreen('exam');
  renderExam();
  startTimer();
}

function startTimer() {
  if (state.timerId) clearInterval(state.timerId);
  const session = state.session;
  if (!session || !session.durationMs) {
    $('exam-timer').textContent = 'Practice';
    $('exam-timer').classList.remove('warn');
    return;
  }

  const tick = () => {
    const left = Math.max(0, session.durationMs - (Date.now() - session.startedAt));
    $('exam-timer').textContent = formatDuration(left);
    $('exam-timer').classList.toggle('warn', left < 5 * 60 * 1000);
    if (left === 0) {
      clearInterval(state.timerId);
      state.timerId = null;
      submitExam();
    }
  };

  tick();
  state.timerId = setInterval(tick, 500);
}

function renderExam() {
  const session = state.session;
  const question = session.questions[state.index];
  const selected = session.answers[question.id];

  const mockLabel = mockLabelText(session.mock);
  $('exam-name').textContent = `${session.candidateName} · ${mockLabel}`;
  $('exam-progress').textContent = `${question.id} · ${state.index + 1} / ${session.questions.length}`;
  $('exam-domain').textContent = domainLabel(question.domain);
  $('exam-domain').title = domainLabel(question.domain, false);
  $('exam-fill').style.width = `${((state.index + 1) / session.questions.length) * 100}%`;
  setText($('q-stem'), question.stem);

  const choices = $('q-choices');
  choices.replaceChildren();
  ['A', 'B', 'C', 'D'].forEach((key) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice';
    if (session.mode === 'practice' && state.revealed && selected) {
      if (key === question.answer) btn.classList.add('correct');
      else if (key === selected) btn.classList.add('wrong');
    } else if (selected === key) {
      btn.classList.add('selected');
    }
    const keyEl = document.createElement('span');
    keyEl.className = 'key';
    keyEl.textContent = key;
    const textEl = document.createElement('span');
    textEl.textContent = question.choices[key];
    btn.append(keyEl, textEl);
    btn.addEventListener('click', () => {
      session.answers[question.id] = key;
      state.revealed = false;
      renderExam();
    });
    choices.appendChild(btn);
  });

  const explanation = $('q-explanation');
  if (session.mode === 'practice' && state.revealed && selected && question.explanation) {
    fillTextWithLinks(explanation, question.explanation);
    explanation.classList.remove('hidden');
  } else {
    explanation.classList.add('hidden');
  }

  renderAcronymStrip(question);

  const isFirst = state.index === 0;
  const isLast = state.index >= session.questions.length - 1;
  $('prev-btn').disabled = isFirst;
  $('next-btn').disabled = isLast;
  $('next-btn').textContent = isLast ? 'Last question' : 'Next →';
  $('next-btn').title = isLast
    ? 'This is the last question. Use End Exam when you are ready.'
    : 'Go to the next question';
  $('flag-btn').textContent = session.flagged[question.id] ? 'Flagged' : 'Flag';
  $('flag-btn').classList.toggle('active', !!session.flagged[question.id]);
  $('check-btn').classList.toggle('hidden', session.mode !== 'practice');
  $('check-btn').disabled = !selected;

  const answered = Object.values(session.answers).filter((v) => v).length;
  const flaggedCount = Object.values(session.flagged).filter(Boolean).length;
  const unanswered = session.questions.length - answered;
  $('answer-count').textContent =
    `Answered ${answered}/${session.questions.length}` +
    (unanswered ? ` · Unanswered ${unanswered}` : '') +
    (flaggedCount ? ` · Flagged ${flaggedCount}` : '');

  const map = $('q-map');
  map.replaceChildren();
  session.questions.forEach((item, i) => {
    const hasAnswer = !!session.answers[item.id];
    const isFlagged = !!session.flagged[item.id];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = String(i + 1);
    btn.title = [
      item.id,
      hasAnswer ? 'Answered' : 'Unanswered',
      isFlagged ? 'Flagged' : '',
    ].filter(Boolean).join(' · ');
    btn.setAttribute('aria-label', btn.title);
    btn.className = [
      i === state.index ? 'current' : '',
      hasAnswer ? 'answered' : 'unanswered',
      isFlagged ? 'flagged' : '',
    ].filter(Boolean).join(' ');
    btn.addEventListener('click', () => {
      state.index = i;
      state.revealed = false;
      renderExam();
    });
    map.appendChild(btn);
  });

  renderExamReviewBar();
}

function reviewIndexes(kind) {
  const session = state.session;
  if (!session) return [];
  return session.questions
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => (
      kind === 'flagged' ? !!session.flagged[q.id] : !session.answers[q.id]
    ))
    .map(({ i }) => i);
}

function renderExamReviewBar() {
  const bar = $('exam-review-bar');
  const kind = state.examReview;
  const indexes = kind ? reviewIndexes(kind) : [];
  if (!kind || !indexes.length) {
    state.examReview = null;
    bar.classList.add('hidden');
    return;
  }
  bar.classList.remove('hidden');
  const pos = indexes.indexOf(state.index);
  const label = kind === 'flagged' ? 'Flagged' : 'Unanswered';
  $('exam-review-label').textContent =
    `${label} ${pos >= 0 ? pos + 1 : '—'} of ${indexes.length}`;
  $('exam-review-prev').disabled = !indexes.some((i) => i < state.index);
  $('exam-review-next').disabled = !indexes.some((i) => i > state.index);
}

function stepExamReview(direction) {
  const indexes = reviewIndexes(state.examReview);
  if (!indexes.length) {
    state.examReview = null;
    renderExam();
    return;
  }
  const pos = indexes.indexOf(state.index);
  let next;
  if (pos === -1) {
    next = indexes.find((i) => (direction > 0 ? i > state.index : i < state.index));
    if (next == null) next = indexes[direction > 0 ? 0 : indexes.length - 1];
  } else {
    next = indexes[pos + direction];
  }
  if (next == null) return;
  state.index = next;
  state.revealed = false;
  renderExam();
}

function jumpToQuestion(index, reviewKind) {
  closeEndReview();
  state.examReview = reviewKind || state.examReview;
  state.index = index;
  state.revealed = false;
  renderExam();
}

function fillEndReviewList(container, indexes, kind) {
  container.replaceChildren();
  if (!indexes.length) {
    const empty = document.createElement('p');
    empty.className = 'status';
    empty.textContent = 'None';
    container.appendChild(empty);
    return;
  }
  indexes.forEach((i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = String(i + 1);
    btn.className = kind === 'flagged' ? 'flagged' : 'unanswered';
    btn.addEventListener('click', () => jumpToQuestion(i, kind));
    container.appendChild(btn);
  });
}

function closeEndReview() {
  const dialog = $('end-review');
  if (dialog) dialog.classList.add('hidden');
}

function openEndReview() {
  const session = state.session;
  if (!session) return;
  const unanswered = reviewIndexes('unanswered');
  const flagged = reviewIndexes('flagged');
  const answered = session.questions.length - unanswered.length;
  $('end-review-summary').textContent =
    `Answered ${answered}/${session.questions.length}. ` +
    'Open an unanswered or flagged question, or end the exam.';
  $('end-unanswered-label').textContent = `Unanswered (${unanswered.length})`;
  $('end-flagged-label').textContent = `Flagged (${flagged.length})`;
  fillEndReviewList($('end-unanswered-list'), unanswered, 'unanswered');
  fillEndReviewList($('end-flagged-list'), flagged, 'flagged');
  $('review-unanswered-btn').disabled = unanswered.length === 0;
  $('review-flagged-btn').disabled = flagged.length === 0;
  $('end-review').classList.remove('hidden');
  const focusTarget = unanswered.length
    ? $('review-unanswered-btn')
    : flagged.length
      ? $('review-flagged-btn')
      : $('cancel-end-btn');
  focusTarget.focus();
}

function requestEndExam() {
  if (!state.session) return;
  openEndReview();
}

function submitExam() {
  closeEndReview();
  state.examReview = null;
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }

  const session = state.session;
  let correct = 0;
  let unanswered = 0;
  const perDomain = {};
  const reviewed = [];

  DOMAINS.forEach((d) => { perDomain[d.id] = { correct: 0, total: 0 }; });

  session.questions.forEach((q) => {
    perDomain[q.domain].total += 1;
    const selected = session.answers[q.id] || null;
    let status = 'wrong';
    if (!selected) {
      status = 'unanswered';
      unanswered += 1;
    } else if (selected === q.answer) {
      status = 'correct';
      correct += 1;
      perDomain[q.domain].correct += 1;
    }
    reviewed.push({ question: q, selected, status });
  });

  const total = session.questions.length;
  const scorePercent = total ? Math.round((correct / total) * 1000) / 10 : 0;
  const passed = scorePercent >= PASS_PERCENT;
  const points = correct * 2;

  const domainRows = DOMAINS.map((domain) => {
    const stats = perDomain[domain.id];
    if (!stats.total) return null;
    const percent = Math.round((stats.correct / stats.total) * 1000) / 10;
    return { ...domain, ...stats, percent };
  }).filter(Boolean);

  $('result-name').textContent = session.candidateName;
  $('result-score').textContent = `${scorePercent}%`;
  $('result-title').textContent = passed ? 'PASS' : 'FAIL';
  const wrong = total - correct - unanswered;
  $('result-summary').textContent =
    `${correct}/${total} correct` +
    ` · ${wrong} wrong · ${unanswered} unanswered` +
    (total === 50 ? ` · ${points}/100 pts` : '') +
    ` · pass mark ${PASS_PERCENT}%`;
  $('result-verdict-note').textContent = passed
    ? 'You reached the pass mark. Keep drilling weaker domains to stay ready.'
    : `Below ${PASS_PERCENT}%. Focus on the weak domains below, then try another exam.`;

  const hero = $('score-hero');
  hero.classList.toggle('is-pass', passed);
  hero.classList.toggle('is-fail', !passed);

  const mockLabel = mockLabelText(session.mock);
  const pills = $('result-pills');
  pills.replaceChildren();
  const passPill = document.createElement('span');
  passPill.className = `pill ${passed ? 'pass' : 'fail'}`;
  passPill.textContent = passed ? 'Pass' : 'Fail';
  const metaPill = document.createElement('span');
  metaPill.className = 'pill';
  metaPill.textContent = `${mockLabel} · ${session.mode === 'exam' ? 'Exam' : 'Practice'} · ${formatDuration(Date.now() - session.startedAt)}`;
  pills.append(passPill, metaPill);

  state.reviewItems = reviewed;
  state.reviewFilterDomain = null;
  state.reviewFilterStatus = 'all';

  const insights = $('domain-insights');
  insights.replaceChildren();
  if (domainRows.length) {
    const ranked = [...domainRows].sort((a, b) => b.percent - a.percent || b.correct - a.correct);
    const strongCut = 80;
    const weakCut = 60;
    const strengths = ranked.filter((row) => row.percent >= strongCut);
    const weaknesses = [...ranked].reverse().filter((row) => row.percent < weakCut);

    const strongText = strengths.length
      ? strengths.map((row) => row.short).join(', ')
      : ranked[0].short;
    const weakText = weaknesses.length
      ? weaknesses.map((row) => row.short).join(', ')
      : ranked[ranked.length - 1].short;

    const strongLine = document.createElement('p');
    strongLine.className = 'insight-line';
    const strongLabel = document.createElement('strong');
    strongLabel.className = 'tag-strong';
    strongLabel.textContent = 'Strengths:';
    strongLine.append(
      strongLabel,
      document.createTextNode(
        ` ${strongText}${strengths.length ? '' : ` (best area at ${ranked[0].percent}%)`}`,
      ),
    );

    const weakLine = document.createElement('p');
    weakLine.className = 'insight-line';
    const weakLabel = document.createElement('strong');
    weakLabel.className = 'tag-weak';
    weakLabel.textContent = 'Weaknesses:';
    weakLine.append(
      weakLabel,
      document.createTextNode(
        ` ${weakText}${weaknesses.length ? '' : ranked.length > 1 ? ` (lowest at ${ranked[ranked.length - 1].percent}%)` : ''}`,
      ),
    );

    insights.append(strongLine, weakLine);
  }

  renderDomainScoreCards(domainRows);
  renderReviewList();
  showScreen('results');
}

function getResultDomainRows() {
  if (!state.session) return [];
  return DOMAINS.map((domain) => {
    const asked = state.session.questions.filter((q) => q.domain === domain.id);
    if (!asked.length) return null;
    const correct = asked.filter((q) => state.session.answers[q.id] === q.answer).length;
    const percent = Math.round((correct / asked.length) * 1000) / 10;
    return { ...domain, correct, total: asked.length, percent };
  }).filter(Boolean);
}

function renderDomainScoreCards(domainRows) {
  const grid = $('score-grid');
  grid.replaceChildren();

  domainRows.forEach((row) => {
    const missedCount = state.reviewItems.filter(
      (item) => item.question.domain === row.id && item.status !== 'correct',
    ).length;
    const active = state.reviewFilterDomain === row.id;
    const card = document.createElement('button');
    card.type = 'button';
    card.className = active ? 'score-card clickable active' : 'score-card clickable';
    card.title = `Review ${row.short} (${missedCount} to review)`;
    card.setAttribute('aria-pressed', active ? 'true' : 'false');

    const h3 = document.createElement('h3');
    h3.textContent = `${row.icon} ${row.short}`;
    const line = document.createElement('p');
    line.className = 'score-line';
    line.append(document.createTextNode(`${row.correct}/${row.total}`));
    const pct = document.createElement('span');
    pct.textContent = `${row.percent}%`;
    line.appendChild(pct);

    const track = document.createElement('div');
    track.className = 'track';
    const fill = document.createElement('div');
    fill.className = 'fill';
    fill.style.width = `${Math.max(0, Math.min(100, row.percent))}%`;
    track.appendChild(fill);

    const meta = document.createElement('p');
    meta.className = 'score-meta';
    meta.textContent = `${missedCount} to review`;

    card.append(h3, line, track, meta);
    card.addEventListener('click', () => {
      state.reviewFilterDomain =
        state.reviewFilterDomain === row.id ? null : row.id;
      renderDomainScoreCards(domainRows);
      renderReviewList();
    });
    grid.appendChild(card);
  });
}

const REVIEW_FILTERS = new Set(['all', 'correct', 'wrong', 'unanswered', 'missed']);

function reviewItemsMatching() {
  const domain = state.reviewFilterDomain;
  const status = state.reviewFilterStatus;
  return state.reviewItems.filter((item) => {
    if (domain && item.question.domain !== domain) return false;
    if (status === 'correct') return item.status === 'correct';
    if (status === 'wrong') return item.status === 'wrong';
    if (status === 'unanswered') return item.status === 'unanswered';
    if (status === 'missed') return item.status !== 'correct';
    return true;
  });
}

function renderReviewList() {
  const missedList = $('missed-list');
  const clearBtn = $('review-clear-btn');
  const title = $('review-title');
  const filter = state.reviewFilterDomain;

  [...$('review-filters').querySelectorAll('button[data-review]')].forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.review === state.reviewFilterStatus);
  });

  const items = reviewItemsMatching();

  setText(title, filter ? `Review · ${domainLabel(filter)}` : 'Review');
  clearBtn.classList.toggle('hidden', !filter);

  missedList.replaceChildren();

  if (!items.length) {
    const p = document.createElement('p');
    p.className = 'status';
    const scope = filter ? ` in ${domainLabel(filter)}` : '';
    const empty = {
      all: 'No questions in this view.',
      correct: `No correct answers${scope}.`,
      wrong: `No wrong answers${scope}.`,
      unanswered: `No skipped questions${scope}.`,
      missed: `No wrong or skipped questions${scope}.`,
    };
    p.textContent = empty[state.reviewFilterStatus] || empty.all;
    missedList.appendChild(p);
    return;
  }

  items.forEach(({ question, selected, status }) => {
    const item = document.createElement('article');
    item.className = `missed-item is-${status}`;

    const tag = document.createElement('p');
    tag.className = 'domain-tag';
    tag.textContent = `${question.id} · ${domainLabel(question.domain)}` +
      (question.topic ? ` · ${question.topic}` : '');

    const verdict = document.createElement('p');
    verdict.className = `review-verdict is-${status}`;
    const yours = document.createElement('strong');
    yours.textContent = selected ? `Your answer: ${selected}` : 'Not answered';
    const correctLabel = document.createElement('span');
    correctLabel.textContent = `Correct: ${question.answer}`;
    verdict.append(yours, correctLabel);

    const stem = document.createElement('p');
    stem.className = 'review-stem';
    stem.textContent = question.stem;

    const choices = document.createElement('div');
    choices.className = 'review-choices';
    ['A', 'B', 'C', 'D'].forEach((key) => {
      const row = document.createElement('div');
      row.className = 'review-choice';
      if (key === question.answer) row.classList.add('is-correct');
      if (selected && key === selected && selected !== question.answer) row.classList.add('is-wrong');
      if (selected && key === selected && selected === question.answer) row.classList.add('is-yours');

      const keyEl = document.createElement('span');
      keyEl.className = 'key';
      keyEl.textContent = key;
      const textEl = document.createElement('span');
      textEl.className = 'review-text';
      textEl.textContent = question.choices[key];
      row.append(keyEl, textEl);

      if (key === question.answer || selected === key) {
        const mark = document.createElement('span');
        mark.className = 'review-mark';
        if (key === question.answer && selected === key) mark.textContent = 'Your answer · Correct';
        else if (key === question.answer) mark.textContent = 'Correct';
        else mark.textContent = 'Your answer';
        row.appendChild(mark);
      }
      choices.appendChild(row);
    });

    item.append(tag, verdict, stem, choices);

    if (question.explanation) {
      const explanation = document.createElement('p');
      explanation.className = 'explanation';
      fillTextWithLinks(explanation, question.explanation);
      item.appendChild(explanation);
    }

    missedList.appendChild(item);
  });
}

function bindUi() {
  renderDomains();
  updateReady();

  $('candidate-name').addEventListener('input', updateReady);

  $('count-chips').addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-count]');
    if (!btn) return;
    const key = btn.dataset.count;
    if (key === 'custom') {
      state.questionCountMode = 'custom';
      const parsed = validateQuestionCount($('count-custom-input').value || state.questionCount);
      if (parsed.ok) state.questionCount = parsed.count;
      $('count-custom-input').focus();
    } else {
      const count = Number(key);
      if (!PRESET_COUNTS.has(count)) return;
      state.questionCountMode = 'preset';
      state.questionCount = count;
    }
    updateReady();
  });

  $('count-custom-input').addEventListener('input', () => {
    if (state.questionCountMode !== 'custom') return;
    const parsed = validateQuestionCount($('count-custom-input').value);
    if (parsed.ok) state.questionCount = parsed.count;
    updateReady();
  });

  $('mode-chips').addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-mode]');
    if (!btn) return;
    const mode = btn.dataset.mode;
    if (!ALLOWED_MODES.has(mode)) return;
    state.mode = mode;
    [...$('mode-chips').children].forEach((el) => el.classList.toggle('active', el === btn));
  });

  $('select-all-domains').addEventListener('click', () => {
    state.selectedDomains = DOMAINS.map((d) => d.id);
    renderDomains();
    updateReady();
  });
  $('clear-domains').addEventListener('click', () => {
    state.selectedDomains = [];
    renderDomains();
    updateReady();
  });

  $('about-btn').addEventListener('click', () => showScreen('about'));
  $('about-back-btn').addEventListener('click', () => showScreen('setup'));
  $('review-clear-btn').addEventListener('click', () => {
    state.reviewFilterDomain = null;
    renderDomainScoreCards(getResultDomainRows());
    renderReviewList();
  });
  $('review-filters').addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-review]');
    if (!btn) return;
    const status = btn.dataset.review;
    if (!REVIEW_FILTERS.has(status)) return;
    state.reviewFilterStatus = status;
    renderReviewList();
  });
  $('start-btn').addEventListener('click', startExam);
  $('prev-btn').addEventListener('click', () => {
    state.index = Math.max(0, state.index - 1);
    state.revealed = false;
    renderExam();
  });
  $('next-btn').addEventListener('click', () => {
    state.index = Math.min(state.session.questions.length - 1, state.index + 1);
    state.revealed = false;
    renderExam();
  });
  $('flag-btn').addEventListener('click', () => {
    const q = state.session.questions[state.index];
    state.session.flagged[q.id] = !state.session.flagged[q.id];
    renderExam();
  });
  $('check-btn').addEventListener('click', () => {
    state.revealed = true;
    renderExam();
  });
  $('submit-btn').addEventListener('click', requestEndExam);
  $('cancel-end-btn').addEventListener('click', closeEndReview);
  $('confirm-end-btn').addEventListener('click', submitExam);
  $('review-unanswered-btn').addEventListener('click', () => {
    const indexes = reviewIndexes('unanswered');
    if (indexes.length) jumpToQuestion(indexes[0], 'unanswered');
  });
  $('review-flagged-btn').addEventListener('click', () => {
    const indexes = reviewIndexes('flagged');
    if (indexes.length) jumpToQuestion(indexes[0], 'flagged');
  });
  $('exam-review-prev').addEventListener('click', () => stepExamReview(-1));
  $('exam-review-next').addEventListener('click', () => stepExamReview(1));
  $('exam-review-stop').addEventListener('click', () => {
    state.examReview = null;
    renderExam();
  });
  $('end-review').addEventListener('click', (event) => {
    if (event.target === $('end-review')) closeEndReview();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !$('end-review').classList.contains('hidden')) {
      closeEndReview();
    }
  });
  $('abort-btn').addEventListener('click', () => {
    if (state.timerId) clearInterval(state.timerId);
    state.timerId = null;
    state.session = null;
    state.examReview = null;
    closeEndReview();
    showScreen('setup');
  });
  $('home-btn').addEventListener('click', () => {
    state.session = null;
    showScreen('setup');
  });
  $('retry-btn').addEventListener('click', startExam);

  tryAutoLoad();
}

bindUi();
