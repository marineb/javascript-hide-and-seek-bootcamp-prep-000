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
  var rankedLists = document.querySelectorAll(".ranked-list")
  
  for (var i=0, l = rankedLists.length; i < l; i++){
    var listItem = rankedLists[i].children
    
    for (var j=0, m=listItem.length; j < m; j++) {
      listItem[j].innerHTML = parseInt(listItem[j].innerHTML) + n      
    }
  }  
}
