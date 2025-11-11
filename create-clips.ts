        import fetch from 'node-fetch'

        // Endpoint que recebe a transcrição completa e pede ao GPT sugestões de cortes (timestamps)
        export default async function handler(req, res) {
          if (req.method !== 'POST') return res.status(405).end()
          const { transcription } = req.body
          try {
            const prompt = `
You are an assistant that finds up to 8 short, interesting clips in a transcript.
Return a JSON array of objects with start, end (HH:MM:SS), title and summary.
Each clip must be <= 45 seconds.
Transcript:
${transcription}
`
            const resp = await fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: { 'Content-Type':'application/json', Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
              body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 800
              })
            })
            const data = await resp.json()
            // o assistant deve retornar um JSON no conteúdo; parseie e retorne
            const content = data?.choices?.[0]?.message?.content || ''
            res.json({ raw: content })
          } catch (err) {
            res.status(500).json({ error: err.message })
          }
        }
