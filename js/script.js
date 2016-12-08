///////////   Личный кабинет   /////////
// Перенеменная кнопки Логин 
var login = document.querySelector(".user-block .login");
// Переменная -модальное окно 
var modalLogin = document.querySelector(".modal-login");
//Переменная закрыть 
var closeLogin = modalLogin.querySelector(".close");
// Переменная, в которой хранится форма
var formLogin = modalLogin.querySelector(".login-form");


// Добавление события перед отправкой формы
formLogin.addEventListener('submit', function(e){
	e.preventDefault();
	//Переменная -поля Логин	
	var loginName = formLogin.querySelector("#login-name");
	if(loginName.value=="")
	{
		loginName.style.borderColor="red";
	}
	//Переменная -поля Пароль	
	var loginPassword = formLogin.querySelector("#login-password");
	if(loginPassword.value=="")
	{
		loginPassword.style.borderColor="red";
	}
});



// Добавление события - открытие модального окна при нажатии
login.addEventListener("click",function(e){
	// Отмена действия браузера по умолчанию
	e.preventDefault();
	// Если у modalLogin нет класса modal-show, то он добавится  	
	if(!modalLogin.classList.contains("modal-show"))
	{		  
		modalLogin.classList.add("modal-show");
	}
}
											);

// Добавление события- закрытие модального окна при нажатии
closeLogin.addEventListener("click",function(e){
	// Отмена действия браузера по умолчанию
	e.preventDefault();
	// Если у modalLogin есть класса modal-show, то он удаляется 	
	if(modalLogin.classList.contains("modal-show"))
	{		  
		modalLogin.classList.remove("modal-show");
	}
}
													 );


///////////   Карта   /////////
// Переменная кнопки - Как проехать
var btnContact = document.querySelector(".btn-contact");
// Переменаая - модальное окно
var modalmap = document.querySelector(".modal-map");
// Переменнная -закрыть
var closeMap = modalmap.querySelector(".close");

// Добавление события - открытие модального окна при нажатии
btnContact.addEventListener("click",function(e){
	e.preventDefault();
	// Если у modalmap нет класса modal-show, то он добавится 	
	if(!modalmap.classList.contains("modal-show"))
	{		  
		modalmap.classList.add("modal-show");
	}
}
													 );
// Добавление события- закрытие модального окна при нажатии
closeMap.addEventListener("click",function(e){
	e.preventDefault();
	// Если у modalLogin есть класса modal-show, то он удаляется 		
	if(modalmap.classList.contains("modal-show"))
	{		  
		modalmap.classList.remove("modal-show");
	}
}
												 );