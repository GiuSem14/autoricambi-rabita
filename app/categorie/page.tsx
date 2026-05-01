import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Categorie Ricambi – Autoricambi Rabita | Barrafranca",
  description:
    "Scopri le categorie di ricambi auto disponibili presso Autoricambi Rabita a Barrafranca: motore, freni, carrozzeria, elettronica e molto altro.",
};

const CATEGORIE = [
  { nome: "Motore e trasmissione", Icon: WrenchCatIcon, esempi: "Cinghie, filtri, pompe acqua, olio, giunti" },
  { nome: "Freni e sospensioni", Icon: DiscCatIcon, esempi: "Dischi, pastiglie, ammortizzatori, molle" },
  { nome: "Carrozzeria e vetri", Icon: CarCatIcon, esempi: "Paraurti, specchietti, portiere, parabrezza" },
  { nome: "Impianto elettrico", Icon: ZapCatIcon, esempi: "Alternatori, motorini, sensori, batterie" },
  { nome: "Scarico e raffreddamento", Icon: ThermCatIcon, esempi: "Radiatori, tubi, marmitta, catalizzatori" },
  { nome: "Illuminazione", Icon: LightCatIcon, esempi: "Fari, fanali, lampade, frecce" },
  { nome: "Accessori", Icon: BoxCatIcon, esempi: "Copri sedili, copri sterzo, tappeti, caschi" },
];

export default function CategoriePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <span className="text-brand-yellow text-sm font-semibold uppercase tracking-widest">
          Cosa trovi da noi
        </span>
        <h1 className="text-4xl font-extrabold text-brand-white mt-2 mb-4">
          Categorie di ricambi
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ricambi per tutte le esigenze, disponibili in sede o ordinabili anche in giornata. Non trovi quello che cerchi? Scrivici su WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {CATEGORIE.map(({ nome, Icon, esempi }) => (
          <div
            key={nome}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-yellow/40 transition-colors group"
          >
            <div className="w-10 h-10 bg-brand-yellow/10 rounded-xl flex items-center justify-center text-brand-yellow mb-3">
              <Icon />
            </div>
            <h2 className="text-base font-semibold text-gray-900 group-hover:text-brand-yellow transition-colors mb-2">
              {nome}
            </h2>
            <p className="text-gray-600 text-xs leading-relaxed">{esempi}</p>
          </div>
        ))}
      </div>

      <div className="bg-brand-yellow rounded-2xl p-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">
          Non trovi la categoria che cerchi?
        </h3>
        <p className="text-white mb-6">
          Contattaci direttamente: trattiamo ricambi per la maggior parte dei
          veicoli in circolazione. Se non lo abbiamo in stock, lo ordiniamo per te.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Chiedici su WhatsApp
          </a>
          <Link
            href="/cerca-ricambio"
            className="inline-flex items-center justify-center border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black font-bold px-6 py-3 rounded-xl transition-all"
          >
            Usa il modulo di ricerca
          </Link>
        </div>
      </div>
    </div>
  );
}

function WrenchCatIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}

function DiscCatIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="3"/>
      <line x1="12" y1="2" x2="12" y2="9"/>
      <line x1="12" y1="15" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="9" y2="12"/>
      <line x1="15" y1="12" x2="22" y2="12"/>
    </svg>
  );
}

function CarCatIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 11.5L7.5 7h9L19 11.5"/>
      <path d="M2 11.5h20v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5z"/>
      <circle cx="7" cy="18" r="1.5"/>
      <circle cx="17" cy="18" r="1.5"/>
    </svg>
  );
}

function ZapCatIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function ThermCatIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
    </svg>
  );
}

function LightCatIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18"/>
      <line x1="10" y1="22" x2="14" y2="22"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    </svg>
  );
}

function BoxCatIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  );
}
