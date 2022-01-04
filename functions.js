module.exports= {
  isStyledComponent: (node) => {
    return node.tag.name === 'styled' ||
      (node.tag.callee && node.tag.callee.name === 'styled') ||
      (node.tag.object && node.tag.object.name === 'styled');
  }
}