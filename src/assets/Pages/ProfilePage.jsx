import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [quiz, setQuiz] = useState([])
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserByID();
  }, []);

  const getUserByID = async () => {
    const response = await axios.get(`http://localhost:3000/auth/${id}/getUserByID`);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setQuiz(response.data.quiz)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/auth/${id}/updateUser`, {
        username,
      });
      alert('Username telah di ubah');
      localStorage.setItem("username", username); // Perbarui local storage dengan username baru
      getUserByID();
      navigate('/lutfiscript'); // Navigasi ke LutfiScriptPage untuk merefleksikan perubahan
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full bg-white py-16 flex flex-col items-center h-screen overflow-y-scroll">
      <Link to='/lutfiscript' className="fixed top-3 left-3 bg-yellow-300 px-2 py-1 rounded font-bold italic hover:bg-yellow-600">Back to Home</Link>
      <h1 className="font-bold text-3xl text-center mb-10 md:text-5xl md:mb-16">PROFILE</h1>
      <form onSubmit={handleSubmit} className="p-4 w-5/6 md:p-8 md:w-3/4 lg:w-1/2 border-2 border-slate-800 rounded shadow-xl mb-20">
        <h1 className="font-bold text-3xl text-center mb-10">Edit Profile</h1>
        <label htmlFor="email" className="w-full font-bold text-xl md:text-3xl lg:text-2xl"> Email</label>
        <input type="email" name="email" id="email" value={email} disabled onChange={(e) => setEmail(e.target.value)} className="w-full px-3  font-bold text-slate-300 py-2 md:px-7 md:py-4 bg-slate-600 bg-opacity-80 rounded lg:py-2 mb-4" />

        <label htmlFor="username" className="w-full font-bold text-xl md:text-3xl lg:text-2xl"> Username</label>
        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 text-white py-2 md:px-7 md:py-4 bg-slate-600 bg-opacity-80 rounded lg:py-2 mb-12" />

        <button type="submit" className="bg-black text-white text-center w-full rounded font-bold italic py-2">Update Profile</button>
      </form>

      <h1 className="font-bold text-3xl text-center mb-10 md:text-5xl md:mb-16">HASIL QUIZ</h1>
      <div className="w-5/6 p-4 border-2 border-slate-800 rounded shadow-xl md:grid md:grid-cols-2 md:gap-x-8">
      {quiz.length === 0 ? (
  <div className="p-4 w-5/6 md:p-8 md:w-3/4 text-center flex flex-col lg:w-1/2 items-center border-2 border-slate-800 rounded shadow-xl">
    <p className="text-center font-semibold mb-3 text-lg md:text-xl">Anda belum mengikuti Quiz Apapun, ingin Mencobanya?</p>
    <Link className="font-bold text-sm italic bg-black rounded px-3 py-1 text-white md:text-lg md:px-5 md:py-2">Play Quiz</Link>
  </div> 
) : (
  quiz.map(data => (
    <div key={data._id} className="w-full bg-slate-300 border border-slate-600 p-4 shadow-lg flex flex-col items-center rounded mb-10">
      <h1 className="font-black text-2xl mb-4">YOUR SCORE</h1>
      <div className="border-4 p-3 rounded-full border-black mb-7">
        <p className="font-bold text-3xl">{data.score == 0 ? '0' : data.score}</p>
      </div>
      <p className="font-bold">{data.quizname}</p>
      <p className="font-semibold italic">percobaan ke: {data.percoobaan}</p>
    </div>
  ))
)}


      </div>
      
    </section>
  );
};

export default ProfilePage;
