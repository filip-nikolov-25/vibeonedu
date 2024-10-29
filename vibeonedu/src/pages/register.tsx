import { Step1 } from "@/components/Register/Step1";
import { useState } from "react";
import { GetServerSideProps } from "next";
import { RegistrationUser } from "@/types/types";
import { Step2 } from "@/components/Register/Step2";
import { Step3 } from "@/components/Register/Step3";
import { Step4 } from "@/components/Register/Step4";

interface Props {
  registrationData: RegistrationUser;
}

const Register = () => {
  const [user, setUser] = useState<RegistrationUser>({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfrimation: "",
  });

  const [pageCounter, setPageCounter] = useState<number>(1);
  console.log(pageCounter, "REGISTER");

  return (
    <div className="h-screen flex items-center justify-center bg-customBlue">
      {pageCounter === 1 && (
        <Step1
          pageCounter={pageCounter}
          setPageCounter={setPageCounter}
          setUser={setUser}
          user={user}
        />
      )}
      {pageCounter === 2 && (
        <Step2
          pageCounter={pageCounter}
          setPageCounter={setPageCounter}
          setUser={setUser}
          user={user}
        />
      )}
      {pageCounter === 3 && (
        <Step3 pageCounter={pageCounter} setPageCounter={setPageCounter} />
      )}
      {pageCounter === 4 && (
        <Step4 pageCounter={pageCounter} setPageCounter={setPageCounter} />
      )}

      {/* <Step2 /> 
      {/* Add more steps as needed */}
      {/* {step === 3 && <Step3 />} */}
      {/* {step === 4 && <Step4 />} */}
      {/* {step === 5 && <Step5 />} */}
      {/* {step === 6 && <Step6 />} */}
    </div>
  );
};

// Fetch registration data server-side
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const registrationRes = await fetch(
      "https://c0b1-31-11-83-108.ngrok-free.app/api/register"
    );
    const registrationData = await registrationRes.json();

    // Replace undefined with null for any properties
    const sanitizedData: RegistrationUser = {
      name: registrationData.name ?? "",
      surname: registrationData.surname ?? "",
      email: registrationData.email ?? "",
      password: registrationData.password ?? "",
      passwordConfrimation: registrationData.passwordConfrimation ?? "",
    };

    return {
      props: {
        registrationData: sanitizedData,
      },
    };
  } catch (error) {
    console.error("Error fetching server-side data", error);
    return {
      props: {
        registrationData: {
          name: "",
          surname: "",
          email: "",
          password: "",
          passwordConfrimation: "",
        },
      },
    };
  }
};

export default Register;
