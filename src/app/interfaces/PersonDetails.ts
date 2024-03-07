import { Person } from "./Person"

export interface PersonDetails extends Person {
    "ultimaOcorrencia": {
        "dtDesaparecimento": string,
        "localDesaparecimentoConcat": string,
        "ocorrenciaEntrevDesapDTO"?: {
            "informacao": string,
            "vestimentasDesaparecido": string
        }
    },
}