import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';
import { PageHeader } from '../components/header';
import { translationProps } from '../lib/translations';
import kenHeadshot from '../public/team/03-12-2022_500w_circle.png';
import minoHeadshot from '../public/team/cedh-guide_team_mino.jpg';
import mordHeadshot from '../public/team/cedh-guide_team_mord.jpg';
import spleenfaceHeadshot from '../public/team/cedh-guide_team_spleenface.jpg';
import ryanHeadshot from '../public/team/ryan.jpeg';
import squirrelmobHeadshot from '../public/team/squirrelmob.jpg';

function TeamMember({
  img,
  children,
}: PropsWithChildren<{ img: StaticImageData }>) {
  return (
    <div className="flex flex-col items-center prose prose-sm prose-invert mx-auto">
      <div className="relative h-64 w-64 md:h-48 md:w-48">
        <Image
          src={img}
          alt="headshot"
          fill
          className="rounded-full object-cover"
        />
      </div>

      {children}
    </div>
  );
}

function TeamMembers() {
  return (
    <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 pb-12">
      <TeamMember img={kenHeadshot}>
        <h2>Ken Baumann</h2>
        <p>
          <a href="https://kenbaumann.com/">Ken</a> é um dos 
          editores do cedh.guide. Ele comanda o Stacked EDH e quando o seu cérebro
          não está sendo devorado por Magic, é escritor.
        </p>
      </TeamMember>

      <TeamMember img={minoHeadshot}>
        <h2>Mino</h2>
        <p>
        <a href="https://twitter.com/its_mino_">Mino</a> é o desenvolvedor
          backend por trás da página de Estatísticas e importação de dados.
        </p>
      </TeamMember>

      <TeamMember img={mordHeadshot}>
        <h2>Mord</h2>
        <p>
        <a href="https://linktr.ee/mordamen">Yehuda</a>, também conhecido como Mord, é
          um artista digital assim como co-autor e administrador da cartilha da lista
          cEDH da Elsha, moderador do Discord da Estrid cEDH e um Especialista de Marketing
          Sênior para a Monarch Media.
        </p>
      </TeamMember>

      <TeamMember img={ryanHeadshot}>
        <h2>Ryan Delaney</h2>
        <p>
        <a href="https://rdel.dev">Ryan</a> é o desenvolvedor frontend do site.
        É um Desenvolvedor em uma startup de dia e um entusiasta de EDH o tempo inteiro,
        está se divertindo muito com esse site.
        </p>
      </TeamMember>

      <TeamMember img={spleenfaceHeadshot}>
        <h2>Spleenface</h2>
        <p>
          <a href="https://twitter.com/Spleenface">Morgan</a>, também conhecido como Spleenface,
          é um caçador de torneios cEDH, co-apresentador do podcast Into the North, membro dos grupo
          The Mind Sculptors e moderador tanto do subreddit CompetitiveEDH como do 
          Discord do cEDH Nexus.
        </p>
      </TeamMember>

      <TeamMember img={squirrelmobHeadshot}>
        <h2>Squirrelmob</h2>
        <p>
          <a href="https://twitter.com/SquirrelmobMTG">Squirrelmob</a>, também conhecido
          como James, é o curador do Projeto Metagame cEDH, administrador do cEDH Decklist
          Database, e um dos locutores das transmissões da Monarch Events. Isso é,
          quando ele não está lutando por um contracheque ensinando.
        </p>
      </TeamMember>
    </div>
  );
}

export default function TeamsPage() {
  return (
    <>
      <Head>
        <title>O que é o cEDH metagame?</title>
      </Head>

      <PageHeader />
      <div className="prose lg:prose-xl prose-invert mx-auto prose-h1:text-center prose-h1:underline mb-12 xl:mb-24">
        <h1>Quem faz o cedh.guide?</h1>
      </div>
      <TeamMembers />
    </>
  );
}

export const getStaticProps = translationProps(['common']);
