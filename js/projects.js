// ----------------------- MAIN GITGRAPH ----------------------- //
// /!\ Must be in last for window.onresize() event /!\
 
// Use red 
var colors = [ "#F1C109", "#FF220C"];


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


branch_color = colors[0];
var work = gitgraph
    .branch({name: "Work Experience", color: branch_color, commitDefaultOptions: {color: branch_color}})
    .commit({message: " " })


branch_color = colors[1];
var cv_eeha = work
    .branch({name: "Projects", color: branch_color, commitDefaultOptions: {color: branch_color}})
    .commit({message: "MOSAR", detailId: "detail-MOSAR" })
    .commit({message: "PROACT", detailId: "detail-PROACT" })
    .commit({message: "ADE", detailId: "detail-ADE" })
    .commit({message: "ERGO", detailId: "detail-ERGO" })
    .commit({message: "GOTCHA", detailId: "detail-GOTCHA" })
    .commit({message: "RHA", detailId: "detail-RHA" })
    .commit({message: "HIDALGO", detailId: "detail-HIDALGO" })
    .commit({message: "Other", detailId: "detail-Other" })
    .merge(work, {messageFont: message_merge}).delete();

