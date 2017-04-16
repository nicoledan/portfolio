$(document).ready(function(){
  function hideAll (){
 $("#apiacommunicationslist").hide();
 $("#ckieditorlist").hide();
 $("#sparkslist").hide();
 $("#slclist").hide();
 $("#sparksarticles").hide();
 $("#alligatorcolumns").hide();
};

hideAll ();

$("#apiacommunications").click(function(){
  $("#apiacommunicationslist").slideToggle();
});

$("#ckieditor").click(function(){
  $("#ckieditorlist").slideToggle();
});

$("#sparks").click(function(){
  $("#sparkslist").slideToggle();
});

$("#slc").click(function(){
  $("#slclist").slideToggle();
});

$("#sparkslogo").click(function(){
  $("#sparksarticles").slideToggle();
});

$("#alligatorlogo").click(function(){
  $("#alligatorcolumns").slideToggle();
});

})
