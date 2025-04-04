import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import dscp from "../assets/dscp.jpg";

const DigitalSupplyChainSecurity = () => {
  return (
    <>
      <Navbar />
      <div className="row top-section align-items-center container-fluid p-0">
        <div className="col-md-6 d-flex justify-content-center flex-column p-4">
          <h1 style={{ color: "purple" }}>
            What is Digital Supply Chain Security?
          </h1>
          <p>
            Digital supply chain security focuses on protecting the information
            technology systems, software, and networks that are part of your
            supply chain from cyber threats. It’s a key part of overall supply
            chain security and has become more important than ever with the rise
            of cyber-terrorism, malware, data theft, and advanced persistent
            threats (APTs).
            <br />
            As supply chains become more digitized and connected, they also
            become more vulnerable. Cybercriminals are constantly looking for
            weak points, and a single compromised vendor or device can create
            serious risks for an entire organization.
            <br />
            <h5 style={{ color: "red", fontSize: 24 }}>
              Why is it Important??
            </h5>
            Every device, app, or software update that passes through the supply
            chain is a potential entry point for hackers. In some cases, malware
            has even been found on new, imported devices before they reach
            customers. These risks highlight the importance of taking proactive
            steps to secure your digital supply chain.
          </p>
        </div>
        <div className="col-md-5 text-center p-4">
          <img
            src={dscp}
            alt="Artificial Intelligence in cybersecurity is not just a tool; it’s a necessity. As threats evolve, AI empowers us to detect, prevent, and respond faster than ever before."
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Middle */}

      <div className="container my-4">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <p className="text-muted mb-0">
              <h3 style={{ fontSize: 24 }}>
                Common Threats in the Digital Supply Chain:
              </h3>
            </p>

            <ol className="list-group">
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Chain Pre-installed Malware
                  </div>
                  <p className="text-center">
                    Some hardware or devices may already have malware on them
                    when delivered.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Tampered Software or Hardware
                  </div>
                  <p className="text-center">
                    Hackers may insert malicious code during manufacturing or
                    distribution.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Software Vulnerabilities
                  </div>
                  <p className="text-center">
                    Weaknesses in applications or networks within the supply
                    chain can be exploited.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">Counterfeit Devices</div>
                  <p className="text-center">
                    Fake or low-quality hardware can be easier to compromise and
                    may not meet security standards.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Bottom */}

      <ol className="list-group">
        <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
          <div className="ms-2 me-auto">
            <h3 className="text-center">
              How to Protect Your Supply Chain To reduce the risk of digital
              threats in your supply chain, organizations should:
            </h3>
          </div>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Isolate or disconnect critical systems from external networks
              when possible.
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Train employees to recognize phishing scams, suspicious devices,
              and risky behavior.
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Perform regular audits and risk assessments of suppliers and
              technology partners.
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Taking these precautions not only protects your organization but
              also strengthens the entire supply chain network, making it more
              resilient to cyberattacks.
            </p>
          </li>
        </li>
      </ol>
    </>
  );
};

export default DigitalSupplyChainSecurity;
