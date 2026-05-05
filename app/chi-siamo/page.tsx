import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_NAME, CITY, WHATSAPP_URL, ORARI } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chi Siamo – Autoricambi Rabita | Barrafranca",
  description:
    "Scopri chi siamo: Autoricambi Rabita a Barrafranca (EN). Anni di esperienza nel settore dei ricambi auto, con competenza e disponibilità.",
};

const VALORI = [
  {
    titolo: "Punto di Riferimento",
    desc: "Da anni siamo il punto di riferimento per i ricambi auto a Barrafranca e nella provincia di Enna.",
    Icon: AwardValIcon,
  },
  {
    titolo: "Risposte in Tempo Reale",
    desc: "Il tuo tempo è prezioso. Ricevi assistenza su WhatsApp in meno di un'ora e spediamo i tuoi ordini nella stessa giornata.",
    Icon: ZapValIcon,
  },
  {
    titolo: "Supporto Tecnico Dedicato",
    desc: "Niente errori, solo il pezzo giusto. Ti guidiamo nella scelta del ricambio esatto per il tuo veicolo, garantendoti compatibilità totale.",
    Icon: SearchValIcon,
  },
];

export default function ChiSiamoPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-extrabold text-brand-red mb-6">
          La nostra storia
        </h1>
        <div className="space-y-5 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          <p>
            <strong className="text-brand-white">{BUSINESS_NAME}</strong> è da anni il punto
            di riferimento per i ricambi auto a {CITY} e nella provincia di Enna.
            Offriamo un vasto assortimento di ricambi nuovi per tutte le marche e modelli,
            disponibili subito o ordinabili anche in giornata.
          </p>
          <p>
            Che si tratti di un veicolo europeo, giapponese o americano, il nostro
            magazzino offre un vasto assortimento di ricambi nuovi e di alta qualità.
            E se il pezzo che cerchi non è subito disponibile, lo ordiniamo per te con
            tempi di consegna rapidissimi.
          </p>
          <p>
            La nostra filosofia? Risposte veloci, consulenza tecnica e il miglior
            rapporto qualità-prezzo. Siamo qui per rimetterti in strada nel minor
            tempo possibile.
          </p>
        </div>
      </div>

      {/* Valori */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {VALORI.map(({ titolo, desc, Icon }) => (
          <div key={titolo} className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="w-10 h-10 bg-brand-yellow/10 rounded-xl flex items-center justify-center text-brand-yellow mb-3">
              <Icon />
            </div>
            <h3 className="text-gray-900 font-semibold text-lg mb-2">{titolo}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      {/* Orari */}
      <div className="bg-brand-yellow rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-bold text-white mb-6">Orari di apertura</h2>
        <ul className="space-y-3">
          {ORARI.map((o) => (
            <li key={o.giorno} className="flex justify-between items-center border-b border-red-400 pb-3 last:border-0 last:pb-0">
              <span className="text-white">{o.giorno}</span>
              <span className="text-white font-medium">{o.orario}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
        >
          Contattaci su WhatsApp
        </a>
        <Link
          href="/contatti"
          className="inline-flex items-center justify-center border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-white font-bold px-6 py-3 rounded-xl transition-all"
        >
          Dove siamo
        </Link>
      </div>
    </div>
  );
}

function AwardValIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  );
}

function ZapValIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function SearchValIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}
