import { URL } from "url";
import { Blob } from "buffer";
import Image from "next/image";



interface FormData {
  imageSrc : string|null;
  name : string;
  fatherName : string;
  email : string;
  gender :string;
  // age:number;
  dateOfBirth : string;
  martialStatus : string;
  degree : string;
  institute : string;
  grade :string;
  awards :string;
  generalSkills :string;
  phoneNumber :string;
  computerSkills :string;
  experience :string;
  companyName :string;
}
interface FormProps {
  form: FormData ;
}

const Resume : React.FC<FormProps> = ({ form }) => {
    const {  imageSrc,name,fatherName, email,gender,dateOfBirth,martialStatus,degree,institute,grade,awards,generalSkills,phoneNumber,
      computerSkills,experience,companyName,} = form
    return(
      <div className='border-2 border-slate-500 p-4 w-[800px]'>
      
       <div className='flex items-center justify-between'>
         <h1 className='font-bold text-3xl' id='nameChange'>{name}</h1>

         <Image src={imageSrc? imageSrc:''} width={250} height={250} alt="image" />
       </div>

       <h1 className='font-bold text-xl mt-6 mb-2'>Personal Information</h1><hr/>

       <h1 className='font-bold inline'>Father's Name:</h1> <p className='inline'>{fatherName}</p><br />
       <h1 className='font-bold inline'>Email:</h1> <p className='inline'>{email}</p><br />
       <h1 className='font-bold inline'>Gender:</h1> <p className='inline'>{gender}</p><br />

       {/* <h1 className='font-bold inline'>Age:</h1> <p className='inline'>{age}</p><br /> */}
       <h1 className='font-bold inline'>Date of Birth :</h1> <p className='inline'>{dateOfBirth}</p><br />
       <h1 className='font-bold inline'>Martial Status:</h1> <p className='inline'>{martialStatus}</p><br />
       <h1 className='font-bold inline'>Phone:</h1> <p className='inline'>{phoneNumber}</p><br />
      
       <h1 className='font-bold text-xl mt-6 mb-2'>Education</h1><hr />
       <h1 className='font-bold inline'>Degree:</h1> <p className='inline'>{degree}</p><br />
       <h1 className='font-bold inline'>Institute:</h1> <p className='inline'>{institute}</p><br />
       <h1 className='font-bold inline'>Grade:</h1> <p className='inline'>{grade}</p><br />
       <h1 className='font-bold inline'>Awards: </h1><p className='inline'>{awards}</p>
      
       <h1 className='font-bold text-xl mt-6 mb-2'>Skills</h1><hr />
       <h1 className='font-bold inline'>General Skills:</h1> <p className='inline'>{generalSkills}</p><br />
       <h1 className='font-bold inline'>Computer Skills:</h1> <p className='inline'>{computerSkills}</p><br />

       <h1 className='font-bold text-xl mt-6 mb-2'>Experience</h1><hr />
       <h1 className='font-bold inline'>Job Title:</h1> <p className='inline'>{experience}</p><br />
       <h1 className='font-bold inline'>Company Name:</h1> <p className='inline'>{companyName}</p><br />
     </div>
)
}

export default Resume 