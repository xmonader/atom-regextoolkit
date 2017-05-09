'use babel';

export default class AtomRegextoolkitView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('atom-regextoolkit');
    const lblregex = document.createElement('label')
    lblregex.textContent = "Regex"
    this.regex = document.createElement('input')
    this.regex.classList.add('tkinput')
    const lblinput = document.createElement('label')
    lblinput.textContent = "Input"
    this.inputstring = document.createElement('textarea')
    this.inputstring.classList.add('tkinput')
    this.lblmatches = document.createElement('label')
    //lblmatches.textContent = "Matches"

    this.matches = document.createElement('div')
    this.matches.classList.add('tklabel')

    this.element.appendChild(lblregex)
    this.element.appendChild(this.regex)
    this.element.appendChild(lblinput)
    this.element.appendChild(this.inputstring)
    this.element.appendChild(this.lblmatches)
    this.element.appendChild(this.matches)
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
