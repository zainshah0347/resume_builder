'use client'
import { useState, ChangeEvent ,useRef } from "react";
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


    const handleImageChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0]; // Optional chaining to ensure file exists
        if (file) {
          const imageUrl = URL.createObjectURL(file); // Create object URL
          setImageSrc(imageUrl); // Set image URL to state

          const blobFile = file as Blob;

          // Now you can use the blobFile wherever Blob is expected
          console.log(blobFile);

        } else {
          console.error("No file selected or invalid file input"); // Error handling
        }
    }



    return (
        <div>
            {!showResume ? <div id='form'>
                <form action={loginSubmit} className=''>
                    <div className='border-2 border-black w-[650px] p-2'>
                        <label htmlFor="Name" className='cursor-pointer'>Name:</label><br />
                        <input value={name} typeof='email' onChange={(e) => setName(e.target.value)} className='border-black border-2 w-full p-2' type="text" id='Name' /><br />

                        <label htmlFor="imageChanger">Upload Image</label> <input accept="image/*"  type="file" onChange={handleImageChange} name="" id="imageChanger" /><br />

                        <label htmlFor="Name" className='cursor-pointer'>Father's Name:</label><br />
                        <input className='border-black border-2 w-full p-2' onChange={(e) => setFathername(e.target.value)} type="text" id='Name' /><br />
                        <label htmlFor="Name" className='cursor-pointer'>Email:</label><br />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-black border-2 w-full p-2' type="text" id='Name' /><br />




                        <div className='flex pt-3 pb-2'>
                            <p>Gender:</p>


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






                        <label htmlFor="Name" className='cursor-pointer'>Date of Birth:</label><br />
                        <input onChange={(e) => setDateOfBirth(e.target.value)} className='border-black border-2 w-full p-2' type="date" id='Name' /><br />

                        <div className='flex pb-2 pt-3'>
                            <p>Martial Status:</p>
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


                        <label htmlFor="phone" className='cursor-pointer'>Phone:</label><br />
                        <input onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                            className='border-black border-2 w-full p-2' id="phone" /><br />
                    </div>

                    <div className='border-2 border-black w-[650px] p-2'>
                        <label htmlFor="degree" className='cursor-pointer'>Degree:</label><br />
                        <input value={degree} onChange={(e) => setDegree(e.target.value)} className='border-black border-2 w-full p-2' type="text" id='degree' /><br />
                        <label htmlFor="institute" className='cursor-pointer'>Institute:</label><br />
                        <input value={institute} onChange={(e) => setInstitute(e.target.value)} className='border-black border-2 w-full p-2' type="text" id='institute' /><br />
                        <label htmlFor="grade" className='cursor-pointer'>Grade:</label><br />
                        <input value={grade} onChange={(e) => setGrade(e.target.value)} className='border-black border-2 w-full p-2' type="text" id='grade' /><br />
                        <label htmlFor="awards" className='cursor-pointer'>Awards:</label><br />
                        <input value={awards} onChange={(e) => setAwards(e.target.value)} className='border-black border-2 w-full p-2' type="text" id='awards' /><br />
                    </div>
                    <div className='border-2 border-black w-[650px] p-2'>
                        <label htmlFor="generalSkills" className='cursor-pointer'>Genral Skills:</label><br />
                        <input value={generalSkills} onChange={(e) => setGeneralSkills(e.target.value)} className='border-black border-2 w-full p-2' type="text" id='generalSkills' /><br />
                        <label htmlFor="computerSkills" className='cursor-pointer'>Computer Skills:</label><br />
                        <input value={computerSkills} onChange={(e) => setComputerSkills(e.target.value)} className='border-black border-2 w-full p-2' type="text" id='computerSkills' /><br />
                    </div >

                    <div className='border-2 border-black w-[650px] p-2'>
                        <label htmlFor="jobTitle" className='cursor-pointer'>Job Title:</label><br />
                        <input value={experience} onChange={(e) => setExperience(e.target.value)} className='border-black border-2 w-full p-2' type="text" id='jobTitle' /><br />
                        <label htmlFor="comapanyName" className='cursor-pointer'>Company Name:</label><br />
                        <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className='border-black border-2 w-full p-2' type="text" id='comapanyName' /><br />
                    </div>


                    <button type='button' onClick={loginSubmit} className='border-2 border-black mt-2 p-2'>
                        Submit
                    </button>
                </form>
            </div>

                :
                <Resume form={formData} />}
            {showResume && <button onClick={() => setShowResume(false)}>Edit</button>}
        </div>

    )
}
