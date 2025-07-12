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

.rightnav> a{
  display: flex;
  margin-top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
   color: #306c33;
  text-decoration: none;
  font-size: 16px;
}

.mobileview{
  display: none;
}

.lefdrop{
  display: none;
}

@media screen and (max-width: 900px){
    font-family: 'Poppins', sans-serif;
  .navwrapper{
    display: none;
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
    top: 0;
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
  padding: 5px;
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
  
}

`



export const Feature = styled.main`
 font-family: 'Poppins', sans-serif;

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


`