import PriceOption from "../PriceOption/PriceOption"

const PriceOptions = () => {

    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "description": "Access to gym facilities during standard hours.",
            "price": 29.99,
            "features": [
                "Standard gym access",
                "Access to cardio and weightlifting areas",
                "Locker room access"
            ],
            "recommended": false
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "description": "24/7 access to gym facilities with additional amenities.",
            "price": 49.99,
            "features": [
                "24/7 access",
                "Access to fitness classes",
                "Personal trainer sessions (2/month)",
                "Sauna and spa access"
            ],
            "recommended": true
        },
        {
            "id": 3,
            "name": "Family Membership",
            "description": "Membership for the whole family with access to all facilities.",
            "price": 89.99,
            "features": [
                "Access for 2 adults and 2 children",
                "Access to all facilities",
                "Fitness classes for all",
                "Childcare services"
            ],
            "recommended": false
        },
        {
            "id": 4,
            "name": "Student Membership",
            "description": "Special membership for students with limited access.",
            "price": 19.99,
            "features": [
                "Access during off-peak hours",
                "Valid student ID required",
                "Access to study area"
            ],
            "recommended": false
        }
    ]


    return (
        <div className="m-12">
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-3 gap-6  list-disc">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>

        </div>
    )
}

export default PriceOptions