import {  CalendarCheck, Camera, Brain, Cat, ChartPie } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-yellow-100">
      <header className="bg-yellow-300 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* <Lion size={40} className="text-amber-700 mr-2" /> */}
            <h1 className="text-3xl font-bold text-amber-700">TinyBites</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-amber-700 hover:text-amber-900">About</a></li>
              <li><a href="#features" className="text-amber-700 hover:text-amber-900">Features</a></li>
              <li><a href="#register" className="text-amber-700 hover:text-amber-900">Register</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-700 mb-4">Bite by bite, growing right!</h2>
          <p className="text-xl text-amber-600">Help your child develop healthy eating habits with TinyBites</p>
        </section>

        <section id="about" className="mb-12">
          <h3 className="text-2xl font-semibold text-amber-700 mb-4">About TinyBites</h3>
          <p className="text-amber-800">TinyBites is a fun and interactive platform that helps parents track their children's nutrition while making healthy eating an exciting adventure for kids!</p>
        </section>

        <section id="features" className="mb-12">
          <h3 className="text-2xl font-semibold text-amber-700 mb-4">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<CalendarCheck className="text-amber-600" size={32} />}
              title="Daily Food Tracking"
              description="Log your child's meals easily every day"
            />
            <FeatureCard 
              icon={<Camera className="text-amber-600" size={32} />}
              title="Photo Upload"
              description="Capture and upload photos of your child's meals"
            />
            <FeatureCard 
              icon={<Brain className="text-amber-600" size={32} />}
              title="AI Nutrition Analysis"
              description="Get insights from our advanced AI-powered analysis"
            />
            <FeatureCard 
              icon={<Cat className="text-amber-600" size={32} />}
              title="Interactive Pet"
              description="Watch a virtual pet grow with your child's nutrition"
            />
            <FeatureCard 
              icon={<ChartPie className="text-amber-600" size={32} />}
              title="Nutrition Insights"
              description="Receive personalized nutrition recommendations"
            />
          </div>
        </section>

        <section id="register" className="mb-12">
          <h3 className="text-2xl font-semibold text-amber-700 mb-4">Register Your Child</h3>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="childName" className="block text-amber-700 mb-2">Child's Name</label>
              <input type="text" id="childName" className="w-full p-2 border border-amber-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="parentEmail" className="block text-amber-700 mb-2">Parent's Email</label>
              <input type="email" id="parentEmail" className="w-full p-2 border border-amber-300 rounded" />
            </div>
            <button type="submit" className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600">Register</button>
          </form>
        </section>
      </main>

      <footer className="bg-yellow-300 p-4 mt-8">
        <div className="container mx-auto text-center text-amber-700">
          &copy; 2024 TinyBites. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h4 className="text-lg font-semibold text-amber-700 ml-2">{title}</h4>
    </div>
    <p className="text-amber-800">{description}</p>
  </div>
);

export default LandingPage;