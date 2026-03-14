import type { Especialidade } from "../types/especialidade.ts"; 
export interface Medico{
    id: number;
    nome: String;
    crm: String;
    especialidade: Especialidade;
    ativo: boolean
}