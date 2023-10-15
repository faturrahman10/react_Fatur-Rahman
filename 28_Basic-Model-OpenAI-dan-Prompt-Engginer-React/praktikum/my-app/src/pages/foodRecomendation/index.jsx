import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const FoodRecommendationPage = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [preferences, setPreferences] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const generateRecommendation = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Rekomendasikan makanan untuk seseorang yang suka ${preferences}`,
        temperature: 0.7,
        max_tokens: 100,
      });
      setRecommendation(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">Food Recomendation</h1>
        <input
          type="text"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          placeholder="Masukkan preferensi makanan Anda..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none mb-4"
        />
        <button
          onClick={generateRecommendation}
          className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 cursor-pointer"
        >
          {loading ? "Sending..." : "Send"}
        </button>
        <div className="mt-4">
          <strong>Rekomendasi:</strong>
          <div className="w-full p-2 border border-gray-300 rounded-md focus:outline-none h-40 overflow-y-auto">
            {recommendation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRecommendationPage;
