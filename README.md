# miyrah-design-system

Fonte única de identidade visual do **Miyrah**, compartilhada entre o app (`Miyrah`, Tailwind v4) e a landing page (`miyrah-lp`, Tailwind v3). A referência navegável (tokens, tipografia e componentes) vive no artifact **Miyrah Design System**; este pacote é a implementação em código.

## O que o pacote entrega

| Arquivo | Para quê |
| --- | --- |
| `tokens.css` | Todos os tokens como CSS variables em `:root` (cor, tipografia, espaçamento, raio, elevação, movimento). Universal. |
| `fonts.css` | `@font-face` das fontes self-hosted (Geist + Fraunces). Sem CDN. |
| `fonts/*.woff2` | Os binários das fontes (variáveis). |
| `index.css` | Atalho: importa `fonts.css` + `tokens.css`. |
| `tailwind.preset.js` | Preset Tailwind **v3** (mapeia os tokens para o tema). Para a landing page. |
| `tokens.json` | Fonte dos tokens, para ferramentas/geração. |

## Regras inegociáveis

- **Geist** é a fonte do sistema (corpo, UI, tabelas, valores — com `tabular-nums`).
- **Fraunces** é **só marca**: logo, títulos de destaque da LP, vídeos e peças gráficas. **Nunca dentro do app.** Use `font-brand` só nesses contextos.
- **Azul** (`blue`) é o único accent; **dinheiro nunca é azul** — entrada `income` (+), saída `expense` (−), sempre com sinal.
- Base `surface-page` (neutro frio), tema único claro (sem dark).

## Instalação

Enquanto não há registro npm, instale via caminho local (dev) ou Git (CI/deploy):

```bash
# Dev local (repos irmãos na mesma pasta)
npm install ../miyrah-design-system

# Ou direto do GitHub, fixando uma tag
npm install github:IanSalomao/miyrah-design-system#v0.1.0
```

## Uso no app (`Miyrah` — Tailwind v4)

Em `src/index.css`, antes do `@theme inline`:

```css
@import "tailwindcss";
@import "miyrah-design-system/fonts.css";
@import "miyrah-design-system/tokens.css";
```

Aponte os tokens shadcn para os do Miyrah dentro do `@theme inline`:

```css
@theme inline {
  --font-sans: var(--font-sans);
  --color-background: var(--surface-page);
  --color-foreground: var(--ink);
  --color-card: var(--surface-card);
  --color-popover: var(--surface-raised);
  --color-primary: var(--blue);
  --color-primary-foreground: var(--ink-on-accent);
  --color-border: var(--line);
  --color-input: var(--line);
  --color-ring: var(--focus-ring);
  --color-income: var(--income);
  --color-expense: var(--expense);
  /* …raio, sombra e demais conforme tokens.css */
}
```

> O app **não** carrega Fraunces no sistema. Se precisar dela numa peça de marca específica, importe só ali.

## Uso na landing page (`miyrah-lp` — Tailwind v3)

`tailwind.config.mjs`:

```js
import miyrahPreset from "miyrah-design-system/tailwind-preset";

export default {
  presets: [miyrahPreset],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
};
```

E no CSS global (`src/styles/global.css`), substituindo os `@fontsource/*` atuais:

```css
@import "miyrah-design-system/fonts.css";
@import "miyrah-design-system/tokens.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Depois use as classes: `bg-surface-page`, `text-ink`, `text-income`, `font-sans`, `font-brand` (só em destaque), `shadow-sm`, `rounded-lg` etc.

## Versionamento

Mudança de token = nova versão (SemVer). Consumidores fixam a tag; para tokens, prefira aditivo. A referência navegável e este pacote andam juntos.
