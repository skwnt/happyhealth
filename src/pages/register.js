import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const registerUser = async (userData, navigate) => {
    try {
        const response = await axios.post('http://localhost:5001/register', userData);

        if (response.data.token) {
            localStorage.setItem('token', response.data.token); // Store the JWT
        }

        console.log('Registration successful, navigating to login...');
        navigate('/login'); // This should navigate after a successful registration
    } catch (error) {
        console.error('Registration error:', error.response?.data || error.message);
        alert('Error during registration. Please try again.');
    }
};


function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    dob: "",
    hospital_number: "",
    email: "",
    department_id: "",
    telephone_number: "",
    password: "",
    confirm_password: "",
  });

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("http://localhost:5001/departments");
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error.response?.data || error.message);
        alert("Error fetching departments. Check console for details.");
      }
    };

    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevents the default GET request

    const { password, confirm_password, dob, ...userData } = formData;

    if (Object.values(formData).some((value) => !value)) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    userData.password = password;
    userData.dob = dob;

    await registerUser(userData, navigate);
  };

  return (
    <div className="max-w-4xl max-sm:max-w-lg mx-auto font-[sans-serif] p-6">
      <div className="text-center mb-12 sm:mb-16">
        <img src={`${process.env.PUBLIC_URL}/images/nurse.gif`} alt="Nurse" className="w-48 inline-block" />
        <h4 className="text-gray-600 text-base mt-6">Sign up to access the hospital portal</h4>
      </div>

      {/* ✅ Ensure the form tag includes `onSubmit={handleSubmit}` */}
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-600 text-sm mb-2 block">First Name</label>
            <input
              name="firstName"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#33CCCC] transition-all"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Surname</label>
            <input
              name="surname"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#33CCCC] transition-all"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Date of Birth</label>
            <input
              name="dob"
              type="date"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#33CCCC] transition-all"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Hospital Number</label>
            <input
              name="hospital_number"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#33CCCC] transition-all"
              placeholder="EG: CHI25121900"
              value={formData.hospital_number}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Email</label>
            <input
              name="email"
              type="email"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#33CCCC] transition-all"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Department</label>
            <select
              name="department_id"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#33CCCC] transition-all"
              value={formData.department_id}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Telephone No.</label>
            <input
              name="telephone_number"
              type="tel"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#33CCCC] transition-all"
              placeholder="Enter mobile number"
              value={formData.telephone_number}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Password</label>
            <input
              name="password"
              type="password"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#33CCCC] transition-all"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Confirm Password</label>
            <input
              name="confirm_password"
              type="password"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#33CCCC] transition-all"
              placeholder="Confirm password"
              value={formData.confirm_password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sm:!mt-12 mt-6">
          <button
            type="submit" // ✅ Changed to type="submit"
            className="border-2 border-[#33CCCC] rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-[#33CCCC] hover:text-gray-200"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
