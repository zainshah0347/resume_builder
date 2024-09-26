import React from "react";
import Image from "next/image";
import ReactToPrint from "react-to-print";

interface FormData {
  imageSrc: string | null;
  name: string;
  fatherName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  martialStatus: string;
  degree: string;
  institute: string;
  grade: string;
  awards: string;
  generalSkills: string;
  phoneNumber: string;
  computerSkills: string;
  experience: string;
  companyName: string;
}

interface FormProps {
  form: FormData;
}

class Resume extends React.Component<FormProps> {


  // Initialize the ref
  componentRef: React.RefObject<HTMLDivElement>;

  constructor(props: FormProps) {
    super(props);
    this.componentRef = React.createRef(); // Initialize the ref

    // Bind the downloadCV method to the current context
    this.downloadCV = this.downloadCV.bind(this);
  }

  // Method to download the CV as PDF (using browser's print functionality)
  downloadCV() {
    window.print();
  }

  render() {
    const {
      imageSrc,
      name,
      fatherName,
      email,
      gender,
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
    } = this.props.form;

    return (
      <div className="border-2 border-slate-500 pr-4 mt-4 pl-4 w-[70%] mx-auto bg-white">
        {/* Assign the ref here */}
        <div ref={this.componentRef} className="leading-10 bg-white">
          <div className="flex items-center justify-between mt-4">
            <h1 className="font-bold text-3xl">{name}</h1>

            <Image
              src={imageSrc || ""}
              width={130}
              height={150}
              className="border-2 h-[120px]"
              style={{ borderRadius: "50%" }}
              alt="image"
            />
          </div>

          <h1 className="font-bold text-xl mt-6 mb-2">Personal Information</h1>
          <hr />

          <h1 className="font-bold inline">{"Father's Name:"}</h1> <p className="inline">{fatherName}</p>
          <br />
          <h1 className="font-bold inline">Email:</h1> <p className="inline">{email}</p>
          <br />
          <h1 className="font-bold inline">Gender:</h1> <p className="inline">{gender}</p>
          <br />
          <h1 className="font-bold inline">Date of Birth :</h1> <p className="inline">{dateOfBirth}</p>
          <br />
          <h1 className="font-bold inline">Martial Status:</h1> <p className="inline">{martialStatus}</p>
          <br />
          <h1 className="font-bold inline">Phone:</h1> <p className="inline">{phoneNumber}</p>
          <br />

          <h1 className="font-bold text-xl mt-6 mb-2">Education</h1>
          <hr />
          <h1 className="font-bold inline">Degree:</h1> <p className="inline">{degree}</p>
          <br />
          <h1 className="font-bold inline">Institute:</h1> <p className="inline">{institute}</p>
          <br />
          <h1 className="font-bold inline">Grade:</h1> <p className="inline">{grade}</p>
          <br />
          <h1 className="font-bold inline">Awards: </h1> <p className="inline">{awards}</p>

          <h1 className="font-bold text-xl mt-6 mb-2">Skills</h1>
          <hr />
          <h1 className="font-bold inline">General Skills:</h1> <p className="inline">{generalSkills}</p>
          <br />
          <h1 className="font-bold inline">Computer Skills:</h1> <p className="inline">{computerSkills}</p>
          <br />

          <h1 className="font-bold text-xl mt-6 mb-2">Experience</h1>
          <hr />
          <h1 className="font-bold inline">Job Title:</h1> <p className="inline">{experience}</p>
          <br />
          <h1 className="font-bold inline">Company Name:</h1> <p className="inline">{companyName}</p>
          <br />
        </div><br />
        <hr />

        {/* Button to download or print the resume */}
        <div className="pt-2 flex justify-center mb-1">
          <ReactToPrint
            trigger={() => {
              return <button  className='p-2 bg-blue-400 font-bold rounded-md mt-8'>Print Resume</button>;
            }}
            content={() => this.componentRef.current}
            pageStyle="print"
          />

        </div>
      </div>
    );
  }
}

export default Resume;
