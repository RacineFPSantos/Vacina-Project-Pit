import React from 'react';
import Page from '../components/page';

function Index({ history }) {
  return (
    <Page>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => history.push('/agendar')}
        >
          Agendamento
        </button>

        <button
          type="button"
          className="btn"
          onClick={() => history.push('/listaagendados')}
        >
          Enfermeiro
        </button>
      </div>
    </Page>
  );
}

export default Index;
