import type { Metadata } from "next";
import {
  FULL_ADDRESS,
  PHONE_NUMBER,
  MOBILE_NUMBER,
  EMAIL,
  ORARI,
  SERVIZI_NEGOZIO,
  ACCESSIBILITA,
  PAGAMENTI,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contatti – Autoricambi Rabita | Barrafranca, Enna",
  description:
    "Contatta Autoricambi Rabita a Barrafranca (EN): telefono, WhatsApp, indirizzo e orari. Ricambi auto disponibili subito o su ordinazione.",
};

export default function ContattiPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-brand-red mb-4">
          Contatti
        </h1>
        <p className="text-gray-400 text-lg">
          Siamo disponibili di persona, per telefono o via WhatsApp. Scegli il
          canale più comodo per te.
        </p>
      </div>

      {/* Sezione 1: 3 card contatti */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-orange-300 rounded-2xl p-6 flex flex-col gap-3">
          <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red">
            <MapPinIcon />
          </div>
          <div>
            <div className="text-brand-red font-semibold mb-1">Indirizzo</div>
            <div className="text-gray-700 text-sm">{FULL_ADDRESS}</div>
          </div>
        </div>

        <div className="bg-white border border-orange-300 rounded-2xl p-6 flex flex-col gap-3">
          <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red">
            <PhoneIcon />
          </div>
          <div>
            <div className="text-brand-red font-semibold mb-1">Telefono</div>
            <a
              href="tel:0934464038"
              className="block text-gray-700 text-sm hover:text-brand-red transition-colors"
            >
              {PHONE_NUMBER}
            </a>
            <a
              href="tel:+393505011449"
              className="block text-gray-700 text-sm hover:text-brand-red transition-colors mt-1"
            >
              {MOBILE_NUMBER}
            </a>
          </div>
        </div>

        <div className="bg-white border border-orange-300 rounded-2xl p-6 flex flex-col gap-3">
          <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red">
            <EmailIcon />
          </div>
          <div>
            <div className="text-brand-red font-semibold mb-1">Email</div>
            <a
              href={`mailto:${EMAIL}`}
              className="text-gray-700 text-sm hover:text-brand-red transition-colors"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Sezione 2: Orari full-width */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Orari di apertura</h2>
        <ul className="space-y-4">
          {ORARI.map((o) => (
            <li
              key={o.giorno}
              className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0"
            >
              <span className="text-gray-600">{o.giorno}</span>
              <span className="text-gray-900 font-medium text-right">{o.orario}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-6 border-t border-gray-200 flex items-start gap-2 text-brand-yellow text-sm font-medium">
          <MessageIcon />
          <span>Fuori orario? Lascia un messaggio su WhatsApp e ti richiamiamo appena possibile.</span>
        </div>
      </div>

      {/* Le nostre sedi */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-brand-white mb-6">Le nostre sedi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-900 font-semibold mb-1">Barrafranca</p>
            <p className="text-gray-600 text-sm mb-3">Via dello Stadio, 46, 94012 Barrafranca (EN)</p>
            <div className="h-64 rounded-2xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Via+dello+Stadio+46+Barrafranca&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Autoricambi Rabita – Barrafranca"
              />
            </div>
          </div>
          <div>
            <p className="text-gray-900 font-semibold mb-1">Piazza Armerina</p>
            <p className="text-gray-600 text-sm mb-3">Via Alessandro Manzoni, 143, 94015 Piazza Armerina (EN)</p>
            <div className="h-64 rounded-2xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Via+Alessandro+Manzoni+143+Piazza+Armerina&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Autoricambi Rabita – Piazza Armerina"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Servizi, Accessibilità, Pagamenti */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-orange-300 rounded-2xl p-6">
          <h3 className="text-brand-red font-bold mb-4">Servizi</h3>
          <ul className="space-y-2">
            {SERVIZI_NEGOZIO.map((s) => (
              <li key={s} className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="text-brand-red">✓</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-orange-300 rounded-2xl p-6">
          <h3 className="text-brand-red font-bold mb-4">Accessibilità</h3>
          <ul className="space-y-2">
            {ACCESSIBILITA.map((a) => (
              <li key={a} className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="text-brand-red">✓</span> {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-orange-300 rounded-2xl p-6">
          <h3 className="text-brand-red font-bold mb-4">Pagamenti accettati</h3>
          <ul className="space-y-2">
            {PAGAMENTI.map((p) => (
              <li key={p} className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="text-brand-red">✓</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

function MessageIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
