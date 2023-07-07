export interface RptaSchool {
  titulo:      string;
  descripcion: string;
  contenido:   School[];
}

export interface School {
  indicador_id:              string;
  bloque_id:                 string;
  bloque_nombre:             string;
  indicador_numero:          string;
  indicador_nombre:          string;
  indicador_estandar_id:     string;
  indicador_estandar_numero: string;
  target_lop:                number;
  target_anual:              number;
  target_lop_alcanzado:      number;
  descripcion_titulo:        string;
  descripcion_contenido:     string;
  grupo:                     Grupo[];
}

export interface Grupo {
  grupo_nombre:      string;
  grupo_descripcion: string;
  grupo_url:         string;
  agrupado:          Agrupado[];
}

export interface Agrupado {
  titulo:        string;
  subtitulo:     string;
  observaciones: string;
  url:           string;
}
