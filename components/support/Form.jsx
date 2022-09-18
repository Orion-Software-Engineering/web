import React from "react";

const Form = () => {
  return (
    <div>
      <body className="antialiased bg-gray-100">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex flex-col space-y-6 bg-black w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
            <div className="flex flex-col justify-between space-y-8 ">
              <div>
                <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                <p className="pt-2 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
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
                    <span>orionmeet@gmail.com</span>
                  </div>
                </div>
                <div>
                  <div className="inline-flex space-x-2 items-center">
                    <ion-icon name="location" className="text-xl"></ion-icon>
                    <span>Kumasi, Ghana</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="" className="text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black-300 "
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black-300 "
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Message
                  </label>
                  <textarea
                    type="text"
                    rows="4"
                    placeholder="Message"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black-300 "
                  />
                </div>
                <button className="inline-block self-end bg-black text-white font-bold rounded lg px-6 py-2 uppercase text-sm ">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          async
        />
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          async
        />
      </body>
    </div>
  );
};

export default Form;
