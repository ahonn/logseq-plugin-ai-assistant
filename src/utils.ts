import { BlockEntity } from '@logseq/libs/dist/LSPlugin.user';

export async function getBlockContent(block: BlockEntity, parentBlock = true, level = 1, content = '') {
  if (parentBlock) {
    content = block.content ?? '';
  }
  const childrens = [block.children];

  while (childrens.length > 0) {
    const children = childrens.shift();
    for (const child of children!) {
      content += '\n' + '\t'.repeat(level) + '- ' + (child as BlockEntity).content;
      content += await getBlockContent((child as BlockEntity), false, level + 1)
    }
  }

  return content;
}
