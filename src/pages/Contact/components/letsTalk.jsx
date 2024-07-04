import { Link } from "react-router-dom";
import { logoTwoImage } from "../../../assets/logo";

const LetsTalk = () => {
  return (
    <div className="bg-[url('./././assets/images/gallery/canival.jpg')] bg-cover dark:bg-slate-950 h-full flex justify-evenly py-12">
      <div className="w-1/4 h-1/4 object-cover">
        <div className="w-[60px] -inset-3 mr-64">
          <Link>
            <img src={logoTwoImage} />
          </Link>
        </div>
        <h1
          style={{ fontFamily: "Times New Roman,serif" }}
          className="text-4xl font-bold pb-6"
        >
          Elevate Your Event Planning
        </h1>
        <p
          style={{ fontFamily: "Georgia,serif" }}
          className="text-2xl leading-9 irst-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
        >
          We are Jamboree events, your trusted partners in music and corporate
          event planning perfection, every time. Our comprehensive event
          planning services include innovative event marketing strategies,
          expert logistics, and successful event execution.
        </p>
      </div>
      <div className="bg-white h-100vh w-96 rounded-[10px] shadow-2xl shadow-lime-50 object-cover">
        <div className="w-80 ml-8">
          <h1
            style={{ fontFamily: "Times New Roman,serif" }}
            className="font-bold text-3xl text-center pb-4"
          >
            Let's Talk
          </h1>
          <p style={{ fontFamily: "Times New Roman,serif" }}>
            We can’t wait to hear about your next project!
          </p>
          <form className="flex flex-col max-w-md mx-auto pt-5">
            <div className="mb-8">
              <label
                htmlFor="name"
                className="block text-black font-medium mb-1 ml-4"
              ></label>
              <input
                type="text"
                placeholder="Firstname"
                className="h-10 w-full px-2 py-1 outline-transparent border-[#2d6599] border-2 rounded-lg "
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="name"
                className="block text-black font-medium mb-1 ml-4"
              ></label>
              <input
                type="text"
                placeholder="Lastname"
                className="h-10 w-full px-2 py-1 outline-transparent border-[#2d6599] border-2 rounded-lg "
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="name"
                className="block text-black font-medium mb-1 ml-4"
              ></label>
              <input
                type="text"
                placeholder="Organisation"
                className="h-10 w-full px-2 py-1 outline-transparent border-[#2d6599] border-2 rounded-lg "
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="name"
                className="block text-black font-medium mb-1 ml-4"
              ></label>
              <input
                type="text"
                placeholder="Work Email"
                className="h-10 w-full px-2 py-1 outline-transparent border-[#2d6599] border-2 rounded-lg "
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="name"
                className="block text-black font-medium mb-1 ml-4"
              ></label>
              <input
                type="text"
                placeholder="Phone Number"
                className="h-10 w-full px-2 py-1 outline-transparent border-[#2d6599] border-2 rounded-lg "
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="name"
                className="block text-black font-medium mb-1 ml-4"
              ></label>
              <input
                type="textarea"
                name="message"
                rows={10}
                cols={30}
                placeholder="Enter your message here..."
                className="h-10 w-full px-2 py-1 outline-transparent border-[#2d6599] border-2 rounded-lg"
              />
            </div>

            <div className="mb-8">
              <label
                style={{ fontFamily: "Times New Roman,serif" }}
                htmlFor="name"
                className="block text-black font-medium mb-1 ml-4"
              >
                INSERT YOUR FILER(S)
              </label>
              <input
                type="file"
                className="h-10 w-full px-2 py-1  outline-transparent border-[#2d6599] border-2 rounded-lg"
              />
            </div>

            <div className="mb-8 ml-24">
              <button
                style={{ fontFamily: "Times New Roman,serif" }}
                type="submit"
                className="h-10 w-40 px-3 py-2 outline-transparent border-[#2d6599] border-2 rounded-3xl hover:bg-gray-500"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
