import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL, FULL_ADDRESS, PHONE_NUMBER } from "@/lib/constants";
import Recensioni from "@/components/Recensioni";

export const metadata: Metadata = {
  title: "Autoricambi Rabita – Ricambi Auto a Barrafranca, Enna, Sicilia",
  description:
    "Ricambi auto nuovi a Barrafranca. Disponibili subito o su ordinazione. Risposta rapida via WhatsApp. Autoricambi Rabita – Barrafranca, Enna.",
};

const SERVIZI = [
  {
    Icon: AwardServIcon,
    titolo: "Punto di Riferimento",
    descrizione:
      "Da anni siamo il punto di riferimento per i ricambi auto a Barrafranca e nella provincia di Enna.",
  },
  {
    Icon: ZapServIcon,
    titolo: "Risposte in Tempo Reale",
    descrizione:
      "Il tuo tempo è prezioso. Ricevi assistenza su WhatsApp in meno di un'ora e spediamo i tuoi ordini nella stessa giornata.",
  },
  {
    Icon: SearchServIcon,
    titolo: "Supporto Tecnico Dedicato",
    descrizione:
      "Niente errori, solo il pezzo giusto. Ti guidiamo nella scelta del ricambio esatto per il tuo veicolo, garantendoti compatibilità totale.",
  },
];

const FILIALI = [
  {
    nome: "Autoricambi Rabita – Barrafranca",
    indirizzo: FULL_ADDRESS,
    telefono: PHONE_NUMBER,
    orari: null as string | null,
    mapsEmbed: "https://maps.google.com/maps?q=Via+dello+Stadio+46,+Barrafranca,+EN&output=embed",
    mapsLink: "https://maps.google.com/?q=Via+dello+Stadio,+46,+Barrafranca,+EN",
  },
  {
    nome: "Autoricambi Rabita – Piazza Armerina",
    indirizzo: "Via Alessandro Manzoni, 143, 94015 Piazza Armerina (EN)",
    telefono: PHONE_NUMBER,
    orari: "Lun – Sab, fino alle 19:00",
    mapsEmbed: "https://maps.google.com/maps?q=Via+Alessandro+Manzoni+143+Piazza+Armerina&output=embed",
    mapsLink: "https://maps.google.com/?q=Via+Alessandro+Manzoni+143+Piazza+Armerina",
  },
];

const STATS = [
  {
    valore: "50+",
    label: "Anni di esperienza",
    sub: "nel settore dei ricambi auto",
    Icon: TrophyStatIcon,
  },
  {
    valore: "< 1h",
    label: "Risposta su WhatsApp",
    sub: "per ogni richiesta inviata",
    Icon: ClockStatIcon,
  },
  {
    valore: "✓",
    label: "Ricambio trovato",
    sub: "disponibile subito o in giornata",
    Icon: CheckStatIcon,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(232,32,26,0.08),_transparent_60%)]" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <span className="inline-block bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Barrafranca e Piazza Armerina
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-white leading-tight mb-6">
            Ricambi auto a{" "}
            <span className="text-brand-yellow">Barrafranca e Piazza Armerina</span>
            <br className="hidden sm:block" /> disponibili subito
            <br className="hidden sm:block" /> o su ordinazione
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Evita attese inutili. Contattaci su WhatsApp indicando marca, modello e anno:
            verifichiamo la disponibilità in tempo reale e prepariamo il tuo ordine anche per il ritiro in giornata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
            >
              <WhatsAppIcon />
              Chiedi ai nostri esperti
            </a>
            <Link
              href="/cerca-ricambio"
              className="inline-flex items-center justify-center bg-brand-yellow hover:opacity-90 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
            >
              Cerca il tuo ricambio
            </Link>
          </div>
        </div>
      </section>

      {/* Statistiche */}
      <section className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map(({ valore, label, sub, Icon }) => (
              <div
                key={label}
                className="bg-white border border-gray-200 rounded-2xl px-8 py-10 flex flex-col items-center text-center hover:border-brand-yellow/40 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow mb-6">
                  <Icon />
                </div>
                <div className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-3 leading-none tracking-tight">
                  {valore}
                </div>
                <div className="text-gray-800 font-semibold text-base mb-1">{label}</div>
                <div className="text-gray-500 text-sm">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-[40%]">
            <span className="text-brand-yellow text-sm font-semibold uppercase tracking-widest">
              Chi siamo
            </span>
            <h2 className="text-3xl font-bold text-brand-white mt-2 mb-6">
              Il nostro negozio
            </h2>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                Autoricambi Rabita è il punto di riferimento per i ricambi auto a
                Barrafranca e nella provincia di Enna. Trovi ricambi nuovi per tutte
                le marche e modelli, disponibili subito o ordinabili anche in giornata.
              </p>
              <p>
                Il nostro team ti accoglie con competenza e cordialità, aiutandoti a
                trovare il pezzo giusto anche quando è di difficile reperibilità.
              </p>
              <p>
                Vieni a trovarci in Via dello Stadio 46, oppure scrivici su WhatsApp: ti
                rispondiamo entro un&apos;ora.
              </p>
            </div>
            <Link
              href="/chi-siamo"
              className="inline-flex items-center gap-2 mt-8 text-brand-yellow font-semibold text-sm hover:opacity-80 transition-colors"
            >
              Scopri di più →
            </Link>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-brand-white text-center mb-12">
          Come possiamo <span className="text-brand-yellow">aiutarti</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVIZI.map((s) => (
            <div
              key={s.titolo}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-brand-yellow/40 transition-colors group"
            >
              <div className="w-10 h-10 bg-brand-yellow/10 rounded-xl flex items-center justify-center text-brand-yellow mb-4">
                <s.Icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-brand-yellow transition-colors mb-3">
                {s.titolo}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.descrizione}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recensioni */}
      <Recensioni />

      {/* Filiali */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-brand-white text-center mb-12">
          Le Nostre <span className="text-brand-yellow">Filiali</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FILIALI.map((f) => (
            <div
              key={f.nome}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-yellow/40 transition-colors"
            >
              <div className="h-52">
                <iframe
                  src={f.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mappa ${f.nome}`}
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-gray-900 font-bold text-lg">{f.nome}</h3>
                <a
                  href={f.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 text-sm hover:text-brand-yellow transition-colors group"
                >
                  <MapPinIcon />
                  <span className="group-hover:underline">{f.indirizzo}</span>
                </a>
                <a
                  href={`tel:${f.telefono.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-gray-600 text-sm hover:text-brand-yellow transition-colors"
                >
                  <PhoneSmallIcon />
                  {f.telefono}
                </a>
                {f.orari && (
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <ClockIcon />
                    {f.orari}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-orange-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hai bisogno di un ricambio?
          </h2>
          <p className="text-white/80 mb-8">
            Compila il modulo sul sito o scrivici direttamente su WhatsApp. Ti
            risponderemo nel minor tempo possibile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              <WhatsAppIcon />
              Scrivici ora
            </a>
            <Link
              href="/cerca-ricambio"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-orange-500 font-bold px-8 py-4 rounded-xl transition-all"
            >
              Usa il modulo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function AwardServIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  );
}

function ZapServIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function SearchServIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

function TrophyStatIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h12v6a6 6 0 0 1-12 0V4z" />
      <path d="M4 5H6M18 5h2" />
      <path d="M4 5v2.5A2.5 2.5 0 0 0 6.5 10" />
      <path d="M20 5v2.5A2.5 2.5 0 0 1 17.5 10" />
      <path d="M12 16v4" />
      <path d="M8 20h8" />
    </svg>
  );
}

function ClockStatIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function CheckStatIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneSmallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
