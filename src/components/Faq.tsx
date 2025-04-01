import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {

  interface IFaq{
    question: string,
    answer: string
  }

  const faqs: IFaq[] = [
    {
      question: "How can team-building become effective?",
      answer:
        "Yes, we offer customizable activities that most team-building providers in Saudi Arabia offer customizable activities that can be tailored to align with your company’s objectives, team dynamics, and desired outcomes, ensuring a meaningful and effective experience for participants.",
    },
    {
      question: "Do team-building activities incorporate cultural and organizational values?",
      answer:
        "We carefully study organizational values to integrate them into the activities. Specific exercises are designed to address these values, and we take pride in delivering experiences rooted in our deep understanding of the Saudi culture and norms.",
    },
    {
      question: "What are some examples of effective team-building activities?",
      answer:
        "Examples include problem-solving challenges, outdoor adventures, collaborative workshops, and role-based exercises that promote communication, trust, and teamwork.",
    },
    {
      question: "How do team-building activities improve collaboration and productivity?",
      answer:
        "Team-building activities encourage open communication, strengthen relationships, and build trust among team members. These elements lead to better collaboration, increased motivation, and improved productivity in the workplace.",
    },
    {
      question: "How often should companies conduct team-building activities?",
      answer:
        "The frequency depends on the company’s goals and team dynamics, but quarterly or bi-annual team-building activities can help maintain engagement, boost morale, and reinforce team cohesion.",
    },
    {
      question: "Can virtual teams also benefit from team-building activities?",
      answer:
        "Yes, remote teams can engage in virtual team-building exercises such as online escape rooms, virtual coffee chats, and collaborative problem-solving games to foster teamwork and connection.",
    },
    {
      question: "What are the key benefits of team-building activities?",
      answer:
        "Key benefits include improved communication, better problem-solving skills, increased trust, stronger collaboration, and higher employee engagement.",
    },
    {
      question: "How can introverted employees benefit from team-building activities?",
      answer:
        "Team-building activities can provide a comfortable environment for introverted employees to interact at their own pace, helping them build confidence, strengthen relationships, and contribute effectively to the team.",
    },
    {
      question: "Are team-building activities suitable for all company sizes?",
      answer:
        "Yes, team-building activities can be tailored for businesses of all sizes, from startups to large corporations, ensuring they address specific team needs and objectives.",
    },
    {
      question: "How do team-building activities align with leadership development?",
      answer:
        "Many team-building activities focus on leadership skills such as decision-making, delegation, problem-solving, and conflict resolution, helping employees develop and refine their leadership potential.",
    },
  ];

  return (
    <div className="flex flex-col bg-gray-200 items-center justify-center px-20 py-10">
      <h1 className="font-bold text-4xl mt-3 text-[#f08739]">
        Frequently Asked Question
      </h1>
      <Accordion type="single" collapsible className="w-full mt-5">
{
  faqs.map((faq, index) => (
    
<div key={index}>
<AccordionItem value={`item-${index+1}`} >
    <AccordionTrigger className="text-2xl cursor-pointer">
{faq.question}
    </AccordionTrigger>
    <AccordionContent className="text-lg text-blue-800">
   {faq.answer}
    </AccordionContent>
  </AccordionItem>

  <div className="w-full h-[1px] bg-black"></div>
</div>

  ))
}
   
      </Accordion>
    </div>
  );
}

export default Faq;

