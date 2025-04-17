import { GithubLogo } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-rose-950 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Gestão360RH | Copyright: {data}
                        </p>
                    <p className='text-lg'>Explore mais de nossos projetos:</p>
                    <div className='flex gap-2 items-center'>
                    <a href="https://github.com/WinxTechGirls" target="_blank">
                        <GithubLogo size={48} weight='bold' /> 
                    </a>
                    <p>WinxTechGirls</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer