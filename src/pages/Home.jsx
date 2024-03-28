import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  useEffect(() => {
    // Inject Transifex Live settings and script into the document
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      window.liveSettings = { api_key: "ffaabdfdabe64e23885b5c842c1411fb" };
    `;
    document.head.appendChild(script);

    const transifexScript = document.createElement("script");
    transifexScript.type = "text/javascript";
    transifexScript.src = "//cdn.transifex.com/live.js";
    document.head.appendChild(transifexScript);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(transifexScript);
    };
  }, []);

  return (
    <div>
      <div>
        <h1>Welcome to Our Website!</h1>
        <p>This is the home page. Feel free to explore.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          vel, sapiente, amet distinctio similique harum soluta impedit odio
          voluptatibus assumenda placeat earum nesciunt? Eos dignissimos
          voluptatibus labore. Eum, earum iusto.
        </p>
      </div>
    </div>
  );
}

export default Navigation;
