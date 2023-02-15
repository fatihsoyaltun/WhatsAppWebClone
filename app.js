

const personOne = () => {
    document.querySelector(".person-two").style.display="none"
    document.querySelector(".person-one").style.display="block"
    document.querySelector(".person-three").style.display="none"
    document.querySelector(".person-four").style.display="none"
    document.querySelector(".person-five").style.display="none"
    document.querySelector(".person-six").style.display="none"
}

const personTwo = () => {
    document.querySelector(".person-two").style.display="block"
    document.querySelector(".person-one").style.display="none"
    document.querySelector(".person-three").style.display="none"
    document.querySelector(".person-four").style.display="none"
    document.querySelector(".person-five").style.display="none"
    document.querySelector(".person-six").style.display="none"
}

const personThree = () => {
    document.querySelector(".person-two").style.display="none"
    document.querySelector(".person-one").style.display="none"
    document.querySelector(".person-three").style.display="block"
    document.querySelector(".person-four").style.display="none"
    document.querySelector(".person-five").style.display="none"
    document.querySelector(".person-six").style.display="none"
}

const personFour = () => {
    document.querySelector(".person-two").style.display="none"
    document.querySelector(".person-one").style.display="none"
    document.querySelector(".person-three").style.display="none"
    document.querySelector(".person-four").style.display="block"
    document.querySelector(".person-five").style.display="none"
    document.querySelector(".person-six").style.display="none"
}

const personFive = () => {
  document.querySelector(".person-two").style.display="none"
  document.querySelector(".person-one").style.display="none"
  document.querySelector(".person-three").style.display="none"
  document.querySelector(".person-four").style.display="none"
  document.querySelector(".person-five").style.display="block"
    document.querySelector(".person-six").style.display="none"
}

const personSix = () => {
  document.querySelector(".person-two").style.display="none"
  document.querySelector(".person-one").style.display="none"
  document.querySelector(".person-three").style.display="none"
  document.querySelector(".person-four").style.display="none"
  document.querySelector(".person-five").style.display="none"
  document.querySelector(".person-six").style.display="block"
}

//*****************************************************************

const One = () => {
  const mesajBirInput = document.querySelector('.oneMessage');
  const myMessageDiv = document.querySelector('.my-message');
  const mesaj = mesajBirInput.value;
  const mesajP = document.createElement('p');
  mesajP.innerHTML = mesaj;

  const tik1 = document.createElement('i');
  tik1.className = 'fa-solid fa-check';
  tik1.style.color = 'gray';

  const tik2 = document.createElement('i');
  tik2.className = 'fa-solid fa-check';
  tik2.style.color = 'gray';

  mesajP.appendChild(tik1);
  mesajP.appendChild(tik2);

  myMessageDiv.appendChild(mesajP);
  mesajBirInput.value = '';

  setTimeout(() => {
    tik1.style.color = '#4fc3f7';
    tik2.style.color = '#4fc3f7';
  }, 2000);
  setTimeout(() => {
    tik1.style.color = '#4fc3f7';
  }, 1000);
};

const mesajBirInput = document.querySelector('.oneMessage');
mesajBirInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    One();
  }
});

//*****************************************************************

const Two = () => {
  const mesajBirInput = document.querySelector('.twoMessage');
  const myMessageDiv = document.querySelector('.my-messageTwo');
  const mesaj = mesajBirInput.value;
  const mesajP = document.createElement('p');
  mesajP.innerHTML = mesaj;

  const tik1 = document.createElement('i');
  tik1.className = 'fa-solid fa-check';
  tik1.style.color = 'gray';

  const tik2 = document.createElement('i');
  tik2.className = 'fa-solid fa-check';
  tik2.style.color = 'gray';

  mesajP.appendChild(tik1);
  mesajP.appendChild(tik2);

  myMessageDiv.appendChild(mesajP);
  mesajBirInput.value = '';

  setTimeout(() => {
    tik1.style.color = '#4fc3f7';
    tik2.style.color = '#4fc3f7';
  }, 2000);
  setTimeout(() => {
    tik1.style.color = '#4fc3f7';
  }, 1000);
};

const mesajİkiInput = document.querySelector('.twoMessage');
mesajİkiInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    Two();
  }
});
//*****************************************************************

const Three = () => {
  const mesajBirInput = document.querySelector('.threeMessage');
  const myMessageDiv = document.querySelector('.my-messageThree');
  const mesaj = mesajBirInput.value;
  const mesajP = document.createElement('p');
  mesajP.innerHTML = mesaj;

  const tik1 = document.createElement('i');
  tik1.className = 'fa-solid fa-check';
  tik1.style.color = 'gray';

  const tik2 = document.createElement('i');
  tik2.className = 'fa-solid fa-check';
  tik2.style.color = 'gray';

  mesajP.appendChild(tik1);
  mesajP.appendChild(tik2);

  myMessageDiv.appendChild(mesajP);
  mesajBirInput.value = '';

  setTimeout(() => {
    tik1.style.color = '#4fc3f7';
    tik2.style.color = '#4fc3f7';
  }, 2000);
  setTimeout(() => {
    tik1.style.color = '#4fc3f7';
  }, 1000);
};

const mesajUcInput = document.querySelector('.threeMessage');
mesajUcInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    Three();
  }
});

//*****************************************************************

const Four = () => {
  const mesajBirInput = document.querySelector('.fourMessage');
  const myMessageDiv = document.querySelector('.my-messageFour');
  const mesaj = mesajBirInput.value;
  const mesajP = document.createElement('p');
  mesajP.innerHTML = mesaj;

  const tik1 = document.createElement('i');
  tik1.className = 'fa-solid fa-check';
  tik1.style.color = 'gray';

  const tik2 = document.createElement('i');
  tik2.className = 'fa-solid fa-check';
  tik2.style.color = 'gray';

  mesajP.appendChild(tik1);
  mesajP.appendChild(tik2);

  myMessageDiv.appendChild(mesajP);
  mesajBirInput.value = '';

  setTimeout(() => {
    tik1.style.color = '#4fc3f7';
    tik2.style.color = '#4fc3f7';
  }, 2000);
  setTimeout(() => {
    tik1.style.color = '#4fc3f7';
  }, 1000);
};

const mesajDortInput = document.querySelector('.fourMessage');
mesajDortInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    Four();
  }
});

//*****************************************************************

// back tuşu

const oneBack = () => {
    document.querySelector(".person-one").style.display = "none";
    document.querySelector(".leftSide").style.display = "block";
}

const twoBack = () => {
    document.querySelector(".person-two").style.display = "none";
    document.querySelector(".leftSide").style.display = "block";
}

const threeBack = () => {
    document.querySelector(".person-three").style.display = "none";
    document.querySelector(".leftSide").style.display = "block";
}

const fourBack = () => {
    document.querySelector(".person-four").style.display = "none";
    document.querySelector(".leftSide").style.display = "block";
}








