

.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  place-items: center;
  margin-top: auto; 
  margin-bottom: 20px;
}
.click {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 5ch;
}

.item {
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
}

#toggle {
  display: none;
}

#sun,
#moon {
  position: absolute;

  transition: 0.5s;
}
#moon {
  top: 7px;
  left: 10px;

  opacity: 0;
}

#sun {
  top: 7px;
  right: 50px;

  opacity: 1;
}
button:nth-child(4),
button:nth-child(8),
button:nth-child(12),
button:nth-child(16),
button:nth-child(20) {
  background-color: #ff7f11;
  color: rgb(255, 255, 255);
  border-color: #ff7f11;
}
button:first-child,
button:nth-child(2),
button:nth-child(3) {
  background-color: #828a95;
  color: rgb(255, 255, 255);
  border-color: #828a95;
}
button:nth-child(5),
button:nth-child(6),
button:nth-child(7),
button:nth-child(9),
button:nth-child(10),
button:nth-child(11),
button:nth-child(13),
button:nth-child(14),
button:nth-child(15),
button:nth-child(17),
button:nth-child(18),
button:nth-child(19) {
  background-color: #454955;
  color: rgb(255, 255, 255);
  border-color: #828a95;
}
#toggle:checked + label #moon {
  left: 50px;
  opacity: 1;
}

#toggle:checked + label #sun {
  right: 10px;
  opacity: 0;
}
#mode:has(#toggle:checked) {
  background-color: #ff7f11;
  border-color: #ff7f11;
}


#mode {
  border: 3px solid;
  border-radius: 20px;
  width: 110px;
  height: 50px;
  background-color: #454955;
  cursor: pointer;
  position: relative;
  margin: 0 auto; 
  transform: translateX(157px);
}
#input {
  font-size: 5ch;
  font-weight: bolder;
  font-family: sans-serif;
  width: 100%;
  text-align: right; 
  padding-right: 20px;
  min-height: 1.2em; 
  box-sizing: border-box;
}

#container {
  display: flex;
  flex-direction: column;
  align-items: center; 
  border: 2px solid #828a95;
  border-radius: 20px;
  width: 450px; 
  height: 770px;
  margin: 20px auto; 
  padding: 10px;
  gap: 20px; 
  background-color:#1C1D21 ;
  border-color: #1C1D21;
  overflow: hidden;
}

#line {
    border: 3px solid #828a95;
    border-radius: 5px;
    background-color: #828a95;
    width: 150px;
    margin: 10px auto; 
}
#container:not(:has(#toggle:checked)) {
  background-color: #f9f9f9; 
  border-color: #d1d1d1;
}

#container:not(:has(#toggle:checked)) button:nth-child(n+5):not(:nth-child(4n)) {
  background-color: #ffffff;
  color: #000000;
  border-color: #e0e0e0;
}

#container:not(:has(#toggle:checked)) button:nth-child(-n+3) {
  background-color: #e5e5e5;
  color: #000000;
}
#container:has(#toggle:checked) #input {
    color: #ffffff;
}
