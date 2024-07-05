import axios from "axios";

const LetsTalk = () => {
  const postEvent = async (event) => {
    // Post event to backend
    event.preventDefault();
    // Collect all inputs from form
    const formData = new FormData(event.target);
    // Post data
    const response = await axios.post(
      "https://jambo-run-1.onrender.com/events",
      formData
    );
    console.log(response);
  };

  return (
    <div className="bg-[url('./././assets/images/gallery/fun.jpeg')] bg-cover h-full flex justify-evenly p-12">
      <div className="w-[400px] h-1/4 object-cover">
        <h1
          style={{ fontFamily: "Monaco" }}
          className="text-white text-4xl font-bold pb-6 leading-snug"
        >
          Elevate Your Event Planning
        </h1>
        <p
          style={{ fontFamily: "Garamond,serif" }}
          className="text-2xl leading-10 irst-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-violet-900
  first-letter:mr-3 first-letter:float-left text-white "
        >
          We are Jamboree Events, your trusted partners in music and corporate
          event planning perfection, every time. Our comprehensive event
          planning services include innovative event marketing strategies,
          expert logistics, and successful event execution.
        </p>
      </div>
      <div className="bg-white h-100vh w-96 rounded-[10px] shadow-2xl shadow-lime-50 object-cover">
        <div className="w-80 ml-8">
          <h1
            style={{ fontFamily: "Monaco,serif" }}
            className="font-bold text-3xl text-center pb-4 text-[#65359c] "
          >
            Let's Talk
          </h1>
          <p
            style={{ fontFamily: "Times New Roman,serif" }}
            className="text-orange-400 ml-3"
          >
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
                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg "
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
                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg "
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
                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg "
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
                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg "
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
                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg "
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
                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg"
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
                className="h-10 w-full px-2 py-1  outline-transparent border-[#a799b7] border-2 rounded-lg"
              />
            </div>

            <div className="mb-8 ml-24">
              <button
                style={{ fontFamily: "Times New Roman,serif" }}
                type="submit"
                className="h-10 w-40 px-3 py-2 outline-transparent border-[#a799b7] border-2 rounded-3xl hover:bg-[#a799b7]"
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
