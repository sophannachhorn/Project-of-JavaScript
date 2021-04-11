// FUNCTIONS -------------------------------------------------------------
function AddOrder(event) {
  event.preventDefault();

  if (IsTrue){
    Child[0].textContent = Name.value;
    Child[1].textContent = Quantity.value;
    let coast = 0;
    let Size_value = '';
    for (let size of Size){
      if (size.checked){
        Size_value = size.value;
        if (size.value === "Small"){
          coast = 5;
        }else if (size.value === "Medium"){
          coast = 10;
        }else{
          coast = 15;
        }
      }
    }
    Child[2].textContent = coast*Quantity.value + "$";
    Child[3].textContent = Size_value;
    Child[4].textContent = costumerName.value;
    Child[5].textContent = Tel.value;
    order.textContent = 'Submit Order';

  }else{
    let Pizza = document.createElement('span');
    Pizza.id = "pizzaName";
    Pizza.textContent = Name.value;

    let SizeOfPizza = document.createElement('span');
    let coast = 0;
    SizeOfPizza.id = "size";
    for (let size of Size){
      if (size.checked){
        SizeOfPizza.textContent = size.value;
        if (size.value === "Small"){
          coast = 5;
        }else if (size.value === "Medium"){
          coast = 10;
        }else{
          coast = 15;
        }
      }
    }
    let Number = document.createElement('span');
    Number.id = "quant";
    Number.textContent = Quantity.value;

    let Price = document.createElement('span');
    Price.id = "price";
    Price.textContent = coast*Quantity.value + "$";

    let Costumer = document.createElement('span');
    Costumer.id = "costumerOfName";
    Costumer.textContent = costumerName.value;

    let PhoneNumber = document.createElement('span');
    PhoneNumber.id = "costumerTel";
    PhoneNumber.textContent = Tel.value;

    let date = document.createElement('span');
    date.id = "date";
    date.textContent = Date.value;

    let Mail = document.createElement('span');
    Mail.id = "mail";
    Mail.textContent = Email.value;

    let Icon = document.createElement('span');
    let Edit = document.createElement('i');
    Edit.classList = 'fa fa-pencil';
    let remove = document.createElement('i');
    remove.classList = 'fa fa-trash';
    Icon.appendChild(Edit);
    Icon.appendChild(remove);

    let Par = document.createElement('p');
    Par.id = number;
    number += 1;

    Par.appendChild(Pizza);
    Par.appendChild(Number);
    Par.appendChild(Price);
    Par.appendChild(SizeOfPizza);
    Par.appendChild(Costumer);
    Par.appendChild(PhoneNumber);
    Par.appendChild(Icon);
    Par.appendChild(date);
    Par.appendChild(Mail);
    Par.style.background = Color.value;
    Result.appendChild(Par);
    document.querySelector('header').style.display = "none";
    
    // sort list.............................................................
    ArrayOfP.push(Par);
    let AllP = document.querySelectorAll('p');
    Array.push(Name.value);
    Array.sort();
    for (let p of AllP){
      p.remove();
    }
    
    for (let index in Array){
      for (let p of ArrayOfP){
        if (p.firstElementChild.textContent === Array[index]){
          Result.appendChild(p);
      }
      

      }
    }


  }
  Name.value = "";
  Quantity.value = "";
  costumerName.value = "";
  Tel.value = "";
  Email.value = "";
  Color.value = "#000000"

}

function SearchPizza(event) {
  let research = Search.value.toLocaleLowerCase();
  console.log(research);
  let AllPar = document.querySelectorAll('p');
  console.log(AllPar);
  for (let p of AllPar){
    let FirstName = p.firstElementChild.textContent.toLocaleLowerCase();
    if (FirstName.indexOf(research) === -1){
      p.style.display = "none";
    } else {
      p.style.display = "block";
    }
  }
}

function Delete(event){
  let Remove = event.target.className;
  console.log(Remove);
  if (Remove === "fa fa-trash"){
    event.target.parentElement.parentElement.remove();
  }
  if (Remove === "fa fa-pencil"){
    document.querySelector('header').style.display = "block";
    parentEdit = event.target.parentElement.parentElement;
    Child = parentEdit.children;
    Name.value = Child[0].textContent;
    Quantity.value = Child[1].textContent;
    Size.value = Child[3].textContent;
    costumerName.value = Child[4].textContent;
    Tel.value = Child[5].textContent;
    IsTrue = true;
    order.textContent = "Update Order";
    console.log(IsTrue);
  }
}

function Show() {
  btn_show.style.background = 'rgb(69, 169, 236)';
  btn_hide.style.background = 'white';
  document.querySelector('header').style.display = "block";
}

function Hide() {
  btn_show.style.background = 'white';
  btn_hide.style.background = 'rgb(69, 169, 236)';
  document.querySelector('header').style.display = "none";
}

function SearchQuantity(event) {
  event.preventDefault();
  console.log(123);
  let P = document.querySelectorAll('p');
  let Max = document.querySelector('#Max');
  let Min = document.querySelector('#Min');
  for (let p of P){
    p.style.justifyContent = "space-between";
    let pChild = p.children;
    console.log(pChild[1].textContent);
    console.log(Min.value);
    if (pChild[1].textContent >= Min.value && pChild[1].textContent <= Max.value){
      p.style.display = 'block';

    }else{
      p.style.display = 'none';

    }
    if (Min.value === '' || Max.value === ''){
      p.style.display = 'block';
      
    }
  }

}

function MouseOver(event) {
  console.log(event.target);
  let AllDate = document.querySelectorAll('#date');
  let AllMail = document.querySelectorAll('#mail');
  for (let index in AllDate){
    if (event.target.id === String(index)){
      Index = event.target.id;
      AllDate[index].style.display = 'block';
      AllMail[index].style.display = 'block';
    }
  }
}
// function MouseOut(event) {
//   let AllDate = document.querySelectorAll('#date');
//   let AllMail = document.querySelectorAll('#mail');
//   console.log(Index);
//   if (event.target.id !== Index){
//     AllDate[Index].style.display = 'none';
//     AllMail[Index].style.display = 'none';
      
//   }
// }

  
// MAIN -------------------------------------------------------------
let Array = [];
let ArrayOfP = [];
let number = 0
let Index = '';
let IsTrue = false;
let Name = document.querySelector('#name');
let Quantity = document.querySelector('#quantity');
let Size = document.querySelectorAll('input[name=choice]');
let costumerName = document.querySelector('#costumerName');
let Tel = document.querySelector('#tel');
let Email = document.querySelector('#address');
let Date = document.querySelector('#Date');
let Color = document.querySelector('#color');
let Search = document.querySelector('#search');
let order = document.querySelector('.order');
let Result = document.querySelector('.result')
let Child = '';
let parentEdit = '';

Result.addEventListener('mouseover', MouseOver);
// Result.addEventListener('mouseout', MouseOut);

let btn_hide = document.querySelector('#hide');
let btn_show = document.querySelector('#show');
btn_hide.addEventListener('click', Hide);
btn_show.addEventListener('click', Show);
Result.addEventListener('click', Delete);

Search.addEventListener('keyup', SearchPizza);

order.addEventListener('click', AddOrder);

let btn_quant = document.querySelector('#btn_quant');
btn_quant.addEventListener('click', SearchQuantity);