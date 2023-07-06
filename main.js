//get all Elements
const pname = document.getElementById('pname')
const desc  = document.getElementById('desc')
const prix  = document.getElementById('prix')
const ads   = document.getElementById('ads')
const taxe  = document.getElementById('taxe')
const catego = document.getElementById('catego')
const count  = document.getElementById('count')
const submit = document.getElementById('submit')
const update = document.getElementById('upd')
const delet  = document.getElementById('dlete')
let required = document.querySelector('input')
const list   = document.querySelectorAll('.list td')
let deletall  = document.getElementById('deleteall')
let delttout = document.getElementById('delttout')


let mode;
let temp;
//function 
let allProducts
if(localStorage.allProducts != null)
{
   allProducts = JSON.parse(localStorage.allProducts)
}
else{
  allProducts = []
}
submit.addEventListener('click' ,function () {
    // console.log('hello')
    // showdata ()
    
   if(pname.value != '' && desc.value != '' && prix.value !='' && ads.value != '' && taxe.value != '' && catego.value !='')
   {
     user = {
        name : pname.value,
        desc : desc.value,
        prix : prix.value,
        ads : ads.value,
        taxe: taxe.value,
        catego : catego.value,
        count: count.value
        
    }
   
    if(mode == 'update')
    {
      allProducts[temp] = user;
      submit.innerText = 'create'
      mode = 'create';
    }else{
      allProducts.push(user)
    }
    localStorage.setItem('allProducts', JSON.stringify(allProducts))
    let result = JSON.parse(localStorage.getItem('allProducts'))
    console.log(allProducts)
   }
       showdata()
       clearData()
       test()
})
onload = () => {
    pname.focus();
    showdata ();
  };

//   console.log(allProducts)
let clearData = function () {
  pname.value = ''
  desc.value = ''
  prix.value = ''
  ads.value = ''
  taxe.value = ''
  catego.value = ''
  count.value = ''
}
function showdata (){
  let table = ''
  for(let i =0 ;i<allProducts.length;i++)
  {
    table += `
    <tr class="list" id="content">
    <td scope="row" id="sid">${i}</td>
    <td id="sname">${allProducts[i].name}</td>
    <td id="sdesc">${allProducts[i].des}</td>
    <td id="pric">${allProducts[i].prix}</td>
    <td id="ads">${allProducts[i].ads}</td>
    <td id="tax">${allProducts[i].taxe}</td>
    <td id="cat">${allProducts[i].catego}</td>
    <td id="count">${allProducts[i].count}</td> 
    <th class="d-flex flex-warrp">
    <button type="button" onclick="upd(${i})" class="btn btn-warning btn-sm " id="upd">Update</button>
    <button type="button" onclick="deleteme(${i})" class="btn btn-danger btn-sm ms-1" id="dlete">delete</button>
 </th>
    </tr>`;
    // console.log(table)
  }
  document.getElementById('content').innerHTML = table

}
function deleteme(i) 
{
  // console.log(i)
  allProducts.splice(i,1)
  localStorage.allProducts = JSON.stringify(allProducts)
  showdata()
  test()
}

function test() {
  if(allProducts.length > 0)
  {
    deletall.innerHTML = `
    <button class="btn btn-danger" style="width: 100%;" id="delttout"> deletAll</button>`
  }
  else{
    deletall.innerHTML = ''
  }
}
test() 


function upd(i){
  showdatabyid(i)  
  submit.innerText = 'update'
  mode = 'update';
  temp = i;


}

function showdatabyid(i)
{
      pname.value = allProducts[i].name
       desc.value = allProducts[i].desc
       prix.value = allProducts[i].prix
       ads.value = allProducts[i].ads
       taxe.value = allProducts[i].taxe
       catego.value =allProducts[i].catego
       count.value = allProducts[i].count
}
