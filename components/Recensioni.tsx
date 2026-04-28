const RECENSIONI = [
  {
    nome: "Danilo Salamone",
    stelle: 5,
    testo: "Il migliore ricambista della città di Piazza Armerina, cordiale e soprattutto competente!",
    data: "5 anni fa",
  },
  {
    nome: "Dario Morelli",
    stelle: 5,
    testo: "Mi trovo benissimo, Enrico e suo padre sono persone serie, disponibili e molto professionali. Lo consiglio.",
    data: "7 anni fa",
  },
  {
    nome: "Angelo Filippo Ingala",
    stelle: 5,
    testo: "Gentile e professionale, con tanta pazienza ha saputo trovarmi un ricambio di difficile reperibilità.",
    data: "7 anni fa",
  },
  {
    nome: "Eman Lane",
    stelle: 5,
    testo: "Professionale. Ben fornito. Economico. Consigliatissimo.",
    data: "5 anni fa",
  },
  {
    nome: "Vincenzo Marino",
    stelle: 5,
    testo: "Gentilezza e disponibilità del proprietario, magazzino fornissimo. Consiglio vivamente.",
    data: "6 anni fa",
  },
  {
    nome: "Salvatore Di Martino",
    stelle: 5,
    testo: "Grande professionalità, cortesia e convenienza. Lo consiglio.",
    data: "3 anni fa",
  },
];

const GOOGLE_REVIEW_URL = "https://g.page/r/autoricambi-rabita/review";

export default function Recensioni() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-white mb-4">
          Cosa dicono i <span className="text-brand-yellow">clienti</span>
        </h2>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-semibold px-4 py-2 rounded-full hover:bg-yellow-400/20 transition-colors"
        >
          <span>★</span>
          4,4 su Google · 54 recensioni
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RECENSIONI.map((r) => (
          <div
            key={r.nome}
            className="bg-[#111111] border border-gray-800 rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="text-yellow-400 text-lg tracking-wider">
              {"★".repeat(r.stelle)}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed flex-1">{r.testo}</p>
            <div className="flex justify-between items-center pt-3 border-t border-gray-800">
              <span className="text-orange-400 text-sm font-semibold">{r.nome}</span>
              <span className="text-gray-600 text-xs">{r.data}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href={GOOGLE_REVIEW_URL}
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
