import React from 'react';
import Page from '../components/page';

function Index() {
  return (
    <Page>
      <div className="btn-group">
        <button type="button" className="btn">
          Agendamento
        </button>
        <button type="button" className="btn">
          Enfermeiro
        </button>
      </div>
    </Page>
  );
}

export default Index;
