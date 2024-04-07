function generateRandomIP() {
    const numAddresses = document.getElementById("numAddresses").value;
  
    const ipAddresses = [];
  
    for (let i = 0; i < numAddresses; i++) {
      const ipAddress = generateIPAddress();
      ipAddresses.push(ipAddress);
    }
  
    // Display IP and MAC addresses
    const addressesElement = document.getElementById("addresses");
    addressesElement.textContent = ipAddresses.join("\n");
  }
  
  function generateIPAddress() {
    const parts = [];
    for (let i = 0; i < 4; i++) {
      parts.push(Math.floor(Math.random() * 256));
    }
    return parts.join('.');
  }

// Copy IP addresses to clipboard
function copyToClipboard() {
  const addressesElement = document.getElementById("addresses");
  const text = addressesElement.textContent;

  // Create a hidden textarea element
  const textarea = document.createElement("textarea");
  textarea.style.position = "fixed";
  textarea.style.top = 0;
  textarea.style.left = 0;
  textarea.style.width = "1px";
  textarea.style.height = "1px";
  textarea.style.padding = 0;
  textarea.style.border = "none";
  textarea.style.outline = "none";
  textarea.style.boxShadow = "none";
  textarea.style.background = "transparent";

  // Insert the text into the textarea
  textarea.value = text;

  // Add the textarea to the document
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Remove the textarea from the document
  document.body.removeChild(textarea);
}
