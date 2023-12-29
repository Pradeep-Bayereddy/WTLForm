function beforeSubmit() {
  let outputDate = document.querySelector(".outputDate");
  let inputDate = document.querySelector(".inputDate"); //Date - type of String

  let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
  outputDate.value = formattedDate;
}
