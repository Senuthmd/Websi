// pages/index.jsx // Senu Modz - Vercel-ready Next.js starter page // Drop this file into a Next.js project (pages/index.jsx) that has Tailwind CSS configured.

import Head from 'next/head'

export default function Home() { return ( <> <Head> <title>Senu Modz — Tech, Mods & Tutorials</title> <meta name="description" content="Senu Modz — clean tech blog, downloads, and tutorials." /> <meta name="viewport" content="width=device-width, initial-scale=1" /> </Head>

<main className="min-h-screen bg-gray-50 text-gray-900 antialiased">
    <header className="bg-white/60 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">SM</div>
          <div>
            <h1 className="text-lg font-semibold">Senu Modz</h1>
            <p className="text-xs text-gray-500">Tech • Mods • Guides</p>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          <a className="hover:underline" href="#features">Features</a>
          <a className="hover:underline" href="#blog">Blog</a>
          <a className="hover:underline rounded-md px-3 py-1 bg-indigo-600 text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <section className="pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Senu Modz — Modern tech, simple guides</h2>
          <p className="mt-4 text-gray-600">Build, tweak, and customize — clear tutorials, curated mods, and practical downloads for developers and power users.</p>

          <div className="mt-6 flex gap-3">
            <a href="#blog" className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-md font-medium">Read the Blog</a>
            <a href="#features" className="inline-block px-5 py-3 border border-gray-200 rounded-md font-medium">See Features</a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold">Fast Guides</div>
              <div className="text-xs text-gray-500">Step-by-step, copy-paste ready.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold">Curated Mods</div>
              <div className="text-xs text-gray-500">Tested and documented.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold">Downloads</div>
              <div className="text-xs text-gray-500">Assets, snippets, releases.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold">Community</div>
              <div className="text-xs text-gray-500">Join discussions and requests.</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-white to-gray-100 shadow-2xl border border-gray-200">
            <div className="h-64 md:h-72 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">Hero / screenshot placeholder</div>

            <div className="mt-4 text-sm text-gray-600">Latest release</div>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <div className="font-medium">Senu Modz Toolkit v1.2</div>
                <div className="text-xs text-gray-500">Quick installer & tweaks</div>
              </div>
              <div>
                <a className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-md text-indigo-600 text-sm" href="#">Download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Features</h3>
        <p className="text-gray-600 mt-2">What Senu Modz offers</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ['Guides','Clear step-by-step tutorials for common tasks'],
            ['Mods','Hand-picked mods with compatibility notes'],
            ['Snippets','Small code pieces you can reuse instantly'],
            ['Support','Contact and request forms']
          ].map((item) => (
            <div key={item[0]} className="bg-white rounded-xl p-5 shadow-sm">
              <div className="font-semibold">{item[0]}</div>
              <div className="text-sm text-gray-500 mt-2">{item[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="blog" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Recent posts</h3>
        <p className="text-gray-600 mt-2">Latest tutorials and news</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-sm text-gray-500">Aug {10+i}, 2025</div>
              <h4 className="mt-2 font-semibold">Example post title #{i}</h4>
              <p className="mt-2 text-sm text-gray-600">Short excerpt — a quick summary of the guide or news item.</p>
              <div className="mt-4">
                <a href="#" className="text-indigo-600 text-sm">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <footer id="contact" className="py-8">
      <div className="max-w-6xl mx-auto px-6 text-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="font-semibold">Senu Modz</div>
            <div className="text-sm text-gray-500">Built with ♥ for modders & devs</div>
          </div>

          <div className="text-sm">
            <div>Contact: <a href="mailto:hello@senumodz.example" className="underline">hello@senumodz.example</a></div>
            <div className="mt-2 text-xs text-gray-500">© {new Date().getFullYear()} Senu Modz</div>
          </div>
        </div>
      </div>
    </footer>
  </main>
</>

) }

/* Quick setup notes (put in your repo README):

1. Create a Next.js app: npx create-next-app@latest and choose /pages router or add pages directory.


2. Install Tailwind CSS: follow the official Tailwind + Next.js guide (postcss + tailwind.config).


3. Drop this file into pages/index.jsx.


4. Deploy: push to GitHub and import the repo in Vercel or use vercel CLI.



Need additional pages (blog, downloads, API for contact)? Tell me what you want next and I can scaffold them. */


---

// styles/globals.css /* Tailwind base file for Senu Modz. Drop this into styles/globals.css and ensure Tailwind is configured per the official docs. */

@tailwind base; @tailwind components; @tailwind utilities;

/* Custom additions / :root{ --bg: #f8fafc; / gray-50 / --muted: #6b7280; / gray-500 */ }

html,body,#__next{ height:100%; }

/* Small utility for the SM logo square */ .logo-sm{ display:inline-grid; place-items:center; font-weight:700; color:white; border-radius:0.5rem; }

/* Card shadow tweak */ .shadow-sm{ box-shadow: 0 6px 18px rgba(15,23,42,0.04); }

/* Hero placeholder styling */ .hero-placeholder{ display:flex; align-items:center; justify-content:center; border-radius:0.75rem; background:linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%); color: #9ca3af; }

/* Small responsive tweaks that complement Tailwind */ @media (min-width: 768px){ .md:h-72{height:18rem} }

/* Footer small text */ .footer-note{ color:var(--muted); font-size:0.875rem; }

/* End of globals.css */

