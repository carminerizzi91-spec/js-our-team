const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];



const nameInput = document.querySelector("#name");
const roleInput = document.querySelector("#role");
const emailInput = document.querySelector("#email");
const imgInput = document.querySelector("#img");
const form = document.querySelector("form");

form.addEventListener("submit", function(event){
  event.preventDefault();
  const newMember = {
  name: nameInput.value,
  role: roleInput.value,
  email: emailInput.value,
  img: imgInput.value,

  };
  teamMembers.push(newMember)
});

function printCardGrid() {

  const teamContainer = document.querySelector(".team-container")
  let cardString = "";

  for (let i = 0; i < teamMembers.length; i++) {
    const curMemebers = teamMembers[i];
    const card = createSingleCard(curMemebers);
    cardString += card;
  }
  teamContainer.innerHTML = cardString;
}

function createSingleCard(member) { 
  const { name, role, email ,img } = member;
  const card = `
<div class="col text-center h-100">
    <div class="shadow p-2 h-100 team-card-inner">
        
        <div class="card-img-container"> 
            <img src="${img}" alt="${name}" class="img-fluid team-img-fit"> 
        </div>
        
        <div class="card-text">
            <h3 class="h6 mt-2 mb-0">${name}</h3>
            <p class="small text-muted">${role}</p>
            <p class="small text-muted">${email}</p>

        </div>
    </div>
</div>`;
  return card;
}

printCardGrid();