var imageCounter=1;function changeImage(e){showDiv(imageCounter+=e)}function showDiv(e){var l,n=document.getElementsByClassName("mySlides");for(e>n.length&&(imageCounter=1),e<1&&(imageCounter=n.length),l=0;l<n.length;l++)n[l].style.display="none";n[imageCounter-1].style.display="block"}showDiv(imageCounter);let slideIndex=0;function showSlides(){let e,l=document.getElementsByClassName("mySlides");for(e=0;e<l.length;e++)l[e].style.display="none";++slideIndex>l.length&&(slideIndex=1),l[slideIndex-1].style.display="block",setTimeout(showSlides,4e3)}showSlides();