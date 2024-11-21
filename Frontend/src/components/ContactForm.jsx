import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../utils/cn";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("contactFormButton").textContent = "Submitting";
    document
      .getElementById("contactFormButton")
      .setAttribute("disabled", "disabled");

    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      message === "" ||
      phoneNumber === ""
    ) {
      alert("Please fill all the fields");
    }
    // checking if the email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    // checking if the phone number is valid
    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }
    const formData = JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    });
    fetch("http://localhost:6969/saveQuery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    })
      .then((res) => {
        if (res.status == 200) setSubmitted(true);
        else {
          alert("Some Error Occured");
          document
            .getElementById("contactFormButton")
            .removeAttribute("disabled");
          document.getElementById("contactFormButton").textContent = "Send";
        }
      })
      .catch((error) => {
        alert("Error in submitting the form");

        document
          .getElementById("contactFormButton")
          .removeAttribute("disabled");
        document.getElementById("contactFormButton").textContent = "Send";
        console.log(error);
      });
  };
  if (submitted)
    return (
      <>
        <h2 className="text-white text-xl">
          We Have Recieved Your Query And Will Get Back To You Soon!!
        </h2>
      </>
    );
  else
    return (
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8  shadow-input bg-white dark:bg-black">
        <form className="my-8">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="Firstname"
                placeholder="John"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="Lastname"
                placeholder="Doe"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="Email"
              placeholder="email@vitbhopal.ac.in"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="PhoneNumber">Phone Number</Label>
            <Input
              id="PhoneNumber"
              name="phoneNumber"
              placeholder="91XXXXXXXXXX"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Send Us a Message</Label>
            <Input
              id="message"
              name="Message"
              placeholder="Enter your message here..."
              className="your-textarea-styles"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium hover:bg-purple-700 ease-in-out duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 focus-visible:ring-offset-neutral-100 dark:focus-visible:ring-offset-neutral-800 dark:focus-visible:ring-orange-500"
            type="submit"
            onClick={handleSubmit}
            id="contactFormButton"
          >
            SEND &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    );
}

const BottomGradient = () => {
  return (
    <>
      <span className="opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="opacity-0 blur-sm absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-4 w-full md:mx-2", className)}>
      {children}
    </div>
  );
};
