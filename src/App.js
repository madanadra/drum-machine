import { useEffect, useState } from "react";

function App() {
  const [tap, setTap] = useState()
  const [on, setOn] = useState(false)

  const data = [
    { id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    { id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
    { id: 'Kick-and-Hat',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    { id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    { id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    { id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    },
    { id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    { id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    { id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
  ];

  useEffect (() => {
    document.addEventListener('keydown', handle);

    return () => {
      document.removeEventListener("keydown", handle);
    };
  }, [on]); // eslint-disable-line react-hooks/exhaustive-deps


  const handle = (e) => {
    if (on) {
      if (e.key === 'q' || e === 'q') {
        new Audio(data[0].url).play();
        setTap(0);
      } else if (e.key === 'w' || e === 'w') {
        new Audio(data[1].url).play();
        setTap(1);
      } else if (e.key === 'e' || e === 'e') {
        new Audio(data[2].url).play();
        setTap(2);
      } else if (e.key === 'a' || e === 'a') {
        new Audio(data[3].url).play();
        setTap(3);
      } else if (e.key === 's' || e === 's') {
        new Audio(data[4].url).play();
        setTap(4);
      } else if (e.key === 'd' || e === 'd') {
        new Audio(data[5].url).play();
        setTap(5);
      } else if (e.key === 'z' || e === 'z') {
        new Audio(data[6].url).play();
        setTap(6);
      } else if (e.key === 'x' || e === 'x') {
        new Audio(data[7].url).play();
        setTap(7);
      } else if (e.key === 'c' || e === 'c') {
        new Audio(data[8].url).play();
        setTap(8);
      }
    }
  }

  return (
    <div className="app">
      <div className="top">
        <p>{tap >= 0 ? data[tap].id : ''}</p>
        <label className="switch">
          <input type="checkbox" onChange={() => setOn(!on)} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="board">
        <div className={tap === 0 ? 'drum tap' : 'drum'} onClick={() => handle('q')}>Q</div>
        <div className={tap === 1 ? 'drum tap' : 'drum'} onClick={() => handle('w')}>W</div>
        <div className={tap === 2 ? 'drum tap' : 'drum'} onClick={() => handle('e')}>E</div>
        <div className={tap === 3 ? 'drum tap' : 'drum'} onClick={() => handle('a')}>A</div>
        <div className={tap === 4 ? 'drum tap' : 'drum'} onClick={() => handle('s')}>S</div>
        <div className={tap === 5 ? 'drum tap' : 'drum'} onClick={() => handle('d')}>D</div>
        <div className={tap === 6 ? 'drum tap' : 'drum'} onClick={() => handle('z')}>Z</div>
        <div className={tap === 7 ? 'drum tap' : 'drum'} onClick={() => handle('x')}>X</div>
        <div className={tap === 8 ? 'drum tap' : 'drum'} onClick={() => handle('c')}>C</div>
      </div>
    </div>
  );
}

export default App;
