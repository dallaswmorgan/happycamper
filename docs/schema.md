# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null, indexed
lname           | string    | not null, indexed
email           | string    | not null, indexed, unique
image_url       | string    | not null, indexed
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## sites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed
region_id   | integer   | not null, foreign key, indexed
featured    | boolean   | not null, default= false, indexed
public      | boolean   | not null, default= false, indexed
state       | string    | not null
city        | string    | not null
lat         | float     | not null
lng         | float     | not null
price       | integer   | not null, indexed
image_url   | string    | not null
about_this  | string    | not null
spot_type   | string    | not null
guest_limit | integer   | not null
bedroooms   | integer   | not null
beds        | integer   | not null

## site_images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
site_id     | integer   | not null, foreign key, indexed
url         | string    | not null

## regions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
image_url   | string    | not null

## amenities
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
site_id       | integer   | not null, foreign key, indexed
drinking_water| boolean   | not null, default = false
shower        | boolean   | not null, default = false
fire_ring     | boolean   | not null, default = false
pets_allowed  | boolean   | not null, default = false
toilet        | boolean   | not null, default = false
picnic_table  | boolean   | not null, default = false

## reservations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed
site_id     | integer   | not null, foreign key, indexed
start_date  | date      | not null
end_date    | date      | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed
site_id     | integer   | not null, foreign key, indexed
rating      | integer   | not null,
body        | string    | not null
