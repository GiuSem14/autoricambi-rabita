const RECENSIONI: {
  nome: string;
  stelle: number;
  testo: string;
  data: string;
}[] = [];

const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Autoricambi+Rabita+Barrafranca";

export default function Recensioni() {
  if (RECENSIONI.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-white mb-4">
          Cosa dicono i <span className="text-brand-yellow">clienti</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RECENSIONI.map((r) => (
          <div
            key={r.nome}
            className="bg-brand-black border border-brand-yellow/30 rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="text-brand-yellow text-lg tracking-wider">
              {"★".repeat(r.stelle)}
            </div>
            <p className="text-brand-white text-sm leading-relaxed flex-1">{r.testo}</p>
            <div className="flex justify-between items-center pt-2 border-t border-gray-800">
              <span className="text-brand-yellow text-sm font-semibold">{r.nome}</span>
              <span className="text-gray-500 text-xs">{r.data}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-yellow hover:opacity-80 font-semibold text-sm transition-colors"
        >
          Leggi tutte le recensioni su Google →
        </a>
      </div>
    </section>
  );
}
