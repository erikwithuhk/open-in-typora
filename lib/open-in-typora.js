'use babel';

import { CompositeDisposable } from 'atom';
import { exec } from 'child_process';
import loadMenus from '../menus/loadMenus';

const execCallback = (error, stdout, stderr) => {
  if (stdout) {
    console.log(`${stdout}`);
  }
  if (stderr) {
    console.log(`${stderr}`);
  }
  if (error !== null) {
    console.error(`exec error: ${error}`);
  }
};

export default {

  subscriptions: null,
  loadMenus,

  activate() {
    this.subscriptions = new CompositeDisposable();
    this.openEditor = this.openEditor.bind(this);
    this.openTreeView = this.openTreeView.bind(this);

    this.loadMenus();

    atom.commands.add('atom-workspace', {
      'open-in-typora:open': this.openEditor,
    });

    atom.commands.add('.tree-view .file', {
      'open-in-typora:open-tree-view': this.openTreeView,
    });
  },

  getFilePath() {
    return atom.workspace.getActiveTextEditor().getPath();
  },

  openEditor() {
    const filepath = this.getFilePath();
    this.open(filepath);
  },

  openTreeView({ target }) {
    this.open(target.dataset.path);
  },

  open(filepath) {
    exec(`open -a "Typora" ${filepath}`, execCallback);
  },

  deactivate() {
    this.subscriptions.dispose();
  },
};
