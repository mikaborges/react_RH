import { FaGithub, FaLinkedin } from 'react-icons/fa';

function SobreNos() {
  const membros = [
    {
      nome: "Nycolly Vitoria de Oliveira",
      funcao: "Líder de Desenvolvimento",
      imagem: "/imagens/Nycolly.jpeg",
      github: "https://github.com/NycollyWeiss",
      linkedin: "https://www.linkedin.com/in/nycollyweiss/"
    },
    {
      nome: "Mireli Neta de Oliveira Silva Borges",
      funcao: "Desenvolvedora de Componentes",
      imagem: "/imagens/Mireli.jpeg",
      github: "https://github.com/mikaborges",
      linkedin: "https://www.linkedin.com/in/mireliborges/"
    },
    {
      nome: "Mariana Marie Iha",
      funcao: "Desenvolvedora de Telas",
      imagem: "/imagens/Mariana.jpeg",
      github: "https://github.com/ihamari",
      linkedin: "https://www.linkedin.com/in/mariana-marie-iha/"
    },
    {
      nome: "Najla Madeira Sabino Guimarães",
      funcao: "Especialista em Estilização",
      imagem: "/imagens/Najla.jpeg", // adicionei imagem caso ela exista
      github: "https://github.com/NahGuimaraes",
      linkedin: "https://www.linkedin.com/in/najlaguimaraes/"
    },
    {
      nome: "Lays Sabryna Sousa",
      funcao: "Especialista em Estilização",
      imagem: "/imagens/Sabryna.jpeg",
      github: "https://github.com/SabrynaSousa",
      linkedin: "https://www.linkedin.com/in/lays-sabryna-sousa/"
    }
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nossa Equipe</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {membros.map((membro, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            {membro.imagem ? (
              <img
                className="w-32 h-32 rounded-full object-cover mb-4"
                src={membro.imagem}
                alt={membro.nome}
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300 mb-4 flex items-center justify-center text-gray-600">
                Sem imagem
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-700 text-center">{membro.nome}</h3>
            <p className="text-sm text-gray-500 text-center mb-2">{membro.funcao}</p>
            <div className="flex space-x-4">
              {membro.github && (
                <a href={membro.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl text-gray-700 hover:text-black transition" />
                </a>
              )}
              {membro.linkedin && (
                <a href={membro.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-xl text-blue-600 hover:text-blue-800 transition" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SobreNos;
