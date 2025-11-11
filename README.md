# Clipfy - MVP (Dark theme)

Este repositório contém um scaffold mínimo do **Clipfy** — plataforma para gerar cortes automáticos de podcasts, filmes e vídeos, com página de vendas e planos.

**Funcionalidades incluídas neste MVP**
- Landing page com preços
- Upload de vídeo/audio (frontend)
- Endpoints iniciais para upload, transcrição (via OpenAI) e geração de clipes (via prompt ao GPT)
- Worker FFmpeg básico (script) para recortes
- Integração sugerida com Supabase (storage) e Stripe (pagamentos)

**Importante:** este scaffold é um ponto de partida. Você precisará configurar variáveis de ambiente (SUPABASE_URL, SUPABASE_KEY, OPENAI_API_KEY, STRIPE_SECRET_KEY) e fazer deploy (Vercel). Instruções abaixo.

## Deploy rápido (resumo)
1. Crie contas no Supabase, Vercel, OpenAI e Stripe.
2. Copie este repositório para o GitHub ou faça upload direto no Vercel.
3. Configure variáveis de ambiente na Vercel (SUPABASE_URL, SUPABASE_KEY, OPENAI_API_KEY, NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY).
4. Instale dependências e rode localmente com `npm install` e `npm run dev`.

## Planos e preços (já implementado no frontend)
- 1 mês — R$ 29,90
- 2 meses — R$ 38,90
- 3 meses — R$ 59,90
- Acesso Vitalício (pague uma vez) — R$ 699,90

---

Se quiser, eu já configuro e faço upload direto pra você (preciso das chaves), ou eu te oriento passo-a-passo para subir no Vercel.
