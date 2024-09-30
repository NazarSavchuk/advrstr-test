export default class Filter {
  constructor(users, onFilter) {
    this.users = users;
    this.onFilter = onFilter;
    this.handleInput = this.handleInput.bind(this);
  }

  render(parentElement) {
    const filterElement = document.createElement("input");
    filterElement.className = "filter";
    filterElement.placeholder = "Filter by any user property...";

    filterElement.addEventListener("input", this.handleInput);
    parentElement.appendChild(filterElement);
  }

  handleInput(event) {
    const query = event.target.value.toLowerCase();

    const filteredUsers = this.users.filter((user) =>
      this.matchesQuery(user, query)
    );

    this.onFilter(filteredUsers);
  }

  matchesQuery(user, query) {
    return Object.values(user).some((value) => this.checkValue(value, query));
  }

  checkValue(value, query) {
    if (typeof value === "string") {
      return value.toLowerCase().includes(query);
    } else if (typeof value === "object" && value !== null) {
      return Object.values(value).some((nestedValue) =>
        this.checkValue(nestedValue, query)
      );
    }
    return false;
  }
}
