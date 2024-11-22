import { ReviewCard } from "../UIComponents";

// images
import ProfilePic1 from '../../assets/profile pic/1-intro-photo-final.jpg'
import ProfilePic2 from '../../assets/profile pic/38e79cde1ea2513fb9ac957261f4d710.jpg'
import ProfilePic3 from '../../assets/profile pic/cool-profile-picture-87h46gcobjl5e4xu.jpg'



const UserReviews: React.FC = () => {

    // states management

    return (
        <div className="relative z-10 w-full flex items-center justify-between flex-wrap space-y-10 md:space-y-0 lg:space-y-0 mt-20 md:mt-32 lg:mt-32 px-5 md:px-12 lg:px-16">

            {/* text content */}
            <div className="w-full md:w-full lg:w-4/12 shrink-0 mb-10 md:mb-10 lg:mb-0">
                <h1 className="text-3xl font-extrabold w-11/12 md:w-10/12 lg:w-10/12
                mb-8">What the users said about us</h1>
                <p className=" text-black text-opacity-50 w-10/12 text-justify">Finding the best job offer for designers and developers has never been easy. We have +6000 satisfied customers, and the number still growing.</p>
            </div>

            <div className="w-full md:w-full lg:w-auto h-9/12 shrink-0 flex items-center justify-center ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-3">
                    <ReviewCard profilePic= {ProfilePic1} message="I just want to let you know that you guys are doing really great job. From here, I have a reliable job now." profileBgColor="blue" profilePicBgShape="circle" userName="John Smith" jobTitle="Deff Platform"/>
                    <ReviewCard profilePic= {ProfilePic2} message="I just want to let you know that you guys are doing really great job. From here, I have a reliable job now." profileBgColor="green" profilePicBgShape="square" userName="John Smith" jobTitle="Deff Platform" className="mt-0 md:mt-10 lg:mt-10"/>
                    <ReviewCard profilePic= {ProfilePic3} message="I just want to let you know that you guys are doing really great job. From here, I have a reliable job now." profileBgColor="yellow" profilePicBgShape="square" userName="John Smith" jobTitle="Deff Platform" className="ml-0 md:ml-8 lg:ml-8"/>
                </div>
            </div>

        </div>
    )
}

export default UserReviews;