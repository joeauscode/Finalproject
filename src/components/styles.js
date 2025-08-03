import styled from "styled-components";



export const Header = styled.header`
  background-color: #297d2e;
  padding: .3rem 0rem;

 

  .wrapper{
   display: flex;
  justify-content: space-between;
  color: wheat;
  width: 75%;
  margin: auto;
  align-items: center;
  }

  span{
    margin-right: 0.5rem;
    color: #a9e5bf;
    font-size: 13px;
  }

@media screen and (max-width: 900px) {
  .here{
    display:none;
  }

}

  
`

export const Nav = styled.nav`
border-bottom:1px solid lightgray;
padding: 18px 0rem;
background-color: #ffff;



.navwrapper{
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 75%;
  margin: auto;
  color: #306c33;
}
.icons{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.middle{
  display: flex;
  justify-content: center;
  align-items: center;
}

.rightnav{
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.rightnav> span{
  display: flex;
  margin-top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
   color: #306c33;
  text-decoration: none;
  cursor: pointer;
}

.mobileview{
  display: none;
}

.lefdrop{
  display: none;
}


.searchbarone{
  position: absolute;
  width: 34%;
  left: 30%;
  top: 0.1%;
  align-items: center;

}

.sear{
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
    /* border: 0.1px solid lightgray; */
      background-color: #ffff;
      box-shadow: 1px 1px 3px;
}

.sear>input{
    background-color: #ffff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  width: 100%;
    padding: 20px 20px;
   border: none;
   outline: none;
   font-size: 19px;

}
.sear>button{
  height: 70px;
  border-radius: 0rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius:10px;

   padding: 20px 40px;
   color: whitesmoke;
   font-weight: 600;
    background-color: green;
    cursor: pointer;

  font-size: 15px;
}
@media screen and (max-width: 900px){
    font-family: 'Poppins', sans-serif;
#iconshere{
  display: none;
}

.middle{
  display: none;
}

.searbarhere{
  display: none;
}

.rightnav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: whitesmoke;
  padding: 10px 0;
  z-index: 1000;
  display: flex;
  justify-content: space-evenly;
}

.searchbarone{
  width: 90%;
   display: block;
   left: 6%;
   top: 0.7%;

}

.sear{
  width: 100%;
  top: 0;
 
}

.sear>input{
  padding: 0px 20px;
}


  .mobileview{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
  
  }

  .lefdrop{
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #297d2e;
    height: 100%;
    z-index: 300;
    width: 250px;
    top: 70px;
  }

  .cloasdiv{
    background-color: yellow;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem ;
    background-color: #d62b2a;
  }

  ul{
    padding: 1.5rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 20px;
    color: 	#f4f1e9;
  }
.icons{
  display: flex;
  justify-content: start;
  padding: 1.5rem;
}
}
`



export const Navbutton = styled.nav`
background-color: #ffff;

  ul{
    display: flex;
    list-style-type: none;
    justify-content: center;
    gap: 1rem;
    text-transform: capitalize;
    font-size: 14px;
    padding: 1rem 0rem;
    color: #47646e;
    cursor: pointer;
    font-weight: 900;

  }
  @media screen and (max-width: 900px){
    ul{
      display: none;
    }
  }
`




export const Homepage = styled.main`
background-color: #f3f3f7;
position: relative;
  font-family: 'Poppins', sans-serif;


   .onlcikhover:hover{
 color: red;
}

.overblur{
   z-index: 999;
  position: absolute;
  width: 800%;
  height: calc(100% + 500px);
  top: 0%;
  backdrop-filter: blur(2px); /* increase for stronger blur */
  background-color: rgba(255, 255, 255, 0.3);

}
.cartsitems {
    position: absolute;
     z-index: 1000;
       top: 3%;

           width: 100%;
}

.itmescartclose{
    box-shadow: 4px 4px 8px;
  display: flex;
  justify-content: center;
  width: 50%;
  color: white;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  margin: auto;
  background-color: red;
  border-bottom: 1px solid lightgray;
padding: 10px 0rem;
cursor: pointer;
}
.itmescart{
  box-shadow: 4px 4px 8px;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
  background-color: white;
  border-bottom: 1px solid lightgray;
padding: 1rem 2rem;
font-size: 14px;

}

@media screen and (max-width: 1000px){
  .itmescart{
    width: 95%;
        bottom: 0;

 
  }

  .spanitems >span:nth-child(1){
    border-right: 1px solid green;
     margin-left: -20px; 
     width: 50px;
  }

  .spanitems >span:nth-child(2){
    border-right: 1px solid green;
     margin-left: -20px; 
     width: 150px;
     text-align: center;
  }
.latchekc{
  margin-right: -20px;
}
  .itmescartclose{
    width: 95%;
    /* margin-bottom: 1px; */
    /* margin-top: 10rem; */

  }

  .cartsitems{
  /* bottom: 0rem; */
  position: fixed;
  height: 100%;
  overflow-y: auto;

  
  }
}

.homewrapper{
  display: flex;
  width: 65%;
  margin: auto;
  justify-content: center;
  align-items: center;

}

.first{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: -7rem;
}
h4{
  font-size: 12px;
  text-transform: uppercase;
  color: #a8c76c;
}
h1{
  font-size: 36px;
  color: #267b2b;
  font-weight: 600;

}
p{
  text-transform: capitalize;
  font-size: 13px;
  color: #9e9993;


}
button{
  padding: 0.5rem 1.3rem;
  border: none;
  border-radius: 20px;
  background-color: #287e2b;
  font-size: 10px;
  color: whitesmoke;
  cursor: pointer;
    font-family: 'Poppins', sans-serif;
}



/* flyer */

.flyer{
  display: flex;
  background-color: white;
  width: 75%;
  position: absolute;
  margin-top: -7rem;
  left: 12.5%;
  z-index: 100;

}

.flyer> div>span{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  color: #297d2e;
  font-weight: 900;
}

.flyer> div{
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.flyer> div>p{
  font-size: 10px;
}



.title{
  width: 75%;
  margin: auto;
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 14px 1rem;
  background-color: #ffff;
  z-index: 2;
}


.title>h3{
color: #196820;
font-size: 20px;
text-transform: capitalize;
}

.title>div{
  font-size: 12px;
  padding: 4px 16px;
  background-color: #287d30;
  color: whitesmoke;
  margin-right: 2rem;
  border-radius: 5px;
}


.titlecards{
    width: 75%;
  margin: auto;
  display: flex;
  /* gap: 1rem; */
  align-items: center;
  padding: 1rem 1rem;
  position: relative;
  justify-content: space-evenly;
   background-color: #ffff;
  
}

.cards{
  border: 1px solid lightgray;
  padding: 8px 8px;
   border-radius: 5px;
  cursor: pointer;
}

.titleimg{
  width: 100%;
  padding: 2px 2px;
  border-radius: 5px;
   background-color: #f9f9f9;
   height: 160px;
}

.titleimg>img{
  width: 100%;
  padding: 2px 2px;
  border-radius: 5px;
}

.new{
  position: absolute;
  background-color: #90bd37;
  padding: 2px 6px;
  text-align: center;
  font-size: 9px;
  color: whitesmoke;
  margin-top: 10px;
  border-bottom-right-radius: 4px;

}

.newminus{
    position: absolute;
  background-color: red;
  padding: 2px 6px;
  text-align: center;
  font-size: 9px;
  color: whitesmoke;
  margin-top: 10px;
  border-bottom-right-radius: 4px;
}

.titleprice{
  display: flex;
  justify-content: center;
  align-items: center;
  color:rgb(236, 173, 64);
  font-size: 900;
  font-size: 13px;
  margin-top: 10px;
 
}

.titlepriceminue{
    display: flex;
  justify-content: center;
  align-items: center;
  color:rgb(247, 126, 117);
  font-size: 900;
  font-size: 13px;
  margin-top: 10px;
}

.strock{
  text-decoration: line-through;
  color: lightgray;
}


.titleproduct{
  text-align: center;
  margin-block: 5px;
  color:  #287d30;
  font-weight: 550;
  font-size: 12px;
}

.titlestart{
  display: flex;
  justify-content: center;
  align-items: center;
  color:rgb(207, 160, 78);
  margin-block: 7px;
}

.titleline{
  width: 100%;
  margin: auto;
  height: 3px;
  background-color: #196820;
 background: linear-gradient(to right, #7db407, lightgray);
  border-radius: 50px;
}

.titleinstoc{
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin-block: 2px;
}

/* =================== */
.mainofer{
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: auto;
  padding: 17px 17px;
  margin-top: 17px;
  gap: 1rem;
}

.topoffer{
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #f4f6fa;
    border-radius: 10px;
width: 100%;
cursor: pointer;
  
}

.image{
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  

}

.image>img{
  width: 100%;
  /* rotate: calc(-20deg); */



}

.imagetwo{
   width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
   height: 170px;
  
}

.imagetwo>img{
  width: 100%;
   /* height: 200px; */
}

.topofe{
    padding: 0px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;

}
.spanclas{
  display: flex;
  flex-direction: column;
  color: #287d30;
  font-size: 12px;
  font-weight: 600;
}

.firstp{
    color:rgb(236, 173, 64);
}

.dis{
  font-size: 14px;
}

/* =========================================================== */
@media screen and (max-width: 800px) {
  .homewrapper{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;

}

.first{
  width: 90%;
  margin: 2rem auto;
}
.first>h1{
  font-size: 26px;
}
.imgahom{
  width: 100%;
}
img{
  width: 100%;
}

.flyer{
  width: 100%;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  z-index: 1;
}


.title{
  margin-top: 11rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.title>h3{
  font-size: 15px;
}
.title>div{
  margin: 0 !important;
  /* padding: 0 !important; */
}

.titlecards{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  
}




.mainofer{
 display: flex;
 flex-direction: column;
 width: 95%;
 border-radius: 16px;
}

.topoffer{
  display: flex;
  gap: 20px;
  padding: 5px 0px;
  justify-content: space-between;
}


}


`



export const Allpro = styled.main`
  font-family: 'Poppins', sans-serif;

.allproduct{
  width: 75%;
  background-color: #ffff;
  margin: 20px auto;
 
}

.topone{
  display: flex;
  gap: 2rem;
  padding: 14px 10px;
}
.topone>span:nth-child(1){
  color: #95b924;
}
.topone>span{
 color: #5f8a46;
 font-size: 14px;
 font-weight: 600;

}

#cardshere{
  display: flex;
  justify-content: space-between;
  padding: 10px 18px;
}
.maincards{
  padding: 10px 10px;
  border: 0.4px solid lightgrey;
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  
}

.imagediv{
  width: 100%;
  height: 160px;
}
.imagediv>img{
  width: 100%;
}

.maoncardtwo{
background-color: #f9f9f9;

}

.new{
  background-color: red;

}


.newminus{
    position: absolute;
  background-color: #90bd37;
  padding: 2px 6px;
  text-align: center;
  font-size: 9px;
  color: whitesmoke;
  margin-top: 10px;
  border-bottom-right-radius: 4px;
}

.buttom{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  margin-top: 10px;
 
}

.buttom>span:nth-child(1){
 color: #5f8a46;
}
.buttom>span:nth-child(2){
color: #f9c660;
margin-block: 5px;
}
.buttom>span:nth-child(3){
color: #e0654cff;
}



.trending{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}

.tredtop{
   color: #5f8a46;
 font-size: 14px;
 font-weight: 600;
}
.toponetwo{
  display: flex;
  gap: 2rem;
}
.toponetwo>span:nth-child(1){
  color: #95b924;
}
.toponetwo>span{
 color: #5f8a46;
 font-size: 12px;
 font-weight: 600;
}

.banner{
  width: 75%;
  background-color: #ffff;
  margin: 15px auto;
}

.banndiv{
  width: 100%;
  /* height: 200px; */
}

.banndiv>img{
  width: 100%;
}


.onlcikhover:hover{
 color: red;
}

@media screen and (max-width: 800px) {

  .allproduct{
    width: 100%;
  }

  .topone{
    width: 95%;
    gap: 0rem;
    margin: auto;
    justify-content: space-between;
  }
  .topone>span{
    font-size: 12px;
  }

 #cardshere{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 1rem;
 }

 .trending{
  flex-direction: column;
  gap: 10px;
 }

   .toponetwo{
    width: 95%;
    gap: 0rem;
    margin: auto;
    justify-content: space-between;
   
  }
  .toponetwo>span{
    font-size: 12px;
  }

  .banner{
  width: 100%;
}
.buttom{
  text-align: center;
}
  
}

`



export const Feature = styled.main`
 font-family: 'Poppins', sans-serif;

 .onlcikhover:hover{
 color: red;
}

 .brandheader{
  font-size: 17px;
  font-weight: 700;
 }
.features{
  width: 75%;
  background-color: #ffff;
  margin: 1.4rem auto;
  padding: 14px 2px;
}

.brandheader{
  padding: 7px 15px;
}

.cardsmain{
 display: grid;
 grid-template-columns: repeat(4, 1fr);
  /* justify-content: space-between; */
  padding: 0rem 10px;
  justify-content: center;
  gap: 15px;
}
.featuredcards{
  border: 0.1px solid lightgray;
  display: flex;
   padding: 10px 14px;
   border-radius: 5px;
   gap: 8px;
   position: relative;
   cursor: pointer;
}

.myimgediv{
  background-color: #f9f9f9;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
 
}

.cardswrtup{
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  font-size: 12px;
}

.cardswrtup>span:nth-child(1){
  color: #5b8859;
  font-weight: 700;
}
.cardswrtup>span:nth-child(2){
  color: #d4ab59ff;

}
.cardswrtup>span:nth-child(3){
  color: #d8726eff;
  font-weight: 500;

}


@media screen and (max-width: 800px){

  .features{
    width: 100%;
  }

  .cardsmain{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 95%;
    margin: auto;
  }

  .featuredcards{
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .myimgediv{
    width: 100%;
    height: auto;
  }
  .cardswrtup{
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}


`



export const Reviewshere = styled.main`
 font-family: 'Poppins', sans-serif;
background-color: #ffff;
margin-top: 2rem;

.imagedis{
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.imagdibs{
  width: 100px;
  height: 100px;
  border-radius: 100%;
}

.imagdibs>img{
  width: 100%;
  border-radius: 100%;
height: 100px;
}

.revis{
  width: 34%;
  padding: 8px 0px;
}
.revis>p{
  text-align: center;
}
.revis>span{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px ;
  color: #ebae20ff;

}
.name{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
.name>span:nth-child(1){
color: #86a158;
font-size: 14px;

}
.dotscroll{
  display: flex;
  gap: 0rem;
  margin-block:1rem;
  color: #86a158;
}
.dot{
  cursor: pointer;
  }

  .dot:hover{
    font-size: 20px;
    color: black;
  }






  .reviwcards{
    width: 75%;
    margin: auto;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 15px;
  }

  .reviwimg{
    background-color: #f9f9f9;
   height: 120px;
   width: 100%;
   margin-bottom: 10px;
  }

  .reviwimg>img{
    width: 100%;
  }

 


  .cardshere{
    border: 0.3px solid lightgray;
    padding: 10px 10px;
    border-radius: 5px;
  }

  .middlescard{
    display: flex;
    flex-direction: column;
    margin-block:5px;
  }

  .shopmore{
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .reviewhead{
 color: #86a158;
 font-weight: 600;
 font-size: 14px;

  }
 



  .latestpost{
    width: 75%;
    margin: 2rem auto;
  }

  span{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .mainhercardss{
    display: flex;
    padding: 11px 14px;
    gap: 1rem;
  }

  #cardshere{
   border: none;
   font-size: 13px;
  }

  .titleheaing{
    color: #266f29;
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 700;
    padding: 10px 14px;
  }

  .mydivimg{
    width: 100%;
    height: 160px;
    border-radius: 5px;
  }
.mydivimg>img{
  width: 100%;
   height: 160px;
  border-radius: 5px;
}

.titsh{
  color: #86a158;
  font-size: 14px;
  margin-block: 9px;
  font-weight: 600;
}

.lastvewbitton{
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


@media screen and (max-width: 800px) {
  .revis{
    width: 100%;
  }


  .reviwcards{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 10px;
  }

  .latestpost{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .mainhercardss{
        width: 100%;
        margin: auto;
        border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
   
  }
      #cardshere{
       border: 0.3px solid lightgray;
       padding: 10px 10px;
       border-radius: 6px;
    }
  .titsh{
    text-align: center;
  }
}
`





export const Foot = styled.footer`
background-color: #f7f5f4;
 font-family: 'Poppins', sans-serif;


 .footerimage{
  width: 75%;
  margin: auto;
  border: 1px solid  #f7f5f4;
  padding: 20px 0px;

 }


 .topfoo{
  display: flex;
  padding: 8px 0px;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;


 }

 .sociamidea{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
 }

 .subscrib{
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
 }
 input{
  margin-left: 3.5rem;
  color: #287e2d;
  border: 0.3px solid #287e2d;
  padding: 10px 18px;
  border-radius: 6px;
  width: 200px;
  border: none;
      border-bottom-right-radius: 0rem;
    border-top-right-radius: 0rem;
    outline: none;
 }

 button{
  background-color: #287e2d;
  color: whitesmoke;
   border: none;
   padding: 10px 18px;
   border: none;
    border-radius: 6px;
    cursor: pointer;
    border-bottom-left-radius: 0rem;
    border-top-left-radius: 0rem;
 }
.subscrib > span{
  color:  #435b53;
  font-size: 17px;
}


.lists{
  display: flex;
  justify-content: space-between;
}

ul{
font-size: 12px;
list-style-type: none;
display: flex;
flex-direction: column;
gap: 8px;
}


.listdays>div{
  display: flex;
  font-size: 10px;
  gap: 2.2rem;
  justify-content: space-between;
  margin-block: 9px;
  border-bottom: 0.3px solid lightgray;
}

a{
  text-decoration: none;
}

@media screen and (max-width: 800px) {
   .footerimage{
    width: 100%;
  
    
  .footerimage{
    position: relative;

  }

  a{
    font-size: 16px;
  }

  .subscrib{
    position: absolute;
    /* border: 2px solid; */
    flex-direction: column;
    margin-top: 60.5rem;
    width: 100%;
    background-color: #f7f5f4;
  }

  .listdays>div{
    font-size: 14px;
  }

  ul>li:nth-child(1){
    text-transform: uppercase;
    margin-top: 1rem;
  }
  .shifg{
    padding: 4rem 0rem;
  }
  .subscrib>form{
    width: 80%;
    display: flex;
  }

  button{
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
  }
  input{
    width: 100%;
       border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    padding: 15px 1rem;
    font-size: 15px;
  }

   }

   .topfoo{
     flex-direction: column;
     gap: 1.3rem;
   }

   .lists{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
   }
   li{
    text-align: center;
    margin-bottom: 13px;
   }
   
  

   input{
   padding: 8px 3px;
   margin: 0;

   }
}
`