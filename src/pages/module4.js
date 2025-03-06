import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import csg from "../assets/CSG.jpg"

const CSG = () => {
  return (
    <>
      <Navbar />

      <div className="row top-section align-items-center container-fluid p-0">
        <div className="col-md-6 d-flex justify-content-center flex-column p-4">
          <h1 style={{ color: "purple" }}>
            What is Cybersecurity Governance??
          </h1>
          <p>
            Cybersecurity governance refers to the rules, policies, and
            processes that organizations use to manage and protect their digital
            assets. It provides a structured approach to handling cybersecurity
            risks, ensuring compliance with regulations, and adapting to new
            threats.
            <br />
            Whether it’s a small business or a large enterprise, cybersecurity
            governance is essential for keeping sensitive data safe and
            maintaining business operations. It’s not just about security—it’s
            also a key part of an organization's overall business strategy.
          </p>
        </div>
        <div className="col-md-5 text-center p-4">
          <img
            src={csg}
            alt="Artificial Intelligence in cybersecurity is not just a tool; it’s a necessity. As threats evolve, AI empowers us to detect, prevent, and respond faster than ever before."
            className="img-fluid rounded"
          />
        </div>
      </div>
      {/* Middle */}

      <div className="row bottom-section d-flex align-items-center justify-content-center text-center bg-light container-fluid p-0">
        <div className="col-12 p-4">
          <div className="flex flex-col items-center text-center p-4">
            <h1 style={{ color: "purple" }}>
              Why is Cybersecurity Governance Important?
            </h1>
            <blockquote className="text-lg italic border-l-4 border-gray-500 pl-4">
              As businesses rely more on technology, cyber threats are
              increasing. A strong governance framework helps organizations:
              <br />
              Protect sensitive information from breaches Identify and mitigate
              risks before they become major problems Ensure legal and
              regulatory compliance to avoid penalties
              <br /> Maintain business continuity by preparing for potential
              cyber incidents Build trust with customers and stakeholders by
              showing a commitment to cybersecurity
            </blockquote>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="container my-4">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <p className="text-muted mb-0">
              <h3 style={{ fontSize: 24 }}>
                Key Benefits of Cybersecurity Governance:
              </h3>
            </p>

            <ol className="list-group">
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Safeguarding Sensitive Data
                  </div>
                  <p className="text-center">
                    A strong governance framework ensures that data remains
                    confidential, accurate, and accessible only to authorized
                    users. Encryption and security controls help prevent
                    breaches and unauthorized access.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Managing and Reducing Risks
                  </div>
                  <p className="text-center">
                    Regular risk assessments help organizations find weaknesses
                    in their security and apply solutions before hackers can
                    exploit them. This proactive approach minimizes financial
                    loss and damage to reputation.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Ensuring Legal and Regulatory Compliance
                  </div>
                  <p className="text-center">
                    Many industries have strict cybersecurity laws and
                    regulations (like GDPR, HIPAA, or PCI-DSS). Governance
                    frameworks ensure companies follow these rules, avoiding
                    fines and legal trouble while maintaining a good reputation.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Maintaining Business Continuity
                  </div>
                  <p className="text-center">
                    Cyber incidents can cause system failures, data loss, and
                    downtime. With a well-structured incident response plan,
                    businesses can quickly recover and continue operating with
                    minimal disruption.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Building Customer and Stakeholder Trust
                  </div>
                  <p className="text-center">
                    CClients and business partners expect organizations to take
                    cybersecurity seriously. A strong governance framework shows
                    commitment to security, boosting confidence and
                    strengthening relationships.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Cybersecurity governance isn’t just about protecting data
                  </div>
                  <p className="text-center">
                    It’s about making businesses more resilient, trustworthy,
                    and prepared for the ever-changing threat landscape. By
                    implementing strong security policies, staying compliant,
                    and proactively managing risks, organizations can stay ahead
                    of cyber threats and ensure long-term success.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* <ol className="list-group">
        <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
          <div className="ms-2 me-auto">
            <div className="fw-bold text-center">
              How to Protect IoT Devices?
            </div>
            <h3 className="text-center">
              To keep IoT devices secure, organizations should:
            </h3>
          </div>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Keep software up to date to prevent exploitation of known
              vulnerabilities
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Use strong, unique passwords to reduce the risk of brute-force
              attacks
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Monitor devices regularly and track their security status
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Implement physical security to prevent tampering
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Secure supply chains by only using trusted manufacturers and
              software providers
            </p>
          </li>
        </li>
      </ol> */}
    </>
  );
};

export default CSG;
