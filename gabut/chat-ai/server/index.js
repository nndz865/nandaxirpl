const path = require('path');
const express = require('express');
const fetch = require('node-fetch');
const app = express();

const CLIENT_DIR = path.join(__dirname, '..');

app.use(express.json());
app.use(express.static(CLIENT_DIR));

app.post('/api/chat', async (req, res) => {
  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: 'missing message' });

  const key = process.env.OPENAI_API_KEY;
  if (!key) return res.status(500).json({ error: 'server misconfigured: missing OPENAI_API_KEY' });

  try {
    const payload = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      max_tokens: 300,
      temperature: 0.7,
    };

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
      },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const errText = await r.text();
      return res.status(502).json({ error: 'upstream error', details: errText });
    }

    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content || 'Maaf, tidak ada balasan.';
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: 'fetch failed', details: String(err) });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
