import {useState} from "react"
import { Configuration, OpenAIApi } from "openai"

const Chat = () => {
  return (
    <div>
      <form action=""  className="w-screen h-screen flex flex-col gap-y-6 justify-center items-center">
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="your Question.."
            className="w-72 h-10 border-2 px-2 border-slate-400 rounded-md  focus:outline-none"
          />
          <button className="h-10 px-5 bg-green-500 hover:bg-green-600 rounded-md text-white font-semibold text-lg">Send</button>
        </div>
        <textarea name="" id="" className="w-96 h-80 px-2 border-2 border-slate-400 rounded-md focus:outline-none"></textarea>
      </form>
    </div>
  )
}

export default Chat