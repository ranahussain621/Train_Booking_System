
let fromCityName = ["Karachi", "Hyderabad", "Mahrabpur", "Sakhar", "Sadiqabad"]
let toCityName = ['Faisalabad',"Gojra", "Toba Tek Singh", "ShorKot", "Multan", "Karachi"]

fromCityName.forEach((item) => {
    let tag = document.createElement("option");
    tag.innerHTML = item;
    tag.value = item;

    from.appendChild(tag);
})


toCityName.forEach((item) => {
    let tag = document.createElement("option");
    tag.innerHTML = item;
    tag.value = item;

    to.appendChild(tag)

})

let businessClass = [
    {
        Couch: 1,
        seats: 6,
        booked: 0
    },
    {
        Couch: 2,
        seats: 6,
        booked: 0
    },
    {
        Couch: 3,
        seats: 6,
        booked: 0
    },
    {
        Couch: 4,
        seats: 6,
        booked: 0
    },
]


let economyClass = [
    {
        Couch: 1,
        seats: 6,
        booked: 0
    },
    {
        Couch: 2,
        seats: 6,
        booked: 0
    },
    {
        Couch: 3,
        seats: 6,
        booked: 0
    },
    {
        Couch: 4,
        seats: 6,
        booked: 0
    },
    {
        Couch: 5,
        seats: 6,
        booked: 0
    },
    {
        Couch: 6,
        seats: 6,
        booked: 0
    },
    {
        Couch: 7,
        seats: 6,
        booked: 0
    },
]

const checkSeats = () => {
    let avaialseats = 0;

    if (toCityName.indexOf(to.value) <= toCityName.indexOf("Faisalabad")) {
        businessClass.forEach((item) => {
            avaialseats += item.seats;
        })
    } else {
        economyClass.forEach((item) => {
            avaialseats += item.seats;
        })

    }
    alert("available seats:" + avaialseats);
}
const showTrainSeats = () => {
    let ticketData = [];
    let object = {
        name: prompt("Please Enter your Name")
    }
    for (let i = 1; i <= seatsNumber.value; i++) {
        ticketData.push(object);
        if (toCityName.indexOf(to.value) <= toCityName.indexOf("Faisalabad")) {
            for (let item of businessClass) {
                if (item.booked < 6) {

                    item.booked++;
                    item.seats--;
                    break;
                }
            }

        } else {
            for (let item of economyClass) {
                if (item.booked < 6) {
                    item.booked++;
                    item.seats--;
                    break;

                }
            }
        }
    }
}
