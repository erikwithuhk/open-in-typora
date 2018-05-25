'use babel';

const regex = /\.md\b/;

const isMarkdown = (filename) => {
  const matches = regex.exec(filename);
  return Array.isArray(matches) && matches.length > 0;
};

const shouldDisplay = (e) => {
  const treeViewPath = e.target.computedName;
  const textEditorDocumentTitle = e.view.document.title;
  if (isMarkdown(treeViewPath) || isMarkdown(textEditorDocumentTitle)) {
    return true;
  }
  return false;
};

const loadMenus = () => {
  const contextMenu = atom.contextMenu.add({
    'atom-text-editor': [
      {
        label: 'Open in Typora',
        command: 'open-in-typora:open',
        shouldDisplay,
      },
    ],
    '.tree-view .file': [
      {
        label: 'Open in Typora',
        command: 'open-in-typora:open-tree-view',
        shouldDisplay,
      },
    ],
  });

  const menu = atom.menu.add([
    {
      label: 'Packages',
      submenu: [
        {
          label: 'Open in Typora',
          submenu: [
            {
              label: 'Open in Typora',
              command: 'open-in-typora:open',
            },
          ],
        },
      ],
    },
  ]);

  return { contextMenu, menu };
};

export default loadMenus;
