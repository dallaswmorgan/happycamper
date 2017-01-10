# Happy Camper
[Heroku link][heroku]

[Hipcamp link][hipcamp]

[Trello link][trello]


[trello]: https://trello.com/b/4G6Aj0Oz/happy-camper
[heroku]: https://happycamper.herokuapp.com/
[hipcamp]: https://www.hipcamp.com/
##MVP:

 HappyCamper is designed to take the hassle out of finding quality campsites. Drawing inspiration from Hipcamp.com, it is a web application built on a Rails backend and a React/Redux frontend. By 01/20/17, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] Account creation and guest login
- [ ] Sites
- [ ] Bookings
- [ ] Sites search (by location & availability) & Google Maps integration
- [ ] Reviews
- [ ] BONUS: Local conditions at sites (weather, elevation, distance)
- [ ] BONUS: User/host profiles

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: New account creation/login and homepage (2 days)

**Objective:** Functioning rails project with front-end auth and login/signup modal. Guest login available. Guest user seeding completed.

### Phase 2: Site model with featured sites. Users can list sites (2.5 days)

**Objective:** Featured sites are displayed on homepage with links to site detail page. Sites can be grouped by region. Users can create sites. Users can add photos to sites using form. Site and user seeding completed.

### Phase 3: Site search page with google maps and search bar (2 days)

**Objective:** Functioning search bar on homepage that links to search page. Search page lists spots that actively filter by search params. Interactive Google map mirrors search results.

### Phase 4: Reservations model (1 day)

**Objective:** Reservations can be made/edited/viewed/deleted. Reservations seed data complete

### Phase 5: Reviews model (1 day)

**Objective:** Users can leave reviews which are viewable on the site detail page. Reviews can be created, updated, and destroyed. Review seed data complete.

### Bonus Features

### Phase 6: Local conditions (1 day)

**Objective:** Site detail pages have information about current weather conditions, elevation, and distance from user.
