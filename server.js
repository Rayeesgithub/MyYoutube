import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/suggest', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: "Missing query param" });

  try {
    const response = await fetch(
      `{https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&key="(query)}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
