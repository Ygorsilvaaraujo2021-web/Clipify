import { useState } from 'react'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleUpload(e) {
    e.preventDefault()
    if (!file) return alert('Escolha um arquivo')
    setLoading(true)
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/upload', { method: 'POST', body: fd })
    const data = await res.json()
    setLoading(false)
    if (res.ok) {
      alert('Upload enviado. Transcrição iniciada.')
      // chamar transcribe
      await fetch('/api/transcribe', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ path: data.path })})
    } else {
      alert('Erro: ' + (data?.error || 'unknown'))
    }
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Upload de episódio</h1>
      <form onSubmit={handleUpload} className="space-y-4">
        <input type="file" accept="audio/*,video/*" onChange={(e)=>setFile(e.target.files?.[0]||null)} />
        <button className="px-4 py-2 bg-indigo-600 rounded" disabled={loading}>{loading ? 'Enviando...' : 'Enviar e transcrever'}</button>
      </form>
    </div>
  )
}
