import React from 'react';
import users from '../users';
import styled from 'styled-components';
import {saveToStorage} from '../utils/storage';
const Main = styled.main`
  background-color: #f5faff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
  }
    .pop { 
      animation: pulse 0.3s linear 1;
    }
  .users {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    &_user {
      display: flex;
      align-items: center;
      flex-direction: column;
      background: transparent;
      border: none;
      cursor: pointer;
      margin: 10px;
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 5px;
        margin-top: 1em;
        transition: transform .5s ease;      }
      img:hover { 
        transform: scale(1.095) translateY(-10%);
      }
      .name {
        margin: 10px auto;
      }
    }
    span { 
      letter-spacing: 0.17em;
    }
  }
  @keyframes push{
    50%  {transform: scale(0.8);}
  }
`
export default function Startpage() { 
  const onUserClick = id => { 
      // saving user picked to local storage/browser
      saveToStorage('user',id)
      // Change window location to home
      window.location.href = '/home';
  }
  return(
      <Main>
          
          <div className="users">
              {users.map((u) => (
              <button
                  onClick={() => {
                      onUserClick(u.id);
                      document.getElementById(`user_${u.id}`).classList.add('pop');
                  }}
                  className="users_user"
                  id={`user_${u.id}`}
                  key={u.id}
              >
                  <img src={u.image} alt="" />
                  <span className="name">{u.name.toUpperCase()}</span>
              </button>
              ))}
          </div>
      </Main>
  )
}
