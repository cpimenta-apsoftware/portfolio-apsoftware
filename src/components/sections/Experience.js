import React from 'react';

const Experience = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experiência</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Desenvolvimento Web</h3>
            <div className="subheading mb-3">Suprema Pedidos Web</div>
            <p>
              Aplicação web para a realização de pedidos e participação de promoções 
              dos estabelecimentos.
              </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Junho 2020 - Atualmente</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Desenvolvimento Mobile</h3>
            <div className="subheading mb-3">Suprema Pedidos Mobile</div>
            <p>
              Aplicativo nas plataformas mobile Android e iOS para a realização de pedidos e acompanhamento das entregas.
              </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Junho 2020 - Atualmente</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Desenvolvimento Desktop</h3>
            <div className="subheading mb-3">Suprema Software</div>
            <p>
              ERP para gerenciamento financeiro e contábil dos estabelecimentos incluindo funcionalidades como
               controle de caixa, estoque e vendas.
              </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Janeiro 2016 - Atualmente</span>
          </div>
        </div>
                
      </div>
    </section>
  );
}

export default Experience;