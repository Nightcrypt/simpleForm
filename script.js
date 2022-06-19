const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const avg_glucose = document.getElementById('avg_glucose');
const bmi = document.getElementById('bmi');

const gender = document.getElementsByName("gender");
const heartDisease = document.getElementsByName("heartDisease");
const married = document.getElementsByName("married");
const hypertension = document.getElementsByName("hypertension");
const workType = document.getElementsByName("workType");
const residence = document.getElementsByName("residence");
const smokingStatus = document.getElementsByName("smokingStatus");

// Labels
const lbl_gender = document.getElementById('lbl_gender');
const lbl_hypertension = document.getElementById('lbl_hypertension');
const lbl_heartDisease = document.getElementById('lbl_heartDisease');
const lbl_married = document.getElementById('lbl_married');
const lbl_workType = document.getElementById('lbl_workType');
const lbl_residence = document.getElementById('lbl_residence');
const lbl_smokingStatus = document.getElementById('lbl_smokingStatus');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const ageValue = age.value.trim();
	const avg_glucoseValue = avg_glucose.value.trim();
	const bmiValue = bmi.value.trim();

	const genderValue = getRadioValue(gender);
	const heartDiseaseValue = getRadioValue(heartDisease);
	const marriedValue = getRadioValue(married);
	const hypertensionValue = getRadioValue(hypertension);
	const workTypeValue = getRadioValue(workType);
	const residenceValue = getRadioValue(residence);
	const smokingStatusValue = getRadioValue(smokingStatus);

	if(usernameValue === '') {
		setErrorFor(username, '');
	} else {
		setSuccessFor(username);
	}

	if(ageValue === ""){
		setErrorFor(age, "");
	} else{
		console.log(ageValue);
		setSuccessFor(age);
	}
	
	if(genderValue === ''){
		setErrorFor(lbl_gender, '');
	} else {
		console.log(genderValue);
		setSuccessFor(lbl_gender);
	}
	
	if(hypertensionValue === ''){
		setErrorFor(lbl_hypertension, '');
	} else {
		console.log(hypertensionValue);
		setSuccessFor(lbl_hypertension);
	}
	
	if(heartDiseaseValue === ''){
		setErrorFor(lbl_heartDisease, '');
	} else {
		setSuccessFor(lbl_heartDisease);
	}

	if(marriedValue === ''){
		setErrorFor(lbl_married, '');
	} else {
		console.log(marriedValue);
		setSuccessFor(lbl_married);
	}

	if(workTypeValue === ''){
		setErrorFor(lbl_workType, '');
	} else {
		console.log(workTypeValue);
		setSuccessFor(lbl_workType);
	}

	if(residenceValue === ''){
		setErrorFor(lbl_residence, '');
	} else {
		console.log(residenceValue);
		setSuccessFor(lbl_residence);
	}

	if(avg_glucoseValue === ''){
		setErrorFor(avg_glucose, '');
	} else {
		console.log(avg_glucoseValue);
		setSuccessFor(avg_glucose);
	}

	if(bmiValue === ''){
		setErrorFor(bmi, '');
	} else {
		console.log(bmiValue);
		setSuccessFor(bmi);
	}
	if(smokingStatusValue === ''){
		setErrorFor(lbl_smokingStatus, '');
	} else {
		console.log(smokingStatusValue);
		setSuccessFor(lbl_smokingStatus);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	

function getRadioValue(radioBtnName)
{
	var valueRadioBtn;
    for(var i = 0; i < radioBtnName.length; i++) {
		if(radioBtnName[i].checked == true) {
		valueRadioBtn = radioBtnName[i].value;
		break;
		}
	}
	return valueRadioBtn;
}
