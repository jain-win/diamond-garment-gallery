
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

const ContactPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productParam = queryParams.get('product');
  const { toast } = useToast();
  
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    product: productParam || '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (productParam) {
      setFormValues(prev => ({
        ...prev,
        product: productParam,
        message: `I'm interested in ${productParam}. Please provide more information.`
      }));
    }
  }, [productParam]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name as keyof FormValues]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = () => {
    const errors: Partial<FormValues> = {};
    
    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formValues.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formValues.phone.replace(/[^0-9]/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Message Sent!",
          description: "Thank you for your enquiry. We will get back to you soon.",
        });
        
        // Reset form
        setFormValues({
          name: '',
          email: '',
          phone: '',
          product: '',
          message: '',
        });
      }, 1500);
    }
  };
  
  return (
    <Layout>
      <div className="bg-softgray py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-charcoal">Contact Us</h1>
          <p className="text-xl text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            Have questions or need a quote? Get in touch with us today.
          </p>
        </div>
      </div>
      
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name*
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className={formErrors.name ? "border-red-500" : ""}
                  placeholder="Enter your full name"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className={formErrors.email ? "border-red-500" : ""}
                    placeholder="your@email.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    className={formErrors.phone ? "border-red-500" : ""}
                    placeholder="Your contact number"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                  Product of Interest
                </label>
                <Input
                  id="product"
                  name="product"
                  value={formValues.product}
                  onChange={handleChange}
                  placeholder="Which product are you interested in?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message*
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  className={cn("min-h-[150px]", formErrors.message ? "border-red-500" : "")}
                  placeholder="Tell us about your requirements..."
                />
                {formErrors.message && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-brand hover:bg-brand-dark text-white py-2 px-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-light p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Address</h3>
                  <p className="text-gray-600">
                    18/888/2 Jawahar Nagar,<br />
                    Near Postoffice, Station Road,<br />
                    Ichalkaranji, Maharashtra - 416115
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-light p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+9175334556" className="hover:text-brand">+91 75334 556</a><br />
                    <a href="tel:+917020460115" className="hover:text-brand">+91 70204 60115</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-light p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:diamondgarment115@gmail.com" className="hover:text-brand">diamondgarment115@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-light p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15274.21785090517!2d74.45!3d16.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e15a71d4d823%3A0xe0048ad3c58497c!2sJawahar%20Nagar%2C%20Ichalkaranji%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1684910726992!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Diamond Garment Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
