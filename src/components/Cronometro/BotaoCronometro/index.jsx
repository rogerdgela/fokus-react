import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseImg from "/src/assets/imgs/pause.png";
import audioPlaySom from "/src/assets/sons/play.wav";
import audioPauseSom from "/src/assets/sons/pause.mp3";
import { useCronometroStore } from "../../../store";

export default function BotaoCronometro() {
  const intervaloId = useCronometroStore((estado) => estado.intervaloId);
  const iniciarCronometro = useCronometroStore((estado) => estado.iniciarCronometro);

  const textoIniciarOuPausar = intervaloId ? "Pausar" : "Iniciar";
  const iconeIniciarOuPausar = intervaloId ? pauseImg : play_arrowImg;

  return (
    <div className={styles["cronometer__primary-button-wrapper"]}>
      <button className={styles["cronometer__primary-button"]}
        onClick={iniciarCronometro}
      >
        <img className={styles["cronometer__primary-button-icon"]} src={iconeIniciarOuPausar} alt="" />
        <span>{textoIniciarOuPausar}</span>
      </button>
    </div>
  );
}
