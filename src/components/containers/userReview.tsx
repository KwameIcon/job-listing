import { ReviewCard } from "../UIComponents";

// images
import ProfilePic1 from '../../assets/profile pic/1-intro-photo-final.jpg'
import ProfilePic2 from '../../assets/profile pic/38e79cde1ea2513fb9ac957261f4d710.jpg'
import ProfilePic3 from '../../assets/profile pic/cool-profile-picture-87h46gcobjl5e4xu.jpg'
import { QuoteIcon } from "../../assets/quote";



const UserReviews: React.FC = () => {

    // states management

    return (
        <div className="relative z-10 w-full flex items-center justify-between flex-wrap space-y-10 md:space-y-0 lg:space-y-0 mt-0 md:mt-20 px-3 md:px-12">

            <div className="w-[600px] m-auto h-[700px] bg-green-500 bg-opacity-5 md:bg-opacity-10 rounded-br-gentle-rounded rounded-bl-sharp-rounded rounded-tl-gentle-rounded rounded-tr-gentle-rounded rotate-[30deg] absolute top-0 md:-top-[200px] -left-[400px] md:-left-[600px] lg:-left-[400px]">
                <QuoteIcon className="fill-white opacity-50 md:opacity-100 lg:opacity-100 w-44 absolute top-16 md:top-5 lg:top-5 right-20 md:right-48 lg:right-48 -z-10 rotate-[120deg]"/>
            </div>

            {/* text content */}
            <div className="w-full lg:w-4/12 shrink-0 mb-10 lg:mb-0 relative z-10">
                <h1 className="text-3xl font-extrabold w-full md:w-10/12 mb-5 md:mb-8">What the users said about us</h1>
                <p className=" text-black text-opacity-50 w-full md:w-10/12 text-justify">Finding the best job offer for designers and developers has never been easy. We have +6000 satisfied customers, and the number still growing.</p>
            </div>

            <div className="w-full md:pt-10 lg:w-auto shrink-0 flex items-center justify-center ">
                <div className="grid grid-cols-1 pl-4 md:pl-0 md:grid-cols-2 md:gap-x-10 gap-y-5">
                    <ReviewCard profilePic= {ProfilePic1} message="I just want to let you know that you guys are doing really great job. From here, I have a reliable job now." profileBgColor="indigo" profilePicBgShape="circle" userName="John Smith" jobTitle="Deff Platform"/>
                    <ReviewCard profilePic= {ProfilePic2} message="I just want to let you know that you guys are doing really great job. From here, I have a reliable job now." profileBgColor="green" profilePicBgShape="square" userName="John Smith" jobTitle="Deff Platform" className="mt-0 md:mt-10 lg:mt-10"/>
                    <ReviewCard profilePic= {ProfilePic3} message="I just want to let you know that you guys are doing really great job. From here, I have a reliable job now." profileBgColor="yellow" profilePicBgShape="square" userName="John Smith" jobTitle="Deff Platform" className="ml-0 md:ml-8 lg:ml-8"/>
                </div>
            </div>

        </div>
    )
}

export default UserReviews;