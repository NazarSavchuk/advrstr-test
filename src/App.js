import Card from './components/Card';
import Filter from './components/Filter';

export default class App {
  constructor() {
    this.users = [];
    this.filteredUsers = [];
    this.rootElement = document.getElementById('app');
    this.cardsContainer = document.createElement('div');
    this.cardsContainer.className = 'cards-container';
  }

  async init() {
    await this.fetchUsers();
    this.render();
  }

  async fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
      this.filteredUsers = this.users;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  render() {
    this.cardsContainer.innerHTML = '';

    if (!this.rootElement.querySelector('.filter')) {
      const filter = new Filter(this.users, this.handleFilter.bind(this));
      filter.render(this.rootElement);
    }

    this.filteredUsers.forEach((user) => {
      const card = new Card(user);
      card.render(this.cardsContainer);
    });

    if (!this.rootElement.contains(this.cardsContainer)) {
      this.rootElement.appendChild(this.cardsContainer);
    }
  }

  handleFilter(filteredUsers) {
    this.filteredUsers = filteredUsers;
    this.render(); 
  }
}
