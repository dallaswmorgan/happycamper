![happycamper-logo]
[happycamper-logo]: https://res.cloudinary.com/dallaswmorgan/image/upload/v1484108260/Logomakr_2cxses_s2xnv1.png
[happycamper.camp][happycamper.camp]
[happycamper.camp]: http://www.happycamper.camp

####Happy Camper is the best way to book your next camping trip.
Search our extensive collection of campgrounds across the country, and book directly through our site with a personalized account, or list your own campsite for others to enjoy. Using a Postgres database, a Rails backend, and a React/Redux front end, it is responsive, sturdy, and scalable.

##Features

Happy Camper shows you a carousel of featured sites, hand curated from the archives

![featured-screenshot]
[featured-screenshot]: https://res.cloudinary.com/dallaswmorgan/image/upload/v1487368393/Screen_Shot_2017-02-17_at_1.52.35_PM_abqjkl.png

Happy Camper allows you to search for sites near any location using location autocomplete

![search-bar-screenshot]
[search-bar-screenshot]: https://res.cloudinary.com/dallaswmorgan/image/upload/v1487368520/Screen_Shot_2017-02-17_at_1.54.59_PM_ey4dcg.png

Happy Camper integrates google maps and updates a list of campsites within the view pane in real time
![search-screenshot]
[search-screenshot]:https://res.cloudinary.com/dallaswmorgan/image/upload/v1487368577/Screen_Shot_2017-02-17_at_1.55.55_PM_tzd06p.png

Happy Camper lets you search for sites based on the amenities they offer
![amenity-screenshot]
[amenity-screenshot]: https://res.cloudinary.com/dallaswmorgan/image/upload/v1487368705/Screen_Shot_2017-02-17_at_1.58.08_PM_skd7rr.png

...including a custom-built filter that selects the sites in the path of the Total Solar Eclipse on August 21 2017
![eclipse-screenshot]
[eclipse-screenshot]:https://res.cloudinary.com/dallaswmorgan/image/upload/v1487368806/Screen_Shot_2017-02-17_at_1.59.50_PM_bai9qe.png


Happy Camper allows users to view and upload pictures of campsites
![image-screenshot]
[image-screenshot]:https://res.cloudinary.com/dallaswmorgan/image/upload/v1485173003/Screen_Shot_2017-01-23_at_4.02.48_AM_y3wvme.png

Happy Camper displays local weather conditions at campsites
![weather-screenshot]
[weather-screenshot]: https://res.cloudinary.com/dallaswmorgan/image/upload/v1487370030/Screen_Shot_2017-02-17_at_2.20.06_PM_ecinbu.png

...as well as a description containing the amenities that site has to offer
![amenities-screenshot]
[amenities-screenshot]: https://res.cloudinary.com/dallaswmorgan/image/upload/v1487370298/Screen_Shot_2017-02-17_at_2.24.37_PM_vmxnxw.png

Happy Camper allows users to create and update reviews of campsites
![review-screenshot](https://res.cloudinary.com/dallaswmorgan/image/upload/v1485173111/Screen_Shot_2017-01-23_at_4.04.47_AM_ba0tol.png)

Happy camper lets guests make reservations at campsites
![reservation-form]
[reservation-form]:https://res.cloudinary.com/dallaswmorgan/image/upload/v1487370422/Screen_Shot_2017-02-17_at_2.26.44_PM_eevwkj.png
...and then review all of their upcoming reservations
![reservation-index]
[reservation-index]:(https://res.cloudinary.com/dallaswmorgan/image/upload/v1485173221/Screen_Shot_2017-01-23_at_4.06.40_AM_tggcqu.png)

Happy Camper allows users to list sites of their own and specify location with a draggable google maps pin
![site-form]
[site-form]:https://res.cloudinary.com/dallaswmorgan/image/upload/v1487370606/Screen_Shot_2017-02-17_at_2.29.45_PM_ebwjxw.png

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


#Eclipse 2017
A once-in-a-lifetime will event on August 21 2017, when a Total Solar Eclipse crosses the breadth of the continental United States. By analyzing NASA data and creating a custom polygon within which to query sites, Happy Camper helps campers plan where they will be staying for this astronomical anomaly by letting them search for only those sites that will be in the path of totality.
