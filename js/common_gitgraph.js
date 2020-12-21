// branches colors repeated to avoid overflow issues when incrementing
// no more grey to be left as parent
var colors = [ "#979797", "#008FB5", "#F1C109", "#FF220C", 
               "#979797", "#008FB5", "#F1C109", "#FF220C", 
               "#979797", "#008FB5", "#F1C109", "#FF220C" ];

var current_color = 0;

var gitgraph = new GitGraph({
  template: "metro",
  author: "",
});

gitgraph.template.commit.message.font = "bold x-large Calibri";
gitgraph.template.commit.tag.font = "bold x-large Calibri";
var message_merge = "italic x-large Calibri";
gitgraph.template.commit.message.displayBranch = false;
gitgraph.template.commit.message.displayHash = false;
gitgraph.template.commit.message.displayAuthor = false;

getColor = function() {
  var color = colors[current_color];
  current_color++;
  return color;
};