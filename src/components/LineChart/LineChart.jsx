

import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathmarksData =
        [
            {"id": 1, "name": "John", "math_marks": 95, "physics_marks": 62, "chemistry_marks": 78},
            {"id": 2, "name": "Emily", "math_marks": 72, "physics_marks": 88, "chemistry_marks": 45},
            {"id": 3, "name": "Michael", "math_marks": 86, "physics_marks": 73, "chemistry_marks": 91},
            {"id": 4, "name": "Sarah", "math_marks": 60, "physics_marks": 41, "chemistry_marks": 75},
            {"id": 5, "name": "David", "math_marks": 92, "physics_marks": 99, "chemistry_marks": 82},
            {"id": 6, "name": "Jennifer", "math_marks": 51, "physics_marks": 64, "chemistry_marks": 88},
            {"id": 7, "name": "Christopher", "math_marks": 78, "physics_marks": 55, "chemistry_marks": 63},
            {"id": 8, "name": "Jessica", "math_marks": 87, "physics_marks": 60, "chemistry_marks": 93},
            {"id": 9, "name": "Daniel", "math_marks": 96, "physics_marks": 67, "chemistry_marks": 40},
            {"id": 10, "name": "Maria", "math_marks": 55, "physics_marks": 81, "chemistry_marks": 70}            

        ]


    return (
        <div>
            <LChart width={600} height={300} data={mathmarksData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="math_marks" stroke="red" />
                <Line type="monotone" dataKey="physics_marks" stroke="green" />
                <Line type="monotone" dataKey="chemistry_marks" stroke="blue" />
            </LChart>
        </div>
    )
}

export default LineChart