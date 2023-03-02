import { LazyMotion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { FindMyDeckButton } from '../components/deck_finder';
import { YouTubeEmbed } from '../components/embed';
import { PageHeader } from '../components/header';
import { translationProps } from '../lib/translations';

function CedhBanner() {
  const router = useRouter();

  return (
    <div
      className="md:pt-18 mx-auto mb-12 md:mb-20 flex max-w-screen-2xl flex-col items-start px-4 md:px-12 pt-12 md:mt-8 lg:mt-12 lg:pt-24"
      style={{
        backgroundImage: `url(/cedh-guide_card-banner_v2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="mb-12 max-w-xl text-6xl font-bold leading-tight lg:text-7xl">
        cEDH é Commander, mas <em>bem</em> mais doido.
      </h1>

      <p className="text-2xl font-bold leading-relaxed">
        cEDH é um <em>metagame</em> e uma <em>mentalidade</em> aonde:
      </p>

      <ol className="list-inside list-decimal space-y-2 pt-4 text-2xl font-bold">
        <li>Todas as estratégias são aceitas.</li>
        <li>Decks podem afetar a mesa radicalmente desde o Turno 1.</li>
        <li>Jogadores apenas fazem jogadas que os ajudem a vencer.</li>
        <li>Proxies são bem vindas.</li>
      </ol>

      <div className="h-64 mt-8">
        <FindMyDeckButton />
      </div>
    </div>
  );
}

function Explanation() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center mb-12 md:mb-20">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Uma Explicação Mais Longa:
      </h1>
      <YouTubeEmbed src="https://www.youtube.com/embed/zH_ERuiwJWw" />
    </div>
  );
}

function ExampleGames() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center mb-12 md:mb-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Jogos de Exemplo:</h1>
      <div className="w-full grid xl:grid-cols-2 gap-8 justify-center">
        <YouTubeEmbed src="https://www.youtube.com/embed/zpnY5FpAlbY" />
        <YouTubeEmbed src="https://www.youtube.com/embed/rqjYgspEaCk" />
      </div>
    </div>
  );
}

function LearnMore() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center mb-12 md:mb-20 px-4">
      <h1 className="text-4xl font-bold mb-8">
        Gostaria de aprender mais e começar a jogar?
      </h1>

      <ol className="list-inside list-decimal space-y-2 pt-4 text-2xl">
        <li>
          <Link href="/philosophy" className="underline">
            Leia sobre
          </Link>{' '}
          a mentalidade e o metagame do cEDH.
        </li>
        <li>
          <Link href="/decks" className="underline">
            Veja algumas listas
          </Link>{' '}
          para estratégias testadas e aprovadas.
        </li>
        <li>
          <Link href="/stats" className="underline">
            Estude as estatísticas
          </Link>{' '}
          para aprender os padrões e quais são as cartas mais jogadas.
        </li>
        <li>
          <Link href="/articles" className="underline">
            Leia artigos 
          </Link>{' '}
          sobre cEDH.
        </li>
        <li>
          <Link href="/watch" className="underline">
            Assista vídeos
          </Link>{' '}
          para guerras na pilha, etapas de combate, e combos.
        </li>
        <li>
          <Link href="/play" className="underline">
            Jogue por webcam
          </Link>{' '}
          em comunidades inclusivas do Discord.
        </li>
        <li>
          <Link href="/track" className="underline">
            Monitore seus jogos
          </Link>{' '}
          para ajudar a comunidade a aprender e crescer.
        </li>
      </ol>
    </div>
  );
}

const loadFeatures = () =>
  import('../lib/framer_motion_features').then((f) => f.domAnimation);

export default function Home() {
  const { t } = useTranslation();

  return (
    <LazyMotion features={loadFeatures} strict>
      <NextSeo
        title={t('O que é cEDH?') ?? 'O que é cEDH?'}
        description="cEDH é Commander, mas muito mais doido"
        openGraph={{
          url: 'https://cedh.guide',
          images: [{ url: 'https://cedh.guide/cedh-guide_card-banner_v2.png' }],
        }}
      />

      <PageHeader />
      <CedhBanner />
      <Explanation />
      <ExampleGames />
      <LearnMore />
    </LazyMotion>
  );
}

export const getStaticProps = translationProps(['common']);
