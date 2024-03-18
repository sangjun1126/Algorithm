function solution(files) {
    let answer = [],fileobj=[]

   files.forEach(file=>{
  let number='',head='',tail='';

   [...file].forEach(v=>{
    if(isNaN(parseInt(v))&&number.length==0)head+=v //숫자가 아니고 number이 비어있으면
    else if(!isNaN(parseInt(v))&&tail.length==0)number+=v //숫자이고 tail이 비어있으면
    else tail+=v 
   })
 
   fileobj.push({name:file,head:head,number:+number})
   })

  fileobj.sort((a,b)=> a.number-b.number)
  fileobj.sort((a,b)=> a.head.toLowerCase()<b.head.toLowerCase()?-1:1)

  for(let i=0;i<fileobj.length;i++)
   answer.push(fileobj[i].name)


    return answer
}