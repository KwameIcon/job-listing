
interface LogoProps{
    className?: string;
}


const Logo:React.FC<LogoProps> = ({className}) => {

    return(
        <div className={`w-28 h-20 flex items-center justify-center text-5xl font-extrabold relative ${className}`} >
            <div className="w-4 h-4 rounded-full bg-light-blue absolute top-0 left-6"/>
            <h1>Job</h1>
            <div className="w-3 h-3 rounded-full bg-yellow-500 absolute bottom-5 right-3" />
        </div>
    )
}

export default Logo