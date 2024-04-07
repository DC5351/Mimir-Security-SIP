 // Function to generate a random IP address
 function generateIPAddress() {
    const parts = [];
    for (let i = 0; i < 4; i++) {
        parts.push(Math.floor(Math.random() * 256));
    }
    return parts.join('.');
}

// Function to generate a default gateway based on the IP address
function generateDefaultGateway(ipAddress) {
    const gateway = ipAddress.split('.');
    gateway[3] = Math.random() < 0.5 ? '1' : '254';
    return gateway.join('.');
}

// Function to generate DNS servers based on user's preferred choice
function generateDNS(preferredDNS) {
    if (preferredDNS === "Google") {
        return ['8.8.8.8', '8.8.4.4'];
    } else if (preferredDNS === "Cloudflare") {
        return ['1.1.1.1', '1.0.0.1'];
    } else {
        throw new Error("Invalid preferred DNS choice");
    }
}

// Function to generate network configuration
function generateNetworkConfiguration() {
    const preferredDNS = document.getElementById('preferredDNS').value;
    const ipAddress = generateIPAddress();
    const defaultGateway = generateDefaultGateway(ipAddress);
    const subnetMask = '255.255.255.0';
    const dnsServers = generateDNS(preferredDNS);
    
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<h3>Generated Network Configuration:</h3>";
    outputDiv.innerHTML += `<p>IP Address: ${ipAddress}</p>`;
    outputDiv.innerHTML += `<p>Subnet Mask: ${subnetMask}</p>`;
    outputDiv.innerHTML += `<p>Default Gateway: ${defaultGateway}</p>`;
    outputDiv.innerHTML += `<p>Preferred DNS: ${dnsServers.join(', ')}</p>`;
}