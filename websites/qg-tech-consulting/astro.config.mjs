import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import starlightThemeRapide from 'starlight-theme-rapide';   // ← Ajouté

export default defineConfig({
  site: 'https://gaetanquentin.github.io',     // ← change avec ton username GitHub
  base: '/qg-tech-consulting',               // ← change si ton repo s'appelle autrement

  integrations: [
    starlight({
      title: 'QG Tech Consulting',
      description: 'Formations Linux, IAC, Devops, IA',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Français',
          lang: 'fr',
        },
      },

//      logo: {
 //       src: './src/assets/logo.svg',
//        alt: 'Mon Site Docs',
//      },
      favicon: '/favicon.svg',

      // === NOUVELLE SYNTAXE SOCIAL (obligatoire) ===
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/gaetanquentin/qg-tech-consulting',
        },
        // Ajoute d'autres réseaux ici si tu veux (exemples) :
        // {
        //   icon: 'linkedin',
        //   label: 'LinkedIn',
        //   href: 'https://linkedin.com/in/tonprofil',
        // },
      ],

      sidebar: [
        { label: 'Accueil', link: '/' },
        {
          label: 'Documentation',
          autogenerate: { directory: 'docs' },
        },
        {
          label: 'Blog',
          autogenerate: { directory: 'blog' },
        },
      ],
      plugins: [
        starlightBlog(),
        starlightThemeRapide(),     // ← Thème élégant activé
      ],


      // Options utiles
      pagefind: true,        // recherche full-text
      lastUpdated: true,     // affiche la date de dernière modification
      expressiveCode: true,  // beau rendu du code
    }),
  ],

  trailingSlash: 'never',
});