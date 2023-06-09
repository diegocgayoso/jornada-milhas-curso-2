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

export interface Estado {
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

export interface Companhia {
  id:   number;
  nome: string;
}

export interface Resultado {
  paginaAtual:  number;
  ultimaPagina: number;
  total:        number;
  resultado:    Passagem[];
}

export interface Passagem {
  tipo:         string;
  precoIda:     number;
  precoVolta:   number;
  taxaEmbarque: number;
  conexoes:     number;
  tempoVoo:     number;
  origem:       Estado;
  destino:      Estado;
  companhia:    Companhia;
  dataIda:      Date;
  dataVolta:    Date;
}
