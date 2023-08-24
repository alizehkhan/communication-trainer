const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16 text-gray-500">
      <div className="mx-auto max-w-xl px-6">
        <p className="mb-4 font-serif text-3xl font-bold">
          Non-violent communication workshop
        </p>
        <blockquote>
          <q>
            I used to feel a lot of fear & reluctance going into difficult
            conversations at work, often avoiding them altogether. After
            Haneen's workshop, I was surprised how easy it was to engage in
            these conversations that actually built trust and connection, rather
            than create friction! I developed a lot more resilience in hearing
            the word “no”, which makes it easier to formulate requests to
            colleagues and delegate effectively.
            <br />
            <br />
            In general, Haneen's tools really help make the team feel like a
            supportive and trusting space where we can resolve problems quickly
            - rather than one that is susceptive to complaints or gossip!
          </q>
          <cite className="mt-4 block font-bold">
            — Alizeh Khan, Frontend Engineer
          </cite>
        </blockquote>
        <img src="/hellofresh.png" className="mt-4 h-10" alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
