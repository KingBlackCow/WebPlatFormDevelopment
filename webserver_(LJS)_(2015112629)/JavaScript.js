<script>
  function alertEX() {
  alert("SNS 안해용~");
}
  
  function alertthis() {
    alert("This");
 }
 
 
  function changeImg(src){
    var img1=document.getElementById('cha');
    img1.src=src;
 }

var imgArray=new Array();
imgArray[0]="tennis1.jpg"; 
imgArray[1]="tennis3.jpg"; 
imgArray[2]="tennis4.jpg"; 
imgArray[3]="tennis2.jpg";
imgArray[4]="tennis5.jpg";
		
function showImage(i)
{ 
	var imgNum=i; 
	var objImg=document.getElementById("tennis");
	objImg.src=imgArray[imgNum];
	i++;
	if(i>=5){
 		i=0; 
 	}
	setTimeout(showImage,1700,i);
} 

   
function familyexplain(num)
{ 
    if(num==1)
    {
       document.getElementById("family_explain").innerHTML="Father : He is strong";
    }
    else  if(num==2)
    {
       document.getElementById("family_explain").innerHTML="Mother : She is too strong";
    }
    else
    {
       document.getElementById("family_explain").innerHTML="Sister : Don't want to explain";
    }
} 
</script>