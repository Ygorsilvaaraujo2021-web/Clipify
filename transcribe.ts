import fetch from 'node-fetch'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { path } = req.body
  try {
    const { data: urlData } = await supabase.storage.from('media').createSignedUrl(path, 3600)
    const audioRes = await fetch(urlData.signedUrl)
    const arrayBuffer = await audioRes.arrayBuffer()
    const form = new FormData()
    form.append('file', new Blob([arrayBuffer]), 'file.mp3')
    form.append('model', 'whisper-1')

    const resp = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: form
    })
    const transcription = await resp.json()
    // Aqui você pode salvar a transcrição no seu DB
    // Em seguida, chamar o LLM para gerar sugestões de cortes
    res.json({ transcription })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
