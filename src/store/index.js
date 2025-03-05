import { create } from "zustand"

export const MODO_CRONOMETRO = {
    FOCO: {
        id: 'foco',
        nome: "Foco",
        frase: ['Otimize sua produtividade', 'mergulhe no que importa'],
        tempoInicialEmSegundos: 30,
    },
    DESCANSO_CURTO: {
        id: 'descanso-curto',
        nome: 'Desconso curto',
        frase: ['Que tal dar uma respirada', 'Faça uma pausa curta.'],
        tempoInicialEmSegundos: 5,
    },
    DESCANSO_LONGO: {
        id: 'descanso-longo',
        nome: 'Desconso longo',
        frase: ['Hora de voltar a superficie', 'Faça uma pausa lomga.'],
        tempoInicialEmSegundos: 15,
    }
}

// eslint-disable-next-line no-undef
export const useCronometoStore = create((set) => ({
    modoCronometo: MODO_CRONOMETRO.FOCO,
    tempoEmSegundos: MODO_CRONOMETRO.tempoInicialEmSegundos,

    setModoCronometro: (novoModo) => {
        set({
            modoCronometo: novoModo,
            tempoEmSegundos: novoModo.tempoInicialEmSegundos
        })
    }
}))
