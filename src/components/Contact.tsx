import { div } from "motion/react-client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

function Contact() {
  return (
    <div className="bg-[#f08739] py-8">
      <h1 className="text-center pt-3 text-4xl text-white">Contact Us</h1>
      <div className="flex items-center justify-around">
        {/* left side  */}
        <form className="w-[40%]">
          <div className="mb-3 flex flex-col">
            <Label htmlFor="fullname" className="text-base text-gray-200 mb-2">
              Full Name
            </Label>
            <Input
              type="text"
              className="w-full px-4 py-3 bg-white text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Label htmlFor="email" className="text-base text-gray-200 mb-2">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-white text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/*  */}
          <SelectionCard />
          {/*  */}

          <div className="mb-3 flex flex-col">
            <Label htmlFor="message" className="text-base text-gray-200 mb-2">
              Your Message
            </Label>
            <Textarea
              id="message"
              className="w-full px-4 py-3 bg-white text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your message here..."
            />
          </div>

          <Button className="text-white w-fit bg-transparent  cursor-pointer border border-white hover:bg-white hover:text-[#f08739] transition duration-300">
            Submit
          </Button>
        </form>

        {/* right side */}
        <div>
          <KeepInTouch />
        </div>
      </div>
    </div>
  );
}

export default Contact;

function SelectionCard() {
  return (
    <Select>
      <SelectTrigger className="w-full bg-white">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}

function KeepInTouch() {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <h1 className="text-white font-bold">
        Keep In Touch With <br /> Our Professional Team
      </h1>
      <div className="bg-white h-16 w-64 border border-red-900 rounded flex items-center justify-center flex-col">
        <MdEmail className="text-[#f08739]" size={32} />
        <p className="font-bold text-sm">support@brightvision.pro</p>{" "}
      </div>

      <div className="bg-white h-16 w-64  border border-red-900 rounded flex items-center justify-center flex-col">
        <IoIosCall className="text-[#f08739]" size={32} />
        <p className="font-bold text-sm">0544833919</p>{" "}
      </div>
    </div>
  );
}
