import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Particles } from './components/Particles';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { T, decode } from './utils/textEncoder';
import { games } from './data/games';

type Screen = 'homework' | 'fade' | 'boot' | 'main' | 'simulations' | 'apps' | 'settings' | 'terminal' | 'admin' | 'game';

export default function App() {
  const [screen, setScreen] = useState<Screen>('homework');
  const [bootProgress, setBootProgress] = useState(0);
  const [bootText, setBootText] = useState<string[]>([]);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const [activeAnnouncement, setActiveAnnouncement] = useState('');
  const [selectedGame, setSelectedGame] = useState<string>('');
  const [terminalLines, setTerminalLines] = useState<string[]>(['cfqzmlxn v8.4.7', 'mpca \'facke\' sbx gzsbxlqmgxz']);

  useEffect(() => {
    if (screen === 'fade') {
      const timer = setTimeout(() => {
        setScreen('boot');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  useEffect(() => {
    if (screen === 'boot') {
      const bootSequence = [
        'gzgmgqkgtgzd cfqzmlxn v8.4.7...',
        'kxqrgzd nmnmal sbxmdxze...',
        'nsqbmgzd excgezm lxryka...',
        'gzgmgqkgtgzd zajemq sbxyammxb...',
        'kxqrgzd dbqcfge rbgiabn...',
        'wxxm nayazea exlckama!'
      ];

      let index = 0;
      const interval = setInterval(() => {
        if (index < bootSequence.length) {
          setBootText(prev => [...prev, bootSequence[index]]);
          setBootProgress((index + 1) / bootSequence.length * 100);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setScreen('main');
          }, 500);
        }
      }, 300);

      return () => clearInterval(interval);
    }
  }, [screen]);

  const handleAdminLogin = () => {
    if (adminPassword === 'Oliver3230') {
      setIsAdminAuth(true);
      setAdminPassword('');
    } else {
      alert(decode('gzeqkgr cqnnixbr'));
    }
  };

  const handleShutdown = () => {
    if (confirm(decode('qba pxy nyba pxy iqzm mx nfym rxi mfa ngma?'))) {
      setScreen('fade');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  const handleRestart = () => {
    if (confirm(decode('qba pxy nyba pxy iqzm mx bamnqbm mfa nabiabn?'))) {
      setScreen('boot');
      setBootText([]);
      setBootProgress(0);
    }
  };

  if (screen === 'homework') {
    return (
      <div className="size-full bg-white flex items-center justify-center p-8">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl font-bold mb-8 text-gray-900"><T>lqmf fxlaixbj - ekqcmab 5</T></h1>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800"><T>ayankxa 8</T></h2>
            <p className="text-lg mb-4 text-gray-700"><T>nxkia mfa sxkkxigzd ayqmgxz:</T></p>
            <div className="bg-white p-4 rounded border border-gray-200 mb-4">
              <p className="text-xl font-mono text-gray-900">2x + 14 = 30</p>
            </div>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 text-gray-700">
                <input type="radio" name="answer" className="w-4 h-4" />
                <span><T>o = 1</T></span>
              </label>
              <label className="flex items-center space-x-3 text-gray-700">
                <input type="radio" name="answer" className="w-4 h-4" />
                <span><T>o = 77</T></span>
              </label>
              <label className="flex items-center space-x-3 text-gray-700">
                <input type="radio" name="answer" className="w-4 h-4" />
                <span><T>o = 6</T></span>
              </label>
              <label className="flex items-center space-x-3 text-gray-700">
                <input type="radio" name="answer" className="w-4 h-4" />
                <span><T>o = 5</T></span>
              </label>
            </div>
          </div>
          <button
            onClick={() => setScreen('fade')}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <T>zaom qyamnmgxz</T>
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'fade') {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="size-full bg-black"
      />
    );
  }

  if (screen === 'boot') {
    return (
      <div className="size-full bg-black text-green-400 font-mono p-8 overflow-auto">
        <div className="max-w-3xl">
          {bootText.map((line, i) => (
            <div key={i} className="mb-2">
              <T>{line}</T>
            </div>
          ))}
          <div className="mt-6">
            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-green-400 h-full"
                initial={{ width: 0 }}
                animate={{ width: `${bootProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="text-center mt-2">{Math.round(bootProgress)}%</div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'game' && selectedGame) {
    return (
      <>
        <AnnouncementBanner
          message={activeAnnouncement}
          onClose={() => setActiveAnnouncement('')}
        />
        <div className="size-full bg-black flex flex-col">
        <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <button
            onClick={() => {
              setScreen('simulations');
              setSelectedGame('');
            }}
            className="text-white px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
          >
            <T>← wqej</T>
          </button>
        </div>
        <iframe
          src={selectedGame}
          className="flex-1 w-full border-0"
          title="game"
        />
        </div>
      </>
    );
  }

  if (screen === 'simulations') {
    const categories = Array.from(new Set(games.map(g => g.category)));

    return (
      <>
        <AnnouncementBanner
          message={activeAnnouncement}
          onClose={() => setActiveAnnouncement('')}
        />
        <div className="size-full bg-black text-white overflow-auto">
        <Particles />
        <div className="relative z-10 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold"><T>nglykmgxzn kgwbqbp</T></h1>
            <button
              onClick={() => setScreen('main')}
              className="px-6 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <T>← wqej</T>
            </button>
          </div>

          {categories.map(category => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4"><T>{category}</T></h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {games.filter(g => g.category === category).map(game => (
                  <button
                    key={game.id}
                    onClick={() => {
                      setSelectedGame(game.url);
                      setScreen('game');
                    }}
                    className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-all hover:scale-105"
                  >
                    <div className="text-center font-semibold">
                      <T>{game.title}</T>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }

  if (screen === 'terminal') {
    return (
      <>
        <AnnouncementBanner
          message={activeAnnouncement}
          onClose={() => setActiveAnnouncement('')}
        />
        <div className="size-full bg-black text-green-400 font-mono overflow-auto">
        <Particles />
        <div className="relative z-10 p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl"><T>mablgzqk</T></h1>
            <button
              onClick={() => setScreen('apps')}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              <T>← wqej</T>
            </button>
          </div>

          <div className="space-y-2 mb-4">
            {terminalLines.map((line, i) => (
              <div key={i}><T>{line}</T></div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <span>$</span>
            <input
              type="text"
              className="flex-1 bg-transparent border-none outline-none text-green-400"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const value = e.currentTarget.value;
                  setTerminalLines(prev => [...prev, `$ ${value}`, 'exllqzr zxm sxyzr']);
                  e.currentTarget.value = '';
                }
              }}
            />
          </div>
        </div>
      </div>
      </>
    );
  }

  if (screen === 'admin') {
    if (!isAdminAuth) {
      return (
        <>
          <AnnouncementBanner
            message={activeAnnouncement}
            onClose={() => setActiveAnnouncement('')}
          />
          <div className="size-full bg-black text-white flex items-center justify-center">
          <Particles />
          <div className="relative z-10 bg-gray-900 p-8 rounded-lg max-w-md w-full">
            <h1 className="text-2xl font-bold mb-6"><T>qrlgz cqzak</T></h1>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
              placeholder={decode('azamab cqnnixbr')}
              className="w-full px-4 py-2 bg-gray-800 rounded mb-4 outline-none"
            />
            <div className="flex space-x-4">
              <button
                onClick={handleAdminLogin}
                className="flex-1 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                <T>kxdgz</T>
              </button>
              <button
                onClick={() => setScreen('apps')}
                className="flex-1 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
              >
                <T>eqzeak</T>
              </button>
            </div>
          </div>
        </div>
        </>
      );
    }

    return (
      <>
        <AnnouncementBanner
          message={activeAnnouncement}
          onClose={() => setActiveAnnouncement('')}
        />
        <div className="size-full bg-black text-white overflow-auto">
        <Particles />
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold"><T>qrlgz cqzak</T></h1>
            <button
              onClick={() => {
                setIsAdminAuth(false);
                setScreen('apps');
              }}
              className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
            >
              <T>← wqej</T>
            </button>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-4"><T>dkxwqk qzzxyzealazmn</T></h2>
            <textarea
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              placeholder={decode('azamab dkxwqk qzzxyzealazmn')}
              className="w-full px-4 py-2 bg-gray-800 rounded h-32 outline-none mb-4"
            />
            <button
              onClick={() => {
                if (announcement.trim()) {
                  setActiveAnnouncement(announcement);
                  setAnnouncement('');
                  alert(decode('qzzxyzealazmn nazm mx qkk ynabn!'));
                }
              }}
              className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              <T>nazar qzzxyzealazmn</T>
            </button>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4"><T>nabiabn exzmbxk</T></h2>
            <div className="space-y-4">
              <button
                onClick={handleRestart}
                className="w-full px-6 py-3 bg-yellow-600 rounded hover:bg-yellow-700"
              >
                <T>bamnqbm nabiabn</T>
              </button>
              <button
                onClick={handleShutdown}
                className="w-full px-6 py-3 bg-red-600 rounded hover:bg-red-700"
              >
                <T>nfym rxi ngma</T>
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  if (screen === 'apps') {
    const apps = [
      { name: 'nammgzdn', action: () => setScreen('settings') },
      { name: 'mablgzqk', action: () => setScreen('terminal') },
      { name: 'qrlgz cqzak', action: () => setScreen('admin') }
    ];

    return (
      <>
        <AnnouncementBanner
          message={activeAnnouncement}
          onClose={() => setActiveAnnouncement('')}
        />
        <div className="size-full bg-black text-white flex items-center justify-center">
        <Particles />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-12 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            <T>qccn</T>
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {apps.map((app, i) => (
              <button
                key={i}
                onClick={app.action}
                className="w-40 h-40 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center"
              >
                <span className="text-xl font-semibold"><T>{app.name}</T></span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setScreen('main')}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
          >
            <T>← wqej mx lqgz</T>
          </button>
        </div>
      </div>
      </>
    );
  }

  if (screen === 'settings') {
    return (
      <>
        <AnnouncementBanner
          message={activeAnnouncement}
          onClose={() => setActiveAnnouncement('')}
        />
        <div className="size-full bg-black text-white overflow-auto">
        <Particles />
        <div className="relative z-10 p-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold"><T>nammgzdn</T></h1>
            <button
              onClick={() => setScreen('apps')}
              className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
            >
              <T>← wqej</T>
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2"><T>iabngxz</T></h2>
              <p className="text-gray-400"><T>cfqzmlxn v8.4.7</T></p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2"><T>mfala</T></h2>
              <select className="w-full px-4 py-2 bg-gray-800 rounded">
                <option value="dark"><T>rqbj</T></option>
                <option value="light"><T>kgdfm</T></option>
              </select>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2"><T>qwxym</T></h2>
              <p className="text-gray-400"><T>cfqzmlxn gn q naeqba xn sxb aqyeqmgxzqk cynx</T></p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  // Main PhantomOS screen
  return (
    <>
      <AnnouncementBanner
        message={activeAnnouncement}
        onClose={() => setActiveAnnouncement('')}
      />
      <div className="size-full bg-black text-white flex items-center justify-center">
        <Particles />
        <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-7xl font-bold mb-16 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.7)]"
        >
          <T>cfqzmlxn</T>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          <button
            onClick={() => setScreen('simulations')}
            className="px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xl hover:bg-white/20 transition-all hover:scale-105"
          >
            <T>nglykmgxzn</T>
          </button>
          <button
            onClick={() => setScreen('apps')}
            className="px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xl hover:bg-white/20 transition-all hover:scale-105"
          >
            <T>qccn</T>
          </button>
          <button
            onClick={() => setScreen('settings')}
            className="px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xl hover:bg-white/20 transition-all hover:scale-105"
          >
            <T>nammgzdn</T>
          </button>
        </motion.div>
      </div>
    </div>
    </>
  );
}