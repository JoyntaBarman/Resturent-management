import { RiSendPlaneFill } from 'react-icons/ri';
import Heading from '../../../src/components/Heading/Heading';
import useAxiosSecure from '../../../src/Hooks/useAxiosSecure';

const ContactForm = () => {
  // States
  const axios = useAxiosSecure();

  function handleOnSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const userData = {};

    const formData = new FormData(form);

    userData.name = formData.get('name');
    userData.email = formData.get('email');
    userData.phone = formData.get('phone');
    userData.message = formData.get('message');

    axios
      .post('/sendmessage', userData)
      .then((res) =>
        alert(res?.data?.message)
      )
      .catch((err) =>
      alert('Error post message.'));

    form.reset();
    console.log(form);
  }

  function handleButton(e) {
    e.preventDefault();

    console.log(e.parentElement);
  }

  return (
    <div>
      <Heading text={{ subTitle: 'Send Us a Message', title: 'Contact Us' }} />
      <div className="bg-[#f3f3f3]">
        <form
          className="p-4 md:p-10 md:grid md:grid-cols-2 md:gap-10 leading-4"
          onSubmit={handleOnSubmit}
        >
          <div>
            <label htmlFor="name">
              Nmae <span className="text-red-400">*</span> <br />
              <input
                name="name"
                id="name"
                type="text"
                required
                className="outline-none w-full p-4 mt-6 rounded-md"
                placeholder="Enter your name"
              />
            </label>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">
              Email <span className="text-red-400">*</span> <br />
              <input
                name="email"
                id="email"
                type="email"
                required
                className="outline-none w-full p-4 mt-6 rounded-md"
                placeholder="Enter your email"
              />
            </label>
          </div>

          {/* Phone field */}
          <div>
            <label htmlFor="phone">
              Phone <span className="text-red-400">*</span> <br />
              <input
                name="phone"
                id="phone"
                type="tel"
                required
                className="outline-none w-full p-4 mt-6 rounded-md"
                placeholder="Enter your phone number"
              />
            </label>
          </div>

          {/* Message field */}
          <div className="md:col-span-2 gap-0">
            <label htmlFor="message">
              Message <span className="text-red-400">*</span> <br />
              <textarea
                name="message"
                id="message"
                type="text"
                required
                className="outline-none w-full p-4 mt-6 rounded-md h-[20vh]"
                placeholder="Write your message"
              />
            </label>
          </div>

          {/* Button */}

          <div className="flex justify-center col-span-2 mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#845e23] to-[#b48030] py-4 px-6 rounded text-white font-semibold flex gap-2"
            >
              Send message <RiSendPlaneFill />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

// className='px-6 py-4 text-white rounded flex gap-2 font-semibold bg-gradient-to-r from-[#845e23] to-[#b48030]'
