import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Contact = () => {
    return (
        <>
        <Navbar/>
        <div className="bg-gradient-to-br from-white to-gray-100 min-h-screen py-10 px-4">
            
            <div >
                <h1 className="flex justify-center text-center text-3xl font-bold text-gray-800 mb-2">Contact&support</h1>
                <p className="flex justify-center text-center text-xl text-gray-500 mb-6">
                    Have questions or need help? We're here to assist you. Get in touch with our support team.
                </p>
            </div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">



        <div className="lg:col-span-2 bg-white p-8 rounded shadow">
          <h2 className="text-blue-600 text-xl font-semibold mb-2">Send us a Message</h2>
          <p className="text-sm text-gray-500 mb-6">
            Fill out the form below and we’ll respond as soon as possible
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Full Name</h3>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Address</h3>
          </div>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
                />
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
                />
            </div>



            <h3 className="text-lg font-semibold text-gray-800 mb-2">Subject</h3>
            <input
              type="text"
              placeholder="Brief description of your inquiry"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
              />



            <h3 className="text-lg font-semibold text-gray-800 mb-2">Category</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm font-medium text-gray-700">
              {["General Inquiry", "Technical Support", "Report Issue", "NGO Partnership"].map(
                  (category) => (
                      <label
                      key={category}
                      className="flex items-center space-x-2 border rounded px-3 py-2 cursor-pointer hover:border-blue-500"
                      >
                    <input type="radio" name="category" className="accent-blue-600" />
                    <span>{category}</span>
                  </label>
                )
            )}




            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Message</h3>
            <textarea
              placeholder="Please describe your inquiry in detail..."
              rows="5"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
              ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-60 py-2 rounded hover:bg-blue-700 transition"
              >
              Send Message
            </button>
          </form>
        </div>




        <div className="space-y-6">


          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">Get in Touch</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 <strong>Email:</strong> support@drophope.org</p>
              <p>📞 <strong>Phone:</strong> +1 (555) 123-4567</p>
              <p>📍 <strong>Address:</strong> 123 Hope Street, Kindness City, KC 12345</p>
            </div>
          </div>



          <div className="bg-white p-6 rounded shadow text-sm text-gray-700 space-y-2">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Quick Help</h3>
            <p><strong>How do I donate items?</strong> Visit our donate page, fill out the form with item details, and wait for an NGO to contact you.</p>
            <p><strong>How can NGOs join?</strong> Register as an NGO during signup. We'll verify your organization before approval.</p>
            <p><strong>Is pickup free?</strong> Yes! NGOs arrange free pickup of donated items from your location.</p>
          </div>




          <div className="bg-blue-50 p-4 rounded shadow text-blue-900">
            <p className="font-medium">🔄 Quick Response</p>
            <p className="text-sm">We typically respond to all inquiries within 24 hours during business days.</p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default Contact;