import Image from 'next/image'
import AutoScrollCarousel from '../components/AutoScrollCarousel'
import AnimatedCounter from '../components/AnimatedCounter'

export default function Home() {
  const topRowLogos = [
    { src: '/reklaampartnerid/bfm-kaksik-eng.svg', alt: 'BFM' },
    { src: '/reklaampartnerid/kaitsevägi.svg', alt: 'Estijos gynybos pajėgos' },
    { src: '/reklaampartnerid/tallinna%20ülikool.svg', alt: 'Talino universitetas' },
    { src: '/reklaampartnerid/UT_website_logo_blue_eng.svg', alt: 'Tartu universitetas' },
  ]
  const bottomRowLogos = [
    { src: '/reklaampartnerid/johan_skytte.png', alt: 'Johan Skytte' },
    { src: '/reklaampartnerid/tallinna%20tervishoiukõrgkool.png', alt: 'Talino sveikatos priežiūros kolegija' },
    { src: '/reklaampartnerid/TTK_logo.png', alt: 'Talino technikos universitetas' },
    { src: '/reklaampartnerid/ökoloogia%20ja%20maateadused.png', alt: 'Tartu universiteto Ekologijos ir žemės mokslų institutas' },
  ]

  const schoolLogos: {
    src: string
    alt: string
    /** Wide banner logos: span full row so object-contain height isn’t crushed */
    colSpan?: 2
    /** Taller cap inside the cell */
    large?: boolean
  }[] = [
    { src: '/universities/Kaunas.png', alt: 'Kaunas' },
    { src: '/universities/ku_primary_positive.png', alt: 'KU' },
    {
      src: '/universities/lithuanian-university-of-health-sciences-logo-png_seeklogo-511631.png',
      alt: 'Lietuvos sveikatos mokslų universitetas',
      colSpan: 2,
    },
    { src: '/universities/VILNIUS-TECH-LT.png', alt: 'Vilniaus TECH' },
    { src: '/universities/vilnius-university-seeklogo-cropped.svg', alt: 'Vilniaus universitetas', large: true },
    { src: '/universities/Vytaytas%20Magnus%20University.png', alt: 'Vytauto Didžiojo universitetas' },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <a href="/" className="flex shrink-0">
            <Image
              src="/kiri%20logo.svg"
              alt="Kiri logo"
              width={360}
              height={96}
              className="h-24 w-auto object-contain"
              priority
            />
          </a>
          <div className="flex flex-col items-end gap-0.5 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
            <a href="mailto:info@kiri.lt" className="hover:text-slate-900 transition-colors">
              info@kiri.lt
            </a>
            <a href="tel:+37065671988" className="hover:text-slate-900 transition-colors">
              +370 656 71988
            </a>
          </div>
        </div>
      </header>
      <div className="border-b border-slate-200/80 bg-gradient-to-b from-white from-[35%] to-slate-50">
        <section>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 pt-20 pb-2 sm:pt-24 sm:pb-3 md:flex-row md:items-start md:pb-4">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Dalijame nemokamus sąsiuvinius
                studentams su <em className="font-semibold italic text-blue-600"> jūsų reklama</em>
              </h1>
            </div>
            <div className="flex-1 w-full">
              <Image
                src="/Group%2070.svg"
                alt=""
                width={960}
                height={720}
                className="w-full h-auto object-contain scale-110 origin-top md:-mb-1"
                priority
              />
            </div>
          </div>
        </section>

        <section className="pb-16 pt-2 sm:pb-20 sm:pt-3 md:pt-4">
          <div className="mx-auto max-w-5xl px-4 sm:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch md:gap-10">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/60 order-2 md:order-1 md:-mt-1">
                <Image
                  src="/vihikud%20murus.jpeg"
                  alt="Sąsiuvinių šūsnis"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center order-1 md:order-2">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Kas yra Kiri?</h2>
                <div className="h-1 w-12 rounded-full bg-blue-500 mb-6" aria-hidden />
                <div className="mb-6 flex flex-wrap items-baseline gap-2 text-blue-600">
                  <span className="text-xl font-semibold sm:text-2xl text-slate-700">
                    Kasmet
                  </span>
                  <AnimatedCounter
                    to={20000}
                    durationMs={2000}
                    className="text-4xl font-extrabold sm:text-5xl text-blue-600"
                  />
                  <span className="text-xl font-semibold sm:text-2xl text-slate-700">
                    sąsiuvinių randa savo šeimininką
                  </span>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Kiri – Estijoje gimusi iniciatyva, jau kelerius metus dalijanti studentams nemokamus sąsiuvinius. Tai įmanoma dėl juose skelbiamų reklamų.
                </p>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Norite tapti partneriu?</h2>
          <div className="h-1 w-12 rounded-full bg-blue-500 mb-8" aria-hidden />
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Kainoraštis</h3>
            <p className="mb-8 text-lg text-slate-600">
              Visos kainos nurodytos už 5 000 sąsiuvinių tiražą.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { src: '/hinnakiri/esikaas.svg', alt: 'Priekinio viršelio kainos' },
                { src: '/hinnakiri/tagakaas.svg', alt: 'Galinio viršelio kainos' },
                { src: '/hinnakiri/tagakaane%20sisekülg.svg', alt: 'Vidinės galinio viršelio pusės kainos' },
                { src: '/hinnakiri/tavaleht.svg', alt: 'Vidinio puslapio kainos' },
                { src: '/hinnakiri/valemileht.svg', alt: 'Formulių lapo kainos' },
                { src: '/hinnakiri/vaheleht.svg', alt: 'Įklijos lapo kainos' },
              ].map(({ src, alt }) => (
                <div key={src} className="overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200/60">
                  <Image
                    src={src}
                    alt={alt}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Ankstesni reklamos partneriai</h2>
          <div className="h-1 w-12 rounded-full bg-blue-500 mb-8" aria-hidden />
          <p className="mb-8 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Iki šiol „Kiri“ reklamos partneriai buvo Estijoje, kur iniciatyva jau spėjo įsitvirtinti. 2026-aisiais pasieksime ir Lietuvą!
          </p>
          <div className="mt-4">
            <AutoScrollCarousel images={topRowLogos} wrapperClassName="w-full" slideSpacing={48} />
            <AutoScrollCarousel images={bottomRowLogos} wrapperClassName="w-full" slideSpacing={48} />
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Sąsiuvinių platinimas</h2>
          <div className="h-1 w-12 rounded-full bg-blue-500 mb-8" aria-hidden />
          <div className="space-y-10">
            <div className="space-y-4 max-w-2xl">
              <p className="text-lg text-slate-600 leading-relaxed">
                Sąsiuvinius paliekame studentams lengvai prieinamose vietose – bibliotekose, fojė ir judriuose
                koridoriuose, – kad kiekvienas galėtų laisvai juos pasiimti tik prireikus.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center">
              <div className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-sm">
                <Image
                  src="/vihikud%20treffneris.jpg"
                  alt="Studentams universitete palikti Kiri sąsiuviniai"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Universitetai, kuriuose Kiri sąsiuviniai pasieks Lietuvos studentus
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
                  {schoolLogos.map(({ src, alt, colSpan, large }) => (
                    <div
                      key={src}
                      className={`flex min-h-[7rem] w-full items-center justify-center px-1 ${
                        colSpan === 2 ? 'col-span-2' : ''
                      }`}
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={480}
                        height={120}
                        className={
                          colSpan === 2
                            ? 'h-[4.75rem] w-full max-h-[4.75rem] object-contain sm:h-[5.25rem] sm:max-h-[5.25rem]'
                            : large
                              ? 'h-[5.5rem] w-full max-h-[5.5rem] object-contain sm:h-24 sm:max-h-24'
                              : 'h-16 w-full max-h-16 object-contain sm:h-[4.25rem] sm:max-h-[4.25rem]'
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Mūsų komanda</h2>
          <div className="h-1 w-12 rounded-full bg-blue-500 mb-10" aria-hidden />
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {[
              { src: '/meie fotod/joonatan.jpg', name: 'Joonatan Ristmäe', zoom: true },
              { src: '/meie fotod/kazimieras.jpg', name: 'Kazimieras Jasaitis', zoom: false },
            ].map(({ src, name, zoom }) => (
              <div key={name} className="flex flex-col items-center text-center group">
                <div className="h-40 w-40 overflow-hidden rounded-full bg-slate-200 ring-4 ring-white shadow-lg shadow-slate-200/50">
                  <Image
                    src={src}
                    alt={name}
                    width={320}
                    height={320}
                    className={`h-full w-full object-cover ${zoom ? 'scale-150 object-[center_70%]' : ''}`}
                  />
                </div>
                <p className="mt-5 text-lg font-semibold text-slate-800">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 bg-slate-900 text-slate-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <span className="font-medium text-slate-400">© {new Date().getFullYear()} Kiri</span>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a href="mailto:info@kiri.lt" className="hover:text-white transition-colors">
              info@kiri.lt
            </a>
            <a href="tel:+37065671988" className="hover:text-white transition-colors">
              +370 656 71988
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}