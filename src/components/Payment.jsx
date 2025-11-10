import { useState } from "react";
import "./Payment.css";

function Payment() {
  const [formData, setFormData] = useState({
    nameOnCard: "John Doe",
    cardNumber: "1234 5678 9012 3456",
    cvv: "123",
    month: "MM",
    year: "YYYY",
    comments: "",
    sameAsShipping: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", { ...formData });
  };

  const handleCancel = () => {
    console.log("Payment cancelled");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="payment-form-container">
      <form onSubmit={handleSubmit} className="payment-form">
        {/* Header */}
        <div className="form-header">
          <h2 className="form-title">Payment Method</h2>
          <p className="form-subtitle">
            All transactions are secure and encrypted
          </p>
        </div>

        {/* Name on Card */}
        <div className="form-group">
          <label className="form-label">Name on Card</label>
          <input
            type="text"
            name="nameOnCard"
            value={formData.nameOnCard}
            onChange={handleChange}
            className="form-input"
            placeholder="John Doe"
          />
        </div>

        {/* Card Number and CVV */}
        <div className="form-row">
          <div className="form-group-large">
            <label className="form-label">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="form-input"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="form-group-small">
            <label className="form-label">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="form-input"
              placeholder="123"
              maxLength="3"
            />
          </div>
        </div>
        <p className="form-hint">Enter your 16-digit number.</p>

        {/* Month and Year */}
        <div className="form-row-equal">
          <div className="form-group">
            <label className="form-label">Month</label>
            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="form-select"
            >
              <option value="MM">MM</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="form-select"
            >
              <option value="YYYY">YYYY</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
        </div>

        {/* Billing Address */}
        <div className="form-section">
          <h3 className="section-title">Billing Address</h3>
          <p className="section-subtitle">
            The billing address associated with your payment method
          </p>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="sameAsShipping"
              name="sameAsShipping"
              checked={formData.sameAsShipping}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label htmlFor="sameAsShipping" className="checkbox-label">
              Same as shipping address
            </label>
          </div>
        </div>

        {/* Comments */}
        <div className="form-group">
          <label className="form-label">Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="form-textarea"
            placeholder="Add any additional comments"
          />
        </div>

        {/* Buttons */}
        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Submit
          </button>
          <button type="button" onClick={handleCancel} className="btn-cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
