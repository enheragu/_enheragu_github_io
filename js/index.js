// ----------------------- MAIN GITGRAPH ----------------------- //
// /!\ Must be in last for window.onresize() event /!\
 
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

branch_color = getColor();
var cv_eeha = gitgraph
  .branch({name: "Enrique Heredia Aguado", color: branch_color, commitDefaultOptions: {color: branch_color}})
  .commit({tag: "Enrique Heredia Aguado", message: " " })
  .commit({tag: "Contact Information", message: " " , detailId: "detail-contact" })
  .commit({tag: "Presentation", message: " ", detailId: "detail-presentation" });

branch_color = getColor();  
var education = cv_eeha
  .branch({name: "Education", color: branch_color, commitDefaultOptions: {color: branch_color}})
  .commit({tag: "Education", detailId: "detail-education", message: " " })
  .commit({message: "Industrial Electronics and Automation Eng. Degree", detailId: "detail-electronicsdeg" })
  .merge(cv_eeha, {messageFont: message_merge}).delete();

cv_eeha.checkout();

branch_color = getColor();
var work = cv_eeha
  .branch({name: "Work Experience", color: branch_color, commitDefaultOptions: {color: branch_color}})
  .commit({tag: "Work Experience", detailId: "detail-work", message: " "})
  .commit({message: "bq - Intership [Feb. 2016 - Aug. 2016]", detailId: "detail-bq" })
  .commit({message: "GMV - Robotics Engineer [Feb. 2017 - Now]", detailId: "detail-gmv" })

branch_color = getColor();  
var projects = work
  .branch({name: "Projects", color: branch_color, commitDefaultOptions: {color: branch_color}})
  .commit({tag: "Projects", message: " ", detailId: "detail-projects" })
  .merge(work, {messageFont: message_merge}).delete();
  work.checkout();
  
branch_color = getColor();  
var publications = work
  .branch({name: "Publications", color: branch_color, commitDefaultOptions: {color: branch_color}})
  .commit({tag: "Publications", message: " ", detailId: "detail-publications" })
  .merge(work, {messageFont: message_merge}).delete();
  work.checkout();
  
cv_eeha.checkout();
work.merge(cv_eeha, {messageFont: message_merge}).delete();


branch_color = getColor();
var courses = cv_eeha
  .branch({name: "Courses", color: branch_color, commitDefaultOptions: {color: branch_color}})
  .commit({tag: "Courses", message: " ", detailId: "detail-courses" })
  .merge(cv_eeha, {messageFont: message_merge}).delete();

branch_color = getColor();
var skills = cv_eeha
  .branch({name: "Skills", color: branch_color, commitDefaultOptions: {color: branch_color}})
  .commit({tag: "Skills", message: " ", detailId: "detail-skills" })
  .merge(cv_eeha, {messageFont: message_merge}).delete();


cv_eeha.commit("Hope to hear from you soon!");

