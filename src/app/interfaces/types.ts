export interface PromocoesRes {
  promocoes: any[];
}
export interface Promocoes {
  id: number;
  destino: string;
  imagem: string;
  preco: number;
}

export interface Depoimentos {
  id: number;
  texto: string;
  autor: string;
  avatar: string;
}

export interface Estados {
  id: number;
  nome: string;
  sigla: string;
}

export interface Passageiros {
  adultos: number,
  criancas: number,
  bebes: number,
  categoria: string
}
