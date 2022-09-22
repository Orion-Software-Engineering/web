import React from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Form = () => {
  function message(e) {
    e.preventDefault();

    var name = document.getElementById("name");
    var mail = document.getElementById("mail");
    var msg = document.getElementById("msg");
    const success = document.getElementById("formsuccess");
    const danger = document.getElementById("formdanger");

    if (name.value === "" || mail.value === "" || msg.value === "") {
      danger.style.display = "block";
    } else {
      setTimeout(() => {
        name.value = "";
        mail.value = "";
        msg.value = "";
      }, 5000);

      success.style.display = "block";

      emailjs
        .sendForm(
          "service_qsso57f",
          "template_filnfbb",
          e.target,
          "hwB3DdoLGae-jeXv6"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }

    setTimeout(() => {
      danger.style.display = "none";
      success.style.display = "none";
    }, 4000);
  }

  return (
    <div className="antialiased bg-gray-100">
      <div className="flex w-full  justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 sm:p-12 bg-gray-900  w-full max-w-4xl p-8 rounded-xl shadow-lg overflow-hidden text-white">
          <div className="flex flex-col justify-between space-y-8 ">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-md">
                Hi, how can we help you? Need help logging in? Get Help. Account
                Settings. Login and Password. Privacy and Security. Marketplace.
                Groups. Pages ...
              </p>
            </div>
            <div className="flex flex-col space-y-6 ">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon name="call" className="text-xl"></ion-icon>
                <span>+(123) 456 789</span>
              </div>
              <div>
                <div className="inline-flex space-x-2 items-center">
                  <ion-icon name="mail" className="text-xl"></ion-icon>
                  <span>teamorion30@yahoo.com</span>
                </div>
              </div>
              <div>
                <div className="inline-flex space-x-2 items-center">
                  <ion-icon name="location" className="text-xl"></ion-icon>
                  <span>KNUST, Kumasi</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <Link href="">
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
              <Link href="">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
              <Link href="">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
              <Link href="">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="w-40 h-40 absolute bg-[#372642] rounded-full -right-28 -top-28"></div>
            <div className="w-40 h-40 absolute bg-[#372642] rounded-full -left-28 -bottom-16"></div>

            <div className="bg-white rounded-xl z-2 shadow-lg p-8 text-gray-600 ">
              <form
                id="form"
                onSubmit={message}
                className="flex flex-col md:w-80 space-y-4 z-1"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-black-300 "
                  />
                </div>
                <div>
                  <input
                    id="mail"
                    name="user_email"
                    type="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-black-300 "
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    name="message"
                    id="msg"
                    rows="4"
                    placeholder="Message"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-black-300 "
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block self-end bg-black text-white font-bold rounded lg px-6 py-2 uppercase text-sm "
                >
                  Send Message
                </button>
                <div className="formmessage pb-3">
                  <div
                    className="formsuccess font-Nunito text-l"
                    id="formsuccess"
                  >
                    Message successfully sent
                  </div>
                  <div
                    className="formdanger font-Nunito text-l"
                    id="formdanger"
                  >
                    Fill empty field(s)!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        async
      />
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        async
      />
    </div>
  );
};
export default Form;
