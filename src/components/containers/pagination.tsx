import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../UIComponents";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";



const Pagination: React.FC = () => {

    return(
        <div className="w-full flex items-center justify-end space-x-1 text-xs pt-5">
            <Card className=" w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold">
                First
            </Card>
            <Card className=" w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold">
                <FontAwesomeIcon icon={faCaretLeft}/>
            </Card>
            <Card className=" w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold">
                1
            </Card>
            <Card className=" w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold">
                2
            </Card>
            <Card className=" w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold">
                ...
            </Card>
            <Card className=" w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold">
                20
            </Card>
            <Card className=" w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold">
                21
            </Card>
            <Card className=" w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold">
                <FontAwesomeIcon icon={faCaretRight}/>
            </Card>
            <Card className=" w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold">
                Last
            </Card>
        </div>
    )
}

export default Pagination;