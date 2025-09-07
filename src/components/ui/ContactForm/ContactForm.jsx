import React from 'react';
import './ContactForm.css';

export const ContactForm = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);
    const interestedInValues = [];
    event.target.querySelectorAll('input[name="Interested In"]:checked').forEach((checkbox) => {
      interestedInValues.push(checkbox.value);
    });
    formData.delete('Interested In');
    formData.append('Interested In', interestedInValues.join(', '));
    formData.append('access_key', 'fc40d431-7731-4990-ba20-10f21bdbee90');
const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col lg:flex-row lg:gap-8 font-poppins text-black text-lg font-light">
          {/* Left Column */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="flex flex-col">
              <label className="mb-2">Your name*</label>
              <input
                type="text"
                name="Name"
                className="border-b border-black p-2 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2">Phone Number*</label>
              <input
                type="tel"
                name="Phone Number"
                className="border-b border-black p-2 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2">Company name</label>
              <input type="text" name="Company Name" className="border-b border-black p-2 w-full" />
            </div>
            <div className="flex flex-col">
              <label className="mb-2">Project details*</label>
              <textarea
                name="Project Details"
                rows="2"
                className="border-b border-black p-2 w-full"
                required
              ></textarea>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="flex flex-col">
              <label className="mb-2">Your Email*</label>
              <input
                type="email"
                name="Email"
                className="border-b border-black p-2 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2">Social Media URL</label>
              <input
                type="text"
                name="Social Media Url"
                className="border-b border-black p-2 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2">Interested In*</label>
              <div className="flex flex-wrap gap-4">
                {['Graphic Design', 'Marketing', 'Social Media', 'UI/UX', 'Other'].map((option) => (
                  <label key={option} className="flex items-center">
                    <input value={option} name="Interested In" type="checkbox" className="mr-2" />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-2">Project Budget*</label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: 'Under 3L', label: 'Under 50K' },
                  { value: '3L-5L', label: '50K-1L' },
                  { value: '5L-7L', label: '1L-3L' },
                  { value: 'Over 7L', label: 'Over 3L' },
                ].map((budget) => (
                  <label key={budget.value} className="flex gap-2 sradio-label">
                    <input name="Project Budget" type="radio" value={budget.value} />
                    <span>{budget.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-12 flex flex-col items-center gap-4">
          <button
            type="submit"
            className="text-white text-xl font-poppins py-2 px-8 bg-brand border-brand border-solid rounded-full hover:bg-white hover:text-brand transition duration-500 ease-in-out"
          >
            Submit
          </button>
          <span className="text-xl font-light">{result}</span>
        </div>
      </form>
    </div>
  );
};
