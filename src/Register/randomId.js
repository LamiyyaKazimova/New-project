export function random(data){
if(data){
for(let i=1 ;i<1000;i++){
 let isTrue=data.find((el)=>Number(el.id)===i)
 if(!isTrue){
  return i
 }
}
}
}