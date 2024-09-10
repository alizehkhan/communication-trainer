export const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16 text-gray-500">
      <div className="mx-auto max-w-xl px-6">
        <p className="mb-4 font-serif text-3xl font-semibold">
          Effective, energising, and unforgettable
        </p>
        <blockquote>
          <q>
            <p className="mb-4">
              Haneen created a bespoke communication workshop for our company
              offsite. The team was unanimous it was the highlight of the day.
              We listened with rapt attention as Haneen unfolded how to
              understand and take accountability for our needs. We hatched
              scenarios and stepped into different energies for delivering our
              messages (greatly inspired by Haneen's Oscar-worthy
              performances!). And we did deep group work to apply Haneen's
              actionable formula to the real-life confrontations we were shying
              away from.
            </p>
            <p className="mb-4">
              But the magic began before we even got into the room that day. I
              experienced firsthand how
              <strong>
                {" "}
                Haneen's curious and nuanced inquiry teased out where our
                company culture was at{" "}
              </strong>
              — and what we really needed to get from the session. She took
              quantitative and qualitative data about our culture and what our
              employees had to say. And she synthesised different solutions,
              taking on lots of feedback to find the right workshop for us.
            </p>
            <p>
              I was really wowed by Haneen's deep passion, expertise, and
              professionalism throughout.
              <strong>
                {" "}
                But her real secret weapon, in my opinion at least, is getting
                people to lean forward, prick their ears up, and care.{" "}
              </strong>
              Even the people who thought a communication workshop would be
              fluff, squish, and someone putting words in their mouth (spoiler:
              it was none of those things) were enthralled. Every team member
              came away thinking and behaving differently. And that right there
              is the difference between a facilitator and a real change-maker.
              Thank you, Haneen!
            </p>
          </q>
          <cite className="mt-4 block font-semibold">
            — Grace Willatt, Science Lead
          </cite>
        </blockquote>
        <img src="/mojo.svg" className="mt-4 h-10" alt="" />
      </div>
    </div>
  );
};
