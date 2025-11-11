        ## Deploy no Vercel (passo a passo)

1. Faça fork ou envie este repositório para o seu GitHub.
2. Acesse https://vercel.com -> New Project -> importe do GitHub.
3. Defina as variáveis de ambiente no painel do projeto:
   - NEXT_PUBLIC_SUPABASE_URL = <sua url pública>
   - NEXT_PUBLIC_SUPABASE_ANON_KEY = <sua anon key>
   - SUPABASE_URL = <sua supabase url>
   - SUPABASE_KEY = <sua service_role key>
   - OPENAI_API_KEY = <sua chave OpenAI>
   - STRIPE_SECRET_KEY = <sua chave Stripe>
   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = <sua publishable>
4. Clique em Deploy.

## Observações
- Para processamento de vídeos pesados, crie um worker separado (Render/Cloud Run) com ffmpeg instalado.
- Para pagamentos, configure produtos no Stripe e implemente webhooks (endpoints) para ativar assinaturas no DB.
