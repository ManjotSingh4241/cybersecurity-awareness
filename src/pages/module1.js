import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import phishing from "../assets/phishing.jpg";

const Phishing = () => {
  return (
    <>
      <Navbar />

      <div className="row top-section align-items-center container-fluid p-0">
        <div className="col-md-6 d-flex justify-content-center flex-column p-4">
          <h1 style={{ color: "purple" }}>
            What to Do if You Have Been Phished?
          </h1>
          <p>
            If you have been a victim of phishing, it is crucial to take
            immediate action to protect your financial and personal information.
            Start by contacting each financial institution, credit card issuer,
            or company where the identity thief may have accessed unauthorized
            credit, money, goods, or services. Additionally, reach out to
            Canada’s two national credit reporting agencies, TransUnion Canada
            and Equifax Canada. When contacting them, request a copy of your
            credit report and discuss the possibility of placing a fraud alert
            on your file to ensure creditors verify your identity before opening
            or modifying any accounts. Reviewing your credit report can also
            help identify any other fraudulent accounts or debts incurred in
            your name. It is also important to report the incident to the Campus
            Community Police Service at 519-661-3300 (or ext. 83300 if calling
            from on campus) and request a police report, which should be
            included in all correspondence with financial institutions, credit
            issuers, and credit reporting agencies. If your Western credentials
            have been compromised, change your password immediately through the
            Western Identity Management website. Additionally, report the
            incident to the PhoneBusters National Call Centre at 1-888-495-8501,
            which collects information on identity theft and offers guidance to
            victims. If your credit cards or government-issued documents, such
            as a driver’s license, birth certificate, or passport, have been
            lost or stolen, notify the issuing authority promptly to cancel the
            document and request a replacement. Taking these steps swiftly can
            help mitigate the damage and prevent further fraudulent activities.
          </p>
        </div>
        <div className="col-md-5 text-center p-4">
          <img
            src={phishing}
            alt="Cybersecurity Awareness"
            className="img-fluid rounded"
          />
        </div>
      </div>
      {/* bottom */}
      <div className="row bottom-section d-flex align-items-center justify-content-center text-center bg-light container-fluid p-0">
        <div className="col-12 p-4">
          <div className="flex flex-col items-center text-center p-4">
            <blockquote className="text-lg italic border-l-4 border-gray-500 pl-4">
              "Protect your identity like you protect your wealth—act swiftly,
              report fraud, and safeguard your future."
            </blockquote>
            <figcaption className="mt-2 text-sm text-gray-600">
              Cybersecurity Awareness <cite className="italic">Stay Safe</cite>
            </figcaption>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phishing;
