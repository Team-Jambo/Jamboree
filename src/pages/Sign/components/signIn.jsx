import { Link } from "lucide-react";

const signIn = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 bg-cover h-screen">
      <h1 className="font-bold text-3xl text-center pt-20">Sign In Form</h1>
      <form className=" flex flex-col max-w-md mx-auto">
        <div className="mb-8 pt-14">
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
            className=" h-10 w-full px-2 py-1 outline-transparent border-[#2d6599] border-2 rounded-lg"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="name"
            className="block text-black font-medium mb-1 ml-4"
          ></label>
          <input
            type="email"
            placeholder="E-mail"
            className="h-10 w-full px-2 py-1 outline-transparent border-[#2d6599] border-2 rounded-lg"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="name"
            className="block text-black font-medium mb-1 ml-4"
          ></label>
          <input
            type="password"
            placeholder="Password"
            className="h-10 w-full px-2 py-1 outline-transparent border-[#2d6599] border-2 rounded-lg"
          />
        </div>

        <div className=" flex mb-8">
          <button
            type="submit"
            className="h-10 w-28 px-2 py-1 outline-none border-[#2d6599] border-2 rounded-3xl hover:text-white ml-1 mr-3 "
          >
            SignIn
          </button>
          <h2 className=" p-2 ml-16">
            {" "}
            Already have an account?{" "}
            <button className="text-[#232a85]">LogIn</button>
          </h2>
        </div>
      </form>
    </div>
  );
};

export default signIn;
