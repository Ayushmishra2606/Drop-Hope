import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full text-[#1E293B]">

      <Navbar/>
      
      <section className="bg-[#F1F5F9] py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2563EB]">
          Be the Drop That Starts a Ripple of Hope
        </h1>
        <p className="text-lg text-[#64748B] mb-8 max-w-xl mx-auto">
          DropHope connects kind-hearted individuals and NGOs to deliver donations where they matter most.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/register" className="bg-[#22C55E] text-white px-6 py-3 rounded hover:bg-green-700 transition font-semibold">
            I’m an Individual
          </Link>
          <Link to="/ngo-register" className="bg-[#2563EB] text-white px-6 py-3 rounded hover:bg-[#1E40AF] transition font-semibold">
            We’re an NGO
          </Link>
        </div>
      </section>

      
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2563EB] mb-4">Our Mission</h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            At <span className="text-[#2563EB] font-semibold">DropHope</span>, we believe that every act of kindness creates a ripple effect.
            Our platform makes it simple and secure for generous individuals to connect with verified NGOs and communities,
            ensuring your donations reach those who need them most. Together, we're building a more compassionate world.
          </p>
        </div>
      </section>

    
      <section className="bg-[#F1F5F9] py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8 px-4">
          <div>
            <h3 className="text-4xl font-bold text-[#2563EB]">12,500+</h3>
            <p className="text-[#64748B] mt-2">Donations Received</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#22C55E]">500+</h3>
            <p className="text-[#64748B] mt-2">Registered NGOs</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#F97316]">30,000+</h3>
            <p className="text-[#64748B] mt-2">Lives Impacted</p>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2563EB] mb-8">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-8 text-[#64748B]">
           
            <div>
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80"
                alt="Sign Up"
                className="w-full rounded-lg mb-4 h-[250px]"
              />
              <h4 className="font-semibold text-lg">Sign Up</h4>
              <p className="text-sm">Individuals and NGOs create accounts with necessary info.</p>
            </div>

           
            <div>
              <img
                src="https://imgs.search.brave.com/BmwUN0jX1WsWRZh3MTJzYCv2nkBiCZkO9B7JmQ4NWEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iYWxy/YWtzaGFiaGFyYXQu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzAxL0FydGJv/YXJkLTItMS53ZWJw"
                alt="Donate"
                className="w-full rounded-lg mb-4 h-[250px]"
              />
              <h4 className="font-semibold text-lg">Donate or Request</h4>
              <p className="text-sm">Donors offer help, NGOs list needs – we match them securely.</p>
            </div>

            
            <div>
              <img
                src="https://images.pexels.com/photos/5909876/pexels-photo-5909876.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Impact"
                className="w-full rounded-lg mb-4 h-[250px]"
              />
              <h4 className="font-semibold text-lg">Track Impact</h4>
              <p className="text-sm">Donors get notified once their help reaches those in need.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-[#F1F5F9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.pexels.com/photos/30074220/pexels-photo-30074220/free-photo-of-happy-indian-children-holding-hands.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Helping children"
            className="w-full rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#2563EB] mb-4">How DropHope Helps</h2>
            <p className="text-lg text-[#64748B]">
              We streamline the connection between those who want to give and those in need.
              Every contribution – big or small – reaches the right hands through trusted NGO partners.
              Together, we enable quicker relief, stronger communities, and real stories of hope.
            </p>
          </div>
        </div>
      </section>
      <div className="h-[53px] w-[270px] bg-[#5187fd] flex justify-center items-center fixed bottom-14 right-0"><h3 className="text-white text-xl">Enquiry👀??  📞19124133</h3></div>
      <Footer/>
    </div>
  );
};

export default Home;
