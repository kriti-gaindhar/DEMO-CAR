let arr =["1.jpg" , "bg-2.jpeg"]
let imageTag = document.querySelector('img');

let i = 0;
// setInterval(()=>{
//   increment()
// },1000)

function increment(){
  i++;
  if(i>arr.length-1){
    i=0;
    imageTag.src=arr[i]
  }
  else{
    imageTag.src=arr[i]
  }
}
i=0;
function decrement(){
    i--;
    if(i<0){
        i=arr.length-1
        imageTag.src=arr[i]
    }
    else{imageTag.src=arr[i]}
    
}