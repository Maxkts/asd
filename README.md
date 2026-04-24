# ASD Hausnotruf — Website (Next.js)

Öffentliche App: `app/`, `components/`, Konfiguration in `lib/site-config.ts`.

## Entwicklung

```bash
npm install
npm run dev
```

## Referenzmaterial (alles mitgeliefert)

Im Ordner [`reference/`](reference/) liegen die von dir bereitgestellten **saveweb2zip-Archive** und die **entpackten** Stände:

| Pfad | Inhalt |
|------|--------|
| `reference/zips/` | `saveweb2zip-com-www-deutschesenior-de.zip`, `saveweb2zip-com-asd-hausnotruf-de.zip` |
| `reference/www-deutschesenior-de/` | entpackter Spiegel **deutschesenior.de** |
| `reference/asd-hausnotruf-de/` | entpackter Spiegel **asd-hausnotruf.de** |

Siehe auch [`reference/README.txt`](reference/README.txt). Die Live-Website nutzt diese Spiegel **nicht** direkt; sie dienen nur der internen Orientierung.

## Deployment

Siehe [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying). Für Produktion `NEXT_PUBLIC_SITE_URL` setzen (siehe `.env.example`).
