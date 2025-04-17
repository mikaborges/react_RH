import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-rose-950 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Gestão360RH</Link>

                    <div className='flex gap-4'>
                       
                    <Link to='/produto' className='hover:underline'>Produto</Link> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar