import Footer from '../components/Footer';
import NavbarNgo from '../components/NavbarNgo'
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const ProfileNGO = () =>{
    const [profile, setProfile] = useState({
        name: 'My Ngo',
        email: 'MyNgo@gmail.com',
        dateOfEst: '    ',
        registrationnumber: '',
        type: '',
        PhoneNo: '',
        address: '',
        state: '',
        city:'',
        website: '',
        mission: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleTypeChange = (value) => {
        setProfile((prev) => ({ ...prev, type: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile data:', profile);
    };

    const navigate = useNavigate();
    
      const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
          navigate('/'); 
        }
      };
      
    return(
        <>
            <div className='h-[20px]'></div>
            <NavbarNgo/>
            <div className="max-w-2xl mx-auto px-4 py-5 lg:col-span-2 bg-white p-8 rounded shadow mb-10 mt-5">
      
            <div className="text-4xl font-bold text-center mb-2 text-blue-600">
                Drop Hope

            </div>

            <div className="block text-sm font-medium mb-1">
                <h3 className="block text-sm font-medium mb-1 text-blue-600">Full Name</h3>
                <p className="w-full border px-3 py-2 rounded mb-6">{profile.name}</p>
                <h3 className="block text-sm font-medium mb-1 text-blue-600">Email Address 📧</h3>
                <p className="w-full border px-3 py-2 rounded mb-6">{profile.email}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label className="block text-sm font-medium mb-1 text-blue-600">Date Of Establishment</label>
                <input
                    type="date"
                    name="dateOfEst"
                    value={profile.dateOfEst}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                />
                </div>
                <div>
                <label className="block text-sm font-medium mb-1 text-blue-600">Registration Number </label>
                    <input
                        type="text"
                        name="registrationnumber"
                        value={profile.registrationnumber}
                        onChange={handleChange}
                        placeholder="e.g. 1234546789"
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 text-blue-600">Type</label>
                        <div className="flex gap-4">
                            {['Trust', 'Society', 'Nonprofit'].map((option) => (
                            <label key={option} className="flex items-center gap-1">
                                <input
                                type="radio"
                                name="type"
                                value={option}
                                checked={profile.type === option}
                                onChange={() => handleTypeChange(option)}
                                />
                                {option}
                            </label>
                            ))}
                        </div>
                </div>

                <div>
                <label className="block text-sm font-medium mb-1 text-blue-600">Phone Number 📞</label>
                    <input
                        type="text"
                        name="PhoneNo"
                        value={profile.PhoneNo}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876543210"
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>

                <div>
                <label className="block text-sm font-medium mb-1 text-blue-600">Address 🏠</label>
                <input
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    placeholder="e.g. 123 Hope Street, Kindness City, KC 12345"
                    className="w-full border px-3 py-2 rounded"
                />
                </div>

                <div>
                <label className="block text-sm font-medium mb-1 text-blue-600">State 🗺</label>
                    <select
                        name="state"
                        value={profile.state}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                    >
                        <option value="">Select State</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                </div>

                <div>
                <label className="block text-sm font-medium mb-1 text-blue-600">City</label>
                <input
                    type="text"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    placeholder="Enter city name"
                    className="w-full border px-3 py-2 rounded"
                />
                </div>

                <div>
                <label className="block text-sm font-medium mb-1 text-blue-600">Webiste</label>
                <input
                    type="text"
                    name="website"
                    value={profile.webiste}
                    onChange={handleChange}
                    placeholder="website URL"
                    className="w-full border px-3 py-2 rounded"
                />
                </div>

                <div>
                <label className="block text-sm font-medium mb-1 text-blue-600">Mission</label>
                <input
                    type="text"
                    name="mission"
                    value={profile.mission}
                    onChange={handleChange}
                    placeholder="Your mission"
                    className="w-full border px-3 py-2 rounded"
                />
                </div>

                <div className="flex justify-between">
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-purple-700"
                >
                    SAVE
                </button>
                <button
                    type="button"
                    className="text-blue-600 hover:underline"
                    onClick={() => window.history.back()}
                >
                    CANCEL
                </button>
                </div>
            </form>

            <div className="mt-12 text-center">
                <button
                onClick={handleLogout}
                className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-purple-700"
                >
                Logout
                </button>
            </div>
            </div>
            <Footer/>
        </>
    )
}
export default ProfileNGO;