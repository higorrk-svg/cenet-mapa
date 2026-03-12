-- SQL para criar a base de dados no Supabase (CENET/PROEP)
-- Execute este script no SQL Editor do seu projeto Supabase.

-- 1. Tabela de Instituições e Dados de Aprendizes
CREATE TABLE instituicoes_proep (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  instituicao_nome TEXT NOT NULL,
  municipio TEXT NOT NULL,
  
  -- Programas
  ini_t INTEGER DEFAULT 0, -- Iniciação Turmas
  ini_a INTEGER DEFAULT 0, -- Iniciação Aprendizes
  pre_t INTEGER DEFAULT 0, -- Pré-Qualificação Turmas
  pre_a INTEGER DEFAULT 0, -- Pré-Qualificação Aprendizes
  
  -- Perfil Gênero
  masculino INTEGER DEFAULT 0,
  feminino INTEGER DEFAULT 0,
  
  -- Perfil Deficiência
  di INTEGER DEFAULT 0,
  tea INTEGER DEFAULT 0,
  outros INTEGER DEFAULT 0,
  
  -- Perfil Escolaridade
  fund_inc INTEGER DEFAULT 0,
  fund_comp INTEGER DEFAULT 0,
  medio_inc INTEGER DEFAULT 0,
  medio_comp INTEGER DEFAULT 0,
  
  ultima_atualizacao TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Habilitar segurança básica (opcional para começar, mas recomendado)
ALTER TABLE instituicoes_proep ENABLE ROW LEVEL SECURITY;

-- 3. Criar uma política que permite leitura pública (para o Mapa carregar os dados)
CREATE POLICY "Leitura Pública Mapa" ON instituicoes_proep 
  FOR SELECT USING (true);

-- 4. Criar uma política que permite inserção/edição (você poderá restringir com login depois)
CREATE POLICY "Instituicoes Editam" ON instituicoes_proep 
  FOR ALL USING (true);
