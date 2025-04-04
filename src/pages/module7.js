import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import sc from "../assets/socialengineering.jpg";

const Socialengineering = () => {
  return (
    <>
      <Navbar />
      <div className="row top-section align-items-center container-fluid p-0">
        <div className="col-md-6 d-flex justify-content-center flex-column p-4">
          <h1 style={{ color: "purple" }}>What is Social Engineering?</h1>
          <p>
            Social engineering is a psychological manipulation tactic used by
            cybercriminals to trick people into revealing sensitive information
            or taking unsafe actions, like clicking on malicious links or
            downloading harmful files. It relies on building trust and
            exploiting human behavior rather than breaking through technical
            security systems.
            <br />
            <h5 style={{ color: "red", fontSize: 24 }}>Why It’s Dangerous?</h5>
            Even one fooled individual can open the door to major data breaches
            or system takeovers. Social engineering is one of the most effective
            ways attackers bypass security measures.
          </p>
        </div>
        <div className="col-md-5 text-center p-4">
          <img
            src={sc}
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
              <h3 style={{ fontSize: 24 }}>How to Protect Yourself:</h3>
            </p>

            <ol className="list-group">
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">Awareness Training</div>
                  <p className="text-center">
                  Regular, realistic training scenarios can prepare employees to spot scams.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                  Security Policies 
                  </div>
                  <p className="text-center">
                  Strong password rules, no password sharing, and clear response procedures.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                  Multi-Factor Authentication
                  </div>
                  <p className="text-center">
                    IAdds an extra layer of protection.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                  Common Types of Attacks
                  Phishing
                  </div>
                  <p className="text-center">
                  Fake emails or messages tricking users into revealing data.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Socialengineering;
