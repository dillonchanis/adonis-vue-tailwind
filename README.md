# Adonis SPA Boilerplate

This is a SPA/fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Vue
2. Vue Router
3. Vuex
4. TailwindCSS
5. Laravel Mix
6. User Authentication

## Getting Started

```bash
# Clone the repository
git clone https://github.com/dillonchanis/adonis-vue-tailwind.git

# Create .env file 
cp .env.example .env

# Generate application key
adonis key:generate

# Install dependencies
npm install
```


### Migrations

This boilerplate comes with SQLite as a dependency for prototyping. If you are not using SQLite be sure to remove it from the `package.json` and update your `.env` file.



Run the following command to run startup migrations.

```js
adonis migration:run
```

### TODO

- [ ] Setup JavaScript Linting (have option for AirBnB as well)
- [ ] Setup Stylelint
- [ ] Stubs for Front End Unit Tests via Jest and Vue-test-utils
- [ ] Better exception handling
- [ ] JSX for Vue components
