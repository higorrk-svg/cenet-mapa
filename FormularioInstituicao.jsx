import React, { useState } from 'react';

/**
 * COMPONENTE: FormularioInstituicao
 * Este formulário é projetado para ser o Portal de Entrada de Dados das Instituições (APAEs, AMAs, etc.)
 * Os campos refletem exatamente o que é exibido no Dashboard Principal do CENET.
 */

const FormularioInstituicao = () => {
  const [formData, setFormData] = useState({
    instituicaoNome: '',
    municipio: '',
    
    // Totais de Turmas e Aprendizes
    ini_t: 0, // Iniciação - Turmas
    ini_a: 0, // Iniciação - Aprendizes
    pre_t: 0, // Pré-Qualificação - Turmas
    pre_a: 0, // Pré-Qualificação - Aprendizes

    // Perfil: Gênero
    masculino: 0,
    feminino: 0,

    // Perfil: Deficiência
    di: 0,   // Deficiência Intelectual
    tea: 0,  // Autismo
    outros: 0,

    // Perfil: Escolaridade
    fund_inc: 0,
    fund_comp: 0,
    medio_inc: 0,
    medio_comp: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('Nome') || name === 'municipio' ? value : parseInt(value) || 0
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados prontos para o Supabase:", formData);
    alert("Dados enviados com sucesso! O mapa será atualizado.");
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Portal de Atualização PROEP/CENET</h1>
        <p style={styles.subtitle}>Insira os dados da sua instituição para atualizar o mapa estadual.</p>
      </header>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Seção 1: Identificação */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Identificação</h2>
          <div style={styles.row}>
            <div style={styles.group}>
              <label style={styles.label}>Nome da Instituição</label>
              <input 
                name="instituicaoNome" 
                placeholder="Ex: APAE de Florianópolis"
                onChange={handleChange} 
                style={styles.input} 
                required 
              />
            </div>
            <div style={styles.group}>
              <label style={styles.label}>Município</label>
              <input 
                name="municipio" 
                placeholder="Ex: Florianópolis"
                onChange={handleChange} 
                style={styles.input} 
                required 
              />
            </div>
          </div>
        </div>

        {/* Seção 2: Programas (Iniciação e Pré-Qualificação) */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>2. Turmas e Aprendizes</h2>
          <div style={styles.grid}>
            <div style={styles.cardIni}>
              <h3 style={styles.cardTitle}>Iniciação</h3>
              <div style={styles.row}>
                <div style={styles.group}>
                  <label style={styles.label}>Nº de Turmas</label>
                  <input type="number" name="ini_t" onChange={handleChange} style={styles.inputSmall} />
                </div>
                <div style={styles.group}>
                  <label style={styles.label}>Nº de Aprendizes</label>
                  <input type="number" name="ini_a" onChange={handleChange} style={styles.inputSmall} />
                </div>
              </div>
            </div>
            <div style={styles.cardPre}>
              <h3 style={styles.cardTitle}>Pré-Qualificação</h3>
              <div style={styles.row}>
                <div style={styles.group}>
                  <label style={styles.label}>Nº de Turmas</label>
                  <input type="number" name="pre_t" onChange={handleChange} style={styles.inputSmall} />
                </div>
                <div style={styles.group}>
                  <label style={styles.label}>Nº de Aprendizes</label>
                  <input type="number" name="pre_a" onChange={handleChange} style={styles.inputSmall} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 3: Perfil dos Aprendizes */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>3. Perfil dos Aprendizes (Consolidado)</h2>
          <div style={styles.grid}>
            <div style={styles.group}>
              <label style={styles.label}>Gênero: Masc.</label>
              <input type="number" name="masculino" onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.group}>
              <label style={styles.label}>Gênero: Fem.</label>
              <input type="number" name="feminino" onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.group}>
              <label style={styles.label}>Deficiência: TDI</label>
              <input type="number" name="di" onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.group}>
              <label style={styles.label}>Deficiência: TEA</label>
              <input type="number" name="tea" onChange={handleChange} style={styles.input} />
            </div>
          </div>
        </div>

        <button type="submit" style={styles.button}>Salvar e Atualizar Mapa</button>
      </form>
    </div>
  );
};

const styles = {
  container: { maxWidth: '800px', margin: '40px auto', fontFamily: 'Inter, sans-serif' },
  header: { textAlign: 'center', marginBottom: '40px' },
  title: { color: '#231F20', fontSize: '24px', fontWeight: '800' },
  subtitle: { color: '#666', fontSize: '14px' },
  form: { background: 'white', padding: '30px', borderRadius: '12px', border: '1px solid #e1e4e8', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
  section: { marginBottom: '30px' },
  sectionTitle: { fontSize: '12px', textTransform: 'uppercase', color: '#ED1C24', fontWeight: '800', borderBottom: '2px solid #f4f7f6', paddingBottom: '8px', marginBottom: '20px' },
  row: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  group: { display: 'flex', flexDirection: 'column', flex: 1, minWidth: '150px' },
  label: { fontSize: '11px', fontWeight: '700', color: '#666', marginBottom: '8px', textTransform: 'uppercase' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' },
  inputSmall: { padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', width: '100%' },
  cardIni: { padding: '20px', background: '#fcfdeb', border: '1px solid #e2e8f0', borderRadius: '8px' },
  cardPre: { padding: '20px', background: '#f0f9f1', border: '1px solid #e2e8f0', borderRadius: '8px' },
  cardTitle: { fontSize: '14px', fontWeight: '800', marginBottom: '15px' },
  button: { width: '100%', padding: '15px', background: '#ED1C24', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '800', cursor: 'pointer', fontSize: '16px', marginTop: '20px' }
};

export default FormularioInstituicao;
