import { BlockEntity } from '@logseq/libs/dist/LSPlugin.user';

export async function getBlockContent(block: BlockEntity) {
  let content = block.content ?? '';
  const childrens = [block.children];

  let level = 1;
  while (childrens.length > 0) {
    const children = childrens.shift();
    for (const child of children!) {
      content += '\n' + '\t'.repeat(level) + '- ' + (child as BlockEntity).content;
    }
    level += 1;
  }

  return content;
}
