
import Layout from "../components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-softgray py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-charcoal">About Us</h1>
        </div>
      </div>
      
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Diamond Garment was established in 2008 with a clear mission: to manufacture high-quality uniforms that meet the diverse needs of various industries and institutions. Located in Ichalkaranji, Maharashtra, we have grown from a small workshop to a well-established manufacturing unit.
            </p>
            <p className="text-gray-700 mb-4">
              Under the leadership of Mr. Vimal Kumar Pareek, we have built a reputation for excellence, reliability, and customer satisfaction. Our journey has been marked by continuous improvement, innovation, and a deep understanding of our clients' requirements.
            </p>
            <p className="text-gray-700">
              Today, Diamond Garment stands as a trusted name in the uniform manufacturing industry, serving hospitals, schools, hotels, industries, and many other sectors across the region.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1593696954577-d3e18bigbad?q=80&w=880&auto=format&fit=crop" 
              alt="Our Workshop" 
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-brand p-4 rounded-lg shadow-lg">
              <p className="text-white text-xl font-bold">Est. 2008</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-container bg-softgray">
        <h2 className="section-title text-center">Our Values</h2>
        <p className="section-subtitle text-center mx-auto">
          The principles that guide our work and relationships
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Quality</h3>
            <p className="text-gray-600">
              We are committed to delivering products of the highest quality. From fabric selection to the final stitch, quality control is integrated at every step of our manufacturing process.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">
              We believe in building lasting relationships with our clients. Understanding their needs, providing personalized service, and ensuring their satisfaction is our priority.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Timeliness</h3>
            <p className="text-gray-600">
              We understand the importance of deadlines. Our efficient production system and dedicated team ensure that all orders are delivered on time, every time.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-container">
        <h2 className="section-title text-center">Our Process</h2>
        <p className="section-subtitle text-center mx-auto">
          How we transform your requirements into high-quality uniforms
        </p>
        
        <div className="mt-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/5 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold">1</div>
              <div className="h-full w-1 bg-brand hidden md:block"></div>
            </div>
            <div className="md:w-4/5 pb-10">
              <h3 className="text-xl font-bold text-charcoal mb-2">Consultation & Requirements</h3>
              <p className="text-gray-600">
                We start by understanding your specific needs, discussing design requirements, material preferences, quantity, and timeline.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/5 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold">2</div>
              <div className="h-full w-1 bg-brand hidden md:block"></div>
            </div>
            <div className="md:w-4/5 pb-10">
              <h3 className="text-xl font-bold text-charcoal mb-2">Design & Sampling</h3>
              <p className="text-gray-600">
                Our design team creates samples based on your requirements, which are presented for your approval.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/5 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold">3</div>
              <div className="h-full w-1 bg-brand hidden md:block"></div>
            </div>
            <div className="md:w-4/5 pb-10">
              <h3 className="text-xl font-bold text-charcoal mb-2">Production</h3>
              <p className="text-gray-600">
                Once the design is approved, we begin production using premium materials and skilled craftsmen.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/5 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold">4</div>
              <div className="h-full w-1 bg-brand hidden md:block"></div>
            </div>
            <div className="md:w-4/5 pb-10">
              <h3 className="text-xl font-bold text-charcoal mb-2">Quality Check</h3>
              <p className="text-gray-600">
                Each piece undergoes a thorough quality check to ensure it meets our high standards.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/5 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold">5</div>
            </div>
            <div className="md:w-4/5">
              <h3 className="text-xl font-bold text-charcoal mb-2">Delivery</h3>
              <p className="text-gray-600">
                Finally, we deliver the finished products to your location, ensuring they reach you in perfect condition and on time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-brand">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <a 
            href="/contact" 
            className="bg-white text-brand hover:bg-gray-100 rounded-md px-8 py-3 font-medium transition-all inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
