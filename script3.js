function addStudent(){
	
	var name = document.getElementById("name");
	var surname= document.getElementById("surname");
	var faculty = document.getElementById("faculty");

	if(name.value=="" || surname.value=="" || faculty.value=="-1"){
		
		if(name.value=="" && surname.value=="" && faculty.value=="-1"){
			name.classList.add("error");
			surname.classList.add("error");
			faculty.classList.add("error");
		} else if(name.value=="" && surname.value==""){
			name.classList.add("error");
			surname.classList.add("error");
		} else if(name.value=="" && faculty.value=="-1"){
			name.classList.add("error");
			faculty.classList.add("error");
		} else if(surname.value=="" && faculty.value=="-1"){
			surname.classList.add("error");
			faculty.classList.add("error");
		} else if(faculty.value=="-1"){
			faculty.classList.add("error");
		} else if(surname.value==""){
			surname.classList.add("error");
		}else if(name.value==""){
			name.classList.add("error");
		}
	} else{
		name.classList.remove("error");
		surname.classList.remove("error");
		faculty.classList.remove("error");

		var table = document.getElementById("students");
		var row = table.insertRow(0);

		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);

		cell1.innerHTML=name.value;
		cell2.innerHTML=surname.value;
		cell3.innerHTML=faculty.value.bold();

		if(name.value!=0 && surname.value!=0 && faculty!="-1"){
			name.value=null;
      		surname.value=null;
      		faculty.value=null;
		}
	}
	
}


