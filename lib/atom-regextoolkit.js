'use babel';

import AtomRegextoolkitView from './atom-regextoolkit-view';
import { CompositeDisposable } from 'atom';

export default {

  atomRegextoolkitView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomRegextoolkitView = new AtomRegextoolkitView(state.atomRegextoolkitViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomRegextoolkitView.getElement(),
      visible: false
    });
    onTextChange = ()=>{
      this.atomRegextoolkitView.matches.innerHTML = ""
      flags = ""
      if (this.atomRegextoolkitView.global.checked) {
        flags += "g"
      }
      if (this.atomRegextoolkitView.multiline.checked){
        flags += "m"
      }
      if (this.atomRegextoolkitView.ignorecase.checked){
        flags += "i"
      }
      const regex = this.atomRegextoolkitView.regex.value
      const re = new RegExp(regex, flags)
      const inputstring = this.atomRegextoolkitView.inputstring.value
      console.log(`${regex} and ${inputstring} flags: ${flags}`)
      const matches = inputstring.match(re)
      if (matches){
        matches.map( (m, i) => {
          //this.atomRegextoolkitView.matches
          this.atomRegextoolkitView.matches.innerHTML += `
            <div><label>Match ${i}</label> ${m}</div>
          `
        })
        this.atomRegextoolkitView.lblmatches.textContent = ""
      }else {
        this.atomRegextoolkitView.lblmatches.textContent = "No match!"
        this.atomRegextoolkitView.matches.innerHTML = ""

      }
    }
    this.atomRegextoolkitView.inputstring.onchange = onTextChange
    this.atomRegextoolkitView.regex.onchange = onTextChange
    this.atomRegextoolkitView.global.onclick = onTextChange
    this.atomRegextoolkitView.multiline.onclick = onTextChange
    this.atomRegextoolkitView.ignorecase.onclick = onTextChange
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-regextoolkit:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomRegextoolkitView.destroy();
  },

  serialize() {
    return {
      atomRegextoolkitViewState: this.atomRegextoolkitView.serialize()
    };
  },
  toggle() {
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
