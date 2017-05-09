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
    console.log('AtomRegextoolkit was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
