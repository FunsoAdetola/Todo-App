// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      background:transparent;
      border-bottom: 1px solid ${({ theme }) => theme.navText};
      padding: 0 2rem;
  }
  .home{
    background: ${({ theme }) => theme.home}
  }
  .nav-brand svg{
      width: 50px;
      height: 50px;
      fill:${({ theme }) => theme.navText};
  } 
  .splash-screen{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .splash-inner{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: transparent;
    border:3px solid #0e49b5;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: App-logo-spin 20s ease-in-out  ;
    
  }
  .splash-screen svg{
    width: 250px;
      height: 250px;
  }
  @media(max-width:768px){
    .nav-brand svg{
      width: 30px;
      height: 30px;
      fill:${({ theme }) => theme.navText};
  }  
  nav{
    height: 60px;
  }
  }
  .nav-brand{
    border: 3px solid #0e49b5;
  
    border-radius: 50%;
    padding: 0.3rem;
    display: flex;
    align-items: center;
  }
  .hamburger{
    cursor:pointer;
  }
  .nav-text{
    color:  ${({ theme }) => theme.navBrandText};
   font-size: 30px;
  }
  @media(max-width:768px){
    .nav-text{
      display:none;
    }
  }
  .open-nav{
    z-index:1000;
    width: 30%;
    min-height: 100vh;
    transform: translateX(0);
    transition: all 2s ease-in-out;
  }
  .close-nav{
    transform: translateX(-100%);
  }
  .open-nav svg{
  fill: ${({ theme }) => theme.text};
  width: 20px;
  height: 20px;

}
  .login-signup button,
.home-button button {
  background:${({ theme }) => theme.navText};
}
.bottom-link{
  color: ${({ theme }) => theme.text};
  text-decoration:none; 
}
.form h1 ,p {
  color:  ${({ theme }) => theme.navBrandText};
}
.dashboard-div{
  background: ${({ theme }) => theme.noteBody};
}
.dashboard h1 ,p {
  color:  ${({ theme }) => theme.navBrandText};
}
.dashboard-link{
   color:  ${({ theme }) => theme.navBrandText};
   text-decoration: none;
   margin-top: 5rem;
}
.todo-form input,
textarea{
  border-bottom: dashed 3px ${({ theme }) => theme.navText} ;
}
.heading h1{
  background-color:${({ theme }) => theme.navText};
  color: #f4f4f4;
}
.note {
  background: ${({ theme }) => theme.noteBody};
  border-left: 5px solid ${({ theme }) => theme.navText}; ;
}
.note-title{
  color:  ${({ theme }) => theme.navBrandText};
  font-size: 20px;
  text-transform:capitalize;
}
.view-note svg{
  fill: ${({ theme }) => theme.text};
  width: 20px;
  height: 20px;

}
.log-out{
 border: none;
 background-color:${({ theme }) => theme.navText};
  color: #f4f4f4;
  padding: 0.5rem 1.5rem;
border-radius: 10px;
margin: 2rem auto 1rem;
width: 20%;
font-weight: bold;
font-size:16px;
text-align:center;
}
@media(max-width:768px){
  .log-out{
    width:40%;
  }
}
.post-sign-up{
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight:bold;
  outline: none;
}
.post-sign-up button{
  border: none;
 background-color:${({ theme }) => theme.navText};
  color: #f4f4f4;
  padding: 0.5rem 1.5rem;
border-radius: 10px;
margin: 2rem auto 1rem;
font-weight: bold;
font-size:16px;
text-align:center;
display:block;
outline: none;
}
.post-sign-up-link{
  text-decoration:none;
}
.edit-form .btn{
  border: none;
 background-color:${({ theme }) => theme.navText};
  color: #f4f4f4;
  padding: 0.5rem 1.5rem;
border-radius: 10px;
font-weight: bold;
font-size:16px;
text-align:center;
outline: none;
  }
  `;
