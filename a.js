// Create a class for the element
class MyFrame extends HTMLIFrameElement {
  constructor() {
    self = super();
    console.log('AAAAAA')
    self.setAttribute('allowpaymentrequest', 'true');
  }
}

customElements.define('my-frame', MyFrame, { extends: 'iframe' });