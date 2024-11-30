
interface LogoProps{
    className?: string;
}


const Logo:React.FC<LogoProps> = ({className}) => {

    return(
        <div className={`w-28 h-20 flex items-center justify-center text-5xl lg:text-7xl font-extrabold relative ${className}`} >
            <div className="w-4 h-4 rounded-full bg-indigo-300 absolute top-0 lg:-top-1 left-6 lg:left-3"/>
            <h1>Job</h1>
            <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-yellow-500 absolute bottom-5 lg:bottom-3 right-3 lg:right-0" />
        </div>
    )
}

export default Logo