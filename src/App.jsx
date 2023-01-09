import { useTranslation } from 'react-i18next';
import TranslateIcon from './components/translateButton';
import ListOfBadges from './components/listOfBadges';
import GithubIcon from './components/icons/githubIcon';
import ArrowDemoIcon from './components/icons/arrowDemoIcon';
import AOS from 'aos';
import React from 'react';
import 'aos/dist/aos.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'Express.js',
  'Python',
  'SQL',
  'Tailwind',
  'Git',
  'GitHub',
  'Figma',
  'Linux',
];

function App() {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  document.documentElement.lang = i18n.language;

  return (
    <div className="w-full bg-primary-darker">
      <header className="flex justify-end items-center p-4 w-full gap-x-2">
        <span className="text-md text-secondary-paragraph">{t('translate-button')}</span>
        <TranslateIcon />
      </header>
      <main className="w-full">
        <section className="flex flex-col justify-center items-center p-4">
          <h1
            data-aos="zoom-in"
            once
            className="font-mono text-center text-4xl leading-relaxed text-secondary-title mt-20"
          >
            {t('section.welcome.title')}
            <span
              before=""
              className="before:content-[attr(before)] inline-block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-rotate-6 before:left-0 before:w-full before:h-4/6 before:bg-accent before:-z-10 z-10"
            >
              {' '}
              Alejandro
            </span>
          </h1>
          <span
            data-aos="zoom-in"
            once
            className="font-sans text-center text-xl mt-2 text-secondary-paragraph max-w-md"
          >
            {t('section.welcome.subtitle')}
          </span>
          <div className="flex items-center justify-center mt-16 min-h-[210px]">
            <img data-aos="zoom-in" once src="/flatcat.png" alt="black cat" className="max-w-[200px]" />
          </div>
        </section>
        <section className="bg-primary-lighter p-8 pb-12 mt-16">
          <div className="flex flex-col justify-center items-center mt-12 max-w-2xl mx-auto">
            <h2
              data-aos="zoom-in"
              data-aos-offset="100"
              once
              className="text-secondary-title text-3xl font-mono font-semibold"
            >
              {t('section.about.title')}
            </h2>
            <p data-aos="zoom-in" once="False" className="text-secondary-paragraph font-sans text-lg mt-10">
              {t('section.about.whoami')}
            </p>
            <p data-aos="zoom-in" once className="text-secondary-paragraph font-sans text-lg mt-4">
              {t('section.about.mytools')}
            </p>
            <ListOfBadges badges={skills} />
          </div>
        </section>
        <section className="bg-primary-darker p-8">
          <div className="flex flex-col justify-center items-center mt-12">
            <h2 className="text-secondary-title text-3xl font-mono font-semibold">{t('section.work.title')}</h2>

            <ul className="grid grid-cols-1 mt-10 gap-16 md:grid-cols-2 lg:grid-cols-3">
              <li>
                <article
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  once
                  className="bg-primary-lighter rounded-sm max-w-md"
                >
                  <img src="/pokedex.png" alt="pokedex project preview" />
                  <div className="p-4">
                    <h3 className="text-secondary-title text-2xl font-mono text-center">Pokedex</h3>
                    <div className="flex items-center justify-center gap-x-6 mt-6">
                      <a
                        href="https://github.com/alejandrosb8/pokedex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-title border border-secondary-title rounded-sm w-[100px] h-[40px] text-center flex gap-x-1 items-center justify-center hover:bg-accent hover:border-0"
                      >
                        <GithubIcon />
                        {t('code')}
                      </a>
                      <a
                        href="https://alejandrosb8.github.io/pokedex/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-title border border-secondary-title rounded-sm w-[100px] h-[40px] text-center flex gap-x-1 items-center justify-center hover:bg-accent hover:border-0"
                      >
                        <ArrowDemoIcon />
                        Demo
                      </a>
                    </div>
                  </div>
                </article>
              </li>
              <li className="">
                <article
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  once
                  className="bg-primary-lighter rounded-sm max-w-md"
                >
                  <img src="/stormlightgame.png" alt="memory game project preview" />
                  <div className="p-4">
                    <h3 className="text-secondary-title text-2xl font-mono text-center">Stormlight Memory Game</h3>
                    <div className="flex items-center justify-center gap-x-6 mt-6">
                      <a
                        href="https://github.com/alejandrosb8/stormlight-memory-game"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-title border border-secondary-title rounded-sm w-[100px] h-[40px] text-center flex gap-x-1 items-center justify-center hover:bg-accent hover:border-0"
                      >
                        <GithubIcon />
                        {t('code')}
                      </a>
                      <a
                        href="https://alejandrosb8.github.io/stormlight-memory-game/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-title border border-secondary-title rounded-sm w-[100px] h-[40px] text-center flex gap-x-1 items-center justify-center hover:bg-accent hover:border-0"
                      >
                        <ArrowDemoIcon />
                        Demo
                      </a>
                    </div>
                  </div>
                </article>
              </li>
              <li className="">
                <article
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  once
                  className="bg-primary-lighter rounded-sm max-w-md"
                >
                  <img src="/tictokgame.png" alt="pokedex project preview" />
                  <div className="p-4">
                    <h3 className="text-secondary-title text-2xl font-mono text-center">TicTacToe</h3>
                    <div className="flex items-center justify-center gap-x-6 mt-6">
                      <a
                        href="https://github.com/alejandrosb8/TicTacToe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-title border border-secondary-title rounded-sm w-[100px] h-[40px] text-center flex gap-x-1 items-center justify-center hover:bg-accent hover:border-0"
                      >
                        <GithubIcon />
                        {t('code')}
                      </a>
                      <a
                        href="https://alejandrosb8.github.io/TicTacToe/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-title border border-secondary-title rounded-sm w-[100px] h-[40px] text-center flex gap-x-1 items-center justify-center hover:bg-accent hover:border-0"
                      >
                        <ArrowDemoIcon />
                        Demo
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-primary-lighter p-8 pb-12 mt-16">
          <div className="flex flex-col justify-center items-center mt-12 max-w-2xl mx-auto">
            <h2 data-aos="zoom-in" className="text-secondary-title text-center text-3xl font-mono font-semibold">
              {t('section.contact.title')}
            </h2>
            <form
              data-aos="zoom-in"
              className="mt-8 bg-primary-darker p-8 flex flex-col justify-center items-center w-full max-w-[600px] rounded-sm"
            >
              <div className="w-full">
                <label htmlFor="subject" className="text-secondary-paragraph text-md">
                  {t('section.contact.subject')}
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder={t('section.contact.subject-placeholder')}
                  className="bg-primary-lighter border-2 mt-1 border-secondary-title w-full p-2 text-secondary-title hover:outline-none focus:outline-none rounded-sm hover:border-accent"
                />
              </div>
              <div className="mt-5 w-full">
                <label htmlFor="body" className="text-secondary-paragraph text-md">
                  {t('section.contact.body')}
                </label>
                <textarea
                  name=""
                  id="body"
                  cols="30"
                  rows="10"
                  placeholder={t('section.contact.body-placeholder')}
                  className="bg-primary-lighter resize-none border-2 mt-1 rounded-sm border-secondary-title w-full p-2 text-secondary-title hover:outline-none focus:outline-none hover:border-accent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-12 mt-8 bg-accent text-secondary-title rounded-sm hover:bg-accent-darker transition-colors text-xl font-semibold"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
