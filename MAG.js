function generateRandomMAC() {
    const numAddresses = document.getElementById("numAddresses").value;
    const macAddresses = [];
  
    for (let i = 0; i < numAddresses; i++) {
      const macAddress = generateMACAddress();
      macAddresses.push(macAddress);
    }
  
    // Display IP and MAC addresses
    const addressesElement = document.getElementById("addresses");
    addressesElement.textContent = macAddresses.join("\n");
  }
  
  function generateMACAddress() {
    const parts = [];
    for (let i = 0; i < 6; i++) {
      const part = Math.floor(Math.random() * 256).toString(16);
      parts.push(part.padStart(2, '0'));
    }
    return parts.join(':');
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
