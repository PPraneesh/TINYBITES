import React, { useState } from 'react';
import { Smile, Frown, Meh, Star, Utensils, Award, Book, ChevronUp, ChevronDown, Gift, Settings } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ChildDashboard = () => {
  const [petMood, setPetMood] = useState('happy');
  const [showFacts, setShowFacts] = useState(false);

  const moodIcons = {
    happy: <Smile className="text-green-500" size={80} />,
    sad: <Frown className="text-red-500" size={80} />,
    neutral: <Meh className="text-yellow-500" size={80} />
  };  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-purple-200 p-8">
              <Toaster position="top-right" />

      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8 animate-bounce">Welcome to TinyBites Adventure!</h1>

      {/* 1. Virtual Pet */}
      <section className="bg-white rounded-3xl shadow-lg p-6 mb-8 transform transition-all hover:scale-[1.02]">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Your Virtual Pet</h2>
        <div className="flex items-center justify-around">
          <img src="/simba.png" alt="Virtual Pet" className="rounded-full border-4 w-40 aspect-square border-indigo-300 " />
          <div className="text-center">
            <h3 className="text-xl  font-semibold text-indigo-500 mb-2">Pet's Mood</h3>
            <span className='flex justify-center'>{moodIcons[petMood]}</span>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
            <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 transition-colors"
            onClick={()=>{
              const messages = [
                "ouch!",
                "arghh ",
                "oh no..."
              ];
              
              const randomMessage = messages[Math.floor(Math.random() * messages.length)];
              
              toast(randomMessage, {
                icon: <span style={{ fontSize: '2.5rem' }}>🤕</span>,
                style: {
                  fontSize: '1.2rem',
                  height: '4rem',
                }
              });
                setPetMood('sad')
                setTimeout(() => {
                    setPetMood('happy');
                  }, 2000);
            } }
            >Smack</button>
        </div>
        <div className="mt-4 text-center">
          <button className="bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 transition-colors" 
          onClick={()=>{
            const messages = [
                "Nom nom nom!",
                "Yummy!"
              ];
              
              const randomMessage = messages[Math.floor(Math.random() * messages.length)];
              
              toast(randomMessage, {
                icon: <span style={{ fontSize: '2.5rem' }}>🐶</span>,
                style: {
                  fontSize: '1.2rem',
                  height: '4rem',
                }
              });
              setPetMood('happy');
          }}
          >Feed Your Pet</button>
        </div>
      </section>

      {/* 2. Gamified Reward System */}
      <section className="bg-white rounded-3xl shadow-lg p-6 mb-8 transform transition-all hover:scale-[1.02]">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Rewards & Challenges</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold text-indigo-500">Daily Challenge</h3>
            <p className="text-indigo-400">Eat a rainbow of fruits today!</p>
          </div>
          <Star className="text-yellow-400" size={36} />
        </div>
        <button className="w-full bg-indigo-400 text-white px-4 py-2 rounded-full hover:bg-indigo-500 transition-colors">
          Open Reward Store
        </button>
      </section>

      {/* 3. Nutrition Education */}
      <section className="bg-white rounded-3xl shadow-lg p-6 mb-8 transform transition-all hover:scale-[1.02]">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Fun Food Facts</h2>
        <button 
          className="w-full bg-yellow-300 text-indigo-700 px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors mb-4"
          onClick={() => setShowFacts(!showFacts)}
        >
          {showFacts ? "Hide Fun Facts" : "Show Fun Facts"}
          {showFacts ? <ChevronUp className="inline ml-2" /> : <ChevronDown className="inline ml-2" />}
        </button>
        {showFacts && (
          <div className="bg-yellow-100 p-4 rounded-xl">
            <p className="text-indigo-600">Did you know? Broccoli has more vitamin C than oranges!</p>
          </div>
        )}
      </section>

      {/* 4. Personal Nutrition Dashboard */}
      <section className="bg-white rounded-3xl shadow-lg p-6 mb-8 transform transition-all hover:scale-[1.02]">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Your Nutrition Score</h2>
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E0E0E0"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="2"
                strokeDasharray="75, 100"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-indigo-600">
              75%
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-indigo-500">Great job! Keep eating healthy!</p>
      </section>

      {/* 5. Meal Logging */}
      <section className="bg-white rounded-3xl shadow-lg p-6 mb-8 transform transition-all hover:scale-[1.02]">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">What Did You Eat Today?</h2>
        <div className="grid grid-cols-3 gap-4">
          {['🍎', '🥕', '🥦', '🍗', '🍞', '🥛'].map((emoji, index) => (
            <button key={index} onClick={()=>{
                const messages = [
                    `let's goo! you ate ${emoji}!`,
                    `yayyy you ate ${emoji}!`
                  ];
                  
                  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                  
                  toast.success(randomMessage);
            }} className="bg-indigo-100 p-4 rounded-full text-3xl hover:bg-indigo-200 transition-colors">
              {emoji}
            </button>
          ))}
        </div>
      </section>

      {/* 6. Encouraging Positive Habits */}
      <section className="bg-white rounded-3xl shadow-lg p-6 mb-8 transform transition-all hover:scale-[1.02]">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Healthy Tip of the Day</h2>
        <div className="bg-green-100 p-4 rounded-xl">
          <p className="text-green-600">Remember to drink plenty of water today!</p>    
        </div>
      </section>

      {/* 7. Customization & Personalization */}
      <section className="bg-white rounded-3xl shadow-lg p-6 mb-8 transform transition-all hover:scale-[1.02]">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Customize Your Experience</h2>
        <div className="flex justify-around">
          <button className="bg-purple-400 text-white px-4 py-2 rounded-full hover:bg-purple-500 transition-colors flex items-center" onClick={()=>{
                toast.error("You must eat more fruits and vegetables to unlock this feature!");
            }} >
            <Gift className="mr-2" /> Change Pet
          </button>
          <button className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-colors flex items-center">
            <Settings className="mr-2" /> Settings
          </button>
        </div>
      </section>
    </div>
  );
};

export default ChildDashboard;