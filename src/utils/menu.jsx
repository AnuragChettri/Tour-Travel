export const menuData = [
    {
        id: 1,
        name: "Home",
        route:"/"
    },
    {
        id: 2,
        name: "Online Booking",
        route:"/onlinebooking",
        subMenu: [
            {
                name: "Permits"
            },
            {
                name: "Vehicle Rents"
            },
            {
                name: "Hotels"
            }
        ]
    },
    {
        id:3,
        name: "Services Booking",
        route:"/servicesbooking",
        subMenu: [
            {
                name: "Sight Seeing"
            },
            {
                name: "Permits"
            },
            {
                name: "Cabs"
            },
            {
                name: "Flight Booking"
            },
            {
                name: "Train Booking"
            }
        ]
    },
    {
        id:4,
        route:"/about",
        name: "About"
    },
    {
        id: 5,
        route:"/contact",
        name: "Contact"
    }
];
