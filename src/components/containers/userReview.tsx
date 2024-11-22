import { ReviewCard } from "../UIComponents";

// images
import ProfilePic1 from '../../assets/profile pic/1-intro-photo-final.jpg'
import ProfilePic2 from '../../assets/profile pic/38e79cde1ea2513fb9ac957261f4d710.jpg'
import ProfilePic3 from '../../assets/profile pic/cool-profile-picture-87h46gcobjl5e4xu.jpg'



const UserReviews: React.FC = () => {

    // states management

    return (
        <div className="relative z-10 w-full flex items-center justify-between mt-32 px-16">

            {/* text content */}
            <div className="w-4/12">
                <h1 className="text-3xl font-extrabold w-10/12
                mb-8">What the users said about us</h1>
                <p className=" text-black text-opacity-50 w-10/12 text-justify">Finding the best job offer for designers and developers has never been easy. We have +6000 satisfied customers, and the number still growing.</p>
            </div>

            <div className="h-9/12 grid grid-cols-2 gap-x-10 gap-y-3">
                <ReviewCard profilePic= {ProfilePic1} message="I just want to let you know that you guys are doing really great job. From here, I have a reliable job now." profileBgColor="blue" profilePicBgShape="circle" userName="John Smith" jobTitle="Deff Platform"/>
                <ReviewCard profilePic= {ProfilePic2} message="I just want to let you know that you guys are doing really great job. From here, I have a reliable job now." profileBgColor="green" profilePicBgShape="square" userName="John Smith" jobTitle="Deff Platform" className="mt-10"/>
                <ReviewCard profilePic= {ProfilePic3} message="I just want to let you know that you guys are doing really great job. From here, I have a reliable job now." profileBgColor="yellow" profilePicBgShape="square" userName="John Smith" jobTitle="Deff Platform" className="ml-8"/>
            </div>

        </div>
    )
}

export default UserReviews;