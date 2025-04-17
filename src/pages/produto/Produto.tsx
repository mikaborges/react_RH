import './Produto.css';
function Produto() {
  return (
    <div className="produto">
      <div className="titulo">
        <img src={'https://img.freepik.com/free-vector/done-concept-illustration_114360-4161.jpg?t=st=1744899348~exp=1744902948~hmac=de2e762eb4334c3401d42858465c94f302d7a09f747077eb9007f4352724298f&w=500'} alt="Missão" />
        <h1>Nossa Missão</h1>
      </div>
      <p>O Gestão360RH é um sistema completo de gerenciamento de Recursos Humanos, desenvolvido para simplificar processos, 
        otimizar a rotina do setor e oferecer uma visão estratégica sobre o capital humano da sua empresa. Com uma interface intuitiva 
        e funcionalidades inteligentes, o Gestão360RH conecta setores, automatiza tarefas e coloca as pessoas no centro da gestão 
        organizacional</p>
      <div className="Beneficios">
        <div className="tema">
          <h2>Centralização de Informações</h2>
          <p>Com o Gestão360RH, todas as informações dos colaboradores ficam reunidas em um único sistema, de forma segura e estruturada. 
            Isso inclui dados pessoais, histórico profissional, registros de ponto, documentos e avaliações. 
            A centralização facilita o acesso, evita retrabalho e elimina a dependência de planilhas dispersas ou arquivos físicos.</p>
        </div>
        <div className="tema">
          <h2>Redução de tarefas manuais e ganho de produtividade</h2>
          <p> Ao automatizar processos como controle de férias, emissão de documentos e acompanhamento de desempenho, 
            o sistema libera tempo do time de RH para focar em ações estratégicas, como desenvolvimento de pessoas, 
            clima organizacional e cultura da empresa. Menos tempo em burocracia, mais tempo em gestão de talentos.</p>
        </div>
        <div className="tema">
          <h2>Experiência mais fluida para líderes e colaboradores</h2>
          <p>Gestão360RH oferece um painel claro e fácil de usar, tanto para o time de RH quanto para gestores e funcionários. 
          Isso permite que o colaborador acompanhe suas informações, solicite férias ou visualize documentos com autonomia, 
          enquanto líderes podem acessar dados da equipe de forma rápida para tomar decisões mais assertivas.</p>
        </div>
        <div className="Features">
          <h2>Principais Features</h2>
          <img src={'https://img.freepik.com/free-vector/features-overview-concept-illustration_114360-1500.jpg?t=st=1744900964~exp=1744904564~hmac=42d8815ccb3a8c679dae969a6e77d33b1579f66257794001a6b5ec67fbe1e0a0&w=300'} alt="Features" />
          <p>O Gestão360RH oferece uma gestão completa de colaboradores, com cadastro detalhado, controle de jornada, e acompanhamento do histórico de cargos, salários e avaliações de desempenho ao longo do tempo. O sistema também conta com um calendário inteligente para controle de férias e ausências, automatizando a contagem de dias, envio de alertas e fluxo de aprovações de forma simples e eficiente. 
        Além disso, permite a geração automatizada de documentos, como contratos, termos e declarações, que podem ser criados com poucos cliques e já estão prontos para assinatura digital — garantindo agilidade, padronização e segurança em todos os processos.</p>
        </div>
      </div>
    </div>
  );
}
 
export default Produto;