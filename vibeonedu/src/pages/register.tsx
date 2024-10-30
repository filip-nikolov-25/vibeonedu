import { Step1 } from "@/components/Register/Step1";
import { useEffect, useState } from "react";
import { RegistrationUser } from "@/types/types";
import { Step2 } from "@/components/Register/Step2";
import { Step3 } from "@/components/Register/Step3";
import { Step4 } from "@/components/Register/Step4";
import { Step5 } from "@/components/Register/Step5";
import { Step6 } from "@/components/Register/Step6";

const Register = () => {
  const [user, setUser] = useState<RegistrationUser>({
    name: "",
    surname: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [pageCounter, setPageCounter] = useState<number>(1);

const loginUser = () => {
  console.log(user, "CURRENT USER");

  if (user.password !== user.password_confirmation) {
    console.log(user.password, "password");
    console.log(user.password_confirmation, "confirmation");
    return;
  }

  fetch("https://23bd-46-217-162-210.ngrok-free.app/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    body: JSON.stringify({
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation, 
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.text().then((text) => {
          throw new Error(`Registration error: ${response.status} - ${text}`);
        });
      }
    })
    .then((data) => {
      localStorage.setItem("currentUser", "true");
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      console.error("Network or registration error:", error);
    });
};


  // Trigger loginUser on the last page
  useEffect(() => {
    if (pageCounter === 4) {
      loginUser();
    }
  }, [pageCounter]);

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
      {pageCounter === 5 && (
        <Step5 pageCounter={pageCounter} setPageCounter={setPageCounter} />
      )}
      {pageCounter === 6 && (
        <Step6 pageCounter={pageCounter} setPageCounter={setPageCounter} />
      )}
    </div>
  );
};

export default Register;
