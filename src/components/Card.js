export default class Card {
    constructor(user) {
      this.user = user;
    }
  
    render(parentElement) {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.innerHTML = `
        <h2 class="user-name">${this.user.name}</h2>
        <p>Username: ${this.user.username}</p>
        <p>Email: ${this.user.email}</p>
        <p>Phone: ${this.user.phone}</p>
        <p>Website: <a href="http://${this.user.website}" target="_blank">${this.user.website}</a></p>
        <p>Address: ${this.user.address.street}, ${this.user.address.suite}, ${this.user.address.city}</p>
        <p>Geo: ${this.user.address.geo.lat}, ${this.user.address.geo.lng}</p>
        <div><p>Company:</p>
        <p class="company-name">${this.user.company.name}</p>
        <p class="company-description">${this.user.company.catchPhrase}</p>
        <p class="company-description">${this.user.company.bs}</p>
        </div>
      `;
      parentElement.appendChild(cardElement);
    }
  }
  