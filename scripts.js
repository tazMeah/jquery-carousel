let thediv = 1;
document.querySelector("#next").addEventListener("click", function(){
  // shift the carousel
  if (thediv < $("#carousel div").length - 2){
    $(`#carousel div:nth-child(${thediv})`).css("display", "none");
  thediv++;
}
  })
  

document.querySelector("#previous").addEventListener("click", function(){
  // shift the carousel
  if (thediv > 1) {
    $(`#carousel div:nth-child(${thediv - 1})`).css("display", "block");
  thediv--;
  }
  
  
})

