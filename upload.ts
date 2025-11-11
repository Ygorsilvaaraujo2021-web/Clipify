import formidable from 'formidable'
import fs from 'fs'
import { createClient } from '@supabase/supabase-js'

export const config = { api: { bodyParser: false } }

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const form = new formidable.IncomingForm()
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: err.message })
    const file = files.file
    const tmpPath = file.filepath || file.path
    const fileStream = fs.createReadStream(tmpPath)
    const fileName = `uploads/${Date.now()}_${file.originalFilename}`
    const { error } = await supabase.storage.from('media').upload(fileName, fileStream)
    if (error) return res.status(500).json({ error: error.message })
    const { data } = supabase.storage.from('media').getPublicUrl(fileName)
    res.json({ url: data.publicUrl, path: fileName })
  })
}
