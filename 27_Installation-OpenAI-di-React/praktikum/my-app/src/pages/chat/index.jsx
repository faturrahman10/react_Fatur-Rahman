import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const ChatPage = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: input,
        temperature: 0.5,
        max_tokens: 100,
      });
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-y-6 justify-center items-center">
      <a href="">
        <button className="py-2 px-3 rounded-md font-semibold text-white bg-blue-400 hover:bg-blue-500">Back</button>
      </a>
      <div className="w-[30%]">
        <div className="flex justify-between">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-[75%] h-12 p-2 mr-5 mb-4 border border-gray-300 rounded focus:outline-none"
            placeholder="Enter your message..."
          />
          <button
            onClick={handleSubmit}
            className="w-[20%] h-12 bg-green-500 font-semibold text-white rounded hover:bg-green-600 cursor-pointer"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
        <div className="mt-4">
          <div
            className="w-full h-36 overflow-auto p-2 border border-gray-300 rounded focus:outline-none"
          >
            {response}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
