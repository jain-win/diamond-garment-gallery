
import { Flag, Award, Users, History, Clock, Settings, Send, Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from "../components/layout/Layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-brand/10 to-brand/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-4">About Us</h1>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
            Learn about our story, values, and the people behind Diamond Garment
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <History className="text-brand h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider text-brand">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal leading-tight">A Legacy of Quality and Excellence</h2>
            <div className="w-20 h-1 bg-brand mb-6"></div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Diamond Garment was established in 2008 with a clear mission: to manufacture high-quality uniforms that meet the diverse needs of various industries and institutions. Located in Ichalkaranji, Maharashtra, we have grown from a small workshop to a well-established manufacturing unit.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Under the leadership of Mr. Vimal Kumar Pareek, we have built a reputation for excellence, reliability, and customer satisfaction. Our journey has been marked by continuous improvement, innovation, and a deep understanding of our clients' requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, Diamond Garment stands as a trusted name in the uniform manufacturing industry, serving hospitals, schools, hotels, industries, and many other sectors across the region.
            </p>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <AspectRatio ratio={4/3}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=880&auto=format&fit=crop" 
                  alt="Our Workshop" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=880&auto=format&fit=crop";
                    e.currentTarget.onerror = null;
                  }}
                />
              </AspectRatio>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-brand p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-white text-xl font-bold">Est. 2008</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Award className="text-brand h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider text-brand">Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-4 leading-tight">The Principles That Guide Our Work</h2>
            <div className="w-20 h-1 bg-brand mb-6 mx-auto"></div>
            <p className="text-lg text-center mx-auto max-w-3xl text-gray-600 leading-relaxed">
              At Diamond Garment, we are guided by core values that define how we operate,
              interact with clients, and deliver our products and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="h-2 bg-blue-500"></div>
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4">Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to delivering products of the highest quality. From fabric selection to the final stitch, quality control is integrated at every step of our manufacturing process.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="h-2 bg-green-500"></div>
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4">Customer Satisfaction</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in building lasting relationships with our clients. Understanding their needs, providing personalized service, and ensuring their satisfaction is our priority.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="h-2 bg-amber-500"></div>
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4">Timeliness</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand the importance of deadlines. Our efficient production system and dedicated team ensure that all orders are delivered on time, every time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Journey Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Flag className="text-brand h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider text-brand">Our Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-4 leading-tight">The Road to Excellence</h2>
          <div className="w-20 h-1 bg-brand mb-6 mx-auto"></div>
          <p className="text-lg text-center mx-auto max-w-3xl text-gray-600 leading-relaxed">
            From our humble beginnings to becoming a trusted name in uniform manufacturing,
            our journey has been marked by dedication, growth and continuous improvement.
          </p>
        </div>
        
        <div className="relative py-8">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {/* Timeline items */}
          <div className="space-y-16 md:space-y-24">
            {/* Item 1 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex-1 pl-12 md:pl-0 md:pr-12 md:text-right">
                  <div className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand font-medium text-sm mb-2">2008</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Foundation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Diamond Garment was established with a simple mission: to create quality uniforms that meet industry standards. We started with a small team of skilled tailors and basic equipment.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border-4 border-white bg-brand text-white shadow">
                  <span className="text-base md:text-lg font-bold">1</span>
                </div>
                <div className="hidden md:block flex-1 pl-12"></div>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="hidden md:block flex-1 pr-12 text-right"></div>
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border-4 border-white bg-brand text-white shadow">
                  <span className="text-base md:text-lg font-bold">2</span>
                </div>
                <div className="flex-1 pl-12">
                  <div className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand font-medium text-sm mb-2">2012</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Expansion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    As demand grew, we expanded our operations and moved to a larger facility. We invested in advanced machinery and expanded our team to meet the growing demand for our products.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex-1 pl-12 md:pl-0 md:pr-12 md:text-right">
                  <div className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand font-medium text-sm mb-2">2016</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Diversification</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We diversified our product range to include various types of uniforms catering to different sectors such as healthcare, education, hospitality, and more.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border-4 border-white bg-brand text-white shadow">
                  <span className="text-base md:text-lg font-bold">3</span>
                </div>
                <div className="hidden md:block flex-1 pl-12"></div>
              </div>
            </div>
            
            {/* Item 4 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="hidden md:block flex-1 pr-12 text-right"></div>
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border-4 border-white bg-brand text-white shadow">
                  <span className="text-base md:text-lg font-bold">4</span>
                </div>
                <div className="flex-1 pl-12">
                  <div className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand font-medium text-sm mb-2">Present Day</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Industry Leader</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Today, Diamond Garment stands as a trusted name in the uniform manufacturing industry, known for quality, reliability, and customer satisfaction across the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Settings className="text-brand h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider text-brand">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-4 leading-tight">How We Work</h2>
            <div className="w-20 h-1 bg-brand mb-6 mx-auto"></div>
            <p className="text-lg text-center mx-auto max-w-3xl text-gray-600 leading-relaxed">
              Our streamlined process ensures quality at every step, from your initial 
              requirements to final delivery of your custom uniforms.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md relative hover:shadow-lg transition-all w-full md:w-1/4">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold">1</div>
              <div className="mb-4 text-brand flex justify-center">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2 text-center">Consultation</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We start by understanding your specific needs, discussing design requirements, material preferences, quantity, and timeline.
              </p>
            </div>
            
            <div className="hidden md:flex items-center justify-center">
              <svg className="text-brand h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative hover:shadow-lg transition-all w-full md:w-1/4">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold">2</div>
              <div className="mb-4 text-brand flex justify-center">
                <Pencil className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2 text-center">Design & Sampling</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Our design team creates samples based on your requirements, which are presented for your approval.
              </p>
            </div>
            
            <div className="hidden md:flex items-center justify-center">
              <svg className="text-brand h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative hover:shadow-lg transition-all w-full md:w-1/4">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold">3</div>
              <div className="mb-4 text-brand flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2 text-center">Production & Delivery</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We begin production using premium materials, conduct thorough quality checks, and ensure timely delivery to your location.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-brand via-amber-500 to-brand-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md">
            Ready to Work With Us?
          </h2>
          <Link 
            to="/contact" 
            className="bg-white text-brand hover:bg-gray-100 rounded-md px-8 py-4 font-medium transition-all inline-flex items-center gap-2 hover:shadow-lg"
          >
            Contact Us Today
            <Send className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
