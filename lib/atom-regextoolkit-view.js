'use babel';

export default class AtomRegextoolkitView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div')
    this.element.classList.add('atom-regextoolkit')
    const lbloptions = document.createElement('label')
    lbloptions.textContent = "Options"

    this.ignorecase = document.createElement('input')
    this.ignorecase.type = "checkbox"
    this.ignorecase.checked = false
    this.ignorecase.value = "ignorecase"

    this.multiline = document.createElement('input')
    this.multiline.checked = true
    this.multiline.type = "checkbox"
    this.multiline.value = "multiline"


    this.global = document.createElement('input')
    this.global.type = "checkbox"
    this.global.checked = true
    this.global.value = "global"

    divopts = document.createElement('div')
    divopts.classList.add('regex-opts')
    divopts.appendChild(lbloptions)
    divopts.appendChild(this.ignorecase)
    divopts.appendChild(document.createTextNode("ignorecase"))
    divopts.appendChild(this.global)
    divopts.appendChild(document.createTextNode("global"))
    divopts.appendChild(this.multiline)
    divopts.appendChild(document.createTextNode("multiline"))

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

    this.element.appendChild(divopts)
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
