import {useState} from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <div className="bg-[#3f3f46]">
      <Navbar/>
      <div className="flex justify-between items-center px-[5%] pt-14 mb-5" id="hero">
        <div className="w-1/2">
          <p className="font-bold text-white text-5xl mb-5">
            Hi! <br />
            <span className="text-[#4ade80]">Wellcome</span> to My Website
          </p>
          <p className="text-white">Hi teman-teman aku Fatur Rahman, panggi aja Fatur. Ini merupakan website tugas Kode Kompetence II Kampus Merdeka React JS, yang saya bangun menggunakan <span className="text-[#F26430]">HTML</span> <span className="text-[#24CBBB]">Tailwind CSS</span> dan <span className="text-[#08DDFF]">React JS</span>.</p>
        </div>
        <div className="w-1/2">
          <img className="w-full h-auto" src="/img/hero.svg" alt="" />
        </div>
      </div>
      <div className="bg-[#3f3f46] pt-20 h-[85vh] mb-9" id="aboutUs">
        <div className="relative mx-[5%]">
          <div className="px-2 py-1 rounded-lg absolute top-16 left-1/2 transform -translate-x-1/2">
            <p className="text-3xl text-green-400 font-bold">About Us</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-60 h-60 rounded-full bg-[url('/img/aboutUsProfile.jpg')] bg-cover"></div>
          </div>
          <div className=" rounded-xl h-[70vh] flex justify-between p-[4%]">
            <div className="flex flex-col gap-10">
              <div className="w-96 bg-slate-200 rounded-md p-2 ml-14">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit veritatis dignissimos facere, consequuntur omnis exercitationem corporis consectetur officia ab tempore.</div>
              <div className="w-96 bg-slate-300 rounded-md p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit veritatis dignissimos facere, consequuntur omnis exercitationem corporis consectetur officia ab tempore.</div>
              <div className="w-96 bg-slate-400 rounded-md p-2 ml-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit veritatis dignissimos facere, consequuntur omnis exercitationem corporis consectetur officia ab tempore.</div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="w-96 bg-slate-400 rounded-md p-2 ml-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nesciunt neque labore fuga quasi voluptatum ipsa consequuntur blanditiis repellat distinctio!</div>
              <div className="w-96 bg-slate-300 rounded-md p-2 ml-24">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nesciunt neque labore fuga quasi voluptatum ipsa consequuntur blanditiis repellat distinctio!</div>
              <div className="w-96 bg-slate-200 rounded-md p-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nesciunt neque labore fuga quasi voluptatum ipsa consequuntur blanditiis repellat distinctio!</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-[10%]" id="contactUs">
        <div className="w-1/2">
          <img className="" src="/img/contactUs.svg" alt="" />
        </div>
        <div className="w-1/2">
          <p className="text-white text-3xl font-bold mb-10">Contact Us</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                className="w-4/5 p-3 text-white bg-transparent rounded-md border-2 border-green-500 hover:border-green-600 focus:outline-none"
                type="text"
                placeholder="Type Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input
                className="w-4/5 p-3 text-white bg-transparent rounded-md border-2 border-green-500 hover:border-green-600 focus:outline-none"
                type="text"
                placeholder="Type Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              className="w-4/5 h-20 p-3 mb-5 text-white bg-transparent rounded-md border-2 border-green-500 hover:border-green-600 focus:outline-none"
              name="question"
              id="question"
              placeholder="Your Question Here.."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>
            <div>
              <button
                className="text-white font-semibold px-5 py-2 bg-green-500 hover:bg-green-600 rounded-md"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-md w-[40%] h-80 relative">
              <button
                className="text-white font-semibold px-4 py-2 bg-red-500 hover:bg-red-600 rounded-full absolute -top-3 -right-3"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <p className="text-2xl font-bold mb-10 text-center">Data yang terkirim : </p>
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold mb-5"> <span className="font-bold">Nama </span>: {name}</p>
                  <p className="text-lg font-semibold mb-5"><span className="font-bold">Email </span>: {email}</p>
                  <p className="text-lg font-semibold mb-5"><span className="font-bold">Pertanyaan </span>: {question}</p>
                </div>
                <div>
                  <img className="w-60 h-60 -mt-10" src="/img/sendFile.jpg" alt="" />
                </div>
              </div>
              
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  )
}

export default Home