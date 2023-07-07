const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16 text-gray-500 text-center">
      <div className="max-w-xl mx-auto px-6">
        <p className="text-xl font-bold mb-4 font-serif">
          Non-violent communication workshop
        </p>
        <blockquote>
          <q>
            Lorem ipsum dolor sit amet consectetur. Libero iaculis at dignissim
            gravida molestie pretium blandit est eu. Condimentum vitae venenatis
            turpis semper. Id leo fermentum est enim. Elit cras accumsan at id
            lacinia ac ut. Lorem ipsum dolor sit amet consectetur. Condimentum
            vitae venenatis turpis semper.
          </q>
          <cite className="font-bold mt-4 block">
            — Alizeh Khan, Frontend Engineer
          </cite>
        </blockquote>
        <img src="/hellofresh.png" className="h-10 mt-4 mx-auto" alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
