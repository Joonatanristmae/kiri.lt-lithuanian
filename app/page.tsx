import Image from 'next/image'
import AutoScrollCarousel from '../components/AutoScrollCarousel'
import AnimatedCounter from '../components/AnimatedCounter'

export default function Home() {
  const topRowLogos = [
    { src: '/reklaampartnerid/autosõit.svg', alt: 'Autosõit' },
    { src: '/reklaampartnerid/tallinna ülikool.svg', alt: 'Tallinn University' },
    { src: '/reklaampartnerid/tallinna_ehituskool_logo_vector_mp.svg', alt: 'Tallinn School of Construction' },
    { src: '/reklaampartnerid/tartu ülikool.svg', alt: 'University of Tartu' },
    { src: '/reklaampartnerid/kaitsevägi.svg', alt: 'Estonian Defence Forces' },
    { src: '/reklaampartnerid/peaasi.svg', alt: 'MTÜ Peaasi' },
    { src: '/reklaampartnerid/bfm-kaksik-eng.svg', alt: 'BFM' }
  ]
  const bottomRowLogos =  [
    { src: '/reklaampartnerid/okoloogia-ja-maateaduste-instituut.png', alt: 'Institute of Ecology and Earth Sciences' },
    { src: '/reklaampartnerid/johan_skytte.png', alt: 'Johan Skytte' },
    { src: '/reklaampartnerid/venividivici.png', alt: 'VeniVidiVici' },
    { src: '/reklaampartnerid/üti.png', alt: 'ÜTI' },
    { src: '/reklaampartnerid/tktk.png', alt: 'Tallinn University of Technology' },
    { src: '/reklaampartnerid/tallinna tervishoiu kõrgkool.png', alt: 'Tallinn Health Care College' },
  ]

  const schoolLogos = [
    { src: '/koolid/gag-logo.svg', alt: 'Gustav Adolf Gymnasium' },
    { src: '/koolid/loksa-logo.svg', alt: 'Loksa Gymnasium' },
    { src: '/koolid/kehra-logo.svg', alt: 'Kehra Gymnasium' },
    { src: '/koolid/tamme-logo.svg', alt: 'Tartu Tamme School' },
    { src: '/koolid/hugo-logo.svg', alt: 'Hugo Treffner Gymnasium' },
    { src: '/koolid/peterson-logo.svg', alt: 'Tartu Karlova School / Peterson' },
    { src: '/koolid/laagna-logo.svg', alt: 'Laagna Gymnasium' },
    { src: '/koolid/mustamäe-logo-1.svg', alt: 'Mustamäe Gymnasium' },
    { src: '/koolid/westholm-logo.svg', alt: 'Tallinn Westholm Gymnasium' },
    { src: '/koolid/arte-logo.svg', alt: 'Tallinn Arte Gymnasium' },
    { src: '/koolid/härma-logo.svg', alt: 'Miina Härma Gymnasium' },
    { src: '/koolid/taiskasvanute-tartu-logo.svg', alt: 'Tartu Adult Gymnasium' },
    { src: '/koolid/lähte-logo.svg', alt: 'Lähte School' },
    { src: '/koolid/nõo-logo.svg', alt: 'Nõo Secondary School' },
    { src: '/koolid/merekool-logo.svg', alt: 'Maritime School' },
    { src: '/koolid/annelinna-logo.svg', alt: 'Annelinna Gymnasium' },
    { src: '/koolid/jaan poska gümnaasium 1.svg', alt: 'Jaan Poska Gymnasium' },
    { src: '/koolid/keila-logo.svg', alt: 'Keila School' },
    { src: '/koolid/pelgulinna-logo.svg', alt: 'Pelgulinna Gymnasium' },
    { src: '/koolid/luunja-logo.svg', alt: 'Luunja School' },
    { src: '/koolid/mustamäe-logo.svg', alt: 'Mustamäe School' },
    { src: '/koolid/kose-logo.svg', alt: 'Kose Gymnasium' },
    { src: '/koolid/vanalinna-täiskasvanute-logo.svg', alt: 'Vanalinn Adult Gymnasium' },
    { src: '/koolid/tabasalu-logo.svg', alt: 'Tabasalu School' },
    { src: '/koolid/elva-logo.svg', alt: 'Elva Gymnasium' },
    { src: '/koolid/õismäe-logo.svg', alt: 'Õismäe School' },
    { src: '/koolid/ülenurme-logo.svg', alt: 'Ülenurme Gymnasium' },
    { src: '/koolid/rõngu-logo.svg', alt: 'Rõngu Secondary School' },
  ]

  const schoolMidpoint = Math.ceil(schoolLogos.length / 2)
  const schoolTopRow = schoolLogos.slice(0, schoolMidpoint)
  const schoolBottomRow = schoolLogos.slice(schoolMidpoint)

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-24 md:flex-row md:items-start">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-12">
              <Image
                src="/vihku%20logo.svg"
                alt="Vihku logo"
                width={220}
                height={59}
                className="h-14 w-auto"
                priority
              />
            </div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              We give away free notebooks to university
              students with <em className="font-semibold italic text-blue-600"> your advertising</em>
            </h1>
          </div>
          <div className="flex-1 md:mt-[8rem]">
            <Image
              src="/Group%2070.svg"
              alt=""
              width={960}
              height={720}
              className="w-full h-auto object-contain scale-110 origin-top"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">What is Vihku?</h2>
              <div className="h-1 w-12 rounded-full bg-blue-500 mb-6" aria-hidden />
              <div className="mb-6 flex flex-wrap items-baseline gap-2 text-blue-600">
                <span className="text-xl font-semibold sm:text-2xl text-slate-700">
                  Every year,
                </span>
                <AnimatedCounter
                  to={20000}
                  durationMs={2000}
                  className="text-4xl font-extrabold sm:text-5xl text-blue-600"
                />
                <span className="text-xl font-semibold sm:text-2xl text-slate-700">
                  notebooks find an owner
                </span>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Vihku is a free notebook for high school students that we can distribute thanks to the ads inside.
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Each Vihku includes a formula sheet and a ruler. We only run useful ads: social campaigns, interest-based
                education and further study opportunities.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/60">
              <Image
                src="/vihikud%20murus.jpeg"
                alt="Stack of Vihku notebooks"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Want to become a partner?</h2>
          <div className="h-1 w-12 rounded-full bg-blue-500 mb-8" aria-hidden />
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Price list</h3>
            <p className="mb-8 text-lg text-slate-600">
              Prices are per 5,000 notebooks.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { src: '/hinnakiri/esikaas.png', alt: 'Front cover price list' },
                { src: '/hinnakiri/tagakaas.png', alt: 'Back cover price list' },
                { src: '/hinnakiri/tagakaane-sisekulg.png', alt: 'Back cover inner page price list' },
                { src: '/hinnakiri/tavaleht.png', alt: 'Standard page price list' },
                { src: '/hinnakiri/valemileht.png', alt: 'Formula sheet price list' },
                { src: '/hinnakiri/vaheleht.png', alt: 'Insert page price list' },
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
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Previous advertising partners</h2>
          <div className="h-1 w-12 rounded-full bg-blue-500 mb-8" aria-hidden />
          <div className="mt-4">
            <AutoScrollCarousel images={topRowLogos} wrapperClassName="w-full" />
            <AutoScrollCarousel images={bottomRowLogos} wrapperClassName="w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Notebook distribution</h2>
          <div className="h-1 w-12 rounded-full bg-blue-500 mb-8" aria-hidden />
          <div className="space-y-10">
            <div className="space-y-4 max-w-2xl">
              <p className="text-lg text-slate-600 leading-relaxed">
                Notebooks reach high school students in cooperation with the Estonian Union of Student Councils – no need
                to worry about Vihkud gathering dust on a shelf.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We place notebooks in easily accessible spots – libraries, foyers, atriums and busy corridors – so
                students can take them freely.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center">
              <div className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-sm">
                <Image
                  src="/vihikud%20treffneris.jpg"
                  alt="Notebooks available to students at school"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Some schools where Vihkud reach students
                </p>
                <AutoScrollCarousel images={schoolTopRow} wrapperClassName="w-full" />
                <AutoScrollCarousel images={schoolBottomRow} wrapperClassName="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Our team</h2>
          <div className="h-1 w-12 rounded-full bg-blue-500 mb-10" aria-hidden />
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {[
              { src: '/meie fotod/joonatan.jpg', name: 'Joonatan Ristmäe' },
              { src: '/meie fotod/kazimieras.jpg', name: 'Kazimieras Jasaitis' },
            ].map(({ src, name }) => (
              <div key={name} className="flex flex-col items-center text-center group">
                <div className="h-40 w-40 overflow-hidden rounded-full bg-slate-200 ring-4 ring-white shadow-lg shadow-slate-200/50">
                  <Image
                    src={src}
                    alt={name}
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
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
          <span className="font-medium text-slate-400">© {new Date().getFullYear()} Vihku</span>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a href="mailto:info@vihku.ee" className="hover:text-white transition-colors">
              info@vihku.ee
            </a>
            <a href="tel:+37253048150" className="hover:text-white transition-colors">
              +372 5304 8150
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}