const Student=()=>{
    const studentArray=[
        {sid: 1, sname:"Harry", course: "B.E", age: 19, total: 87},
        {sid: 2, sname:"Barry", course: "Science", age: 21, total: 97},
        {sid: 3, sname:"Larry", course: "B.E", age: 20, total: 77},
        {sid: 4, sname:"Garry", course: "Arts", age: 18, total: 70},
        {sid: 5, sname:"Aarry", course: "MBA", age: 22, total: 95},
        {sid: 6, sname:"Marry", course: "MCA", age: 21, total: 80}
    ]
    return(
        <>
        <table border="1">
            <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>Total Marks</th>
            </tr>
            {studentArray.map((item)=>{
                return <tr>
                    <td>{item.sid}</td>
                    <td>{item.sname}</td>
                    <td>{item.course}</td>
                    <td>{item.age}</td>
                    <td>{item.total}</td>
                </tr>
            })}
        </table>
        </>
    )
}
export default Student;