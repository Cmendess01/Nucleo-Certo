import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              color: '#0D1B2A',
              fontWeight: '700',
              fontSize: '2.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              color: '#0D1B2A',
              fontWeight: '700',
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: '#0D1B2A',
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h4: {
              color: '#0D1B2A',
              fontWeight: '600',
              fontSize: '1.25rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              color: '#4B5563',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              lineHeight: '1.75',
            },
            a: {
              color: '#C7A25B',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: '#A98845',
              },
            },
            strong: {
              color: '#0D1B2A',
              fontWeight: '700',
            },
            ul: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.5rem',
            },
            ol: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              color: '#4B5563',
            },
            blockquote: {
              fontStyle: 'italic',
              color: '#6B7280',
              borderLeftWidth: '4px',
              borderLeftColor: '#C7A25B',
              paddingLeft: '1rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            code: {
              color: '#0D1B2A',
              backgroundColor: '#F3F4F6',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            },
            pre: {
              backgroundColor: '#1F2937',
              color: '#F9FAFB',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};

export default config;