'use babel';

import OpenInTyporaView from './open-in-typora-view';
import { CompositeDisposable } from 'atom';

export default {

  openInTyporaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.openInTyporaView = new OpenInTyporaView(state.openInTyporaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.openInTyporaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'open-in-typora:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.openInTyporaView.destroy();
  },

  serialize() {
    return {
      openInTyporaViewState: this.openInTyporaView.serialize()
    };
  },

  toggle() {
    console.log('OpenInTypora was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
