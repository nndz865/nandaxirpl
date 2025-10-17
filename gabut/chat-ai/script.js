const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
const typing = document.getElementById('typing');

const STORAGE_KEY = 'chat_ai_demo_history_v1';

function now() {
  return new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}

function renderMessage(role, text) {
  const li = document.createElement('li');
  li.className = role === 'user' ? 'user' : 'ai';
  li.textContent = text + ' · ' + now();
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight;
}

function saveHistory(history) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function appendAndSave(role, text) {
  const history = loadHistory();
  history.push({role, text, t: Date.now()});
  saveHistory(history);
  renderMessage(role, text);
}

function ruleBasedReply(message) {
  const m = message.trim().toLowerCase();
  if (!m) return "Saya tidak mengerti. Coba ketik sesuatu.";
  if (m.includes('halo') || m.includes('hi') || m.includes('hai')) return 'Halo! Ada yang bisa saya bantu?';
  if (m.includes('nama')) return 'Saya Chat AI sederhana.';
  if (m.includes('waktu') || m.includes('jam')) return `Sekarang pukul ${now()}`;
  if (m.includes('tanggal')) return `Hari ini ${new Date().toLocaleDateString()}`;
  if (m.includes('help') || m.includes('bantuan')) return 'Coba: "halo", "waktu", "tanggal", atau tanyakan nama saya.';
  if (m.match(/\b(terima kasih|thanks)\b/)) return 'Sama-sama! Senang membantu.';
  // simple math: detect expressions like 2+2 or 3 * 4
  if (/^[0-9\s()+\-*/.]+$/.test(m)) {
    try {
      // safe eval: allow only digits and math operators
      // eslint-disable-next-line no-eval
      const res = Function(`return (${m})`)();
      if (typeof res === 'number' && isFinite(res)) return `Hasil: ${res}`;
    } catch (e) {
      // fallthrough
    }
  }
  return "Maaf, saya belum dilatih untuk menjawab itu. Coba kata lain atau 'help'.";
}

async function aiRespond(message) {
  typing.hidden = false;
  // try server first
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) throw new Error('server error');
    const j = await res.json();
    const reply = j.reply || "Maaf, server tidak memberi balasan.";
    typing.hidden = true;
    appendAndSave('ai', reply);
    return;
  } catch (e) {
    // fallback to local rule-based reply with a small delay
    const delay = 600 + Math.min(2000, message.length * 40);
    setTimeout(() => {
      const reply = ruleBasedReply(message) + ' (fallback local)';
      typing.hidden = true;
      appendAndSave('ai', reply);
    }, delay);
  }
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  appendAndSave('user', text);
  input.value = '';
  aiRespond(text);
});

// load history
const history = loadHistory();
if (history.length) {
  history.forEach(h => renderMessage(h.role, h.text));
} else {
  // welcome message
  appendAndSave('ai', 'Halo! Saya Chat AI sederhana. Ketik "help" untuk memulai.');
}
