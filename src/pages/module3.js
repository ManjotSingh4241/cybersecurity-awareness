import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import iot from "../assets/IOT.jpg";

const IOT = () => {
  return (
    <>
      <Navbar />

      <div className="row top-section align-items-center container-fluid p-0">
        <div className="col-md-6 d-flex justify-content-center flex-column p-4">
          <h1 style={{ color: "purple" }}>What is IoT Cybersecurity?</h1>
          <p>
            IoT, or the Internet of Things, refers to physical devices that
            connect wirelessly to a network. These range from smart home gadgets
            like thermostats and security cameras to Industrial IoT (IIoT)
            devices used in manufacturing and health.
            <br />
            Securing these devices is critical, especially in industries where
            safety and operational stability matter, like medical or industrial
            settings. However, managing IoT security is challenging because
            these devices, Operate separately from traditional network security
            tools Come from various manufacturers with different security
            standards Generate massive amounts of data, making it difficult to
            monitor effectively
          </p>
        </div>
        <div className="col-md-5 text-center p-4">
          <img
            src={iot}
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
              How Does IoT Cybersecurity Work?
            </h1>
            <blockquote className="text-lg italic border-l-4 border-gray-500 pl-4">
              IoT devices collect and send data from the physical world to other
              devices or cloud systems. For example, a smart thermostat monitors
              room temperature and transmits the data to a smartphone app or
              cloud service for adjustments.
              <br />
              While these devices improve convenience, they can also serve as
              entry points for cyberattacks. Many organizations overlook IoT
              security, giving hackers a potential blind spot to exploit. Once
              an attacker breaches an IoT device, they may be able to move
              through a network, compromising more sensitive systems.
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
                Common IoT Security Risks Because IoT devices are deeply
                embedded in networks, they need strong protection. Some common
                vulnerabilities include:
              </h3>
            </p>

            <ol className="list-group">
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">Outdated Software</div>
                  <p className="text-center">
                    Many IoT devices run on outdated systems, making them
                    vulnerable to attacks. Regular updates and patching are
                    essential to prevent breaches.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">Physical Tampering</div>
                  <p className="text-center">
                    Someone with physical access to a device could install
                    malicious hardware or modify its settings to gain control.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Supply Chain Attacks
                  </div>
                  <p className="text-center">
                    Attackers may compromise IoT devices before they even reach
                    the user. For example: <br />A hacked software update for
                    company-issued smartwatches could expose sensitive data.An
                    attacker could hijack an IIoT device at a car manufacturing
                    plant, leading to security risks for the entire supply
                    chain. Weak Passwords – Many IoT devices still use default
                    or weak passwords, making them easy targets for brute-force
                    attacks (where hackers try multiple password combinations
                    until they break in).
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Poor Device Management
                  </div>
                  <p className="text-center">
                    Without proper tracking and monitoring, security teams may
                    struggle to identify which devices are connected and whether
                    they are vulnerable to threats.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <ol className="list-group">
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
            <p className="text-center" style={{fontSize:18}}>
              ✅Keep software up to date to prevent exploitation of known
              vulnerabilities
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{fontSize:18}}>
              ✅Use strong, unique passwords to reduce the risk of brute-force
              attacks
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{fontSize:18}}>
              ✅Monitor devices regularly and track their security status
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{fontSize:18}}>
              ✅Implement physical security to prevent tampering
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{fontSize:18}}>
            ✅Secure supply chains by only using trusted manufacturers and
              software providers
            </p>
          </li>
        </li>
      </ol>
    </>
  );
};

export default IOT;
