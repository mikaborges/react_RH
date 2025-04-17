
function Home() {
    return (
        <>
            <div className="bg-rose-950 flex ">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                              Sejam Bem Vindes
                        </h2>
                         
                    </div>

                </div>
            </div>
            <div className='flex items-start'>
    <div className="flex flex-col gap-4 ml-25">
        <h3 className='text-3xl font-semibold mt-30 mb-7 ml-30'>
            Aumente a satisfação dos funcionários <br /> e otimize processos com um software <br /> de RH completo e fácil
        </h3>
        <p className='text-xl ml-30'>
            Ofereça aos seus funcionários, candidatos e recém-<br /> contratados a melhor experiência possível de RH. <br /> Nós ajudamos sua equipe a se concentrar nas <br /> pessoas — não nos processos — simplificando os <br /> fluxos de trabalho e liberando as equipes de tarefas <br /> repetitivas, como mandar emails a atualizar <br /> planilhas
        </p>
    </div>
    <div className='flex justify-center ml-4 mt-21'>
        <img
            src="https://img.freepik.com/free-vector/selecting-team-concept-illustration_114360-5265.jpg?t=st=1744899212~exp=1744902812~hmac=36d593578ba045c9ed3ff071e0dd5e3b27c6e2ecfc06b1d300fbf03cf0344fd8&w=996"
            alt=""
            className='w-2/3'
        />
    </div>
</div>
        </>
    )
}

export default Home