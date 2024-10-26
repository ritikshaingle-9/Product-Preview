function changeImg(num)
{
   const bigimgElement=document.getElementById('bigimgid');
     if(num==1)
     {
       bigimgElement.src="./images/s-1.jpg";
     }else if(num==2){
        bigimgElement.src="./images/s-2.jpg";
     }else if(num==3){
        bigimgElement.src="./images/s-3.jpg";
     }else if(num==4){
        bigimgElement.src="./images/s-4.jpg";
     }else if(num==5){
        bigimgElement.src="./images/s-5.jpg";
     }else if(num==6){
        bigimgElement.src="./images/s-6.jpg";
     }
}