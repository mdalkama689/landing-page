import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonitals = [
  {
    name: "company-1",
    url: "https://teambuilding-ksa.com/wp-content/uploads/2024/11/New-Project-1-2-1.jpg",
  },
  {
    name: "company-2",
    url: "https://teambuilding-ksa.com/wp-content/uploads/2024/11/MINISTRY-1.jpg",
  },
  {
    name: "company-3",
    url: "https://teambuilding-ksa.com/wp-content/uploads/2024/11/Boston-1.jpg",
  },
  {
    name: "company-5",
    url: "https://teambuilding-ksa.com/wp-content/uploads/2024/11/www.png",
  },
  {
    name: "company-6",
    url: "https://teambuilding-ksa.com/wp-content/uploads/2024/11/ddd.png",
  },
  {
    name: "company-7",
    url: "https://teambuilding-ksa.com/wp-content/uploads/2024/11/1.png",
  },
];

function Testimonials() {
  return (
    <div>
      <h1 className="text-center mt-10 font-bold text-5xl text-[#f08739]">
        Proud To Serve
      </h1>

      <MovingCard direction="left" />
      <div className="mt-[-60px]">
        <MovingCard direction="right" />
      </div>
    </div>
  );
}

export default Testimonials;

function MovingCard({
  direction,
}: {
  direction: "left" | "right" | undefined;
}) {
  return (
    <div>
      <InfiniteMovingCards
        items={testimonitals}
        direction={direction}
        speed="slow"
      />
    </div>
  );
}
