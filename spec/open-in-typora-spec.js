'use babel';

/* eslint-env jasmine */
/* global waitsForPromise */

import OpenInTypora from '../lib/open-in-typora';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('OpenInTypora', () => {
  let workspaceElement;
  let activationPromise;

  beforeEach(() => {
    spyOn(OpenInTypora, 'loadMenus');
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('open-in-typora');
  });

  describe('.activate', () => {
    it('instantiates a subscriptions property', () => {
      expect().not.toBeNull();
    });

    it('calls .loadMenus', () => {
      waitsForPromise(() => activationPromise);

      runs(() => {
        expect(OpenInTypora.loadMenus).toHaveBeenCalled();
      });
    });
  });
});
