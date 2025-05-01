import React, { useState } from 'react'
import Titile from '../ui/Titile'

const Form = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const TELEGRAM_BOT_TOKEN = "7956769706:AAEO-o4kRpou_HMR6ENCE_hYfVCIYGRYuZc";
  const TELEGRAM_CHAT_ID = "925359952";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const text = `📝 Новое сообщение:\n\n📧 Email: ${email}\n📱 Mobile: ${mobile}\n💬 Сообщение: ${message}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        alert("Сообщение отправлено в Telegram!");
        setEmail("");
        setMobile("");
        setMessage("");
      } else {
        alert("Ошибка при отправке!");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Ошибка подключения.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-[#080808]'>
      <div className="container1 h-[95dvh] flex items-center justify-center flex-col">
        <Titile
          title={'Get In Touch'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
          titleColor={'text-white'}
        />
        <form onSubmit={handleSubmit} className='w-full sm:w-[350px] mx-auto'>
          <p className='text-[12px] text-white'>Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full h-[40px] bg-white text-[12px] rounded p-[12px] mt-[5px]'
            type="text"
            placeholder='Please enter your email'
          />
          <p className='text-[12px] text-white pt-[5px]'>Mobile</p>
          <input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className='w-full h-[40px] bg-white text-[12px] rounded p-[12px] mt-[5px]'
            type="number"
            placeholder='Enter mobile'
          />
          <p className='text-[12px] text-white pt-[5px]'>Message</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full h-[120px] bg-white text-[12px] rounded p-[12px] mt-[5px]'
            placeholder='Enter your message'
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full cursor-pointer h-[40px] flex items-center justify-center gap-2 bg-[#3F8E00] border border-[#62BA1B] text-white text-[12px] rounded p-[12px] mt-[5px] ${isLoading ? 'opacity-50' : ''}`}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-4 w-4 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                />
              </svg>
            ) : (
              "Submit >"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
