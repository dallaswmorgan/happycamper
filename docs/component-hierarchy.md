## Component Hierarchy

**HomeContainer**
  - Header
    - LoggedOutHeader
      * Logo
      * LoginForm (modal)
      * SignUpForm (modal)
    - LoggedInHeader
      * Logo
      * SearchBar (by date/location/guests)
      * BecomeHostButton
      * ReservationsButton
      - UserPic
        * ProfileLink
        * LogoutButton
  - FeaturedSitesContainer
    * Image
    * Title
    * DetailsLink
  - RegionsContainer
    * RegionImage
    * LinkToRegion

**SearchContainer**
  - LoggedInHeader
  - SpotFilter
    * GoogleMap
    * SpotIndex

**SiteContainer**
  * LoggedInHeader
  * SpotDetail
  * BookingForm

## Routes

| Path             | Component         |
|------------------|-------------------|
| "/"              | "HomeContainer"   |
| "/login"         | "LoginForm"       |
| "/sign-up"       | "SignUpForm"      |
| "/search"        | "SearchContainer" |
| "/site/:siteId"  | "SiteContainer"   |
| "/users/:userId" | "UserContainer"   |
