const brand = (slug, color) => `https://cdn.simpleicons.org/${slug}${color ? '/' + color : '/d7e2ea'}`

export const LOGOS = [
  brand('react'), brand('typescript'), brand('javascript'), brand('nextdotjs', 'ffffff'),
  brand('tailwindcss'), brand('vuedotjs'), brand('nodedotjs'), brand('graphql'), brand('redux'),
  brand('vite'), brand('sass'), brand('html5'), brand('css3'), brand('figma'), brand('git'),
  brand('storybook'), brand('jest'), brand('framer'), brand('vercel', 'ffffff'), brand('webpack'),
  brand('reactrouter'),
]

export const ABOUT_TEXT = "A frontend developer turning ideas into fast, accessible and polished interfaces. I work best with teams shipping products that need to feel as good as they look. Let's build something worth remembering."
