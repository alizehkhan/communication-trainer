const Workshops = () => {
  const col1 = [
    {
      title: '🗣️ Gossip',
      description:
        'How to transform workplace gossip into a more safe & respectful culture',
    },
    {
      title: '💬 Sharing feedback',
      description:
        "How to share feedback with someone, instead of complaining (e.g. “they're a micro manager!” “they're incompetent”)",
    },
    {
      title: '🙅 Sharing Boundaries',
      description:
        'Saying no, asking for extensions, standing up for yourself etc. No more people pleasing!',
    },
  ];
  const col2 = [
    {
      title: '👂🏼 Listening to feedback',
      description: 'How to listen to feedback without taking it personally',
    },
    {
      title: '😶 Art of interruption',
      description: "When people speak for longer than you've enjoyed.",
    },
    {
      title: '💚 Empathy',
      description:
        "When pain blocks our ability to empathise with the 'enemy'- what do we do?",
    },
    {
      title: '🪜 Power dynamics',
      description: 'How to express thoughts & concerns openly to superiors',
    },
  ];

  const col3 = [
    {
      title: '🛟 Stop rescuing',
      description:
        'How to listen to someone in distress & respond without trying to fix them!',
    },
    {
      title: '🙋 Asking',
      description:
        'How to tactfully ask for what you want (rather than blaming & finger pointing) e.g. “this meeting is a waste of time!”',
    },
    {
      title: '🧘 Self regulate',
      description:
        'How to self-regulate if you notice you are super triggered in the office',
    },
  ];

  return (
    <div className="container flex flex-col items-center my-24 text-gray-700">
      <h2 className="uppercase text-gray-700 tracking-wider font-bold mb-4">
        Workshops
      </h2>
      <p className="font-serif text-5xl text-gray-700 font-bold">
        I touch on a range of topics
      </p>
      <div className="flex gap-8 mt-10 flex-wrap">
        <div className="flex flex-col gap-8">
          {col1.map((topic, index) => (
            <div
              key={index}
              className="bg-gray-100 w-72 py-8 px-4 rounded-md text-center shadow-sm"
            >
              <p className="font-serif font-bold text-lg mb-2">{topic.title}</p>
              <p className="text-lg">{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {col2.map((topic, index) => (
            <div
              key={index}
              className="bg-gray-100 w-72 py-8 px-4 rounded-md text-center shadow-sm"
            >
              <p className="font-serif font-bold text-lg mb-2">{topic.title}</p>
              <p className="text-lg">{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {col3.map((topic, index) => (
            <div
              key={index}
              className="bg-gray-100 w-72 py-8 px-4 rounded-md text-center shadow-sm"
            >
              <p className="font-serif font-bold text-lg mb-2">{topic.title}</p>
              <p className="text-lg">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshops;
