import styled from "styled-components";


export const Header = styled.header`
  background-color: #297d2e;
  padding: .3rem 0rem;
 

  .wrapper{
   display: flex;
  justify-content: space-between;
  color: wheat;
  width: 78%;
  margin: auto;
  align-items: center;
  }

  span{
    margin-right: 0.5rem;
    color: #a9e5bf;
    font-size: 13px;
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
  width: 78%;
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
`




export const Homepage = styled.main`
background-color: #f3f3f7;

.homewrapper{
  display: flex;
  width: 70%;
  margin: auto;
  justify-content: center;
  align-items: center;

}

.first{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
h4{
  font-size: 14px;
  text-transform: uppercase;
  color: #a8c76c;
}
h1{
  font-size: 50px;
  color: #267b2b;
}
p{
  text-transform: capitalize;
  font-size: 17px;
  color: #9e9993;

}
button{
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 20px;
  background-color: #287e2b;
  font-size: 14px;
  color: whitesmoke;
  cursor: pointer;
}

`