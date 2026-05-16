

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: info@sportsclub.com</p>
      <p>Mobile Number: +91 7993798456</p>

      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input type="text" required />

        <p>Mobile Number:</p>
        <input type="tel" required />

        <p>Message:</p>
        <textarea required></textarea>

        <br /><br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
