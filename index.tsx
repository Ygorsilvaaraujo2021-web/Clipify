import Link from 'next/link'

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <header className="max-w-4xl w-full text-center mb-8">
        <h1 className="text-4xl font-bold">Clipfy</h1>
        <p className="mt-2 text-gray-300">Cortes automáticos profissionais para podcasts, filmes e vídeos.</p>
      </header>

      <main className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
        <section className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold">Como funciona</h2>
          <ol className="mt-4 list-decimal ml-6 text-gray-300">
            <li>Faça upload do seu áudio/vídeo.</li>
            <li>A IA transcreve e sugere os melhores trechos.</li>
            <li>Edite e baixe os clipes com legendas.</li>
          </ol>
          <Link href="/app/upload">
            <a className="inline-block mt-6 px-5 py-3 bg-indigo-600 rounded hover:bg-indigo-500">Começar (grátis)</a>
          </Link>
        </section>

        <section className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold">Planos</h2>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-900 rounded">
              <h3 className="font-bold">1 mês — R$29,90</h3>
              <p className="text-gray-400 text-sm">Assinatura mensal</p>
              <button className="mt-3 px-4 py-2 bg-green-600 rounded">Assinar</button>
            </div>
            <div className="p-4 bg-gray-900 rounded">
              <h3 className="font-bold">2 meses — R$38,90</h3>
              <p className="text-gray-400 text-sm">Assinatura por 2 meses</p>
              <button className="mt-3 px-4 py-2 bg-green-600 rounded">Assinar</button>
            </div>
            <div className="p-4 bg-gray-900 rounded">
              <h3 className="font-bold">3 meses — R$59,90</h3>
              <p className="text-gray-400 text-sm">Assinatura por 3 meses</p>
              <button className="mt-3 px-4 py-2 bg-green-600 rounded">Assinar</button>
            </div>
            <div className="p-4 bg-gray-900 rounded">
              <h3 className="font-bold">Acesso Vitalício — R$699,90</h3>
              <p className="text-gray-400 text-sm">Pague uma vez, use sempre</p>
              <button className="mt-3 px-4 py-2 bg-yellow-600 rounded">Comprar</button>
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-500">Pagamentos sugeridos via Stripe (integração pronta nos endpoints).</p>
        </section>
      </main>

      <footer className="mt-12 text-sm text-gray-500">© Clipfy</footer>
    </div>
  )
}
