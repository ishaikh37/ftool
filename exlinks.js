// yoursecondscript.js

// Create and append link elements for stylesheets
var fontPreconnect = document.createElement('link');
fontPreconnect.rel = 'preconnect';
fontPreconnect.href = 'https://fonts.googleapis.com';

var fontPreconnectGstatic = document.createElement('link');
fontPreconnectGstatic.rel = 'preconnect';
fontPreconnectGstatic.href = 'https://fonts.gstatic.com';
fontPreconnectGstatic.crossOrigin = true;

var fontStylesheet = document.createElement('link');
fontStylesheet.rel = 'stylesheet';
fontStylesheet.href = 'https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&family=Roboto&display=swap';

var bootstrapStylesheet = document.createElement('link');
bootstrapStylesheet.rel = 'stylesheet';
bootstrapStylesheet.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
bootstrapStylesheet.integrity = 'sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN';
bootstrapStylesheet.crossOrigin = 'anonymous';

var fontAwesomeStylesheet = document.createElement('link');
fontAwesomeStylesheet.rel = 'stylesheet';
fontAwesomeStylesheet.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
fontAwesomeStylesheet.integrity = 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==';
fontAwesomeStylesheet.crossOrigin = 'anonymous';
fontAwesomeStylesheet.referrerpolicy = 'no-referrer';

// Append links to the head of the document
document.head.appendChild(fontPreconnect);
document.head.appendChild(fontPreconnectGstatic);
document.head.appendChild(fontStylesheet);
document.head.appendChild(bootstrapStylesheet);
document.head.appendChild(fontAwesomeStylesheet);
