## Component Hierarchy

**App**
  - Header
    (When logged out)
    * Logo
    * SearchBar (by date/location/guests)
    * LoginForm (modal)
    * SignUpForm (modal)
    (When logged in)
    * Logo
    * SearchBar (by date/location/guests)
    * BecomeHostButton
    * ReservationsButton
    - UserPic
      * ProfileLink
      * LogoutButton

**HomeContainer**
  - App
  - FeaturedSitesContainer
    * Image
    * Title
    * DetailsLink
  - RegionsContainer
    * RegionImage
    * LinkToRegion

**SearchContainer**
  - App
  - SpotFilter
    * GoogleMap
    * SpotIndex

**SiteContainer**
  - App  
  * SpotDetail
  * BookingForm

## Routes

| Path             | Component         |
|------------------|-------------------|
| "/"              | "HomeContainer"   |
| "/login"         | "LoginForm"       |
| "/sign-up"       | "SignUpForm"      |
| "/create-site"   | "SiteCreationForm"|
| "/search"        | "SearchContainer" |
| "/site/:siteId"  | "SiteContainer"   |
