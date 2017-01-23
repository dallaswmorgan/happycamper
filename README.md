![happycamper-logo]
[happycamper-logo]: https://res.cloudinary.com/dallaswmorgan/image/upload/v1484108260/Logomakr_2cxses_s2xnv1.png
[happycamper.camp][happycamper.camp]
[happycamper.camp]: www.happycamper.camp

####Happy Camper is the best way to book your next camping trip.
####Browse our extensive collection of campgrounds across the country, and book directly through our site with a personalized account.
####Or list your own campsite for others to enjoy
####Using a Postgres database, a Rails backend, and a React/Redux frontend, it is sturdy, scalable, and responsive

##Features

Happy Camper shows you a carousel of featured sites, hand curated from the archives

![featured-screenshot]
[featured-screenshot]: https://res.cloudinary.com/dallaswmorgan/image/upload/v1484955107/Screen_Shot_2017-01-20_at_3.31.19_PM_mcoujm.png

Happy Camper allows you to search for sites near any location using location autocomplete

![search-bar-screenshot]
[search-bar-screenshot]: https://res.cloudinary.com/dallaswmorgan/image/upload/v1484955342/Screen_Shot_2017-01-20_at_3.33.08_PM_m6hgql.png

Happy Camper integrates google maps and updates a list of campsites within the view pane in real time
![search-screenshot]
[search-screenshot]:https://res.cloudinary.com/dallaswmorgan/image/upload/v1484955452/Screen_Shot_2017-01-20_at_3.37.01_PM_yrbgxa.png

Happy Camper allows users to view and upload pictures of campsites
![image-screenshot]
[image-screenshot]:https://res.cloudinary.com/dallaswmorgan/image/upload/v1485173003/Screen_Shot_2017-01-23_at_4.02.48_AM_y3wvme.png

Happy Camper allows users to create and update reviews of campsites
![review-screenshot](https://res.cloudinary.com/dallaswmorgan/image/upload/v1485173111/Screen_Shot_2017-01-23_at_4.04.47_AM_ba0tol.png)

Happy camper lets guests make reservations at campsites
![reservation-form](https://res.cloudinary.com/dallaswmorgan/image/upload/v1485173191/Screen_Shot_2017-01-23_at_4.06.06_AM_ypfnok.png)
...and then review all of their upcoming reservations
![reservation-index](https://res.cloudinary.com/dallaswmorgan/image/upload/v1485173221/Screen_Shot_2017-01-23_at_4.06.40_AM_tggcqu.png)

Happy Camper allows users to list sites of their own and specify location with a draggable google maps pin
![site-form](https://res.cloudinary.com/dallaswmorgan/image/upload/v1485173389/Screen_Shot_2017-01-23_at_4.09.10_AM_dzky8t.png)

#Google Maps Integration
Happy Camper utilizes Google Maps for accurate GPS input and display, as street addresses are often unreliable when it comes to giving directions for remote campsites. It then reverse-geocodes coordinates given to grab the city or county and state.

```js
this.geocoder.geocode({'location': coords}, (results, status) => {
  if (status === 'OK') {
    if (results[1]) {
      let address = results[1].address_components;
```

#Single Page App
Happy Camper is a true SPA, meaning users never have to wait for a page to reload

#Future Development
It is intended for Happy Camper to become a one-stop-shop for finding and booking a campsite. In order to do this, I will be adding search filter functionality based on amenities available at sites (showers, picnic tables, fire rings, etc) in adition to geographical filters

#Eclipse 2017
One of the biggest camping events of the century is coming up in 2017- a total solar ecplipse that is traversing the continental US on August 21. I plan on adding a search filter for sites that will be in the path of the eclipse, using stored lat/lng coordinates. This will help campers plan this once-in-a-lifetime camping trip.
