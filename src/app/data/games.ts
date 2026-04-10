import { encode } from '../utils/textEncoder';

export interface Game {
  id: string;
  title: string; // encoded
  url: string;
  category: string; // encoded
}

export const games: Game[] = [
  {
    id: '1',
    title: encode('Slope'),
    url: 'https://slope-game.github.io/runnew/slope/index.html',
    category: encode('Action')
  },
  {
    id: '2',
    title: encode('1v1.LOL'),
    url: 'https://1v1.lol/',
    category: encode('Shooting')
  },
  {
    id: '3',
    title: encode('Drift Hunters'),
    url: 'https://drift-hunters.github.io/',
    category: encode('Racing')
  },
  {
    id: '4',
    title: encode('Retro Bowl'),
    url: 'https://retrobowl.me/',
    category: encode('Sports')
  },
  {
    id: '5',
    title: encode('Tunnel Rush'),
    url: 'https://tunnel-rush.github.io/',
    category: encode('Action')
  },
  {
    id: '6',
    title: encode('Basketball Stars'),
    url: 'https://basketball-stars.github.io/',
    category: encode('Sports')
  },
  {
    id: '7',
    title: encode('Run 3'),
    url: 'https://run3.io/',
    category: encode('Action')
  },
  {
    id: '8',
    title: encode('Cookie Clicker'),
    url: 'https://orteil.dashnet.org/cookieclicker/',
    category: encode('Idle')
  },
  {
    id: '9',
    title: encode('2048'),
    url: 'https://play2048.co/',
    category: encode('Puzzle')
  },
  {
    id: '10',
    title: encode('Snake'),
    url: 'https://playsnake.org/',
    category: encode('Classic')
  },
  {
    id: '11',
    title: encode('Tetris'),
    url: 'https://tetris.com/play-tetris',
    category: encode('Puzzle')
  },
  {
    id: '12',
    title: encode('Subway Surfers'),
    url: 'https://subwaysurfers.io/',
    category: encode('Action')
  }
];
