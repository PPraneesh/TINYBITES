import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Camera, PlusCircle, Award, Bell, ShoppingCart, Users, Activity } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ParentDashboard = () => {
  const [mealInput, setMealInput] = useState('');

  const handleMealSubmit = (e) => {
    e.preventDefault();
    // Handle meal submission logic here
    toast.success('Meal logged successfully!');
    setMealInput('');
  };

  const logMeal = () => {
    toast('Time to log a meal!', {
      icon: '🍽️',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const chartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Healthy Eating Score',
        data: [65, 70, 80, 75, 85, 90, 88],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <Toaster position="top-right" />
      
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-amber-700">Welcome to Your TinyBites Dashboard</h1>
        <p className="text-xl text-amber-600">Track your childs nutrition journey here!</p>
      </header>

      {/* 1. Meal Logging */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Meal Logging</h2>
        <form onSubmit={handleMealSubmit} className="mb-4">
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={mealInput}
              onChange={(e) => setMealInput(e.target.value)}
              placeholder="What did your child eat?"
              className="flex-grow p-2 border border-amber-300 rounded-l-md"
            />
            <button type="submit" className="bg-amber-500 text-white p-2 rounded-r-md hover:bg-amber-600">
              <PlusCircle size={24} />
            </button>
          </div>
          <div className="flex items-center">
            <input type="file" accept="image/*" className="hidden" id="meal-photo" />
            <label htmlFor="meal-photo" className="cursor-pointer bg-amber-100 text-amber-700 p-2 rounded-md hover:bg-amber-200 flex items-center">
              <Camera size={24} className="mr-2" /> Upload Photo
            </label>
          </div>
        </form>
        <div className="mt-4">
          <h3 className="font-semibold text-amber-700 mb-2">Past Meal History</h3>
          <textarea 
            className="w-full h-32 p-2 border border-amber-300 rounded-md" 
            readOnly 
            value="Monday: Oatmeal with berries, chicken sandwich
Tuesday: Yogurt parfait, grilled vegetables
Wednesday: Whole grain toast with avocado, fish tacos"
          ></textarea>
        </div>
      </section>

      {/* 2. Nutrition Tracking and Reports */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Nutrition Tracking and Reports</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-amber-600 mb-2">Weekly Healthy Eating Score</h3>
          <div className="h-64">
            <Line data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </section>

      {/* 3. Goal Setting */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Goal Setting</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-amber-600 mb-2">Personalized Recommendations</h3>
          <ul className="list-disc list-inside text-amber-800">
            <li>Increase vegetable intake to 3 servings per day</li>
            <li>Reduce sugary snacks to 2 times per week</li>
            <li>Include a source of protein with every meal</li>
          </ul>
        </div>
      </section>

      {/* 4. Virtual Pet Monitoring */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Virtual Pet Monitoring</h2>
        <div className="flex items-center justify-center bg-yellow-100 p-4 rounded-md">
          <img src="/api/placeholder/200/200" alt="Virtual Pet" className="rounded-full" />
        </div>
        <p className="text-center mt-4 text-amber-700">Your pet is thriving! Keep up the good work!</p>
      </section>

      {/* 5. Reminders and Alerts */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Reminders and Alerts</h2>
        <div id="reminders" className="bg-amber-100 p-4 rounded-md">
          <h3 className="font-semibold text-amber-700 mb-2">Meal Logging Reminder</h3>
          <p className="text-amber-600 mb-2">You haven't logged today's meals. Please log now.</p>
          <button 
            onClick={logMeal}
            className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600"
          >
            Log Now
          </button>
        </div>
      </section>

      {/* 6. Product Recommendations */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Product Recommendations</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-amber-600 mb-2">Healthy Product Suggestions</h3>
          <ul className="list-disc list-inside text-amber-800">
            <li>Organic whole grain crackers</li>
            <li>Sugar-free fruit puree pouches</li>
            <li>Calcium-fortified almond milk</li>
          </ul>
        </div>
      </section>

      {/* 7. Family Account Sharing */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Family Account Sharing</h2>
        <div className="flex items-center justify-center space-x-4">
          <div className="text-center">
            <Users size={48} className="text-amber-500 mx-auto mb-2" />
            <p className="text-amber-700">Multi-Child Management</p>
          </div>
          <div className="text-center">
            <Activity size={48} className="text-amber-500 mx-auto mb-2" />
            <p className="text-amber-700">Family Collaboration</p>
          </div>
        </div>
      </section>

      {/* 8. Health Insights */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Health Insights</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-amber-600 mb-2">BMI & Growth Tracking</h3>
            <div className="bg-yellow-100 p-4 rounded-md">
              <p className="text-amber-700">Current BMI: 18.5 (Healthy range)</p>
              <p className="text-amber-700">Height percentile: 75th</p>
              <p className="text-amber-700">Weight percentile: 60th</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-amber-600 mb-2">Dietary Tips</h3>
            <ul className="list-disc list-inside text-amber-800">
              <li>Include a variety of colorful vegetables</li>
              <li>Choose whole grains over refined grains</li>
              <li>Limit added sugars in drinks and snacks</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentDashboard;