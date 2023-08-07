/*
const sql = require('mssql');

describe('Meu teste', () => {
  it('Executa consulta SQL', () => {
    // Configuração da conexão com o banco de dados
    const config = {
      user: 'jefferson.pulsati',
      password: 'G=RNVZH]h!p{X1@',
      server: 'MSSQLLYCEUMDEV\\LYCEUMDEV',
      database: 'MundoAzul',
      options: {
        encrypt: true, // Caso necessário, para conexões seguras
      },
    };

    // Função para executar a consulta SQL
    const executeQuery = async (query) => {
      try {
        await sql.connect(config);
        const result = await sql.query(query);
        return result.recordset;
      } catch (err) {
        console.error('Erro na consulta SQL:', err);
        throw err;
      } finally {
        sql.close();
      }
    };

    // Exemplo de execução da consulta
    const query = "SELECT TOP 1 ID_USUARIO FROM cac.USUARIO WHERE CD_USUARIO IN ('jefferson.pulsati')";
    cy.wrap(executeQuery(query)).then((result) => {
      // Faça asserções ou execute outras ações com o resultado da consulta
      console.log(result);
    });
  });
});


module.exports = connection;

*/