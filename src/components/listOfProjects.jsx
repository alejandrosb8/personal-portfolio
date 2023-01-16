import React from 'react';
import { useTranslation } from 'react-i18next';
import GithubIcon from './icons/githubIcon';
import ArrowDemoIcon from './icons/arrowDemoIcon';

function ListOfProjects() {
  const { t } = useTranslation();
  return (
    <ul className="grid grid-cols-1 mt-10 gap-16 md:grid-cols-2 lg:grid-cols-3">
      <li>
        <article data-aos="zoom-in" data-aos-offset="100" className="bg-primary-lighter rounded-sm max-w-md">
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
        <article data-aos="zoom-in" data-aos-offset="100" className="bg-primary-lighter rounded-sm max-w-md">
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
        <article data-aos="zoom-in" data-aos-offset="100" className="bg-primary-lighter rounded-sm max-w-md">
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
  );
}

export default ListOfProjects;
