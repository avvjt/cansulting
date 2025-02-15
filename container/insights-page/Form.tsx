import { useState } from "react";
import Link from "next/link";

// Define types
type AlertProps = {
  children: React.ReactNode;
  type: "error" | "success";
};

type FormData = {
  name: string;
  organisation: string;
  phone: string;
  about: string;
  reasonForJoining: string;
};

// Simple custom alert component
const Alert: React.FC<AlertProps> = ({ children, type }) => (
  <div
    className={`p-4 rounded-lg mb-6 ${
      type === "error"
        ? "bg-red-50 text-red-700 border border-red-200"
        : "bg-green-50 text-green-700 border border-green-200"
    }`}
  >
    {children}
  </div>
);

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organisation: "",
    phone: "",
    about: "",
    reasonForJoining: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [privacyAccepted, setPrivacyAccepted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!privacyAccepted) {
      setError("Please accept the privacy policy to continue.");
      setLoading(false);
      return;
    }

    const requiredFields: (keyof FormData)[] = [
      "name",
      "organisation",
      "phone",
      "about",
      "reasonForJoining",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://admin-kappa-swart.vercel.app/api/career/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSuccess("Thank you! Your inquiry has been sent successfully.");
        setFormData({
          name: "",
          organisation: "",
          phone: "",
          about: "",
          reasonForJoining: "",
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

  const inputClasses =
    "w-full bg-transparent border-b border-[#21212155] focus:border-secondry outline-none px-2 py-1 text-4xl";
  const textClasses = "text-5xl font-bold text-[#333]";

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto text-2xl">
      <div className="p-8">
        <h2 className="text-lg text-gray-600 mb-6">Fill the form below:</h2>

        {(error || success) && <Alert type={error ? "error" : "success"}>{error || success}</Alert>}

        <div className="space-y-8 text-2xl">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className={textClasses}>Hi! My name is</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name*"
              className={`${inputClasses} min-w-[200px] flex-1`}
              aria-required="true"
            />
            <span className={textClasses}>I live in</span>
            <input
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              type="text"
              placeholder="City*"
              className={`${inputClasses} min-w-[200px] flex-1`}
              aria-required="true"
            />
          </div>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className={textClasses}>My phone number is</span>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone Number*"
              className={`${inputClasses} min-w-[300px] flex-1`}
              aria-required="true"
            />
          </div>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className={textClasses}>A little about me</span>
            <input
              name="about"
              value={formData.about}
              onChange={handleChange}
              type="text"
              placeholder="Tell us about yourself*"
              className={`${inputClasses} min-w-[300px] flex-1`}
              aria-required="true"
            />
          </div>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className={textClasses}>My reason for wanting to join</span>
            <input
              name="reasonForJoining"
              value={formData.reasonForJoining}
              onChange={handleChange}
              type="text"
              placeholder="Why do you want to join?*"
              className={`${inputClasses} min-w-[300px] flex-1`}
              aria-required="true"
            />
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
