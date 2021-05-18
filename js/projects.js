// ----------------------- MAIN GITGRAPH ----------------------- //
// /!\ Must be in last for window.onresize() event /!\
 
// Use red 
var colors = [ "#F1C109", "#FF1E1E"];


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
var projects = work
    .branch({name: "Projects", color: branch_color, commitDefaultOptions: {color: branch_color}})
    .commit({message: "[Jan. 2021 still Ongoing] PERIOD", detailId: "detail-PERIOD" })
    .commit({message: "[Mar. 2018 still Ongoing] MOSAR", detailId: "detail-MOSAR" })
    .commit({message: "[Jan. 2018 to May. 2021] PROACT", detailId: "detail-PROACT" })
    .commit({message: "[Feb. 2019 to May. 2021] ADE", detailId: "detail-ADE" })
    .commit({message: "[Jan. 2018 to Feb. 2019] ERGO", detailId: "detail-ERGO" })
    .commit({message: "[Feb. 2017 to May. 2018] GOTCHA", detailId: "detail-GOTCHA" })
    .commit({message: "[Nov. 2016 to Feb. 2018] RHA", detailId: "detail-RHA" })
    .commit({message: "HIDALGO", detailId: "detail-HIDALGO" })
    .commit({message: "Other", detailId: "detail-Other" })
    .merge(work, {messageFont: message_merge}).delete();

