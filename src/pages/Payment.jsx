

const Payment = () => {
  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment successful!');
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <form onSubmit={handlePayment}>
        <p>Cardholder Name:</p>
        <input type="text" required />
        
        <p>Card Number:</p>
        <input type="text" required />
        
        <br /><br />
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;
