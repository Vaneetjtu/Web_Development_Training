const Students=(props)=>{
    const studentArray=[
        {sid: 1, sname:"Harry", course: "Angular", age: 19, total: 87},
        {sid: 2, sname:"Barry", course: "React JS", age: 21, total: 97},
        {sid: 3, sname:"Larry", course: "React JS", age: 20, total: 77},
        {sid: 4, sname:"Garry", course: "Angular", age: 18, total: 70},
        {sid: 5, sname:"Aarry", course: "React JS", age: 22, total: 95},
        {sid: 6, sname:"Marry", course: "HTML", age: 21, total: 80}
    ]
    // const data=(item)=>{
    //     return <tr>
    //             <td>{item.sid}</td>
    //             <td>{item.sname}</td>
    //             <td>{item.course}</td>
    //             <td>{item.age}</td>
    //             <td>{item.total}</td>
    //         </tr>
    // }
    let result;
        if(!props.course)
        {
            result=studentArray.map((item)=>{
            return <tr>
                <td>{item.sid}</td>
                <td>{item.sname}</td>
                <td>{item.course}</td>
                <td>{item.age}</td>
                <td>{item.total}</td>
            </tr>
            })
    }
    else{
        result=studentArray.map((item)=>{
        if(props.course===item.course)
        {
            return <tr>
                <td>{item.sid}</td>
                <td>{item.sname}</td>
                <td>{item.course}</td>
                <td>{item.age}</td>
                <td>{item.total}</td>
            </tr>
        }

    })}
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
            {result}
        </table>
        </>
    )
}
export default Students;