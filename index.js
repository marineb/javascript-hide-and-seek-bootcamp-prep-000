function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var node =  document.getElementById('grand-node')
  var next = node.children[0]
  
  while (next) {
    node = next
    next = node.children[0]
  }
  
  return node
}

function increaseRankBy(n) {
  
}