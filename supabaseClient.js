import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas credenciais que você obterá no Dashboard do Supabase (Project Settings > API)
const supabaseUrl = 'https://blzzetfruubfadmllgws.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsenpldGZydXViZmFkbWxsZ3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzgxMjgsImV4cCI6MjA4ODkxNDEyOH0.ZBIkHOkm96G3_9mxin6CxvoJ2Hk8KdfzpGUEzEKR704';

export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Função para salvar ou atualizar dados de uma instituição
 */
export const salvarDadosInstituicao = async (dados) => {
  const { data, error } = await supabase
    .from('instituicoes_proep')
    .upsert([
      { 
        instituicao_nome: dados.instituicaoNome,
        municipio: dados.municipio,
        ini_t: dados.ini_t,
        ini_a: dados.ini_a,
        pre_t: dados.pre_t,
        pre_a: dados.pre_a,
        masculino: dados.masculino,
        feminino: dados.feminino,
        di: dados.di,
        tea: dados.tea,
        ultima_atualizacao: new Date().toISOString()
      }
    ], { onConflict: 'instituicao_nome' }); // Atualiza se o nome já existir

  if (error) throw error;
  return data;
};

/**
 * Função para buscar todos os dados para o Mapa
 */
export const buscarDadosMapa = async () => {
  const { data, error } = await supabase
    .from('instituicoes_proep')
    .select('*');

  if (error) throw error;
  return data;
};
