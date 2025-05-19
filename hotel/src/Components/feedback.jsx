import React from 'react';


const FeedbackForm = () => {
  return (
    <div className='feedback'>
    <section className="feedback-content">
      <div className="feedback-description">
        <h1 className="feedback-title">Have a question?</h1>
        <p className="feedback-subtitle">Leave a message and we will help!</p>
      </div>
      <form className="feedback-form">
        <input
          type="email"
          placeholder="Email"
          className="feedback-form__email"
          required
        />
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Message"
          className="feedback-form__message"
          required
        ></textarea>
        <button type="submit" className="feedback-form__submit">
          Submit
        </button>
      </form>
    </section></div>
  );
};

export default FeedbackForm;
