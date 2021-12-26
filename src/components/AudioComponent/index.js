import Bank_Ohh from '../../assets/audio_files/Bank_Ohh.mp3';
import Brk_Snr from '../../assets/audio_files/Brk_Snr.mp3';
import Closed_HH from '../../assets/audio_files/Cev_H2.mp3';
import Chord_1 from '../../assets/audio_files/Chord_1.mp3';
import Chord_2 from '../../assets/audio_files/Chord_2.mp3';
import Chord_3 from '../../assets/audio_files/Chord_3.mp3';
import Closed_HHH from '../../assets/audio_files/Closed_HH.mp3';
import Dsc_Oh from '../../assets/audio_files/Dsc_Oh.mp3';
import Heater_1 from '../../assets/audio_files/Heater-1.mp3';
import Heater_2 from '../../assets/audio_files/Heater-2.mp3';
import Heater_3 from '../../assets/audio_files/Heater-3.mp3';
import Heater_4 from '../../assets/audio_files/Heater-4_1.mp3';
import Clap from '../../assets/audio_files/Heater-6.mp3';
import Kick_n_Hat from '../../assets/audio_files/Kick_n_Hat.mp3';
import Kick from '../../assets/audio_files/Kick.mp3';
import Punchy_Kick from '../../assets/audio_files/punchy_kick_1.mp3';
import Shaker from '../../assets/audio_files/Shaker.mp3';
import Side_Stick from '../../assets/audio_files/Side_stick.mp3';

const AudioBank = {
  Heater: {
      Q: [Heater_1, "Heater 1"],      
      W: [Heater_2, "Heater 2"],
      E: [Heater_3, "Heater 3"],
      A: [Heater_4, "Heater 4"],
      S: [Clap, "Clap"],
      D: [Bank_Ohh, "Open HH"],
      Z: [Kick_n_Hat, "Kick n Hat"],
      X: [Kick, "Kick"],
      C: [Closed_HH, "Closed HH"],
          },
  Piano: {
    Q: [Chord_1, "Chord 1"],
    W: [Chord_2, "Chord 2"],
    E: [Chord_3, "Chord 3"],
    A: [Shaker, "Shaker"],
    S: [Closed_HHH, "Open HH"],
    D: [Dsc_Oh, "Closed HH"],
    Z: [Punchy_Kick, "Punchy Kick"],
    X: [Side_Stick, "Kick"],
    C: [Brk_Snr, "Snare"],
          }
}  

export default AudioBank;