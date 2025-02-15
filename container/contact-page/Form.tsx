import { useState } from "react";
import Link from "next/link";

// Simple custom alert component
const Alert: React.FC<{ children: React.ReactNode; type: 'error' | 'success' }> = ({ children, type }) => (
  <div className={`p-4 rounded-lg mb-6 ${
    type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 
    'bg-green-50 text-green-700 border border-green-200'
  }`}>
    {children}
  </div>
);

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    serviceType: "",
    elaboration: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name as keyof FormData]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!privacyAccepted) {
      setError("Please accept the privacy policy to continue");
      setLoading(false);
      return;
    }

    const requiredFields = ["name", "organisation", "serviceType", "elaboration"];
    const missingFields = requiredFields.filter((field: any) => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    if (!formData.email && !formData.phone) {
      setError("Please provide either an email or phone number");
      setLoading(false);
      return;
    }

    if (formData.email && !isValidEmail(formData.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://admin-kappa-swart.vercel.app/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Thank you! Your inquiry has been sent successfully.");
        setFormData({
          name: "",
          organisation: "",
          serviceType: "",
          elaboration: "",
          phone: "",
          email: "",
        });
        setPrivacyAccepted(false);
      } else {
        setError(result.error || "Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full bg-transparent border-b border-[#21212155] focus:border-secondry outline-none px-2 py-1 text-4xl";
  const textClasses = "text-5xl  font-bold text-[#333]";

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto text-2xl">
      <div className="p-8">
        <h2 className="text-lg text-gray-600 mb-6">Fill the form below:</h2>
        
        {(error || success) && (
          <Alert type={error ? "error" : "success"}>
            {error || success}
          </Alert>
        )}

        <div className="space-y-8 text-2xl">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className={textClasses} >Hi! My name is</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name*"
              className={`${inputClasses} min-w-[200px] flex-1`}
              aria-required="true"
            />
            <span className={textClasses}>and I represent</span>
            <input
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              type="text"
              placeholder="organisation name type here*"
              className={`${inputClasses} min-w-[200px] flex-1`}
              aria-required="true"
            />
          </div>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className={textClasses}>I'm reaching out to inquire about your services, specifically</span>
            <input
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              type="text"
              placeholder="Your service type here*"
              className={`${inputClasses} min-w-[300px] flex-1`}
              aria-required="true"
            />
          </div>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className={textClasses}>To provide more context, my requirement involves</span>
            <input
              name="elaboration"
              value={formData.elaboration}
              onChange={handleChange}
              type="text"
              placeholder="Elaboration on requirement*"
              className={`${inputClasses} min-w-[300px] flex-1`}
              aria-required="true"
            />
          </div>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className={textClasses}>For further communication, feel free to contact me at</span>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Contact number*"
              className={`${inputClasses} min-w-[200px] flex-1`}
            />
          </div>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className={textClasses}>and</span>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email id*"
              className={`${inputClasses} min-w-[200px] flex-1`}
            />
            <span className={textClasses}>Looking forward to hearing from you!</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <input
              id="privacy"
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="w-5 h-5"
            />
            <label htmlFor="privacy" className="text-gray-700">
              I agree with the{" "}
              <Link href="/privacy" className="font-medium underline hover:text-primary">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading || !privacyAccepted}
            className="bg-secondry text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>
        </div>
      </div>
    </form>
  );
}


