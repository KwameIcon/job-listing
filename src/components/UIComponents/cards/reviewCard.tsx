import Card from "./card";

import { QuoteIcon } from "../../../assets/quote";


interface ReviewCardProps {
    profilePic: string;
    message: string;
    userName: string;
    jobTitle: string;
    className?: string;
    profilePicBgShape: string;
    profileBgColor: string;
}





const ReviewCard: React.FC<ReviewCardProps> = ({profilePic, message, userName, jobTitle, className, profilePicBgShape, profileBgColor}) => {

    return(
        <Card className={`w-80 h-40 bg-white rounded-sm relative ${className}`}>
            <div className="absolute -top-2 -left-5 box-border w-12 h-12 rounded-full">
                <img src= {profilePic} alt="Profile Pic"  className="w-full h-full rounded-full absolute -left-1 top-0 z-20"/>
                <p className={`w-full h-full bg-${profileBgColor}-400 absolute z-10 left-${profilePicBgShape === 'square' ? '0' : '1'} top-${profilePicBgShape === 'square' ? '1' : '0'} rounded-${profilePicBgShape === 'square' ? '2xl' : 'full'}`}/>
            </div>
            <div className="h-full pl-12 py-5 pr-4 text-sm flex flex-col items-start justify-between">
                <p className=" text-gray-400 text-opacity-90">
                    {message}
                </p>
                <div className="flex- flex-col items-start">
                    <p>{userName}</p>
                    <p className=" text-gray-400 text-opacity-90">{jobTitle}</p>
                </div>
            </div>
            <div className="absolute left-8 bottom-10">
                <QuoteIcon className="fill-gray-300 text-opacity-45 w-5 z-10 rotate-[180deg]"/>
            </div>
        </Card>
    )
}

export default ReviewCard;