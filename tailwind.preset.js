// Preset Tailwind v3 do Miyrah (para a landing page).
// Mapeia os tokens do design system (via CSS vars de tokens.css) para o tema do Tailwind.
// O consumidor DEVE importar também "miyrah-design-system/tokens.css" e "miyrah-design-system/fonts.css".
// Espaçamento fica no padrão do Tailwind (grade 4px, já alinhada ao nosso múltiplo de 8).

// Permite o modificador de opacidade do Tailwind (ex.: bg-ink/50) com cor vinda de CSS var (hex).
// Sem opacidade, <alpha-value> vira 1 → color-mix 100% = a própria cor.
const c = (name) => `color-mix(in srgb, var(${name}) calc(<alpha-value> * 100%), transparent)`;

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        "surface-page": c("--surface-page"),
        "surface-card": c("--surface-card"),
        "surface-raised": c("--surface-raised"),
        ink: c("--ink"),
        "ink-muted": c("--ink-muted"),
        "ink-subtle": c("--ink-subtle"),
        "ink-on-accent": c("--ink-on-accent"),
        line: c("--line"),
        "line-strong": c("--line-strong"),
        blue: c("--blue"),
        "blue-hover": c("--blue-hover"),
        "blue-soft": c("--blue-soft"),
        "blue-navy": c("--blue-navy"),
        income: c("--income"),
        "income-soft": c("--income-soft"),
        expense: c("--expense"),
        "expense-soft": c("--expense-soft"),
      },
      fontFamily: {
        // Geist carrega o sistema; brand (Fraunces) só em destaque.
        sans: ["var(--font-sans)"],
        brand: ["var(--font-brand)"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      transitionDuration: {
        fast: "180ms",
        base: "240ms",
        enter: "320ms",
        slow: "500ms",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(.2,.8,.2,1)",
        exit: "cubic-bezier(.4,0,1,1)",
      },
    },
  },
};
