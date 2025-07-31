export default async function handler(req, res) {
  if (req.method === 'POST') {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxc2OBHYwuY5GBdIqq_vKRe4oEaNjvqkd1xs0l92efZcsz4LiLK2cdQwPuPSYzc6E9qEA/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' },
      });

      const result = await response.text();
      res.status(200).send(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao encaminhar para o Google Apps Script' });
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}