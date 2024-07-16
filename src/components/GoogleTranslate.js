import React, { useEffect } from "react";
import "./GoogleTranslate.css";

const GoogleTranslate = () => {
  useEffect(() => {
    const scriptId = "google-translate-script";

    // Check if the script is already added
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
      script.async = true;

      script.onload = () => {
        setTimeout(() => {
          if (window.google && window.google.translate) {
            new window.google.translate.TranslateElement(
              { pageLanguage: "en" },
              "google_translate_element"
            );
          }
        }, 1000); // Delay initialization
      };

      script.onerror = () => {
        console.error("Error loading Google Translate script");
      };

      document.body.appendChild(script);
    } else {
      setTimeout(() => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en" },
            "google_translate_element"
          );
        }
      }, 1000); // Delay initialization
    }
  }, []);

  return <div id="google_translate_element" className="google-translate"></div>;
};

export default GoogleTranslate;
