document.querySelector(".grade-btn").onclick = function () {
        location.href = "home.html";
      };
      document.querySelector(".add-btn").onclick = function () {
        location.href = "view.html";
      };
      const submitBtn = document.querySelector(".note");
      const err = document.querySelector(".err");
      const err2 = document.querySelector(".err-2");
      var index = 0;
      submitBtn.addEventListener("click", function () {
        err.innerHTML = "";
        err2.innerHTML = "";
        const firstFieldText = document.querySelector("#firstField").value;
        const secondFieldText = document.querySelector("#secondField").value;
		
		
        let regex = /^[0-9]+$/; //Regular exp to check if input is number
        if (
          secondFieldText.match(regex) &&
          firstFieldText != null &&
          firstFieldText !== ""
        ) {
          let table = document.querySelector("table");
          let row = table.insertRow(index);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          cell1.innerHTML = "Name: " + firstFieldText + " |" ;
          cell2.innerHTML = "Grade: " + secondFieldText + "" ;
          index++;
        }
        if (!secondFieldText.match(regex)) {
          err.innerHTML = "Enter a valid number in second field!";
        }
        if (firstFieldText == null || firstFieldText == "") {
          err2.innerHTML = "Note should be atleast one character long!";
        }
      });