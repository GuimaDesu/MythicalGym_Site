# Mythical Gym

Landing page da **Mythical Gym** (Lisboa, Portugal) — página única em português,
com abertura cinematográfica e animações dirigidas pelo *scroll*.

## Correr

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

- `src/content.js` — **todo o conteúdo do site** (mockup): textos, planos,
  contactos, estatísticas. É aqui que se substitui pelos dados reais.
- `src/App.jsx` — composição da página e sequência de abertura
- `src/hooks/useOpeningSequence.js` — voo da logo da capa para o cabeçalho
- `src/hooks/useScrollEngine.js` — motor das animações com scroll
- `src/styles/global.css` — tokens, fontes, sistema *liquid glass* e estilos base
- `src/styles/ui.module.css` — blocos comuns (secção, eyebrow, títulos, glass, reveal)
- `src/components/`
  - `Cover` / `SiteHeader` / `Stage` — capa, cabeçalho e hero (pílulas de vidro)
  - `NavBar` — cápsula fixa em vidro com barra de progresso
  - `ScrollRail` — trilho de capítulos à direita (pontos + scrubber do scroll)
  - `Manifesto` — texto que acende palavra a palavra
  - `Method` — secção *pinned* com 4 passos sincronizados ao scroll
  - `Space` — visual com parallax + contadores
  - `Marquee` — faixa que desliza com o scroll
  - `Planos` / `Contacto` — cartões em vidro e rodapé
- `public/mythicalgym-logo.png` — logo (otimizada a 760px)

## Como funcionam as animações de scroll

O `useScrollEngine` corre num único *requestAnimationFrame* por scroll (sem
re-renders do React) e escreve custom properties diretamente no DOM:

| Variável  | Significado                                                        |
| --------- | ------------------------------------------------------------------ |
| `--p`     | 0 → 1 conforme o elemento atravessa o viewport                     |
| `--pin`   | 0 → 1 ao longo do percurso de uma secção fixada (sticky)           |
| `--scroll`| progresso global da página (barra da NavBar)                       |

O CSS converte esses valores em opacidade, deslocamento, escalas e
`stroke-dashoffset`, pelo que o conteúdo "fica parado" no ecrã (secções com
`position: sticky`) enquanto as coisas revelam-se na ordem certa — o efeito
tipo Apple / PICO 4. No fim de cada capítulo a secção fixada dissolve-se
(escala + opacidade ligadas a `--pin`) para dar a passagem à seguinte, e os
elementos decorativos (orbes, anéis e painéis de vidro) deslizam a ritmos
diferentes a partir de `--scroll`.

As secções com `data-reveal` recebem `data-inview="true"` via
`IntersectionObserver` para as entradas que não dependem do scroll.

**`prefers-reduced-motion` está deliberadamente desativado** neste projeto:
não existe qualquer media query ou ramo de código que pare as animações — o
scroll, os elementos flutuantes e os efeitos *liquid glass* estão sempre ativos.
