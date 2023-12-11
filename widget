// Function to create and append the widget
function createFinanceWidget() {
  var container = document.createElement('div');
  container.className = 'container widget-container';
  container.style.cursor = 'pointer';

  var row = document.createElement('div');
  row.className = 'row main-row';

  var col = document.createElement('div');
  col.className = 'col';

  var widgetBox = document.createElement('div');
  widgetBox.className = 'widget-box';

  var accordionItem = document.createElement('div');
  accordionItem.className = 'accordion-item';

  var widgetContent = document.createElement('div');
  widgetContent.className = 'widget-content';

  var leftContent = document.createElement('div');
  leftContent.className = 'left-content';

  var img = document.createElement('img');
  img.src = 'https://raw.githubusercontent.com/ishaikh37/ftool/main/Image.svg';
  img.alt = 'logo-image';

  var rightContent = document.createElement('div');
  rightContent.className = 'right-content';
  rightContent.textContent = 'Get it on finance from £30 per month';

  var span = document.createElement('span');

  var img2 = document.createElement('img');
  img2.src = 'https://raw.githubusercontent.com/ishaikh37/ftool/main/info-icon.svg';
  img2.alt = 'info-icon';

  var text = document.createTextNode('Instant decisions ~ 96% Approval Rate');

  // Append elements to create the structure
  span.appendChild(img2);
  span.appendChild(document.createTextNode(' ')); // Add space between image and text
  span.appendChild(text);

  // Append elements to create the structure
  leftContent.appendChild(img);
  rightContent.appendChild(span);
  widgetContent.appendChild(leftContent);
  widgetContent.appendChild(rightContent);
  accordionItem.appendChild(widgetContent);
  widgetBox.appendChild(accordionItem);
  col.appendChild(widgetBox);
  row.appendChild(col);
  container.appendChild(row);

  // Append the container to the 'widgetrender' div
  document.getElementById('widgetrender').appendChild(container);

  // Include Bootstrap JS
  var bootstrapJs = document.createElement('script');
  bootstrapJs.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
  bootstrapJs.integrity = 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL';
  bootstrapJs.crossOrigin = 'anonymous';

  // Append Bootstrap JS script
  document.body.appendChild(bootstrapJs);

container.addEventListener('click', function() {
    // Create a new iframe element
    var iframe = document.createElement('iframe');

    // Set attributes for the iframe
    iframe.src = 'https://astonishing-gumdrop-2e0416.netlify.app/';
    iframe.style.width = '100%';
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';
    iframe.style.height = '100%';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.border = 'none';
    iframe.classList.add('widget-iframe');

    // Append the iframe to the body or any other container element
    document.body.appendChild(iframe);

    // Add a message event listener to close the iframe
    window.addEventListener('message', function(event) {
      if (event.data === 'closeIframe') {
        iframe.style.display = 'none';
        iframe.src = '';
      }
    });
  });

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
}
