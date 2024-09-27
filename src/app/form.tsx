'use client'
import { useState, ChangeEvent } from "react";
import Resume from "./resume";

export default function Form() {
    const [showResume, setShowResume] = useState(false)
    const [btnClick, setbtnClick] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [name, setName] = useState<string>('');
    const [fatherName, setFathername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    // const [age, setAge] = useState<number>();
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    const [martialStatus, setMartialStatus] = useState<string>('')
    const [degree, setDegree] = useState<string>('');
    const [institute, setInstitute] = useState<string>('');
    const [grade, setGrade] = useState<string>('');
    const [awards, setAwards] = useState<string>('');
    const [generalSkills, setGeneralSkills] = useState<string>('');
    const [computerSkills, setComputerSkills] = useState<string>('');
    const [experience, setExperience] = useState<string>('');
    const [companyName, setCompanyName] = useState<string>('');

    const formData = {
        imageSrc,
        name,
        fatherName,
        email,
        gender,
        // age,
        dateOfBirth,
        martialStatus,
        degree,
        institute,
        grade,
        awards,
        generalSkills,
        phoneNumber,
        computerSkills,
        experience,
        companyName,

    }



    function loginSubmit() {
        setbtnClick(true)
        setShowResume(true)

    }

    const handleMartialStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMartialStatus(event.target.value)
    }



    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value)
    }


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Ensure file exists
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string); // Set the base64 image URL
            };
            reader.readAsDataURL(file); // Convert the file to a base64 string
        } else {
            console.error("No file selected or invalid file input");
        }
    }




    return (
        <div>
            <div className="w-full mx-auto">
                {!showResume ? <div id='form' className="justify-center flex ">

                    <form action={loginSubmit} className='bg-white rounded-md p-4 w-full leading-8 lg:w-[60%] md:w-[70%] sm:w-[80%] xs:w-full shadow-lg'>
                        <h1 className="text-4xl text-center mb-10">Resume Builder</h1>
                        <div className='border-2 border-slate-600 p-2 mt-4 rounded-md '>
                            <label htmlFor="Name" className='cursor-pointer font-bold'>Name :</label><br />
                            <input value={name} typeof='text' onChange={(e) => setName(e.target.value)} placeholder="User Name" className='border-slate-400 border-2 w-full p-2' type="text" id='Name' /><br />

                            <label htmlFor="imageChanger" className="font-bold">Upload Profile Picture : </label> <input accept="image/*" className="mt-5" type="file" onChange={handleImageChange} name="" id="imageChanger" /><br />

                            <label htmlFor="fathername" className='cursor-pointer font-bold'>Father's Name :</label><br />
                            <input value={fatherName} className='border-slate-400 border-2 w-full p-2' onChange={(e) => setFathername(e.target.value)} type="text" id='fathername' /><br />
                            <label htmlFor="email" className='cursor-pointer font-bold'>Email :</label><br />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-slate-400 border-2 w-full p-2' type="email" id='email' /><br />




                            <div className='flex pt-3 pb-2'>
                                <label htmlFor="male" className='cursor-pointer font-bold'>Gender :</label><br />



                                <input type="radio"
                                    id="male"
                                    className='ml-8'
                                    name="gender"
                                    value="Male"
                                    checked={gender === "Male"}
                                    onChange={handleOptionChange} />
                                <label htmlFor="male" className=' mr-8'>Male</label>

                                <input type="radio"
                                    id="female"
                                    name="gender"
                                    value="Female"
                                    checked={gender === "Female"}
                                    onChange={handleOptionChange} />
                                <label htmlFor="female">Female</label>
                            </div>






                            <label htmlFor="dateofbirth" className='cursor-pointer font-bold'>Date of Birth :</label><br />
                            <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className='border-slate-400 border-2 w-full p-2' type="date" id='dateofbirth' /><br />

                            <div className='flex pb-2 pt-3 mt-4'>
                                <label htmlFor="single" className='cursor-pointer font-bold'>Martial Status :</label><br />
                                <input
                                    checked={martialStatus === "Single"}
                                    value="Single"
                                    name="martialStatus"
                                    onChange={handleMartialStatusChange}
                                    className='border-black border-2 ml-8'
                                    type="radio"
                                    id='single' />
                                <label htmlFor="single" className='cursor-pointer mr-8'>Single</label>

                                <input
                                    checked={martialStatus === "Married"}
                                    name="martialStatus"
                                    value="Married"
                                    onChange={handleMartialStatusChange}
                                    className='border-black border-2'
                                    type="radio"
                                    id='married' />
                                <label htmlFor="married" className='cursor-pointer'>Married</label><br />
                            </div>


                            <label htmlFor="phone" className='cursor-pointer font-bold'>Phone :</label><br />
                            <input value={phoneNumber} onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                                className='border-slate-400 border-2 w-full p-2' id="phone" /><br />
                        </div>

                        <div className='border-2 p-2 mt-4 border-slate-600 rounded-md'>
                            <label htmlFor="degree" className='cursor-pointer font-bold'>Degree :</label><br />
                            <input value={degree} onChange={(e) => setDegree(e.target.value)} className='border-slate-400 border-2 w-full p-2' type="text" id='degree' /><br />
                            <label htmlFor="institute" className='cursor-pointer font-bold'>Institute :</label><br />
                            <input value={institute} onChange={(e) => setInstitute(e.target.value)} className='border-slate-400 border-2 w-full p-2' type="text" id='institute' /><br />
                            <label htmlFor="grade" className='cursor-pointer font-bold'>Grade :</label><br />
                            <input value={grade} onChange={(e) => setGrade(e.target.value)} className='border-slate-400 border-2 w-full p-2' type="text" id='grade' /><br />
                            <label htmlFor="awards" className='cursor-pointer font-bold'>Awards :</label><br />
                            <input value={awards} onChange={(e) => setAwards(e.target.value)} className='border-slate-400 border-2 w-full p-2' type="text" id='awards' /><br />
                        </div>
                        <div className='border-2 p-2 mt-4 border-slate-600 rounded-md'>
                            <label htmlFor="generalSkills" className='cursor-pointer font-bold'>Genral Skills :</label><br />
                            <input value={generalSkills} onChange={(e) => setGeneralSkills(e.target.value)} className='border-slate-400 border-2 w-full p-2' type="text" id='generalSkills' /><br />
                            <label htmlFor="computerSkills" className='cursor-pointer font-bold'>Computer Skills :</label><br />
                            <input value={computerSkills} onChange={(e) => setComputerSkills(e.target.value)} className='border-slate-400 border-2 w-full p-2' type="text" id='computerSkills' /><br />
                        </div >

                        <div className='border-2 p-2 mt-4 border-slate-600 rounded-md'>
                            <label htmlFor="jobTitle" className='cursor-pointer font-bold'>Job Title :</label><br />
                            <input value={experience} onChange={(e) => setExperience(e.target.value)} className='border-slate-400 border-2 w-full p-2' type="text" id='jobTitle' /><br />
                            <label htmlFor="comapanyName" className='cursor-pointer font-bold'>Company Name :</label><br />
                            <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className='border-slate-400 border-2 w-full p-2' type="text" id='comapanyName' /><br />
                        </div>


                        <button type='button' onClick={loginSubmit} className='mt-2 p-2 bg-blue-400 font-bold rounded-md'>
                            Submit
                        </button>
                    </form>
                </div>

                    :
                    <Resume form={formData} />}
            </div>


            <div className=" border-slate-500 mx-auto bg-white flex justify-center">
                {showResume && <button onClick={() => setShowResume(false)} className='pr-4 pl-4 pt-2 pb-2 mt-1 mb-1 bg-blue-400 font-bold rounded-md' >Edit</button>}
            </div>
        </div>

    )
}
