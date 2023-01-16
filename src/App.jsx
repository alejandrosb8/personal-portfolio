import { useTranslation } from 'react-i18next';
import TranslateIcon from './components/translateButton';
import ListOfBadges from './components/listOfBadges';
import ListOfProjects from './components/listOfProjects';
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
        <section className="flex flex-col justify-center items-center p-4 min-h-screen">
          <div className="flex flex-col justify-center items-center relative -top-16">
            <h1 data-aos="zoom-in" className="font-mono text-center text-4xl leading-relaxed text-secondary-title">
              {t('section.welcome.title')}
              <span
                before=""
                className="before:content-[attr(before)] inline-block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-rotate-6 before:left-0 before:w-full before:h-4/6 before:bg-accent before:-z-10 z-10"
              >
                {' '}
                Alejandro
              </span>
            </h1>
            <span data-aos="zoom-in" className="font-sans text-center text-xl mt-2 text-secondary-paragraph max-w-md">
              {t('section.welcome.subtitle')}
            </span>
            <div className="flex items-center justify-center mt-16">
              <img data-aos="zoom-in" src="/flatcat.png" alt="black cat" className="max-w-[200px]" />
            </div>
          </div>
        </section>
        <section className="bg-primary-lighter p-8 min-h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center max-w-2xl mx-auto">
            <h2
              data-aos="zoom-in"
              data-aos-offset="100"
              className="text-secondary-title text-3xl font-mono font-semibold"
            >
              {t('section.about.title')}
            </h2>
            <p data-aos="zoom-in" className="text-secondary-paragraph font-sans text-lg mt-10">
              {t('section.about.whoami')}
            </p>
            <p data-aos="zoom-in" className="text-secondary-paragraph font-sans text-lg mt-4">
              {t('section.about.mytools')}
            </p>
            <ListOfBadges badges={skills} />
          </div>
        </section>
        <section className="bg-primary-darker p-8 min-h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-12">
            <h2 className="text-secondary-title text-3xl font-mono font-semibold">{t('section.work.title')}</h2>
            <ListOfProjects />
          </div>
        </section>
        <section className="bg-primary-lighter p-8 min-h-screen flex flex-col justify-center items-center">
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
