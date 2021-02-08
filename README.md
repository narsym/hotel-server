# App name: hotel Management System

backend url: https://hotelservices.herokuapp.com

## features:

login

register

guest can view all services

guest can view services he bought

guest can view about his bill

staff can add service

staff can view all services

staff can view services guest bought

staff can view guest details

## Architecture backend - MVC

models - contains db schemas

view - react takes care of this part

controllers - contains function according to respective pages


## frontend-
Reactjs, Html, Css

## backend -
nodejs, mongodb, express 

## Description - hotel management service. Can be used from either guest or staff. 

## Techincal questions- 
### How long did you spend on the coding test?
2 full days.

### What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
I would have test the backend api more rigorously. would have added more features. Would have made analytics look much better.

### What was the most useful feature that was added to the latest version of your chosen language/framework? Please include a snippet of code that shows how you've used it.
The most useful feature is using props and array.map function. I have sent the id's of services and users all around the pages with these.

```
const HisServices = (props) => {
    
    return (
        <>{props.data.map((item, index) =>{
            return(
                <>
                <HisService key = {index} data = {item}/>
                </>
            );
        })}
        </>
    );
}
```

### How would you track down a performance issue in production? Have you ever had to do this?
I will do review the code. Honestly I have never encountered like this.

## API End points from backend - 

### authentication
/authentication 

/login - post

/register - post

### staff 
/staff

/addService - post

/availableServices - get

/getGuestDetails - post

/seeAllGuests - get

### guest
/guest

/seeServices - get

/buyService - post

/seeUsingServices - post

/usingServiceStatus - post

/checkout - post

/updateStatus - post

### analytics
/analytics - get

## Mongo db-
functions used - find, findOne, findByIdAndUpdate, find({conditions})

Mostly creating and reading capabilities are used.

## Fontend-
used reactjs for this purpose.

Application mainly depends on array.map and props.

### components 

guest - Guest, HisService, HisServices, Service, Services

staff - Staff, User, Users, UserDetails, Service, Services

A404, Analytics, App, Authenticate, GuestNavbar, StaffNavbar



