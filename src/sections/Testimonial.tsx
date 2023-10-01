const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16 text-gray-500">
      <div className="mx-auto max-w-xl px-6">
        <p className="mb-4 font-serif text-3xl font-semibold">
          Non-violent communication workshop
        </p>
        <blockquote>
          <q>
            I used to feel a lot of reluctance going into difficult
            conversations at work - I would even class myself as &quot;conflict
            avoidant&quot;. After Haneen&apos;s workshop, I was surprised how
            easy it was to bring up feedback that built trust and encouragement,
            rather than awkwardness! We also practiced how to ask for what we
            want from colleagues (being mindful of different positions of power)
            and how to build in healthy boundaries so we don&apos;t burn out! In
            general, Haneen&apos;s super warm approach helped our team feel more
            open and &quot;human&quot;. I&apos;ve always found this kind of work
            culture hard to re-create without having a shared language around
            communication - and I highly recommend Haneen&apos;s facilitation
            here! You&apos;re in trusted hands.
          </q>
          <cite className="mt-4 block font-semibold">
            — Ariana, Senior Product Designer
          </cite>
        </blockquote>
        <img src="/hellofresh.png" className="mt-4 h-10" alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
