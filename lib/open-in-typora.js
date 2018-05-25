'use babel';

// eslint-disable-next-line import/no-unresolved,import/extensions
import { CompositeDisposable } from 'atom';
import loadMenus from '../menus/loadMenus';

export default {

  openInTyporaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    const { contextMenu, menu } = loadMenus();
    this.contextMenu = contextMenu;
    this.menu = menu;

    // this.openInTyporaView = new OpenInTyporaView(state.openInTyporaViewState);
    // this.modalPanel = atom.workspace.addModalPanel({
    //   item: this.openInTyporaView.getElement(),
    //   visible: false
    // });
    //
    // // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    // this.subscriptions = new CompositeDisposable();
    //
    // // Register command that toggles this view
    // this.subscriptions.add(atom.commands.add('atom-workspace', {
    //   'open-in-typora:toggle': () => this.toggle()
    // }));
  },

  deactivate() {
    this.contextMenu.destroy();
    this.menu.destroy();
    // this.subscriptions.dispose();
    // this.openInTyporaView.destroy();
  },

  serialize() {
    // return {
    //   openInTyporaViewState: this.openInTyporaView.serialize()
    // };
  },

  open() {
    console.log('OPEN');
  },
};
